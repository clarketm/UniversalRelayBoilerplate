/* @flow weak */

import React from 'react'
import { Scene } from 'react-native-router-flux'

import Login from '../../units/urb-account-management/app/components/Login'
import Logout from '../../units/urb-account-management/app/components/Logout'
import ToDoScreen from '../../units/urb-example-todo/app/components/ToDoScreen'


export default function routes( MenuButton, viewerQuery, isAnonymous )
{
  return(
    <Scene key='main-nourl' tabs hideTabBar>
      <Scene key='/user/login' title="Login" component={ Login } leftButton={ MenuButton } initial={ isAnonymous } />
      <Scene key='/todo' leftButton={ MenuButton } initial={ ( ! isAnonymous ) }>
        <Scene key='/todo-default-nourl' title="To Do" component={ ToDoScreen } queries={ viewerQuery } />
      </Scene>
      <Scene key='/user/logout' title="Logout" component={ Logout } queries={ viewerQuery } leftButton={ MenuButton } />
    </Scene>
  )
}
