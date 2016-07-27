import React from 'react'
import Relay from 'react-relay';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Reducer, Router } from 'react-native-router-flux'

import NetworkLayer from '../NetworkLayer'
import RelayRenderer from './RelayComponentRenderer'

import routes from '../../configuration/app/routes'


const styles = StyleSheet.create( {
  container: {
    flex:1,
    backgroundColor:"red",
  },
} )

const reducerCreate = params=>
{
  const defaultReducer = Reducer(params)
  return ( state, action ) => defaultReducer( state, action )
}

function getSceneStyle ( )
{
  return {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#0000ff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  }
}

class MenuButton extends React.Component {
  render = ( ) => {
    const drawer = this.context.drawer
		return (
			<TouchableOpacity
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


class ApplicationMain extends React.Component
{
  constructor(props)
  {
    super( props )
    this.state = {
      environment: NetworkLayer.getCurrentEnvironment( )
    }
    NetworkLayer.RegisterListeningComponent( this )
  }

  updateEnvironment( )
  {
    this.setState( {
      environment: NetworkLayer.getCurrentEnvironment( )
    } )
  }

  getChildContext ()
  {
    return {
      environment: this.state.environment
    }
  }

  render( )
  {
    return <View style={styles.container}>
      <Router createReducer={ reducerCreate } getSceneStyle={ getSceneStyle } wrapBy={ RelayRenderer( ) }>
        { routes( MenuButton ) }
      </Router>
    </View>
  }
}

ApplicationMain.childContextTypes = {
  environment: Relay.PropTypes.Environment
}

export default ApplicationMain
