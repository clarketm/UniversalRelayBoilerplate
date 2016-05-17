/* @flow weak */

import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import Relay from 'react-relay';

import isomorphicVars from '../configuration/webapp/scripts/isomorphicVars';
import routes from '../configuration/webapp/routes';

import './styles/main.css';

var isoVars = isomorphicVars( );

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin( );


// Retrieve prepared data
const data = JSON.parse( document.getElementById( 'preloadedData' ).textContent );

// Retrieve the auth token. We know it will be on viewer, but we do not know which fragment.
// Go through them all.
// It is important that User_Token2 is requested in Chrome.jsx
let User_Token2 = "";
for( let fragment of data )
{
  const authTokenInThisFragment = fragment.response.Viewer.User_Token2;
  if( authTokenInThisFragment != null )
  {
    User_Token2 = authTokenInThisFragment;
    break;
  }
}

if( User_Token2.length == 0 )
  alert( 'Authentication token retrieval failed' );


// Ensure that on the client Relay is passing the HttpOnly cookie with auth, and the user auth token
let GraphQL_URL = ( isoVars.PUBLIC_URL == null ) ? '/graphql' : isoVars.PUBLIC_URL + '/graphql';

// Create Relay environment
const environment = new Relay.Environment( );
environment.injectNetworkLayer( new Relay.DefaultNetworkLayer(
  GraphQL_URL,
  {
    credentials: 'same-origin',
    headers: {
      user_token_2: User_Token2,
    },
  }
) );
IsomorphicRelay.injectPreparedData(environment, data);

const rootElement = document.getElementById('root');

match( { routes, history: browserHistory }, ( error, redirectLocation, renderProps ) => {
  IsomorphicRouter.prepareInitialRender( environment, renderProps ).then( props => {
    ReactDOM.render( <Router {...props} />, rootElement );
  } );
} );
