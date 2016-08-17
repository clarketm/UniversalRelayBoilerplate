/* @flow weak */

import { runQuery, runQueryOneResult, runQueryNoResult, Uuid } from './CassandraClient'
import CassandraOptions from './CassandraOptions';
import { addTableSchema } from './ExpressCassandra'
import WinstonCassandra from './WinstonCassandra'


export default class PersisterCassandra
{
  get( entityName: string, ObjectType: any, fieldName: string, values: Array<any> )
  {
    let cqlText = 'SELECT * FROM "' + entityName + '" WHERE "' + fieldName + '" = ?'
    let resultPromises = [ ]

    for( let value of values )
      resultPromises.push( runQueryOneResult( ObjectType, cqlText, [ value ] ) )

    return Promise.all( resultPromises )
  }

  getList( entityName: string, ObjectType: any, fieldName: string, values: Array<any> )
  {
    let cqlText = 'SELECT * FROM "' + entityName + '" WHERE "' + fieldName + '" = ?'
    let resultPromises = [ ]

    for( let value of values )
      resultPromises.push( runQuery( ObjectType, cqlText, [ value ] ) )

    return Promise.all( resultPromises )
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  add( entityName: string, fields: any, ObjectType: any )
  {
    let cqlTextFieldNames = ''
    let cqlTextFieldValues = ''
    let cqlParams = [ ]

    for( let fieldName in fields )
    {
      cqlTextFieldNames += (cqlParams.length > 0 ? ', ' : '') + '"' + fieldName + '"'
      cqlTextFieldValues += (cqlParams.length > 0 ? ', ' : '') + '?'
      cqlParams.push( fields[ fieldName ] )
    }

    let cqlText = 'INSERT INTO "' + entityName + '" (' + cqlTextFieldNames + ') VALUES (' + cqlTextFieldValues + ')'

    return runQueryNoResult( cqlText, cqlParams )
  }

  update( entityName: string, fields: any )
  {
    let cqlText = 'UPDATE "' + entityName + '" SET '
    let cqlParams = [ ]

    let followingItem = false

    for( let fieldName in fields )
      if( fieldName != 'id' ) // Do not update id
      {
        if( followingItem )
          cqlText += ', '
        else
          followingItem = true

        cqlText += '"' + fieldName + '" = ?'
        cqlParams.push( fields[ fieldName ] )
      }

    cqlText += ' WHERE id = ?'
    cqlParams.push( fields.id )

    return runQueryNoResult( cqlText, cqlParams )
  }

  remove( entityName: string, fields: any )
  {
    const cqlText = 'DELETE FROM "' + entityName + '" WHERE id = ?'
    const cqlParams = [ fields.id ]

    return runQueryNoResult( cqlText, cqlParams )
  }

  createLogger( )
  {
    return new WinstonCassandra( CassandraOptions )
  }

  uuidFromString( str: string )
  {
    return Uuid.fromString( str )
  }

  uuidRandom( )
  {
    return Uuid.random( )
  }

  uuidToString( id: any )
  {
    if( id instanceof Uuid )
      id = id.toString( )

    return id
  }

  uuidEquals( id1: any, id2: any ): boolean
  {
    return id1.equals( id2 )
  }

  addTableSchema( tableName: string, tableSchema: object ): void
  {
    addTableSchema( tableName, tableSchema )
  }
}
