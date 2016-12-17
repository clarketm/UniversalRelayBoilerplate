/* @flow weak */

import bodyParser from 'body-parser'
import express from 'express'
import graphQLHTTP from 'express-graphql'

import { getUserByCookie, verifyUserAuthToken, serveAuthenticationFailed } from './checkCredentials.js'
import logServerRequest from './logServerRequest'
import ObjectManager from '../graphql/ObjectManager'
import { requestLoggerGraphQL } from '../configuration/server/requestLoggers'
import schema from '../graphql/schema' // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed
import _schemas_system from '../graphql/model/_schemas'
import _schemas from '../configuration/graphql/_schemas'


// Create router for GraphQL
const router = express()

// Set up parser and logging
router.use( bodyParser.json() )
router.use( ( req, res, next ) => logServerRequest( req, res, next, requestLoggerGraphQL ) )

router.use( '/', async( req, res, next ) => {
    // create individual object manager for each request
    const objectManager = new ObjectManager()
    objectManager.setRequest( req )

    try {
      const a_User = await getUserByCookie( objectManager, req, res )

      res.codeFoundriesInjected = { user: a_User }
      await verifyUserAuthToken( a_User, req, res )

      graphQLHTTP( () => {
        return( {
          schema: schema,
          rootValue: objectManager,
          pretty: true,
          graphiql: true,
        } )
      } )( req, res, next )

    } catch( err ) {
      serveAuthenticationFailed( req, res, err, true )
    }
  } ) // router.use

export default router
