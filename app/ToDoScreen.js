'use strict';

import TodoApp from '../units/starter-kit-example-todo/app/components/ToDoApp';
import TodoAppRoute from './TodoAppRoute';
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RootContainer } from 'react-relay';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        marginTop: 44,
    },
} )



export default class UniversalRelayBoilerplate extends React.Component
{
  render( ) : void
  {
    return(
      <View style={[styles.container, this.props.style]}>
        <RootContainer
          Component={TodoApp}
          route={new TodoAppRoute({status: 'any'})}
        />
      </View>
    )
  }
}
