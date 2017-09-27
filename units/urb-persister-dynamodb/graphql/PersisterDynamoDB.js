// @flow

import Joi from 'joi'
import uuid from 'node-uuid'
import vogels from 'vogels'
import winston from 'winston'

require( 'dotenv' ).load()

const Uuid_Null = '00000000-0000-0000-0000-000000000000'
const AWS = vogels.AWS

if ( process.env.DYNAMODB_SECRETACCESSKEY ) {
  // test on aws
  AWS.config.update({
    accessKeyId: process.env.DYNAMODB_ACCESSKEYID,
    secretAccessKey: process.env.DYNAMODB_SECRETACCESSKEY,
    region: process.env.DYNAMODB_REGION,
  })
} else {
  // test locally via docker
  AWS.config.update({ region: 'us-east-1' })
  const opts = { endpoint: 'http://localhost:8000', apiVersion: '2012-08-10' }
  vogels.dynamoDriver( new AWS.DynamoDB( opts ) )
}

export default class PersisterDynamoDB {
  constructor() {
    this.tables = {}
    this.canAddMoreTableSchemas = true
  }

  getOneObject( entityName: string, ObjectType: any, filters: Array<any> ): Promise<any> {
    const resultPromises = []

    for ( let filter of filters )
      resultPromises.push(
        new Promise( ( resolve, reject ) => {
          this.tables[entityName].get( filter, ( err, entity ) => {
            if ( err ) reject( err )
            else {
              if ( entity != null ) resolve( new ObjectType( entity.get() ) )
              else resolve( null )
            }
          })
        }),
      )

    return Promise.all( resultPromises )
  }

  getObjectList( entityName: string, ObjectType: any, filters: Array<any> ): Promise<Array<Object>> {
    const resultPromises = []

    for ( let filter of filters )
      resultPromises.push(
        new Promise( ( resolve, reject ) => {
          let query = this.tables[entityName].scan()
          for ( let fieldName in filter ) {
            query = query.where( fieldName ).equals( filter[fieldName])
            if ( fieldName !== 'id' && fieldName.includes( 'Id' ) )
              query = query.usingIndex( fieldName + 'Index' )
          }

          query.exec( ( err, queryResults ) => {
            if ( err ) reject( err )
            else {
              const arrRetObj = []
              for ( let entity of queryResults.Items ) arrRetObj.push( new ObjectType( entity.get() ) )
              resolve( arrRetObj )
            }
          })
        }),
      )

    return Promise.all( resultPromises )
  }

  add( entityName: string, fields: any, ObjectType: any ): Promise<> {
    return new Promise( ( resolve, reject ) => {
      this.tables[entityName].create( fields, err => {
        if ( err ) reject( err )
        else resolve()
      })
    })
  }

  update( entityName: string, fields: any ): Promise<> {
    return new Promise( ( resolve, reject ) => {
      this.tables[entityName].update( fields, err => {
        if ( err ) reject( err )
        else resolve()
      })
    })
  }

  remove( entityName: string, fields: any ): Promise<> {
    return new Promise( ( resolve, reject ) => {
      this.tables[entityName].destroy( fields, err => {
        if ( err ) reject( err )
        else resolve()
      })
    })
  }

  createLogger() {
    // TODO x1000 have some kind of adapter for winston
    return null
  }

  uuidFromString( str: string ): string {
    return str
  }

  uuidRandom(): string {
    return uuid.v1()
  }

  uuidNull() {
    return Uuid_Null
  }

  uuidNullAsString() {
    return Uuid_Null
  }

  uuidToString( id: any ) {
    return id
  }

  uuidEquals( id1: any, id2: any ): boolean {
    return id1 == id2
  }

  addTableSchema( tableName: string, tableSchema: Object ): void {
    if ( !this.canAddMoreTableSchemas ) {
      console.error( '💔 Attempting to add table schemas to Vogel after createTables.' )
      process.exit( 1 )
    }

    const vogelsSchema = {
      schema: {},
      indexes: [],
    }

    // Determine key. Not sure how composite key should be handled
    let key = tableSchema.key
    if ( Array.isArray( key ) ) key = key[0] // A bit crude but seems to create the table properly

    vogelsSchema.hashKey = key

    // Copy fields
    for ( let fieldName in tableSchema.fields ) {
      const fieldType = tableSchema.fields[fieldName]

      let vogelFieldDefinition

      if ( fieldType == 'uuid' ) vogelFieldDefinition = vogels.types.uuid()
      else if ( fieldType == 'text' ) vogelFieldDefinition = Joi.string().allow( '' )
      else if ( fieldType == 'timestamp' ) vogelFieldDefinition = Joi.date()
      else if ( fieldType == 'int' ) vogelFieldDefinition = Joi.number()
      else if ( fieldType == 'boolean' ) vogelFieldDefinition = Joi.boolean()
      else {
        // Crappy catch all for now just for testing
        console.log( '💔  Dynamo DB: unsupported field type ' + fieldType )
        vogelFieldDefinition = Joi.string()
      }

      vogelsSchema.schema[fieldName] = vogelFieldDefinition
    }

    // Copy indexes
    if ( tableSchema.indexes )
      for ( let fieldName of tableSchema.indexes )
        vogelsSchema.indexes.push({ hashKey: fieldName, name: fieldName + 'Index', type: 'global' })

    this.tables[tableName] = vogels.define( tableName, vogelsSchema )
  }

  confirmHealth(): Promise<> {
    //
    return new Promise( ( resolve, reject ) => {
      resolve()
    })
  }

  initialize( runAsPartOfSetupDatabase: boolean, cb: Function ): void {
    // All table schemas should have been added by now.
    this.canAddMoreTableSchemas = false

    vogels.createTables( err => {
      if ( err ) {
        console.log( '💔 Initializing DynamoDB persister - error' )
        console.log( err )
        process.exit( 1 )
      } else {
        cb()
      }
    })
  }
}
