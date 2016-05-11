'use strict';

import Relay from 'react-relay';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class TodoApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{ this.props.Viewer.ToDo_TotalCount }</Text>
      </View>
    );
  }
}

export default Relay.createContainer(TodoApp, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ToDo_TotalCount
      }
    `,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? undefined : 20,
  },
  header: {
    alignSelf: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 100,
    fontWeight: '100',
  },
});
