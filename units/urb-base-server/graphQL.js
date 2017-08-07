// @flow

import bodyParser from 'body-parser'
import express from 'express'
import graphQLHTTP from 'express-graphql'

import {
  getUserByUserToken1,
  verifyUserAuthToken,
  serveAuthenticationFailed,
} from './checkCredentials'
import { getSiteInformation } from '../_configuration/urb-base-webapp/siteSettings'
import logServerRequest from './logServerRequest'
import { getObjectManager } from './graphql/ObjectManager'
import { requestLoggerGraphQL } from '../_configuration/urb-base-server/requestLoggers'
import schema from './graphql/schema' // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed
import _schemas_system from './graphql/model/_schemas'
import _schemas from '../_configuration/urb-base-server/graphql/_schemas'

// Create router for GraphQL
const router = express()

// Set up parser
router.use(bodyParser.json())

// Set up logging
router.use((req, res, next) => logServerRequest(req, res, next, requestLoggerGraphQL))

async function root(req, res, next) {
  const objectManager = await getObjectManager(req, res)
  if (objectManager.siteInformation) {
    try {
      const a_User = await getUserByUserToken1(objectManager, req)

      res.codeFoundriesInjected = { user: a_User }
      await verifyUserAuthToken(a_User, req)

      graphQLHTTP(() => {
        return {
          schema: schema,
          rootValue: objectManager,
          pretty: true,
          graphiql: true,
        }
      })(req, res, next)
    } catch (err) {
      serveAuthenticationFailed(req, res, err, true)
    }
  }
}
router.use('/', root)

export default router
