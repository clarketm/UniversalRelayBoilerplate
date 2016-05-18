/* @flow weak */

import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import express from 'express'
import jwt from 'jwt-simple'

import authExtensions from '../configuration/server/authExtensions'
import delayPromise from '../scripts/delayPromise'
import ObjectManager from '../configuration/graphql/ObjectManager'

// Read environment
require( 'dotenv' ).load( );

function validateEmail( email )
{
    const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
    return re.test( email )
}


let auth = express( );
auth.use( bodyParser.json( ) );

auth.post('/login', (req, res) =>
{
  const objectManager = new ObjectManager( );

  let User_AccountName = req.body.User_AccountName.toLowerCase( );
  let User_AccountPassword = req.body.User_AccountPassword;

  delayPromise( 1000 ) // Wait for a second to slow down a possible potential force attack
  .then( ( ) => objectManager.getListBy( 'User', 'User_AccountName', User_AccountName ) )
  .then( ( arr_Users ) =>
  {
    if( arr_Users.length == 0 )
      res.status( 401 ).json( { error: 'Incorrect user' } );
    else
    {
      const a_User = arr_Users[ 0 ];

      bcrypt.compare( User_AccountPassword, a_User.User_AccountPassword, function( err, User_AccountPasswordIsCorrect )
      {
        if( User_AccountPasswordIsCorrect )
        {
          // User has authenticated correctly thus we create a JWT token
          var token = jwt.encode( { user_id: a_User.id }, process.env.JWT_SECRET );

          res.cookie( 'user_token_1', token, { httpOnly: true } );
          res.json( {
            success: true,
            User_Token2: a_User.User_Token2
          } );
        }
        else
          res.status( 401 ).json( { error: 'Incorrect password' } );
      } );
    }
  } )
  .catch( ( reason ) =>
  {
    res.status( 401 ).json( { error: reason } );
  } )
  ;
} )

auth.post('/createuser', (req, res) =>
{
  const objectManager = new ObjectManager( );

  let User_AccountName = req.body.User_AccountName.toLowerCase( );
  let User_AccountPassword = req.body.User_AccountPassword;

  objectManager.getListBy( 'User', 'User_AccountName', User_AccountName )
  .then( ( arr_Users ) =>
  {
    if( arr_Users.length > 0 )
      return Promise.reject( "User account already exists" );
    else
      return new Promise( ( resolve ) => {
        bcrypt.hash( User_AccountPassword, 8, ( err, User_AccountPassword ) => resolve( User_AccountPassword ) );
      } )
      .then( ( User_AccountPassword ) =>
      {
        // If account name looks like email address, use it as email
        const accountNameIsValidEmail = validateEmail( User_AccountName )
        const User_Email = accountNameIsValidEmail ? User_AccountName : ''

        return objectManager.add( 'User', {
          User_AccountName: User_AccountName,
          User_AccountPassword: User_AccountPassword,
          User_DisplayName: User_AccountName,
          User_ProfilePhoto: '',
          User_Email: User_Email,
          User_PhoneNumberMobile: '',
          User_Locale: '',
          User_Token2: Math.random( ).toString( 36 ) + Math.random( ).toString( 36 )
        } )

      } )
  } )
  .then( ( user_id ) => objectManager.getOneById( 'User', user_id ) )
  .then( ( a_User ) =>
  {
    // User has been created thus we create a JWT token
    var token = jwt.encode( { user_id: a_User.id }, process.env.JWT_SECRET );

    res.cookie( 'user_token_1', token, { httpOnly: true } );
    res.json( { success : true } );
  } )
  .catch( ( reason ) =>
  {
    res.status( 401 ).json( { error: "" + reason } );
  } )
  ;
} )


auth.post('/logout', (req, res) =>
{
  res.cookie( 'user_token_1', '', { httpOnly: true, expires: new Date( 1 ) } );
  res.json( { success : true } );
} )


// Add extensions - custom configurations
authExtensions( auth )


export default auth;
