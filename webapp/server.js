/* @flow weak */

import express from 'express'

import logServerRequest from '../server/logServerRequest'
import
{
  version
}
from '../configuration/package'
import renderOnServer from './renderOnServer'
import
{
  requestLoggerRenderOnServer
}
from '../configuration/server/requestLoggers'


// Read environment
require( 'dotenv' ).load()

// Log requests for statically served files
function logPublicRequest( req, res, next )
{
  logServerRequest( req, res, next, requestLoggerRenderOnServer )
}

// Use relative URL for asset path
let assetsPath
if( process.env.NODE_ENV == 'production' )
  assetsPath = `/assets/${version}`
else
{
  const host = process.env.HOST
  assetsPath = `http://${host}:8080/${version}`
}

let app = express()
app.use( logPublicRequest )

// Serve HTML
app.get( '/*', ( req, res, next ) =>
{
  renderOnServer( req, res, next, assetsPath )
} )

export default app
