import React from 'react'
import Relay from 'react-relay'
import { Scene } from 'react-native-router-flux'


import NavigationDrawer from '../../app/components/NavigationDrawer'

import Login from '../../units/urb-account-management/app/components/Login'
import ToDoScreen from '../../units/urb-example-todo/app/components/ToDoScreen'

const ViewerQuery = { Viewer: ( ) => Relay.QL`query { Viewer }` }

export default function routes ( MenuButton )
{
  return(
    <Scene key="tabbar" component={ NavigationDrawer } initial={ true }>
      <Scene key="main" tabs hideTabBar>
        <Scene key="home_login" component={ Login } title="Login" leftButton={ MenuButton } />
        <Scene key="home_ToDo" component={ ToDoScreen } title="To Do" leftButton={ MenuButton } queries={ ViewerQuery } />
      </Scene>
    </Scene>
  )
}
