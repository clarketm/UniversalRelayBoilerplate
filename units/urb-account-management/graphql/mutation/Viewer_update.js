/* @flow weak */

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql'

import ViewerType from '../../../../graphql/type/ViewerType'


export default mutationWithClientMutationId( {
  name: 'Viewer_update',
  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    User_DisplayName: { type: new GraphQLNonNull( GraphQLString ) },
    User_Email: { type: new GraphQLNonNull( GraphQLString ) },
    User_PhoneNumberMobile: { type: new GraphQLNonNull( GraphQLString ) },
  },
  outputFields: {
    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager } ) => objectManager.getOneObject( 'User', { id: objectManager.getViewerUserId() } )
    },
  },
  mutateAndGetPayload: async( {
    id,
    User_DisplayName,
    User_Email,
    User_PhoneNumberMobile,
  }, context, { rootValue: objectManager } ) => {
    // Do not use the passed ID at this point. Use the viewer user ID since it is verified
    //const local_id = fromGlobalId( id ).id
    const local_id = objectManager.getViewerUserId()

    await objectManager.update( 'User', {
      id: local_id,
      User_DisplayName,
      User_PhoneNumberMobile,
      User_Email,
    } )

    return { local_id }
  },
} )
