// @flow

import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

import ToDoScreen from './components/ToDoScreen'
import ToDoList from './components/ToDoList'

const ToDoListQuery = graphql`
  query routeAppFrameTodo_ToDoList_Query($status: String!) {
    Viewer {
      ...ToDoList_Viewer
    }
  }
`

export default (
  <Route
    key="todo"
    path="todo"
    Component={ToDoScreen}
    query={graphql`
      query routeAppFrameTodo_ToDoScreen_Query {
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
)
