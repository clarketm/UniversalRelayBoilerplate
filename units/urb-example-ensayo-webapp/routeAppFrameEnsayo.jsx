// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const EnsayoList = props =>
  <Async load={import('./components/EnsayoList')} componentProps={props} />
const EnsayoScreen = props =>
  <Async load={import('./components/EnsayoScreen')} componentProps={props} />

export default (
  <Route key="ensayo" path="ensayo">
    <Route
      path="edit"
      Component={EnsayoScreen}
      query={graphql`
        query routeAppFrameEnsayo_EnsayoScreen_Query {
          Viewer {
            ...EnsayoScreen_Viewer
          }
        }
      `}
    >
      <Route
        Component={EnsayoList}
        query={graphql`
          query routeAppFrameEnsayo_EnsayoList_Query {
            Viewer {
              ...EnsayoList_Viewer
            }
          }
        `}
      />
    </Route>
  </Route>
)
