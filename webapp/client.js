/* @flow weak */

import IsomorphicRelay from 'isomorphic-relay'
import IsomorphicRouter from 'isomorphic-relay-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, match, Router } from 'react-router'
import Relay from 'react-relay'
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-layer'
import injectTapEventPlugin from 'react-tap-event-plugin'

import routes from '../configuration/webapp/routes'
import { postXHR } from './scripts/XHR'
import './styles/main.css'


// Use tap event plugin accoring to http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin()


// Retrieve prepared data
const data = JSON.parse( document.getElementById( 'preloadedData' ).textContent )


// Retrieve the auth token. We know it will be on viewer, but we do not know which fragment.
// Go through them all.
// It is important that UserToken2 is requested in Chrome.jsx
let UserToken2 = ""
for( let fragment of data ) {
  const authTokenInThisFragment = fragment.response.Viewer.UserToken2
  if( authTokenInThisFragment != null ) {
    UserToken2 = authTokenInThisFragment
    break
  }
}


if( UserToken2.length == 0 )
  alert( 'Authentication token retrieval failed' )


// Create Relay environment
// Ensure that on the client Relay is passing the HttpOnly cookie with auth, and the user auth token
const relay = new Relay.Environment()

relay.injectNetworkLayer( new RelayNetworkLayer(
  [
    urlMiddleware( {
      url: '/graphql' // GraphQL Server is relative to main server in directory graphql
    } ),
    next => req => {
      req.headers[ 'UserToken2' ] = UserToken2 // Provide token for server to prevent CSRF
      req.credentials = 'same-origin' // provide CORS policy to XHR request in fetch method
      return next( req )
    },
    next => req => {
      return next( req )
        .then( res => {
          if( res.json.error ) {
            alert( res.json.error ) // TODO x5000 Transfer error to server, possibly
            if( res.json.error == 'Authentication Failed' ) {
              // When authentication fails, alert user and log out
              var loc = window.location
              var host = loc.protocol + "//" + loc.hostname + ":" + loc.port

              postXHR( host + '/auth/logout', {},
                () => {
                  alert( "Your account could not be found. You have been logged out." )
                  location.replace( location.href )
                },
                () => {
                  alert( "Your account could not be found. An attempt has been made to log you out, which did not succeed." )
                  location.replace( location.href )
                }
              )
            }
          } else if( res.json.errors )
            alert( 'GraphQL errors occurred! TODO: x2000 provide error handling' )
          return res
        } )
    }
  ], {
    disableBatchQuery: true
  }
) )

IsomorphicRelay.injectPreparedData( relay, data )
const rootElement = document.getElementById( 'root' )

match( {
    routes,
    history: browserHistory
  },
  ( error, redirectLocation, renderProps ) => {
    IsomorphicRouter.prepareInitialRender( relay, renderProps ).then( props => {
      ReactDOM.render( <Router {...props } />, rootElement )
    } )
  }
)
