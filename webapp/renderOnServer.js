// @flow

import Helmet from 'react-helmet'
import IsomorphicRouter from 'isomorphic-relay-router'
import MobileDetect from 'mobile-detect'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import RelayLocalSchema from 'relay-local-schema'
import { match } from 'react-router'

import { getUserByCookie, serveAuthenticationFailed } from '../server/checkCredentials'
import isomorphicVars from '../configuration/webapp/scripts/isomorphicVars'
import log from '../server/log'
import ObjectManager from '../graphql/ObjectManager'
import muiTheme from '../configuration/webapp/muiTheme'
import routes from '../configuration/webapp/routes'
import { version } from '../configuration/package'
import schema from '../graphql/schema' // Schema for GraphQL server
import { getSiteInformation } from '../configuration/webapp/siteSettings'
import Wrapper from '../configuration/webapp/components/Wrapper'

// Read environment
require('dotenv').load()

// Load up isomorphic vars here, for server rendering
const isoVars = JSON.stringify(isomorphicVars())

const httpError500FileName = path.resolve(__dirname, '../configuration/server/httpError/500.html')
const httpError404FileName = path.resolve(__dirname, '../configuration/server/httpError/404.html')

export function serveFailure(type, res, message, err) {
  log.log(type, 'Server error: ' + message, err)
  res.status(500).sendFile(httpError500FileName)
}

export default async (req: Object, res: Object, next) => {
  let assetsPath

  const siteInformation = await getSiteInformation(req, res)
  if (siteInformation) {
    if (process.env.NODE_ENV === 'production') {
      assetsPath = siteInformation.isSiteBuilderDisabled || siteInformation.inEditingMode
        ? // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
          `/assets/${version}`
        : // When in production mode, serve the assets compiled by factory's publisher
          `/assets-site/${version}.${siteInformation.configurationAsObject.version}`
    } else {
      // When in development, always go to webpack
      const host = process.env.HOST
      const port_webpack = process.env.PORT_WEBPACK
      assetsPath = `http://${host}:${port_webpack}/${version}`
    }

    match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
      if (error) next(error)
      else if (redirectLocation)
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      else if (renderProps)
        reunderOnServerCorrectRequest(req, res, next, assetsPath, renderProps, siteInformation)
      else res.status(404).sendFile(httpError404FileName)
    })
  } // If siteInformation was null, an error response has already been given
}

function reunderOnServerCorrectRequest(req, res, next, assetsPath, renderProps, siteInformation) {
  // Create individual object manager for each request
  const objectManager = new ObjectManager()

  // Place site builder configuration into object manager
  objectManager.setSiteInformation(siteInformation)

  getUserByCookie(objectManager, req, res)
    .then(() => {
      // Inject request information in res
      res.codeFoundriesInjected = {
        user: objectManager.getOneObject('User', {
          id: objectManager.getViewerUserId(),
        }),
      }
    })
    .then(() => {
      try {
        const networkLayer = new RelayLocalSchema.NetworkLayer({
          schema,
          rootValue: objectManager,
          onError: (errors, request) =>
            serveFailure('error', res, 'Local network layer GraphQL failure', {
              errors,
              request,
            }),
        })

        function render({ data, props }) {
          try {
            const userAgent = req.headers['user-agent']

            // Also, set width to emulate phone, tablet or desktop
            const md = new MobileDetect(userAgent)

            let innerWidth
            if (md.phone()) innerWidth = 700
            else if (md.tablet())
              // Will qualify as SMALL
              innerWidth = 900 // Will qualify as MEDIUM
            else innerWidth = 1100 // Will qualify as LARGE

            // The rendering code is not multithreded, so it is OK to set these to global
            global.window = { innerWidth: innerWidth }
            global.location = { pathname: req.originalUrl }

            // Get the react output HTML
            const isomorphicResponse = IsomorphicRouter.render(props)
            const reactOutput = ReactDOMServer.renderToString(
              <Wrapper userAgent={userAgent}>
                {isomorphicResponse}
              </Wrapper>,
            )
            const helmet = Helmet.rewind()

            res.render(path.resolve(__dirname, 'renderOnServer.ejs'), {
              preloadedData: JSON.stringify(data).replace(/\//g, '\\/'),
              assetsPath: assetsPath,
              reactOutput,
              title: helmet.title,
              meta: helmet.meta,
              link: helmet.link,
              backgroundColor: muiTheme.palette.backCanvas.viewportBackgroundColor,
              isomorphicVars: isoVars,
              configurationAsObject: JSON.stringify(
                siteInformation.inEditingMode || process.env.NODE_ENV == 'development'
                  ? siteInformation.configurationAsObject
                  : {
                      // TODO 0x0050 Mask configurationAsObject.serverData
                      appData: siteInformation.configurationAsObject.appData,
                    },
              ),
              NODE_ENV: process.env.NODE_ENV,
            })
          } catch (err) {
            serveFailure('error', res, 'renderOnServer render funcion failed', err)
          }
        }

        IsomorphicRouter.prepareData(renderProps, networkLayer).then(render, next)
      } catch (err) {
        serveFailure('error', res, 'renderOnServer failed', err)
      }
    })
    .catch(error => serveAuthenticationFailed(req, res, error, false))
}
