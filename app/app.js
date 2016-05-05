'use strict';

import TodoApp from '../units/starter-kit-example-todo/app/components/ToDoApp';
import TodoAppRoute from './TodoAppRoute';
import React from 'react'
import { View } from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';

let graphQLServerURL = "http://localhost:4444/graphql";

// Uncomment for connection to server in the cloud. Smarter way to do this will be needed.
// graphQLServerURL = 'http://isomorphic-material-relay.herokuapp.com/graphql';
Relay.injectNetworkLayer( new DefaultNetworkLayer(
  graphQLServerURL,
  {
    headers: {
      user_auth_token: 'Hello. My name is React Native and I want access to your wonderful GraphQL server. kthx.',
    },
  }
) );

export default class UniversalRelayBoilerplate extends React.Component {
  render(): void {
    return (
      <RootContainer
        Component={TodoApp}
        route={new TodoAppRoute({status: 'any'})}
      />
    );
  }
}
