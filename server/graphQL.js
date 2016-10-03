/* @flow weak */

import bodyParser from 'body-parser'
import express from 'express'
import graphQLHTTP from 'express-graphql'

import { getUserByCookie, verifyUserAuthToken, serveAuthenticationFailed } from './checkCredentials.js'
import logServerRequest from './logServerRequest'
import ObjectManager from '../graphql/ObjectManager'
import schema from '../graphql/schema' // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed
import _schemas_system from '../graphql/model/_schemas'
import _schemas from '../configuration/graphql/_schemas'
import { requestLoggerGraphQL } from '../configuration/server/requestLoggers'


// Set up all persisters
ObjectManager.initializePersisters( false )

function logGraphQLRequest( req, res, next )
{
  logServerRequest( req, res, next, requestLoggerGraphQL )
}

const router = express( )

router.use( bodyParser.json( ) )
router.use( logGraphQLRequest )

router.use( '/', ( req, res, next ) =>
{
  // create individual object manager for each request
  const objectManager = new ObjectManager( )

  getUserByCookie( objectManager, req, res )
  .then( ( a_User ) => {
    res.codeFoundriesInjected = { user: a_User }
    verifyUserAuthToken( a_User, req, res )
  } )
  .then( ( ) => {
    graphQLHTTP( () => {
      return( {
        schema: schema,
        rootValue: objectManager,
        pretty: true,
        graphiql: true,
      } )
    } )( req, res, next )
  } )
  .catch( ( error ) => serveAuthenticationFailed( req, res, error, true ) )
} ) // router.use

export default router
