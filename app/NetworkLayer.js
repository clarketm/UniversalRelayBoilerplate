/* @flow weak */

import Keychain from 'react-native-keychain'
import Relay from 'react-relay';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-layer'

import AnonymousUserToken2 from '../configuration/server/AnonymousUserToken2'
import publicURL from '../configuration/app/publicURL'
import UrlRouter from './UrlRouter'


let currentEnvironment = new Relay.Environment( )

// Initializing environment here to avoid prop warning.
currentEnvironment.injectNetworkLayer( new Relay.DefaultNetworkLayer( 'http://localhost' ) )
let currentEnvironmentInitialized = false

let listeningComponent = null

export default class NetworkLayer
{
  static loadPersistedCredentials( cb )
  {
    Keychain
      .getGenericPassword( )
      .then( (credentials) => {
        const credentialsJSON = JSON.parse( credentials.password, true )
        NetworkLayer.setUserTokens( credentialsJSON.UserToken1, credentialsJSON.UserToken2, false, cb )
      } )
      .catch( ( error ) => {
        NetworkLayer.setUserTokens( null, AnonymousUserToken2, false, cb )
      } )
  }

  static logout( cb )
  {
    Keychain.resetGenericPassword( )
    .then( ( ) => NetworkLayer.setUserTokens( null, AnonymousUserToken2, false, cb ) )
  }

  static setUserTokens( UserToken1, UserToken2, persist, cb )
  {
    // New tokens mean new environment
    currentEnvironment = new Relay.Environment( )
    currentEnvironmentInitialized = true

    // Set up options for network layer
    let headers = { }

    if( UserToken1 != null )
      headers.Cookie = 'UserToken1=' + UserToken1

    if( UserToken2 != null )
      headers.UserToken2 = UserToken2

    const graphQLServerURL = publicURL + '/graphql';

    // Create network layer with options and inject
    currentEnvironment.injectNetworkLayer( new RelayNetworkLayer(
      [
        urlMiddleware( { url: graphQLServerURL } ),
        next => req => {
          Object.assign( req.headers, headers )
          return next( req )
        },
        next => req => {
          return next( req )
          .then( res => {
            if( res.json.error )
            {
              alert( res.json.error )
              if( res.json.error == "Authentication Failed" )
              {
                console.log( "TODO: x2000 Somehow alert the user. Your account could not be found. You have been logged out." )
                NetworkLayer.logout( ( ) => UrlRouter.goToRouteByNameAndParams( '/user/login', { } ) )
              }
            }
            return res
          } )
        }
      ],
      { disableBatchQuery: true }
    ) )

    if( listeningComponent )
      listeningComponent.updateEnvironment( UserToken1 == null )

    if( cb )
      setTimeout( ( ) => { cb( ) } )

    if( persist )
    {
      const tokensAsJSON = JSON.stringify( { UserToken1, UserToken2 } )
      Keychain.setGenericPassword( 'user', tokensAsJSON )
    }
  }

  static getCurrentEnvironment( )
  {
    return currentEnvironment
  }

  static getCurrentEnvironmentInitialized( )
  {
    return currentEnvironmentInitialized
  }

  static RegisterListeningComponent( component )
  {
    listeningComponent = component
  }
}
