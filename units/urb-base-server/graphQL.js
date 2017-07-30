// @flow

import bodyParser from 'body-parser'
import express from 'express'
import graphQLHTTP from 'express-graphql'

import { getUserByCookie, verifyUserAuthToken, serveAuthenticationFailed } from './checkCredentials'
import { getSiteInformation } from '../../configuration/urb-base-webapp/siteSettings'
import logServerRequest from './logServerRequest'
import { getObjectManager } from './graphql/ObjectManager'
import { requestLoggerGraphQL } from '../../configuration/urb-base-server/requestLoggers'
import schema from '../../units/urb-base-server/graphql/schema' // Schema for GraphQL server

// Guarantee that all object registrations and schema definitions are executed
import _schemas_system from './graphql/model/_schemas'
import _schemas from '../../configuration/urb-base-server/graphql/_schemas'

// Create router for GraphQL
const router = express()

// Set up parser and logging
router.use(bodyParser.json())
router.use((req, res, next) => logServerRequest(req, res, next, requestLoggerGraphQL))

async function root(req, res, next) {
  const objectManager = await getObjectManager(req, res)
  if (objectManager.siteInformation) {
    try {
      const a_User = await getUserByCookie(objectManager, req, res)

      res.codeFoundriesInjected = { user: a_User }
      await verifyUserAuthToken(a_User, req, res)

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
