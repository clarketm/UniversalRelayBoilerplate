/* @flow weak */

import React from 'react'
import Relay from 'react-relay'
import { StyleSheet, View, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'

import UrlRouter from '../../../app/UrlRouter'

const styles = StyleSheet.create( {
  container:
  {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  greetingEnvelope:
  {
    height: 64,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText:
  {
    fontSize: 20,
    color: '#000000',
  },
  list:
  {
    flex: 1,
  }
} )

class DrawerView extends React.Component
{
  static contextTypes =
  {
    drawer: React.PropTypes.object,
  }

  static propTypes =
  {
    name: React.PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: React.PropTypes.string,
  }

  openRoute = ( routeName, options ) =>
  {
    this.context.drawer.close( )

    // TODO: Just for testing use go to URL with parsing in order to test
    // TODO x1000 change it to pass params for speed
    //UrlRouter.goToRouteByNameAndParams( routeName, options )
    UrlRouter.goToRouteByURL( routeName )
  }

  render( )
  {
    const isAnonymous = this.props.Viewer.User_IsAnonymous
    return (
      <View style={ [ styles.container, this.props.sceneStyle ] }>
        <View style={ [ styles.greetingEnvelope ] }>
          <Text style={ styles.greetingText }>
            Hello { ' ' + ( isAnonymous ? 'Stranger' : this.props.Viewer.User_DisplayName ) }
          </Text>
        </View>
        <List containerStyle={ styles.list }>
          { isAnonymous && <ListItem onPress={ () => this.openRoute( '/user/login' ) } title="Login" hideChevron={ true } /> }
          <ListItem onPress={ () => this.openRoute( '/todo' ) } title="To Do" hideChevron={ true } />
          <ListItem onPress={ () => this.openRoute( '/villa/search' ) } title="Map" hideChevron={ true } />
          { ( !isAnonymous ) && <ListItem onPress={ () => this.openRoute( '/paymentmethod' ) } title="Payment Methods" hideChevron={ true } /> }
          { ( !isAnonymous ) && <ListItem onPress={ () => this.openRoute( '/user/location' ) } title="Set Location" hideChevron={ true } /> }
          { ( !isAnonymous ) && <ListItem onPress={ () => this.openRoute( '/user/profile' ) } title="Profile" hideChevron={ true } /> }
          { ( !isAnonymous ) && <ListItem onPress={ () => this.openRoute( '/user/messages/thread/55' ) } title="Test Thread" hideChevron={ true } /> }
          { ( !isAnonymous ) && <ListItem onPress={ () => this.openRoute( '/user/logout' ) } title="Log Out" hideChevron={ true } /> }
        </List>
      </View>
    )
  }
}

export default Relay.createContainer( DrawerView, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
        User_DisplayName
      }
    `
  }
} )
