import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Login extends React.Component
{
  constructor( props )
  {
    super( props )

    this.state = {
      User_AccountName: "",
      User_AccountPassword: "",
    }
  }

  handle_onPress_Login = ( ) =>
  {
    console.log( "Login was pressed" )
    // try {
    //   let response = await fetch('https://mywebsite.com/endpoint/');
    //   let responseJson = await response.json();
    //   console.log( responseJson )
    // } catch(error) {
    //   // Handle error
    //   console.error(error);
    // }

    let authCookie;

    fetch("http://localhost:4444/auth/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'Host': 'localhost'
      },
      body: JSON.stringify( {
        User_AccountName: this.state.User_AccountName,
        User_AccountPassword: this.state.User_AccountPassword,
      } )
    } )
    .then( ( response ) => {
      // if( response.headers )
      // if( response.headers.map )
      if( 'set-cookie' in response.headers.map )
        for( let cookie of response.headers.map[ 'set-cookie' ] )
          if( cookie.startsWith( 'auth_token=' ) )
          {
            console.log( 'cookie=' + cookie )
            authCookie = cookie.substring( 11, cookie.indexOf( ';' ) )
            console.log( 'authCookie=' + authCookie )
          }
      return response.json( )
    } )
    .then( (responseData) => {
      console.log( authCookie )
      console.log( responseData )
    } )
    // TODO: Error handling here
    .done()
  }

  render( )
  {
    return (
      <View style={styles.container}>
        <Text>Account name:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({User_AccountName: text})}
          value={this.state.User_AccountName}
        />
        <Text>Account secret:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({User_AccountPassword: text})}
          value={this.state.User_AccountPassword}
        />
        <Button onPress={ this.handle_onPress_Login }>Login</Button>
      </View>
    )
  }
};
