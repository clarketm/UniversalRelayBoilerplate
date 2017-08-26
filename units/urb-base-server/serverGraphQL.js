// @flow

import bodyParser from 'body-parser'
import express from 'express'
import graphQLHTTP from 'express-graphql'

import { requestLoggerGraphQL } from '../_configuration/urb-base-server/requestLoggers'

import {
  getUserAndSessionIDByUserToken1,
  verifyUserAuthToken,
  serveAuthenticationFailed,
} from './checkCredentials'
import logServerRequest from './logServerRequest'
import { getObjectManager } from './graphql/ObjectManager'
import schema from './graphql/schema' // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed
import '../_configuration/urb-base-server/graphql/_schemas'

// Create router for GraphQL
const serverGraphQL = express()

// Set up parser
serverGraphQL.use( bodyParser.json() )

// Set up logging
serverGraphQL.use( ( req, res, next ) =>
  logServerRequest( req, res, next, requestLoggerGraphQL )
)

async function root( req, res, next ) {
  const objectManager = await getObjectManager( req, res )
  if ( objectManager.siteInformation ) {
    try {
      const a_User = ( await getUserAndSessionIDByUserToken1( objectManager, req ) )
        .User

      res.codeFoundriesInjected = { user: a_User }
      await verifyUserAuthToken( a_User, req )

      graphQLHTTP( () => {
        return {
          schema: schema,
          rootValue: objectManager,
          pretty: true,
          graphiql: true,
        }
      })( req, res, next )
    } catch ( err ) {
      serveAuthenticationFailed( req, res, err, true )
    }
  }
}
serverGraphQL.use( '/', root )

export default serverGraphQL
