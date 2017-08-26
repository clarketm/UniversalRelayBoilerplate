// @flow weak

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql'

import EnsayoType from '../type/EnsayoType'

export default mutationWithClientMutationId({
  name: 'EnsayoUpdate',

  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    Ensayo_Title: { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Description: { type: new GraphQLNonNull( GraphQLString ) },
    Ensayo_Content: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    Ensayo: {
      type: EnsayoType,
      resolve: (
        { local_id },
        { ...args },
        context,
        { rootValue: objectManager }
      ) => objectManager.getOneObject( 'Ensayo', { id: local_id }),
    },
  },

  mutateAndGetPayload: async(
    { id, Ensayo_Title, Ensayo_Description, Ensayo_Content },
    context,
    { rootValue: objectManager }
  ) => {
    const local_id = fromGlobalId( id ).id

    await objectManager.update( 'Ensayo', {
      id: local_id,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content,
    })

    return { local_id }
  },
})
