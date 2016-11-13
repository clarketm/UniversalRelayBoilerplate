/* @flow weak */

import bcrypt from 'bcrypt'
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql'

import ViewerType from '../../../../graphql/type/ViewerType'
import delayPromise from '../../../../scripts/delayPromise'


export default mutationWithClientMutationId( {
  name: 'Viewer_updatePassword',
  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    User_AccountPassword_Current: { type: new GraphQLNonNull( GraphQLString ) },
    User_AccountPassword: { type: new GraphQLNonNull( GraphQLString ) },
  },
  outputFields: {
    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager } ) => objectManager.getOneObject( 'User', { id: objectManager.getViewerUserId() } )
    },
    ErrorMessage: { type: GraphQLString, resolve: ( parent ) => parent.ErrorMessage, }
  },
  mutateAndGetPayload: async( {
    id,
    User_AccountPassword_Current,
    User_AccountPassword
  }, context, { rootValue: objectManager } ) => {
    // Do not use the passed ID at this point. Use the viewer user ID since it is verified
    //const local_id = fromGlobalId( id ).id
    const local_id = objectManager.getViewerUserId()

    await delayPromise( 1000 ) // Wait for a second to hinder a possible potential force attack

    const a_User = await objectManager.getOneObject( 'User', {
      id: local_id
    } )

    let ErrorMessage = "" // No error if empty
    if( await promiseBcryptCompare( User_AccountPassword_Current, a_User.User_AccountPassword ) ) {
      const newHash = await promiseBcryptHash( User_AccountPassword )
      await objectManager.update( 'User', {
        id: local_id,
        User_AccountPassword: newHash,
      } )
    } else
      ErrorMessage = "Incorrect current password"

    return { ErrorMessage }
  },
} )

function promiseBcryptCompare( pass1, pass2 ) {
  return new Promise( ( resolve, reject ) => bcrypt.compare( pass1, pass2,
    ( err, passwordsMatch ) => {
      if( err )
        reject( err )
      else
        resolve( passwordsMatch )
    } ) )
}

function promiseBcryptHash( pass ) {
  return new Promise( ( resolve, reject ) => bcrypt.hash( pass, 8,
    ( err, hash ) => {
      if( err )
        reject( err )
      else
        resolve( hash )
    } ) )
}
