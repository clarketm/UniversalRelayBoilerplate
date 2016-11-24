/* @flow weak */

import jwt from 'jwt-simple'
import path from 'path';

import defaultPersister from '../configuration/graphql/defaultPersister'
import log from './log'


// Read environment
require( 'dotenv' ).load()


export function getUserByCookie( objectManager, req ) {
  
  let user_id = defaultPersister.uuidNull( ) // Anonymous, unless cookie is passed

  try {
    if( req.cookies.UserToken1 )
      if( req.cookies.UserToken1.length > 10 ) {
        var decoded = jwt.decode( req.cookies.UserToken1, process.env.JWT_SECRET )
        user_id = defaultPersister.uuidFromString( decoded.user_id )
      }
  } catch( err ) {
    return Promise.reject( "Could not read auth cookie. " + err )
  }

  return objectManager.getOneObject( 'User', { id: user_id } )
    .then( ( a_User ) => {
      if( a_User ) {
        objectManager.setViewerUserId( user_id )
        return a_User
      } else
        return Promise.reject( "User not found" )
    } )
}

export function verifyUserAuthToken( a_User, req ) {

  if( !a_User )
    return Promise.reject( "User not found" )
  else {
    const request_UserToken2 = req.get( 'UserToken2' )
    if( request_UserToken2 == a_User.UserToken2 || process.env.USER_TOKEN_2_BYPASS_IP == req.ip )
      return Promise.resolve( a_User.id )
    else
      return Promise.reject( "Authentication token expected: " + a_User.UserToken2 + ", provided:" + request_UserToken2 )
  }
}

const httpError403FileName = path.resolve( __dirname, '../configuration/server/httpError/403.html' )

export function serveAuthenticationFailed( req, res, error, respondWithJSON ) {

  // Collect information about the request
  var ip = req.headers[ 'x-real-ip' ] || req.connection.remoteAddress

  const requestDetails = {
    headers: req.headers,
    cookies: req.cookies,
    ip: ip,
    query: req.body
  }

  log.log( 'warn', 'Checking credentials failed', { error, requestDetails } )

  res.cookie( 'UserToken1', '', { httpOnly: true, expires: new Date( 1 ) } ) // Expire cookie. Only way to 'delete'

  if( respondWithJSON )
    res.status( 403 ).send( '{ "error": "Authentication Failed" }' )
  else
    res.status( 403 ).sendFile( httpError403FileName )
}
