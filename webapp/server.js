/* @flow weak */

import express from 'express'

import logServerRequest from '../server/logServerRequest'
import {version} from '../configuration/package'
import renderOnServer from './renderOnServer'
import { requestLoggerRenderOnServer } from '../configuration/server/requestLoggers'


function logPublicRequest( req, res, next )
{
  logServerRequest( req, res, next, requestLoggerRenderOnServer )
}

let assetsPath
if( process.env.NODE_ENV == 'production' )
  assetsPath = `/assets/${version}`
else
  assetsPath = `http://localhost:8080/${version}`

let app = express( )

app.use( logPublicRequest )

// Serve HTML
app.get( '/*', ( req, res, next ) => {
    renderOnServer( req, res, next, assetsPath )
} )

export default app
