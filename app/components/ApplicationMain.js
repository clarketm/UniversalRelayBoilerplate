/* @flow weak */

import React from 'react'
import Relay from 'react-relay';
import
{
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View
}
from 'react-native'
import
{
  Reducer,
  Router,
  Scene
}
from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import NetworkLayer from '../NetworkLayer'
import RelayRenderer from './RelayComponentRenderer'
import UrlRouter from '../UrlRouter'

import uiTheme from '../../configuration/app/components/uiTheme'
import
{
  componentDidMountAdditionalInitialization
}
from '../../configuration/app/components/ApplicationMainSettings'
import routes from '../../configuration/app/routes'


const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} )

const reducerCreate = ( params ) =>
{
  const defaultReducer = Reducer( params )
  return( state, action ) => defaultReducer( state, action )
}

function getSceneStyle()
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
    layout: React.PropTypes.object,
  }

  render()
  {
    const drawer = this.context.drawer
		return (
			<TouchableOpacity
				onPress={() => drawer.open()}
			>
				<Image
					source={ require( '../../configuration/app/images/DrawerOpenIcon.png' ) }
					style={ { top: this.context.layout.contentTopMargin - 44, height: 44, width: 44 } } // TODO: x1000 Set platform dependent size
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
    layout: React.PropTypes.object,
  }

  constructor( props, context )
  {
    super( props, context )

    this.state = {
      isAnonymous: 1
    }
    NetworkLayer.RegisterListeningComponent( this )
  }

  componentWillMount()
  {
    this.setLayotInformationInState( Dimensions.get( 'window' ) )
  }

  getChildContext()
  {
    return {
      relay: NetworkLayer.getCurrentEnvironment(),
      uiTheme: uiTheme,
      layout: this.state.layout
    }
  }

  handle_onLayout = ( _event ) =>
  {
    this.setLayotInformationInState( _event.nativeEvent.layout )
  }

  setLayotInformationInState( layoutInfo )
  {
    const
    {
      width,
      height
    } = layoutInfo

    // Optimization - if width or height have not changed, exit
    if( this.state.layout && width == this.state.layout.width && height == this.state.layout.height )
      return

    // Calculate the layout
    const contentTopMargin = Platform.OS === 'ios' ?
      ( height > width ? 64 : 44 )
      :
      ( height > width ? 48 : 40 )

    const layout = {
      width,
      height,
      contentTopMargin
    }

    // Calculate styles for navigation bar
    const navigationBarStyle = Object.assign(
    {
      paddingTop: 0,
      height: contentTopMargin,
    }, uiTheme.havigationBarStyle )

    // And the title of the navigation bar
    const navigationBarTitleStyle = Object.assign(
    {
      top: height > width ? 0 : -20,
    }, uiTheme.navigationBarTitleStyle )

    console.log( 'XXX layout=' + JSON.stringify( layout ) )
    console.log( 'XXX navigationBarStyle=' + JSON.stringify( navigationBarStyle ) )
    console.log( 'XXX navigationBarTitleStyle=' + JSON.stringify( navigationBarTitleStyle ) )

    this.setState(
    {
      layout,
      navigationBarStyle,
      navigationBarTitleStyle
    } )
  }

  updateEnvironment( isAnonymous )
  {
    this.setState(
    {
      isAnonymous
    } )
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

    // XXX Considerations for Android size: https://github.com/aksonov/react-native-router-flux/issues/586

    // If the persisted credentials have not been loaded yet
    if( ! NetworkLayer.getCurrentEnvironmentInitialized( ) || this.state.layout == null || this.state.layout.height == 0 )
      // Return an empty view. Once the credentials are loaded, updateEnvironment will be called and it will cause re-render
      return <View style={ styles.container } onLayout={ this.handle_onLayout } />
    else
      // Credentials are available, proceed to render UI
      return <View style={ styles.container }  onLayout={ this.handle_onLayout }>
        <Router
          createReducer={ reducerCreate }
          getSceneStyle={ getSceneStyle }
          wrapBy={ RelayRenderer( ) }
          navigationBarStyle={ this.state.navigationBarStyle }
          titleStyle={ this.state.navigationBarTitleStyle }
        >
          <Scene key="tabbar" component={ NavigationDrawer } queries={ viewerQuery } initial={ true }>
            { configuredRoutes }
          </Scene>
        </Router>
      </View>
  }
}


export default ApplicationMain
