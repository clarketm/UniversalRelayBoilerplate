import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    }
});

class Home extends React.Component {
    render(){
        return (
            <View {...this.props}  style={styles.container}>
                <Text>Home page</Text>
                <Button onPress={Actions.home_login}>Login</Button>
                <Button onPress={Actions.home_ToDo}>To Do</Button>
            </View>
        );
    }
}

module.exports = Home;
