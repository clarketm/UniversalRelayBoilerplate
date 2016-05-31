/* @flow weak */
'use strict';

import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Relay from 'react-relay';
import StatusButton from './StatusButton';
import TodoList from './ToDoList';
import TodoListFooter from './ToDoListFooter';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';




class ToDoScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._handleStatusChange = this._handleStatusChange.bind(this);
  }
  _handleStatusChange(status) {
    this.props.relay.setVariables({status});
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.actionList}>
          <StatusButton
            active={this.props.relay.variables.status === 'any'}
            onPress={this._handleStatusChange.bind(null, 'any')}>
            All
          </StatusButton>
          <StatusButton
            active={this.props.relay.variables.status === 'active'}
            onPress={this._handleStatusChange.bind(null, 'active')}>
            Active
          </StatusButton>
          <StatusButton
            active={this.props.relay.variables.status === 'completed'}
            onPress={this._handleStatusChange.bind(null, 'completed')}>
            Completed
          </StatusButton>
        </View>
        <TodoList
          status={this.props.relay.variables.status}
          style={styles.list}
          Viewer={this.props.Viewer}
        />
        <TodoListFooter
          status={this.props.relay.variables.status}
          style={styles.footer}
          Viewer={this.props.Viewer}
        />
      </View>
    );
  }
}

export default Relay.createContainer(ToDoScreen, {
  initialVariables: {
    status: 'any',
  },
  fragments: {
    Viewer: variables => Relay.QL`
      fragment on Viewer {
        ToDo_TotalCount
        ${TodoList.getFragment('Viewer', {status: variables.status})}
        ${TodoListFooter.getFragment('Viewer', {status: variables.status})}
      }
    `,
  },
});

const styles = StyleSheet.create({
  actionList: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? undefined : 20,
  },
  footer: {
    height: 10,
    paddingHorizontal: 15,
  },
  list: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {
      height: -2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 1,
  },
});
