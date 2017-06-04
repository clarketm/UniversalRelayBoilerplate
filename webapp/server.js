// @flow

import express from 'express'

import logServerRequest from '../server/logServerRequest'
import renderOnServer from './renderOnServer'
import { requestLoggerRenderOnServer } from '../configuration/server/requestLoggers'

// Create express router
const app = express()

// Log requests for statically served files
app.use((req, res, next) => logServerRequest(req, res, next, requestLoggerRenderOnServer))

// Serve HTML file, JavaScript bundle and other assets
app.get('/*', (req, res, next) => {
  renderOnServer(req, res, next)
})

export default app
