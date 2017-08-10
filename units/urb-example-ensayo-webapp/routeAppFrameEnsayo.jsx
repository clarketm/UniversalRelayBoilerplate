// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

import EnsayoPublicList from './components/EnsayoPublicList'
import EnsayoPublicItem from './components/EnsayoPublicItem'

const EnsayoList = props =>
  <Async load={import('./components/EnsayoList')} componentProps={props} />
const EnsayoScreen = props =>
  <Async load={import('./components/EnsayoScreen')} componentProps={props} />

export default (
  <Route key="ensayo" path="ensayo">
    <Route
      path="/"
      Component={EnsayoPublicList}
      query={graphql`
        query routeAppFrameEnsayo_EnsayoPublicList_Query {
          Viewer {
            ...EnsayoPublicList_Viewer
          }
        }
      `}
    />
    <Route path="item">
      <Route
        path=":id"
        Component={EnsayoPublicItem}
        query={graphql`
          query routeAppFrameEnsayo_EnsayoPublicItem_Query($id: ID!) {
            Viewer {
              ...EnsayoPublicItem_Viewer
            }
          }
        `}
      />
    </Route>
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
