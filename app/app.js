import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

import Login from './Login'
import NavigationDrawer from './NavigationDrawer'
import ToDoScreen from './ToDoScreen'

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
        alignItems: "center",}

});

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (props) {
  return {
    flex: 1,
    marginTop: props.hideNavBar ? 0 : 64,
    marginBottom: props.hideTabBar ? 0 : 49.5,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
}

class MenuButton extends React.Component {
  render = ( props ) => {
    const drawer = this.context.drawer;
		return (
			<TouchableOpacity
				style={styles.leftButtonContainer}
				onPress={() => drawer.open()}
			>
				<Image
					source={require('./ic_menu_white_24dp.png')}
					style={{marginTop:20, height: 44, width: 44}}
				/>
			</TouchableOpacity>
		)
	};
}

MenuButton.contextTypes = {
  drawer: React.PropTypes.object,
};


export default class Example extends React.Component {

    render() {
        return <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={true} hideTabBar={true}>
                    <Scene key="tabbar" component={NavigationDrawer} initial={true}>
                        <Scene key="main" tabs={true}>
                            <Scene key="home_login" component={Login} title="Login" hideTabBar={true} icon={TabIcon} leftButton={MenuButton} initial={true}/>
                            <Scene key="home_ToDo" component={ToDoScreen} title="To Do" hideTabBar={true} icon={TabIcon} leftButton={MenuButton}/>
                        </Scene>
                    </Scene>
                </Scene>
            </Scene>
        </Router>;
    }
}
