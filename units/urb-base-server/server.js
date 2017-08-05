// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import graphQLHTTP from 'express-graphql'
import path from 'path'

import auth from './auth' // Authentication server
import getLocalIP from './getLocalIP'
import graphql from './graphQL' // GraphQL server
import healthz from './healthz' // Health check endpoint server
import log from './log'
import ObjectManager from './graphql/ObjectManager'
import { name, version } from '../_configuration/package'
import webapp from '../urb-base-webapp/server' // Isomorphic React server

// Read environment
require('dotenv').load()

const port = process.env.PORT
if (port == null || typeof port !== 'string')
  throw new Error('💔  urb-base-server/server.js requires the environment variable PORT to be set')

const host = process.env.HOST
if (host == null || typeof host !== 'string')
  throw new Error('💔  urb-base-server/server.js requires the environment variable HOST to be set')

// Log startup information
log.log('info', 'Starting application', {
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
const router = express()

// Add headers
router.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.PUBLIC_URL)
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  // Pass to next layer of middleware
  next()
})

// Configure main router
router.set('trust proxy', 'loopback')
router.set('x-powered-by', false)
router.use(compression())
router.use(cookieParser())

// GraphQL server
router.use('/graphql', graphql)

// Authentication server
router.use('/auth', auth)

// Health check endpoint
router.use('/healthz', healthz)

// Staticpublic files server
router.use(
  express.static(path.resolve(__dirname + '/../_configuration/urb-base-server/public_files/'), {
    maxAge: 365 * 86400000, // one year
  }),
)

// Application with routes
router.use(webapp)

// Set up all persisters
ObjectManager.initializePersisters(false, () => {
  // Serve - work differently in development and production. In production only the
  // specified host serves
  if (process.env.NODE_ENV == 'production') {
    // Production - serve as told
    router.listen(port, host)
  } else {
    // Development server - localhost. Always run on localhost
    startDevelopmentServer(port, '127.0.0.1')

    // Development server - on a specific IP, if different from localhost
    if (host != '127.0.0.1') startDevelopmentServer(port, host)
  }
})

function startDevelopmentServer(port, host) {
  const localIPDevelopmentServer = express()
  localIPDevelopmentServer.use(router)
  localIPDevelopmentServer.listen(port, host)
  console.log('☄  DEVELOPMENT. Server listening on ' + host)
}
