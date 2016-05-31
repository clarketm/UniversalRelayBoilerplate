import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Scene, Reducer, Router, Modal } from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import routes from '../../configuration/app/routes'

const styles = StyleSheet.create( {
  container: {
    flex:1,
    backgroundColor:"transparent",
    justifyContent: "center",
    alignItems: "center",
  },
} )

const reducerCreate = params=>
{
  const defaultReducer = Reducer(params)
  return ( state, action ) => defaultReducer( state, action )
}

function getSceneStyle ( props )
{
  return {
    flex: 1,
    marginTop: props.hideNavBar ? 0 : 64,
    marginBottom: props.hideTabBar ? 0 : 49.5,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  }
}

class MenuButton extends React.Component {
  render = ( props ) => {
    const drawer = this.context.drawer
		return (
			<TouchableOpacity
				style={styles.leftButtonContainer}
				onPress={() => drawer.open()}
			>
				<Image
					source={require('../../configuration/app/images/drawer_open.png')}
					style={{marginTop:20, height: 44, width: 44}}
				/>
			</TouchableOpacity>
		)
	}
}

MenuButton.contextTypes = {
  drawer: React.PropTypes.object,
}


export default class ApplicationMain extends React.Component
{
  render( )
  {
    return <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
      <Scene key="modal" component={Modal} >
        <Scene key="root" hideNavBar={true} hideTabBar={true}>
          <Scene key="tabbar" component={NavigationDrawer} initial={true}>
            { routes( MenuButton ) }
          </Scene>
        </Scene>
      </Scene>
    </Router>
  }
}
