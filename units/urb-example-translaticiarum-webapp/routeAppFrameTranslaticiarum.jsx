// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const TranslaticiarumScreen = props =>
  <Async
    load={import( './components/TranslaticiarumScreen' )}
    componentProps={props}
  />

export default (
  <Route key="translaticiarum" path="translaticiarum">
    <Route
      path="/"
      Component={TranslaticiarumScreen}
      query={graphql`
        query routeAppFrameTranslaticiarum_TranslaticiarumScreen_Query {
          Viewer {
            ...TranslaticiarumScreen_Viewer
          }
        }
      `}
    />
  </Route>
)
