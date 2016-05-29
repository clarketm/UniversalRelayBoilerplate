import React from 'react';
import {Scene, Reducer, Router, Modal} from 'react-native-router-flux'

import Home from './Home'
import Login from './Login'
import ToDoScreen from './ToDoScreen'

import NetworkLayer from './NetworkLayer'

const reducerCreate = params =>
{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

NetworkLayer.injectNetworkLayer( )

export default class Example extends React.Component
{
  render( )
  {
    return(
      <Router createReducer={ reducerCreate }>
        <Scene key="modal" component={ Modal }>
          <Scene key="root">
            <Scene key="home" component={ Home } title="Home" initial={ true } />
            <Scene key="home_login" component={ Login } title="Login" />
            <Scene key="home_ToDo" component={ ToDoScreen } title="To Do" />
          </Scene>
        </Scene>
      </Router>
    )
  }
}
