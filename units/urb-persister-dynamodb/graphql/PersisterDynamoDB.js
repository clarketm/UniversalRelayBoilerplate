/* @flow weak */

import winston from 'winston'

export default class PersisterDynamoDB
{
  constructor( )
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  getStore( entityName: string )
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  findIndexes( entityName: string, filter: object )
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  findObjects( entityName: string, filter: object )
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  getOneObject( entityName: string, ObjectType: any, filters: Array<any> ): Promise
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  getObjectList( entityName: string, ObjectType: any, filters: Array<any> ): Promise
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  add( entityName: string, fields: any, ObjectType: any )
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  update( entityName: string, fields: any ): Promise
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  remove( entityName: string, fields: any ): Promise
  {
    // TODO x0500 Implement code for DynamoDB/vogel here
  }

  createLogger( )
  {
    // TODO x1000 have some kind of adapter for winston
    return new (winston.transports.Console)( )
  }

  uuidFromString( str: string ): string
  {
    // TODO x0500 Implement code for DynamoDB/vogel here, if changes are necessary. If vogel handles UUID as string, no change necessary
    return str
  }

  uuidRandom( ): string
  {
    // TODO x0500 Implement code for DynamoDB/vogel here. The code below naturally will not work.
    let tail = "000000000" + ( uuidSeed++ )
    tail = tail.substr( tail.length - 9  )
    const newUUID = '00000000-0000-0000-0000-' + tail // Just use srings

    return newUUID
  }

  uuidToString( id: any )
  {
    // TODO x0500 Implement code for DynamoDB/vogel here, if changes are necessary. If vogel handles UUID as string, no change necessary
    return id
  }

  uuidEquals( id1: any, id2: any ): boolean
  {
    // TODO x0500 Implement code for DynamoDB/vogel here, if changes are necessary. If vogel handles UUID as string, no change necessary
    return id1 == id2
  }

  addTableSchema( tableName: string, tableSchema: object ): void
  {
    // TODO x0500 Implement code for DynamoDB/vogel here.
  }

  initialize( runAsPartOfSetupDatabase: boolean ): void
  {
    // TODO x0500 Implement code for DynamoDB/vogel here.
  }
}
