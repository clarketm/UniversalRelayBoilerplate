// @flow weak

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLID, GraphQLNonNull } from 'graphql'

import ViewerType from '../../../../graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'ToDoDelete',

  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },

  outputFields: {
    deletedId: {
      type: GraphQLID,
      resolve: ({ id }) => id,
    },

    Viewer: {
      type: ViewerType,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
        objectManager.getOneObject('User', { id: objectManager.getViewerUserId() }),
    },
  },

  mutateAndGetPayload: async ({ id }, context, { rootValue: objectManager }) => {
    const local_id = fromGlobalId(id).id

    await objectManager.remove('ToDo', { id: local_id })

    return { id }
  },
})
