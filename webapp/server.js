// @flow

import express from 'express'
import React from 'react'
import path from 'path'
import { getFarceResult } from 'found/lib/server'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript'

import { ServerFetcher } from '../scripts/fetcher'
import { createResolver, historyMiddlewares, render, routeConfig } from './router'
import Wrapper from './components/Wrapper'

// Read environment
require('dotenv').load()

const port = process.env.PORT
const port_webpack = process.env.PORT_WEBPACK

// Create express router
const router = express()

router.use(async (req, res) => {
  const fetcher = new ServerFetcher(`http://localhost:${port}/graphql`)

  const { redirect, status, element } = await getFarceResult({
    url: req.url,
    historyMiddlewares,
    routeConfig,
    resolver: createResolver(fetcher),
    render,
  })

  if (redirect) {
    res.redirect(302, redirect.url)
    return
  }

  const userAgent = req.headers['user-agent']

  res.render(path.resolve(__dirname, 'html.ejs'), {
    port_webpack,
    root_html: ReactDOMServer.renderToString(
      <Wrapper userAgent={userAgent}>
        {element}
      </Wrapper>,
    ),
    relay_payload: serialize(fetcher, { isJSON: true }),
  })
})

export default router
