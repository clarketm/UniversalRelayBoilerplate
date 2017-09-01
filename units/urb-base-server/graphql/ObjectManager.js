// @flow

import DataLoader from 'dataloader'
import { cursorForObjectInConnection } from 'graphql-relay'

import UserToken2Anonymous from '../../_configuration/urb-base-server/UserToken2Anonymous'
import defaultPersister from '../../_configuration/urb-base-server/graphql/defaultPersister'
import getNewUser from '../../_configuration/urb-base-server/graphql/model/getNewUser'
import { getSiteInformation } from '../../_configuration/urb-base-server/siteSettings'
import log from '../log'
import User from '../../_configuration/urb-base-server/graphql/model/User'

// Anonymous user
const User_0 = new User(
  Object.assign( getNewUser( '00000000-0000-0000-0000-000000000000' ), {
    id: defaultPersister.uuidNull(),
    UserToken2: UserToken2Anonymous,
    User_DisplayName: 'Anonymous',
  })
)

// Static set of entity definitions
const entityDefinitions = {}

// Static array of object managers
const setPersisters = new Set()

// Value for a change indicating that the record is deleted
const deletedRecord = {
  deleted: true,
}

export default class ObjectManager {
  loadersSingle: Object
  Viewer_User_id: ?string
  loadersMultiple: Object
  changes: Object
  request: ?Object
  response: ?Object
  User_0: User
  siteInformation: { site_id: string }

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

    // Anonymous user available as property, for comparisons
    this.User_0 = User_0

    // Setting site information mostly to satify flow;
    // also, in order to be able to detect errors when not set better
    this.siteInformation = {
      site_id: 'site_id has not been set. Invalid site_id!',
    }
  }

  static registerEntity(
    entityName: string,
    EntityType: any,
    persister: any
  ): void {
    if ( entityName in entityDefinitions )
      throw new Error( 'Entity already registered: ' + entityName )

    // In order to be able to access the name as a static property of the type
    EntityType.entityName = entityName

    // Determine persister - default, or otherwise
    if ( persister == null ) persister = defaultPersister

    // A set would retain only one copy of a persister
    setPersisters.add( persister )

    entityDefinitions[entityName] = {
      EntityName: entityName,
      EntityType: EntityType,
      Persister: persister,
      TriggersForAdd: [],
      TriggersForUpdate: [],
      TriggersForRemove: [],
      TriggersForUpdateShouldRetrieveCurrentRecord: false,
    }
  }

  static RegisterTriggerForAdd( entityName: string, handler: Function ): void {
    entityDefinitions[entityName].TriggersForAdd.push( handler )
  }

  static RegisterTriggerForUpdate(
    entityName: string,
    handler: Function,
    shouldRetrieveCurrentRecord: boolean
  ): void {
    entityDefinitions[entityName].TriggersForUpdate.push( handler )

    if ( shouldRetrieveCurrentRecord )
      entityDefinitions[
        entityName
      ].TriggersForUpdateShouldRetrieveCurrentRecord = true
  }

  static RegisterTriggerForAddAndUpdate(
    entityName: string,
    handler: Function
  ): void {
    ObjectManager.RegisterTriggerForAdd( entityName, handler )
    ObjectManager.RegisterTriggerForUpdate( entityName, handler, false )
  }

  static RegisterTriggerForRemove( entityName: string, handler: any ) {
    entityDefinitions[entityName].TriggersForRemove.push( handler )
  }

  setViewerUserId( Viewer_User_id: string ): void {
    this.Viewer_User_id = Viewer_User_id
  }

  setRequest( req: any, res: any ): void {
    this.request = req
    this.response = res
  }

  setSiteInformation( siteInformation: Object ): void {
    this.siteInformation = siteInformation
  }

  getLoadersSingle( entityName: string ) {
    const foundLoaders = this.loadersSingle[entityName]
    if ( foundLoaders != null ) return foundLoaders
    else return ( this.loadersSingle[entityName] = {})
  }

  getLoadersMultiple( entityName: string ) {
    const foundLoaders = this.loadersMultiple[entityName]
    if ( foundLoaders != null ) return foundLoaders
    else return ( this.loadersMultiple[entityName] = {})
  }

  clearLoadersMultiple( entityName: string ) {
    this.loadersMultiple[entityName] = {}
  }

  recordChange( entityName: string, fields: Object, isDeletion: boolean ) {
    let records = this.changes[entityName]
    if ( records == null ) records = this.changes[entityName] = {}

    const id = fields.id

    records[id] = isDeletion ? deletedRecord : fields
  }

  getViewerUserId(): string {
    if ( this.Viewer_User_id == null )
      throw new Error( 'Object Manager: viewer user id has not been set' )

    return this.Viewer_User_id
  }

  getRequest(): any {
    if ( this.request == null )
      throw new Error( 'Object Manager: request has not been set' )

    return this.request
  }

  getLoader( entityName: string, fieldName: string, multipleResults: boolean ) {
    if ( !( entityName in entityDefinitions ) )
      throw new Error( 'Can not find entity type named ' + entityName )

    const entityDefinition = entityDefinitions[entityName]
    const entityType = entityDefinition.EntityType

    let loadersList = multipleResults
      ? this.getLoadersMultiple( entityName )
      : this.getLoadersSingle( entityName )
    let loader = loadersList[fieldName]
    if ( loader == null ) {
      if ( multipleResults )
        loader = new DataLoader( filter =>
          entityDefinition.Persister.getObjectList(
            entityName,
            entityType,
            filter
          )
        )
      else
        loader = new DataLoader( filter =>
          entityDefinition.Persister.getOneObject(
            entityName,
            entityType,
            filter
          )
        )

      loadersList[fieldName] = loader
    }

    return loader
  }

  getOneObject( entityName: string, filter: Object ): Promise<User> {
    // TODO x2000 Provide try catch with logging here!
    // Special hack for anonymous users
    if ( entityName === 'User' )
      if ( filter.id == defaultPersister.uuidNullAsString() )
        return Promise.resolve( User_0 )

    // For all non-user, non 0 ids, load from data loader per protocol
    const loaderIdentifier = Object.keys( filter )
      .sort()
      .join( ',' )
    const loader = this.getLoader( entityName, loaderIdentifier, false )

    return loader.load( filter ).then( result => {
      const changes = this.changes[entityName]
      if ( changes ) {
        // $FlowIssue - by convention all entity objects are expected to have an id
        const change = changes[result.id]
        if ( change != null ) {
          if ( change === deletedRecord )
            result = null // Object is not found, return null // Add or update
          else Object.assign( result, change )
        }
      }
      return result
    })
  }

  getObjectList( entityName: string, filter: Object ) {
    // TODO x2000 Provide try catch with logging here!
    const loaderIdentifier = Object.keys( filter )
      .sort()
      .join( ',' )
    const loader = this.getLoader( entityName, loaderIdentifier, true )

    return loader.load( filter ).then( arrResults => {
      const changes = this.changes[entityName]
      if ( changes ) {
        for ( let ix = 0; ix < arrResults.length; ix++ ) {
          const change = changes[arrResults[ix].id]
          if ( change != null ) {
            if ( change === deletedRecord )
              arrResults.splice( ix--, 1 ) // Reduce ix in order not to skip over a record // Add or update
            else Object.assign( arrResults[ix], change )
          }
        }
      }
      return arrResults
    })
  }

  invalidateLoaderCache( entityName: string, fields: any ) {
    // At this moment there is no obvious way of knowing what to clear from lists, so delete them all
    this.clearLoadersMultiple( entityName )

    const loadersSingle = this.getLoadersSingle( entityName )
    for ( let loaderFieldName in loadersSingle ) {
      if ( loaderFieldName === 'id' )
        loadersSingle[loaderFieldName].clear( fields.id )
      else delete loadersSingle[loaderFieldName]
    }
  }

  executeTriggers(
    arrTriggers: Array<Function>,
    fields: Object,
    oldFields: ?Object
  ) {
    const arrPromises = []
    for ( let trigger of arrTriggers ) {
      arrPromises.push( trigger( this, fields, oldFields ) )
    }

    return Promise.all( arrPromises )
  }

  assignPrimaryKey( entityName: string, fields: any ) {
    const entityDefinition = entityDefinitions[entityName]

    if ( entityDefinition == null )
      console.log( 'Cound not find entity ' + entityName )

    // Generate primary key, overwrite if already present
    fields.id = entityDefinition.Persister.uuidRandom()
  }

  async add( entityName: string, fields: any ): any {
    const entityDefinition = entityDefinitions[entityName]

    if ( entityDefinition == null )
      console.log( 'Cound not find entity ' + entityName )

    // Generate primary key, if not already present
    if ( !fields.id ) fields.id = entityDefinition.Persister.uuidRandom()

    // If this is a user ID
    if ( entityName === 'User' ) this.setViewerUserId( fields.id.toString() )

    this.recordChange( entityName, fields, false )
    await this.executeTriggers( entityDefinition.TriggersForAdd, fields )

    await entityDefinition.Persister.add(
      entityName,
      fields,
      entityDefinition.EntityType
    )

    this.invalidateLoaderCache( entityName, fields )

    return fields.id
  }

  async update( entityName: string, fields: any ): Promise<void> {
    const entityDefinition = entityDefinitions[entityName]

    if ( entityDefinition == null )
      console.log( '💔  XXX Cound not find entity' + entityName ) // Should that be recorded somewhere? Could be another

    let oldFields = null
    if ( entityDefinition.TriggersForUpdateShouldRetrieveCurrentRecord ) {
      oldFields = this.getOneObject( entityName, {
        id: fields.id,
      })
    }

    this.recordChange( entityName, fields, false )
    await this.executeTriggers(
      entityDefinition.TriggersForUpdate,
      fields,
      oldFields
    )

    await entityDefinition.Persister.update( entityName, fields )

    this.invalidateLoaderCache( entityName, fields )
  }

  async ensure(
    entityName: string,
    keyFields: Object,
    ensureFields: Object
  ): Promise<Object> {
    const entityDefinition = entityDefinitions[entityName]

    const entity = await this.getOneObject( entityName, keyFields )

    for ( let ensuredFieldName of Object.keys( ensureFields ) ) {
      let isMatchingValue = false
      if ( ensuredFieldName.endsWith( 'site_id' ) ) {
        if ( !entity.site_id )
          throw new Error(
            'ensuredFieldName = ' +
              ensuredFieldName +
              ', however the entity does not have field site_id'
          )
        isMatchingValue =
          entityDefinition.Persister.uuidToString( entity.site_id ) ===
          ensureFields.site_id
      } else if ( ensuredFieldName.endsWith( '_id' ) ) {
        isMatchingValue = entityDefinition.Persister.uuidEquals(
          ensureFields[ensuredFieldName],
          // $FlowIssue by convention the field should be present
          entity[ensuredFieldName]
        )
      } else {
        isMatchingValue =
          // $FlowIssue by convention the field should be present
          ensureFields[ensuredFieldName] === entity[ensuredFieldName]
      }

      if ( !isMatchingValue )
        throw new Error(
          '💔  Field value can not be ensured for field ' +
            ensuredFieldName +
            ' of ' +
            entityName
        )
    }

    return entity
  }

  async remove( entityName: string, fields: Object ): Promise<void> {
    const entityDefinition = entityDefinitions[entityName]

    this.recordChange( entityName, fields, true )
    await this.executeTriggers( entityDefinition.TriggersForRemove, fields )

    await entityDefinition.Persister.remove( entityName, fields )

    this.invalidateLoaderCache( entityName, fields )
  }

  cursorForObjectInConnection(
    entityName: string,
    arr: Array<Object>,
    obj: Object
  ) {
    const entityDefinition = entityDefinitions[entityName]

    // IDs can be both strings and Uuid. Check that first, and convert to String
    const obj_id = entityDefinition.Persister.uuidToString( obj.id )

    // Make sure that the object and its instance can be compared with ===
    // assumed that the object has id field which is unique
    for ( let ix = 0; ix < arr.length; ix++ ) {
      const arr_element_id = entityDefinition.Persister.uuidToString( arr[ix].id )

      if ( arr_element_id === obj_id ) {
        arr[ix] = obj
        break
      }
    }

    let cursor = cursorForObjectInConnection( arr, obj )
    if ( cursor == null )
      log.log(
        'error',
        '💔  Could not create cursor for object in connection for ' +
          entityName,
        {
          obj,
          arr,
        }
      )

    return cursor
  }

  static initializePersisters(
    runAsPartOfSetupDatabase: boolean,
    cb: Function
  ): void {
    console.log( '🚀 Initializing persisters - start ...' )

    // TODO x8000 This should be re-done to work properly with more than one persister
    for ( let persister of setPersisters )
      persister.initialize( runAsPartOfSetupDatabase, () => {
        console.log( '🏆 Initializing persisters - success.' )
        cb()
      })
  }
}

// Register the user
ObjectManager.registerEntity( 'User', User )

// Get an Object Manager with site information
export async function getObjectManager(
  req: Object,
  res: Object
): Promise<ObjectManager> {
  // Set site information
  const siteInformation = await getSiteInformation( req, res )

  // Create individual object manager for each request
  const objectManager = new ObjectManager()

  // Set request and response
  objectManager.setRequest( req, res )

  // Place site builder configuration into object manager
  objectManager.setSiteInformation( siteInformation )

  return objectManager
}
