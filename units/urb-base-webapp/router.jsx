// @flow weak

import queryMiddleware from 'farce/lib/queryMiddleware'
import createRender from 'found/lib/createRender'
import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'
import { Resolver } from 'found-relay'
import React from 'react'
import { graphql } from 'react-relay'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import AppFrame from './components/AppFrame'
import EnsayoList from '../urb-example-ensayo-webapp/components/EnsayoList'
import EnsayoScreen from '../urb-example-ensayo-webapp/components/EnsayoScreen'
import NewUserScreen from './components/NewUserScreen'
import ToDoScreen from '../urb-example-todo-webapp/components/ToDoScreen'
import ToDoList from '../urb-example-todo-webapp/components/ToDoList'

export const historyMiddlewares = [queryMiddleware]

export function createResolver(fetcher) {
  const environment = new Environment({
    network: Network.create((...args) => fetcher.fetch(...args)),
    store: new Store(new RecordSource()),
  })

  return new Resolver(environment)
}

const ToDoListQuery = graphql`
  query router_ToDoList_Query($status: String!) {
    Viewer {
      ...ToDoList_Viewer
    }
  }
`

export const routeConfig = makeRouteConfig(
  <Route
    path="/"
    Component={AppFrame}
    query={graphql`
      query router_AppFrame_Query {
        Viewer {
          ...AppFrame_Viewer
        }
      }
    `}
  >
    <Route
      path="todo"
      Component={ToDoScreen}
      query={graphql`
        query router_ToDoScreen_Query {
          Viewer {
            ...ToDoScreen_Viewer
          }
        }
      `}
    >
      <Route
        Component={ToDoList}
        query={ToDoListQuery}
        prepareVariables={params => ({ ...params, status: 'any' })}
      />
      <Route path=":status" Component={ToDoList} query={ToDoListQuery} />
    </Route>
    <Route path="ensayo">
      <Route
        path="edit"
        Component={EnsayoScreen}
        query={graphql`
          query router_EnsayoScreen_Query {
            Viewer {
              ...EnsayoScreen_Viewer
            }
          }
        `}
      >
        <Route
          Component={EnsayoList}
          query={graphql`
            query router_EnsayoList_Query {
              Viewer {
                ...EnsayoList_Viewer
              }
            }
          `}
        />
      </Route>
    </Route>
    <Route path="user">
      <Route path="new" Component={NewUserScreen} />
    </Route>
  </Route>,
)

export const render = createRender({})
