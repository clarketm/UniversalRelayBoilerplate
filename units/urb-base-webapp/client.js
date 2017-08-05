// @flow

// In order to use ES7 async/await
import 'babel-polyfill'

import BrowserProtocol from 'farce/lib/BrowserProtocol'
import createInitialFarceRouter from 'found/lib/createInitialFarceRouter'
import React from 'react'
import ReactDOM from 'react-dom'

import { ClientFetcher } from '../urb-base-universal/fetcher'
import { createResolver, historyMiddlewares, render, routeConfig } from './router'
import Wrapper from './components/Wrapper'

//
;(async () => {
  // eslint-disable-next-line no-underscore-dangle
  const fetcher = new ClientFetcher('/graphql', window.__RELAY_PAYLOADS__)
  const resolver = createResolver(fetcher)

  const Router = await createInitialFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares,
    routeConfig,
    resolver,
    render,
  })

  ReactDOM.render(
    <Wrapper>
      <Router resolver={resolver} />
    </Wrapper>,
    document.getElementById('root'),
    () => {
      // We don't need the static css any more once we have launched our application.
      const ssStyles = document.getElementById('server-side-styles')
      // $FlowIssue it is guaranteed to be there
      ssStyles.parentNode.removeChild(ssStyles)
    },
  )
})()
