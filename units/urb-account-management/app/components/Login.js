/* @flow weak */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

import Button from '../../../../app/components/Button'
import LoginExtensions from '../../../../configuration/units/urb-account-management/app/components/LoginExtensions'
import NetworkLayer from '../../../../app/NetworkLayer'
import publicURL from '../../../../configuration/app/publicURL'
import { SuccessfulLoginRouteName, SuccessfulLoginRouteOptions } from '../../../../configuration/units/urb-account-management/app/SuccessfulLoginRoute'
import UrlRouter from '../../../../app/UrlRouter'


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f0f0f0',
  },
} )

const mode_challenge = 1
const mode_login_in_progress = 2
const mode_login_failed = 3


export default class Login extends React.Component
{
  constructor( props, context ) {
    super( props, context )

    this.loginAttempt = 0

    this.state = {
      mode: mode_challenge,
      User_AccountName: "",
      User_AccountPassword: "",
      ErrorMessage: "",
    }
  }

  handle_onPress_Login = () => {
    this.setState( {
      mode: mode_login_in_progress,
    } )

    const currentLoginAttempt = ++( this.loginAttempt )

    let UserToken1

    fetch( publicURL + '/auth/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '',
        },
        body: JSON.stringify( {
          User_AccountName: this.state.User_AccountName,
          User_AccountPassword: this.state.User_AccountPassword,
        } )
      } )
      .then( ( response ) => {
        if( 'set-cookie' in response.headers.map )
          for( let cookie of response.headers.map[ 'set-cookie' ] )
            if( cookie.startsWith( 'UserToken1=' ) ) {
              console.log( 'cookie=' + cookie )
              UserToken1 = cookie.substring( 11, cookie.indexOf( ';' ) )
              console.log( 'UserToken1=' + UserToken1 )
            }
        return response.json()
      } )
      .then( ( responseData ) => {
        if( currentLoginAttempt == this.loginAttempt ) {
          if( responseData.success ) {
            NetworkLayer.setUserTokens(
              UserToken1,
              responseData.UserToken2,
              true,
              () => UrlRouter.goToRouteByNameAndParams( SuccessfulLoginRouteName, SuccessfulLoginRouteOptions )
            )
          } else {
            let errorMessage
            if( responseData.error )
              errorMessage = responseData.error
            else
              errorMessage = "Login failed"

            this.setState( {
              mode: mode_login_failed,
              ErrorMessage: errorMessage,
            } )
          }
        } else
          console.log( "XXX Expired login event" )
      } )
      // TODO x5000 Error handling for failed login
      .done()
  }

  handle_onPress_Cancel = () => {
    this.loginAttempt++ // So that when the call back comes it is rejected

    this.setState( {
      mode: mode_challenge,
      User_AccountPassword: "",
    } )
  }

  handle_onPress_Retry = () => {
    this.setState( {
      mode: mode_challenge,
      User_AccountPassword: "",
    } )
  }

  render( )
  {
    if( this.state.mode == mode_challenge )
      return (
        <View style={styles.container}>
          <FormLabel>Account Name</FormLabel>
          <FormInput
            value={this.state.User_AccountName}
            onChangeText={(text) => this.setState({User_AccountName: text})}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            value={this.state.User_AccountPassword}
            onChangeText={(text) => this.setState({User_AccountPassword: text})}
          />
          <FormLabel> </FormLabel>

          <Button kind='action' onPress={ this.handle_onPress_Login } title="Login" />
          <FormLabel> </FormLabel>

          <LoginExtensions />

        </View>
      )
    else if( this.state.mode == mode_login_in_progress )
      return (
        <View style={styles.container}>
          <FormLabel>Logging in as</FormLabel>
          <FormLabel>{ this.state.User_AccountName }</FormLabel>
          <FormLabel> </FormLabel>
          <Button kind='action' onPress={ this.handle_onPress_Cancel } title="Cancel" />
        </View>
      )
    else if( this.state.mode == mode_login_failed )
      return (
        <View style={styles.container}>
          <FormLabel>Failed to log in as</FormLabel>
          <FormLabel>{ this.state.User_AccountName }</FormLabel>
          <FormLabel>{ this.state.ErrorMessage }</FormLabel>
          <FormLabel> </FormLabel>
          <Button kind='action' onPress={ this.handle_onPress_Retry } title="Retry" />
        </View>
      )
  }
}
