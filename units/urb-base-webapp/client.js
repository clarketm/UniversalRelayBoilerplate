// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import BrowserProtocol from 'farce/lib/BrowserProtocol'
import createInitialFarceRouter from 'found/lib/createInitialFarceRouter'
import createRender from 'found/lib/createRender'
import React from 'react'
import ReactDOM from 'react-dom'

import FetcherClient from './fetcherClient'
import { createResolver, historyMiddlewares, routeConfig } from './router'
import Wrapper from './components/Wrapper'

// Include global CSS used in all units. Will not be chunked
import '../_configuration/urb-base-webapp/global.css'

const render = createRender({})

//
;( async() => {
  // eslint-disable-next-line no-underscore-dangle
  const fetcher = new FetcherClient(
    '/graphql',
    window.__RELAY_PAYLOADS__,
    window.__RELAY_PAYLOADS__[0].data.Viewer.UserToken2 // It is critical that the app frame has UserToken2 retrieved
  )
  const resolver = createResolver( fetcher )

  const Router = await createInitialFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares,
    routeConfig,
    resolver,
    render,
  })

  ReactDOM.render(
    <Wrapper appData={window.appData}>
      <Router resolver={resolver} />
    </Wrapper>,
    document.getElementById( 'root' ),
    () => {
      // We don't need the static css any more once we have launched our application.
      const ssStyles = document.getElementById( 'server-side-styles' )
      // $FlowIssue it is guaranteed to be there
      ssStyles.parentNode.removeChild( ssStyles )
    }
  )
})()
