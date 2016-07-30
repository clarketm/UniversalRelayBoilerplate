/* @flow weak */

import ExpressCassandra from 'express-cassandra'
import process from 'process'

import CassandraOptions from './CassandraOptions'


const ExpressCassandraClient = ExpressCassandra.createClient( {
  clientOptions: CassandraOptions, // Options are pre-set in a separate part of the application, they are correct
  ormOptions: {
    defaultReplicationStrategy : {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    dropTableOnSchemaChange: false,
    createKeyspace: true
  }
} )

let tableSchemas = new Map( )

export function addTableSchema( tableName: string, tableSchema: object ): void
{
  if( tableSchemas == null )
  {
    console.error( "Can not create schema" )
    process.exit( )
  }
  tableSchemas[ tableName ] = tableSchema
}

export function connectAndLoadSchemas( provideFeedback: boolean ): void
{
  ExpressCassandraClient.connect( ( err ) =>
  {
    if( err )
      console.log( err.message )
    else
    {
      for( let tableName in tableSchemas )
        ExpressCassandraClient.loadSchema(
          tableName,
          tableSchemas[ tableName ],
          ( err ) =>
          {
            if( err )
            {
              console.log( err.message )
              process.exit( )
            }
            else if( provideFeedback )
              console.log( "Table ready: " + ExpressCassandraClient.modelInstance[ tableName ]._properties.name )
          }
        )

      tableSchemas = null // So that no more can be added
    }
  } )
}

export default ExpressCassandraClient
