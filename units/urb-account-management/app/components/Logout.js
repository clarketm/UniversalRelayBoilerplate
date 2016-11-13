/* @flow weak */

import Relay from 'react-relay'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FormLabel } from 'react-native-elements'

import Button from '../../../../app/components/Button'
import NetworkLayer from '../../../../app/NetworkLayer'
import UrlRouter from '../../../../app/UrlRouter'


class Logout extends React.Component {
  constructor( props, context ) {
    super( props, context )
  }

  handle_onPress_Logout = () => {
    // TODO x0100 Here the server should be properly called
    NetworkLayer.logout( () => UrlRouter.goToRouteByNameAndParams( '/user/login', {} ) )
  }

  render()
  {
    let userName = this.props.Viewer.User_DisplayName
    if( ! userName )
      userName = ""
    return (
      <View style={styles.container}>
        <FormLabel>Logged in as</FormLabel>
        <FormLabel>{ userName }</FormLabel>
        <Button kind='action' title="Log Out" onPress={ this.handle_onPress_Logout } />
      </View>
    )
  }
}

export default Relay.createContainer( Logout, {
  fragments: {
    Viewer: variables => Relay.QL `
      fragment on Viewer {
        User_DisplayName
      }
    `,
  },
} )

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f0f0f0',
  },
} )
