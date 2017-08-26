// @flow weak

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLNonNull } from 'graphql'

import TranslaticiarumsConnection from '../type/TranslaticiarumsConnection'
import ViewerType from '../../../../units/urb-base-server/graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'TranslaticiarumAdd',

  inputFields: {
    Translaticiarum_Start: { type: new GraphQLNonNull( GraphQLString ) },
    Translaticiarum_Stop: { type: new GraphQLNonNull( GraphQLString ) },
    Translaticiarum_Description: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    TranslaticiarumsEdge: {
      type: TranslaticiarumsConnection.edgeType,
      resolve: async(
        { local_id },
        { ...args },
        context,
        { rootValue: objectManager }
      ) => {
        const an_Object = await objectManager.getOneObject( 'Translaticiarum', {
          id: local_id,
        })

        const arr = await objectManager.getObjectList( 'Translaticiarum', {
          Translaticiarum_User_id: objectManager.getViewerUserId(),
        })

        return {
          cursor: objectManager.cursorForObjectInConnection(
            'Translaticiarum',
            arr,
            an_Object
          ),
          node: an_Object,
        }
      },
    },

    Viewer: {
      type: ViewerType,
      resolve: ( parent, args, context, { rootValue: objectManager }) =>
        objectManager.getOneObject( 'User', {
          id: objectManager.getViewerUserId(),
        }),
    },
  },

  mutateAndGetPayload: async(
    {
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description,
    },
    context,
    { rootValue: objectManager }
  ) => {
    const local_id = await objectManager.add( 'Translaticiarum', {
      Translaticiarum_User_id: objectManager.getViewerUserId(),
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description,
    })
    return { local_id }
  },
})
