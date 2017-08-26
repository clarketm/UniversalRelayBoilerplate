// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import path from 'path'

import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import { name, version } from '../_configuration/package'
import serverWebApp from '../urb-base-webapp/serverWebApp' // Isomorphic React server

import serverAuth from './serverAuth' // Authentication server
import getLocalIP from './getLocalIP'
import graphql from './serverGraphQL' // GraphQL server
import serverHealthz from './serverHealthz' // Health check endpoint server
import log from './log'
import ObjectManager from './graphql/ObjectManager'

//

// Read environment
require( 'dotenv' ).load()

const port = process.env.PORT
if ( port == null || typeof port !== 'string' )
  throw new Error(
    '💔  urb-base-server/server.js requires the environment variable PORT to be set'
  )

const host = process.env.HOST
if ( host == null || typeof host !== 'string' )
  throw new Error(
    '💔  urb-base-server/server.js requires the environment variable HOST to be set'
  )

// Log startup information
log.log( 'info', 'Starting application', {
  name: name,
  version: version,

  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  PUBLIC_URL: process.env.PUBLIC_URL,

  process_title: process.title,
  process_pid: process.pid,
  local_ip: getLocalIP(),
})

// Main router
const server = express()

// Add headers
server.use( function( req, res, next ) {
  // Website you wish to allow to connect
  res.setHeader( 'Access-Control-Allow-Origin', process.env.PUBLIC_URL )
  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  // Request headers you wish to allow
  res.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With,content-type' )
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader( 'Access-Control-Allow-Credentials', true )
  // Pass to next layer of middleware
  next()
})

// Configure main router
server.set( 'trust proxy', 'loopback' )
server.set( 'x-powered-by', false )
server.use( compression() )
server.use( cookieParser() )

// GraphQL server
server.use( '/graphql', graphql )

// Authentication server
server.use( '/auth', serverAuth )

// Health check endpoint
server.use( '/healthz', serverHealthz )

// Staticpublic files server
server.use(
  express.static(
    path.resolve(
      __dirname + '/../_configuration/urb-base-server/public_files/'
    ),
    {
      maxAge: 365 * 86400000, // one year
    }
  )
)

// Application with routes
server.use( serverWebApp )

// Set up all persisters
ObjectManager.initializePersisters( false, () => {
  // Serve - work differently in development and production. In production only the
  // specified host serves
  if ( process.env.NODE_ENV === 'production' ) {
    // Production - serve as told
    server.listen( port, host )
  } else {
    // Development server - localhost. Always run on localhost
    startDevelopmentServer( port, '127.0.0.1' )

    // Development server - on a specific IP, if different from localhost
    if ( host !== '127.0.0.1' ) startDevelopmentServer( port, host )
  }
})

function startDevelopmentServer( port, host ) {
  const localIPDevelopmentServer = express()
  localIPDevelopmentServer.use( server )
  localIPDevelopmentServer.listen( port, host )
  console.log( '☄  DEVELOPMENT. Server listening on ' + host )
}
