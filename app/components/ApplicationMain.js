/* @flow weak */

import React from 'react'
import Relay from 'react-relay';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Reducer, Router, Scene } from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import NetworkLayer from '../NetworkLayer'
import RelayRenderer from './RelayComponentRenderer'
import UrlRouter from '../UrlRouter'

import uiTheme from '../../configuration/app/components/uiTheme.js'
import { componentDidMountAdditionalInitialization } from '../../configuration/app/components/ApplicationMainSettings'
import routes from '../../configuration/app/routes'


const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} )

const reducerCreate = params=>
{
  const defaultReducer = Reducer( params )
  return ( state, action ) => defaultReducer( state, action )
}

function getSceneStyle ( )
{
  return {
    flex: 1,
    marginTop: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  }
}

class MenuButton extends React.Component
{
  static contextTypes =
  {
    drawer: React.PropTypes.object,
  }

  render = () => {
    const drawer = this.context.drawer
		return (
			<TouchableOpacity
				onPress={() => drawer.open()}
			>
				<Image
					source={require('../../configuration/app/images/drawer_open.png')}
					style={ { marginTop:20, height: 44, width: 44 } }
				/>
			</TouchableOpacity>
		)
	}
}

class ApplicationMain extends React.Component
{
  static childContextTypes =
  {
    relay: Relay.PropTypes.Environment,
    uiTheme: React.PropTypes.object,
  }

  constructor( props )
  {
    super( props )
    this.state = {
      isAnonymous: 1
    }
    NetworkLayer.RegisterListeningComponent( this )
  }

  updateEnvironment( isAnonymous )
  {
    this.setState( {
      //user: this.state.user + 1,
      isAnonymous
    } )

    //this.forceUpdate()
  }

  getChildContext()
  {
    return {
      relay: NetworkLayer.getCurrentEnvironment(),
      uiTheme: uiTheme
    }
  }

  componentDidMount( )
  {
    // Will start the process of loading credentials. Notice that the function returns before the loading is complete
    NetworkLayer.loadPersistedCredentials( ( ) => {

      // Configurable hook so that additional actions can be performed when the application has been loaded
      componentDidMountAdditionalInitialization( )
    } )
  }

  render()
  {
    // Every time create a new viewer query. This way, when the relay environment changes and this method is called, the components
    // dependent on the viewer query will be re-rendered
    const viewerQuery = { Viewer: ( ) => Relay.QL`query { Viewer }` }

    // Routes are defined in the configuration folder
    const configuredRoutes = routes( MenuButton, viewerQuery, this.state.isAnonymous )

    // Traverse the defined routes to enable URL-based navigation
    // TODO: x5000 consider memoizing the results so that URL map does not have to be re-done.
    // That said, maybe it is worth doing it every time in case logged in user has a different
    // URL schema somehow. Sounds like an anti pattern.
    UrlRouter.traverseRoute( configuredRoutes )

    // If the persisted credentials have not been loaded yet
    if( ! NetworkLayer.getCurrentEnvironmentInitialized( ) )
      // Return an empty view. Once the credentials are loaded, updateEnvironment will be called and it will cause re-render
      return <View />
    else
      // Credentials are available, proceed to render UI
      return <View style={styles.container}>
        <Router createReducer={ reducerCreate } getSceneStyle={ getSceneStyle } wrapBy={ RelayRenderer( ) }>
          <Scene key="tabbar" component={ NavigationDrawer } queries={ viewerQuery } initial={ true }>
            { configuredRoutes }
          </Scene>
        </Router>
      </View>
  }
}


export default ApplicationMain
