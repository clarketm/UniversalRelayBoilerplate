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
  console.log( "XXX Adding schema for table " + tableName )
  if( tableSchemas == null )
  {
    console.error( "Can not create schema" )
    process.exit( )
  }
  tableSchemas[ tableName ] = tableSchema
}


// console.log( "tableSchemas:" )
// console.log( tableSchemas )
// for( let tableName in tableSchemas )
//   console.log( tableSchemas[ tableName ] )

export function connectAndLoadSchemas( )
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
            else
            {
              console.log( "XXX READY: " + ExpressCassandraClient.modelInstance[ tableName ]._properties.name )
              // Table is ready to use .....
              // console.log( ExpressCassandraClient.modelInstance.MyTable )
              // console.log( ExpressCassandraClient.modelInstance.MyTable === MyTableSchema )
            }
          }
        )
    }
  } )
}

export default ExpressCassandraClient
