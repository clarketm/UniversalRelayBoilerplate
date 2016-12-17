/* @flow weak */

import DataLoader from 'dataloader'
import { cursorForObjectInConnection } from 'graphql-relay'

import AnonymousUserToken2 from '../configuration/server/AnonymousUserToken2'
import defaultPersister from '../configuration/graphql/defaultPersister'
import getNewUser from '../configuration/graphql/model/getNewUser'
import log from '../server/log'
import User from '../configuration/graphql/model/User'


// Anonymous user
const User_0 = new User( Object.assign( getNewUser(), {
  id: defaultPersister.uuidNull(),
  UserToken2: AnonymousUserToken2,
  User_DisplayName: 'Anonymous',
} ) )

// Static set of entity definitions
const entityDefinitions = {}

// Static array of object managers
const setPersisters = new Set()

// Value for a change indicating that the record is deleted
const deletedRecord = {
  deleted: true
}

export default class ObjectManager {

  Viewer_User_id: string

  constructor() {
    // Loaders for a single record, by entity name
    this.loadersSingle = {}

    // Loaders for a multiple record lists, by entity name
    this.loadersMultiple = {}

    // Changes made to records, by entity name
    this.changes = {}

    // UserID for the viewer. Could be unset if ObjectManager is used by system
    this.Viewer_User_id = null

    // Request object, if available
    this.request = null
  }

  static registerEntity( entityName: string, EntityType: any, persister: any ): void {

    if( entityName in entityDefinitions )
      throw new Error( "Entity already registered: " + entityName )

    // In order to be able to access the name as a static property of the type
    EntityType.entityName = entityName

    // Determine persister - default, or otherwise
    if( persister == null )
      persister = defaultPersister

    // A set would retain only one copy of a persister
    setPersisters.add( persister )

    entityDefinitions[ entityName ] = {
      EntityName: entityName,
      EntityType: EntityType,
      Persister: persister,
      TriggersForAdd: [],
      TriggersForUpdate: [],
      TriggersForRemove: [],
      TriggersForUpdateShouldRetrieveCurrentRecord: false
    }
  }

  static RegisterTriggerForAdd( entityName: string, handler: func ): void {

    entityDefinitions[ entityName ].TriggersForAdd.push( handler )
  }

  static RegisterTriggerForUpdate( entityName: string, handler: func, shouldTrerieveCurrentRecord: boolean ): void {

    entityDefinitions[ entityName ].TriggersForUpdate.push( handler )

    if( shouldTrerieveCurrentRecord )
      entityDefinitions[ entityName ].TriggersForUpdateShouldRetrieveCurrentRecord = true
  }

  static RegisterTriggerForAddAndUpdate( entityName: string, handler: func ): void {

    ObjectManager.RegisterTriggerForAdd( entityName, handler )
    ObjectManager.RegisterTriggerForUpdate( entityName, handler )
  }

  static RegisterTriggerForRemove( entityName: string, handler: any ) {

    entityDefinitions[ entityName ].TriggersForRemove.push( handler )
  }

  setViewerUserId( Viewer_User_id: string ): void {

    this.Viewer_User_id = Viewer_User_id
  }

  setRequest( req: any ): void {

    this.request = req
  }

  getLoadersSingle( entityName: string ) {

    const foundLoaders = this.loadersSingle[ entityName ]
    if( foundLoaders != null )
      return foundLoaders
    else
      return this.loadersSingle[ entityName ] = {}
  }

  getLoadersMultiple( entityName: string ) {

    const foundLoaders = this.loadersMultiple[ entityName ]
    if( foundLoaders != null )
      return foundLoaders
    else
      return this.loadersMultiple[ entityName ] = {}
  }

  clearLoadersMultiple( entityName: string ) {

    this.loadersMultiple[ entityName ] = {}
  }

  recordChange( entityName: string, fields: object, isDeletion: boolean ) {

    let records = this.changes[ entityName ]
    if( records == null )
      records = this.changes[ entityName ] = {}

    const id = fields.id

    records[ id ] = isDeletion ? deletedRecord : fields
  }

  getViewerUserId(): string {

    if( this.Viewer_User_id == null )
      throw new Error( "Object Manager: viewer user id has not been set" )

    return this.Viewer_User_id
  }

  getRequest(): any {

    if( this.request == null )
      throw new Error( "Object Manager: request has not been set" )

    return this.request
  }

  getLoader( entityName: string, fieldName: string, multipleResults: boolean ) {

    if( !( entityName in entityDefinitions ) )
      throw new Error( "Can not find entity type named " + entityName )

    const entityDefinition = entityDefinitions[ entityName ]
    const entityType = entityDefinition.EntityType

    let loadersList = multipleResults ? this.getLoadersMultiple( entityName ) : this.getLoadersSingle( entityName )
    let loader = loadersList[ fieldName ]
    if( loader == null ) {
      if( multipleResults )
        loader = new DataLoader( filter => entityDefinition.Persister.getObjectList( entityName, entityType, filter ) )
      else
        loader = new DataLoader( filter => entityDefinition.Persister.getOneObject( entityName, entityType, filter ) )

      loadersList[ fieldName ] = loader
    }

    return loader
  }

  getOneObject( entityName: string, filter: object ) {

    // TODO x2000 Provide try catch with logging here!
    // Special hack for anonymous users
    if( entityName == 'User' )
      if( filter.id == defaultPersister.uuidNullAsString() )
        return Promise.resolve( User_0 )

      // For all non-user, non 0 ids, load from data loader per protocol
    const loaderIdentifier = Object.keys( filter ).sort().join( ',' )
    const loader = this.getLoader( entityName, loaderIdentifier, false )

    return loader.load( filter )
      .then( ( result ) => {
        const changes = this.changes[ entityName ]
        if( changes ) {
          const change = changes[ result.id ]
          if( change != null ) {
            if( change === deletedRecord )
              result = null // Object is not found, return null
            else // Add or update
              Object.assign( result, change )
          }
        }
        return result
      } )
  }

  getObjectList( entityName: string, filter: object ) {

    // TODO x2000 Provide try catch with logging here!
    const loaderIdentifier = Object.keys( filter ).sort().join( ',' )
    const loader = this.getLoader( entityName, loaderIdentifier, true )

    return loader.load( filter )
      .then( ( arrResults ) => {
        const changes = this.changes[ entityName ]
        if( changes ) {
          for( let ix = 0; ix < arrResults.length; ix++ ) {
            const change = changes[ arrResults[ ix ].id ]
            if( change != null ) {
              if( change === deletedRecord )
                arrResults.splice( ix--, 1 ) // Reduce ix in order not to skip over a record
              else // Add or update
                Object.assign( arrResults[ ix ], change )
            }
          }
        }
        return arrResults
      } )
  }

  invalidateLoaderCache( entityName: string, fields: any ) {

    // At this moment there is no obvious way of knowing what to clear from lists, so delete them all
    this.clearLoadersMultiple( entityName )

    const loadersSingle = this.getLoadersSingle( entityName )
    for( let loaderFieldName in loadersSingle ) {
      if( loaderFieldName === 'id' )
        loadersSingle[ loaderFieldName ].clear( fields.id )
      else
        delete loadersSingle[ loaderFieldName ]
    }
  }

  executeTriggers( arrTriggers, fields, oldFields ) {

    const arrPromises = []
    for( let trigger of arrTriggers ) {
      arrPromises.push( trigger( this, fields, oldFields ) )
    }

    return Promise.all( arrPromises )
  }

  async add( entityName: string, fields: any ): any {

    const entityDefinition = entityDefinitions[ entityName ]

    if( entityDefinition == null ) console.log( 'Cound not find entity ' + entityName )

    // Generate primary key, if not already present
    if( !fields.id )
      fields.id = entityDefinition.Persister.uuidRandom()

    // If this is a user ID
    if( entityName == 'User' )
      this.setViewerUserId( fields.id.toString() )

    this.recordChange( entityName, fields, false )
    await this.executeTriggers( entityDefinition.TriggersForAdd, fields )

    await entityDefinition.Persister.add( entityName, fields, entityDefinition.EntityType )

    this.invalidateLoaderCache( entityName, fields )

    return fields.id
  }

  async update( entityName: string, fields: any ): void {

    const entityDefinition = entityDefinitions[ entityName ]

    if( entityDefinition == null ) console.log( 'XXX Cound not find entity' + entityName ) // Should that be recorded somewhere? Could be another

    let oldFields = null
    if( entityDefinition.TriggersForUpdateShouldRetrieveCurrentRecord ) {
      oldFields = this.getOneObject( entityName, {
        id: fields.id
      } )
    }

    this.recordChange( entityName, fields, false )
    await this.executeTriggers( entityDefinition.TriggersForUpdate, fields, oldFields )

    await entityDefinition.Persister.update( entityName, fields )

    this.invalidateLoaderCache( entityName, fields )
  }

  async remove( entityName: string, fields: any ): void {

    const entityDefinition = entityDefinitions[ entityName ]

    this.recordChange( entityName, fields, true )
    await this.executeTriggers( entityDefinition.TriggersForRemove, fields )

    await entityDefinition.Persister.remove( entityName, fields )

    this.invalidateLoaderCache( entityName, fields )
  }

  cursorForObjectInConnection( entityName: string, arr, obj ) {

    const entityDefinition = entityDefinitions[ entityName ]

    // IDs can be both strings and Uuid. Check that first, and convert to String
    const obj_id = entityDefinition.Persister.uuidToString( obj.id )

    // Make sure that the object and its instance can be compared with ===
    // assumed that the object has id field which is unique
    for( let ix = 0; ix < arr.length; ix++ ) {
      const arr_element_id = entityDefinition.Persister.uuidToString( arr[ ix ].id )

      if( arr_element_id == obj_id ) {
        arr[ ix ] = obj
        break
      }
    }

    let cursor = cursorForObjectInConnection( arr, obj )
    if( cursor == null )
      log.log( 'error', 'Could not create cursor for object in connection for ' + entityName, {
        obj,
        arr
      } )

    return cursor
  }

  static initializePersisters( runAsPartOfSetupDatabase: boolean, cb: Function ): void {

    console.log( "🚀 Initializing persisters - start ..." )

    // TODO x8000 This should be re-done to work properly with more than one persister
    for( let persister of setPersisters )
      persister.initialize( runAsPartOfSetupDatabase, () => {

        console.log( "🏆 Initializing Cassandra persister - success." )
        cb()
      } )
  }
}

ObjectManager.registerEntity( 'User', User )
