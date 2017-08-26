// @flow weak

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLNonNull } from 'graphql'

import EnsayosConnection from '../type/EnsayosConnection'
import ViewerType from '../../../../units/urb-base-server/graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'EnsayoAdd',

  inputFields: {
    Ensayo_Title: { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Description: { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Content: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    EnsayosEdge: {
      type: EnsayosConnection.edgeType,
      resolve: async(
        { local_id },
        { ...args },
        context,
        { rootValue: objectManager }
      ) => {
        const an_Object = await objectManager.getOneObject( 'Ensayo', {
          id: local_id,
        })

        const arr = await objectManager.getObjectList( 'Ensayo', {
          Ensayo_User_id: objectManager.getViewerUserId(),
        })

        return {
          cursor: objectManager.cursorForObjectInConnection(
            'Ensayo',
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
    { Ensayo_Title, Ensayo_Description, Ensayo_Content },
    context,
    { rootValue: objectManager }
  ) => {
    const local_id = await objectManager.add( 'Ensayo', {
      Ensayo_User_id: objectManager.getViewerUserId(),
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content,
    })
    return { local_id }
  },
})
