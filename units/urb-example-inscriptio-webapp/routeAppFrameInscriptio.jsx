// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const InscriptioScreen = props =>
  <Async
    load={import( './components/InscriptioScreen' )}
    componentProps={props}
  />

export default (
  <Route key="inscriptio" path="inscriptio">
    <Route
      path="/"
      Component={InscriptioScreen}
      query={graphql`
        query routeAppFrameInscriptio_InscriptioScreen_Query {
          Viewer {
            ...InscriptioScreen_Viewer
          }
        }
      `}
    />
  </Route>
)
