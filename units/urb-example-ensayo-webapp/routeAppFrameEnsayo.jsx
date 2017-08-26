// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

import EnsayoPublicList from './components/EnsayoPublicList'
import EnsayoPublicItem from './components/EnsayoPublicItem'

const EnsayoInPaceEditList = props =>
  <Async
    load={import( './components/EnsayoInPaceEditList' )}
    componentProps={props}
  />
const EnsayoInPaceEditScreen = props =>
  <Async
    load={import( './components/EnsayoInPaceEditScreen' )}
    componentProps={props}
  />

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
      path="in-place-edit"
      Component={EnsayoInPaceEditScreen}
      query={graphql`
        query routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query {
          Viewer {
            ...EnsayoInPaceEditScreen_Viewer
          }
        }
      `}
    >
      <Route
        Component={EnsayoInPaceEditList}
        query={graphql`
          query routeAppFrameEnsayo_EnsayoInPaceEditList_Query {
            Viewer {
              ...EnsayoInPaceEditList_Viewer
            }
          }
        `}
      />
    </Route>
  </Route>
)
