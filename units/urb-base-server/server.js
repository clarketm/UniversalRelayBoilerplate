// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import express from 'express'
import graphQLHTTP from 'express-graphql'
import path from 'path'

import auth from './auth' // Authentication server
import graphql from './graphQL' // GraphQL server
import healthz from './healthz' // Health check endpoint server
import ObjectManager from './graphql/ObjectManager'
import webapp from '../urb-base-webapp/server' // Isomorphic React server

// Read environment
require('dotenv').load()

const port = process.env.PORT
if (port == null || typeof port !== 'string')
  throw new Error('💔  urb-base-server/server.js requires the environment variable PORT to be set')

const host = process.env.HOST
if (host == null || typeof host !== 'string')
  throw new Error('💔  urb-base-server/server.js requires the environment variable HOST to be set')

const router = express()

// GraphQL server
router.use('/graphql', graphql)

// Authentication server
router.use('/auth', auth)

// Health check endpoint
router.use('/healthz', healthz)

// Static assets server
let oneYear = 365 * 86400000
router.use(
  express.static(path.resolve(__dirname + '/../_configuration/urb-base-server/public_files/'), {
    maxAge: oneYear,
  }),
)

// Application with routes
router.use(webapp)

// Set up all persisters
ObjectManager.initializePersisters(false, () => {
  // Serve - work differently in development and production. In production only the
  // specified host serves
  if (process.env.NODE_ENV == 'production') router.listen(port, host)
  else {
    // Development server - localhost
    const localhostDevelopmentServer = express()
    localhostDevelopmentServer.use(router)
    localhostDevelopmentServer.listen(port, '127.0.0.1')
    console.log('☄  DEVELOPMENT. Server listening on 127.0.0.1')

    // Development server - on a specific IP, if different from localhost
    if (process.env.HOST != '127.0.0.1') {
      const localIPDevelopmentServer = express()
      localIPDevelopmentServer.use(router)
      localIPDevelopmentServer.listen(port, host)
      console.log('☄  DEVELOPMENT. Server listening on ' + host)
    }
  }
})
