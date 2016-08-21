/* @flow weak */

import Joi from 'joi'
import vogels from 'vogels'
import winston from 'winston'

require('dotenv').load( )


const AWS = vogels.AWS;

if(process.env.DYNAMODB_SECRETACCESSKEY) {
	// test on aws
    AWS.config.update({
        accessKeyId: process.env.DYNAMODB_ACCESSKEYID
        , secretAccessKey: process.env.DYNAMODB_SECRETACCESSKEY
        , region: process.env.DYNAMODB_REGION
    });
} else {
	// test locally via docker
	AWS.config.update({region: 'us-east-1'});
    const opts = {endpoint: 'http://localhost:8000', apiVersion: '2012-08-10'};
    vogels.dynamoDriver(new AWS.DynamoDB(opts));
}

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
    console.log( JSON.stringify( tableSchema ) )

    const vogelsSchema = {
      hashKey: tableSchema.key,
      schema: { }
    }

    for( let fieldName in tableSchema.fields )
    {
      const fieldType = tableSchema.fields[ fieldName ]

      let vogelFieldDefinition

      if( fieldType == 'uuid' )
        vogelFieldDefinition = vogels.types.uuid( )
      else if( fieldType == 'text' )
        vogelFieldDefinition = Joi.string( )
      else
      {
        // Crappy catch all for now just for testing
        console.log( 'XXX unsupported field type ' + fieldType )
        vogelFieldDefinition = Joi.string( )
      }

      vogelsSchema[ fieldName ] = vogelFieldDefinition
    }

    console.log( JSON.stringify( vogelsSchema ) )

  }

  /*
  let User = vogels.define('User', {
  hashKey: 'userId',
  schema: {
    userId: vogels.types.uuid(),
    name: Joi.string(),
    location: Joi.string()
  }
});

  {
    fields: {
        id: 'uuid',
        Ensayo_User_id: 'uuid',
        Ensayo_Content: 'text',
        Ensayo_Description: 'text',
        Ensayo_Title: 'text',
    },
    key: [ 'id' ],
    indexes: [ 'Ensayo_User_id' ]
  }
  */

  initialize( runAsPartOfSetupDatabase: boolean ): void
  {
    // TODO x0500 Implement code for DynamoDB/vogel here.
  }
}
