/* @flow weak */

import { Uuid } from './CassandraClient'
import CassandraOptions from './CassandraOptions'
import ExpressCassandraClient, { addTableSchema } from './ExpressCassandra'
import WinstonCassandra from './WinstonCassandra'


export default class PersisterCassandra
{
  get( entityName: string, ObjectType: any, fieldName: string, values: Array<any> ): Promise
  {
    const resultPromises = [ ]

    for( let value of values )
      resultPromises.push(
        new Promise( ( resolve, reject ) =>
        {
          const fields = { }
          fields[ fieldName ] = value
          this.updateUuidsInFields( entityName, fields )
          ExpressCassandraClient.instance[ entityName ].findOne( fields, { raw: true }, (err, entity ) => {
            if( err )
              reject( err )
            else
            {
              // TODO x1000 What is the behavior if the object does not exist? Is it an error
              const retObj = new ObjectType( entity )
              resolve( retObj )
            }
          } )
        } )
      )

    return Promise.all( resultPromises )
  }

  getList( entityName: string, ObjectType: any, fieldName: string, values: Array<any> ): Promise
  {
    const resultPromises = [ ]

    for( let value of values )
      resultPromises.push(
        new Promise( ( resolve, reject ) =>
        {
          const fields = { }
          fields[ fieldName ] = value
          this.updateUuidsInFields( entityName, fields )
          ExpressCassandraClient.instance[ entityName ].find( fields, { raw: true }, (err, arrEntities ) => {
            if( err )
              reject( err )
            else
            {
              const arrRetObj = [ ]
              for( let entity of arrEntities )
                arrRetObj.push( new ObjectType( entity ) )
              resolve( arrRetObj )
            }
          } )
        } )
      )

    return Promise.all( resultPromises )
  }

  updateUuidsInFields( entityName: string, fields: any )
  {
    const schemaFields = ExpressCassandraClient.instance[ entityName ]._properties.schema.fields
    for( let fieldName in fields )
    {
      const fieldType = schemaFields[ fieldName ]
      if( fieldType === 'uuid' )
      {
        const fieldValue = fields[ fieldName ]
        if( ! ( fieldValue instanceof Uuid ) )
          fields[ fieldName ] = Uuid.fromString( fieldValue )
      }
    }
  }

  add( entityName: string, fields: any )
  {
    this.updateUuidsInFields( entityName, fields )

    return new Promise( ( resolve, reject ) =>
    {
      const entity = new ExpressCassandraClient.instance[ entityName ]( fields )
      entity.save( ( err ) =>
      {
        if( err )
          reject( err )
        else
          resolve( )
      } )
    } )
  }

  update( entityName: string, fields: any )
  {
    // TODO x2000 Optimize this with update, possibly. Maybe it's not so bad to read first after all
    return this.add( entityName, fields )
  }

  remove( entityName: string, fields: any )
  {
    this.updateUuidsInFields( entityName, fields )

    return new Promise( ( resolve, reject ) =>
    {
      ExpressCassandraClient.instance[ entityName ].delete( fields , ( err ) =>
      {
        if( err )
          reject( err )
        else
          resolve( )
      } )
    } )
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
