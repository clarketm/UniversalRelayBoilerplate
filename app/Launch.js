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

class Launch extends React.Component {
    render(){
        return (
            <View {...this.props}  style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={Actions.register}>Go to Register page</Button>
                <Button onPress={Actions.ToDo}>Go to To Do screen</Button>
            </View>
        );
    }
}

module.exports = Launch;
