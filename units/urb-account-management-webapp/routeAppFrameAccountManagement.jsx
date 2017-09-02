// @flow

import Async from 'react-code-splitting'
import React from 'react'
import Route from 'found/lib/Route'

const LogoutScreen = props => (
  <Async load={import( './components/LogoutScreen' )} componentProps={props} />
)
const NewUserScreen = props => (
  <Async load={import( './components/NewUserScreen' )} componentProps={props} />
)

export default (
  <Route key="user" path="user">
    <Route path="new" Component={NewUserScreen} />
    <Route path="logout" Component={LogoutScreen} />
  </Route>
)
