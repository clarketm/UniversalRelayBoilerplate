// @flow weak

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql'

import ToDoType from '../type/ToDoType'

export default mutationWithClientMutationId({
  name: 'ToDoUpdateRename',

  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    ToDo_Text: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    ToDo: {
      type: ToDoType,
      resolve: (
        { local_id },
        { ...args },
        context,
        { rootValue: objectManager }
      ) => objectManager.getOneObject( 'ToDo', { id: local_id }),
    },
  },

  mutateAndGetPayload: async(
    { id, ToDo_Text },
    context,
    { rootValue: objectManager }
  ) => {
    const local_id = fromGlobalId( id ).id

    await objectManager.update( 'ToDo', {
      id: local_id,
      ToDo_Text,
    })

    return { local_id }
  },
})
