/* @flow */

import express from 'express'

import logServerRequest from '../server/logServerRequest'
import { version } from '../configuration/package'
import renderOnServer from './renderOnServer'
import { requestLoggerRenderOnServer } from '../configuration/server/requestLoggers'


// Read environment
require( 'dotenv' ).load()


// Use relative URL for asset path
let assetsPath
if( process.env.NODE_ENV == 'production' )
  assetsPath = `/assets/${version}`
else {
  const host = process.env.HOST || 4444
  assetsPath = `http://${host}:8080/${version}`
}

// Create express router
const app = express()

// Log requests for statically served files
app.use( ( req, res, next ) => logServerRequest( req, res, next, requestLoggerRenderOnServer ) )

// Serve HTML file, JavaScript bundle and other assets
app.get( '/*', ( req, res, next ) => {
  renderOnServer( req, res, next, assetsPath )
} )


export default app
