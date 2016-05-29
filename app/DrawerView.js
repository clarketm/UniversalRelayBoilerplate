import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
});

const DrawerView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      <Button onPress={() => { drawer.close(); Actions.home_login(); }}>Login</Button>
      <Button onPress={() => { drawer.close(); Actions.home_ToDo(); }}>To Do</Button>
    </View>
  );
};

DrawerView.contextTypes = contextTypes;
DrawerView.propTypes = propTypes;

export default DrawerView;
