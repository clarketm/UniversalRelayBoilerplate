// @flow

import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

import EnsayoList from './components/EnsayoList'
import EnsayoScreen from './components/EnsayoScreen'

export default (
  <Route path="ensayo">
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
