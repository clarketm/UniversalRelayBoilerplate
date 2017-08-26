// @flow weak

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql'

import TranslaticiarumType from '../type/TranslaticiarumType'

export default mutationWithClientMutationId({
  name: 'TranslaticiarumUpdate',

  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    Translaticiarum_Start: { type: new GraphQLNonNull( GraphQLString ) },
    Translaticiarum_Stop: { type: new GraphQLNonNull( GraphQLString ) },
    Translaticiarum_Description: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    Translaticiarum: {
      type: TranslaticiarumType,
      resolve: (
        { local_id },
        { ...args },
        context,
        { rootValue: objectManager }
      ) => objectManager.getOneObject( 'Translaticiarum', { id: local_id }),
    },
  },

  mutateAndGetPayload: async(
    {
      id,
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description,
    },
    context,
    { rootValue: objectManager }
  ) => {
    const local_id = fromGlobalId( id ).id

    await objectManager.update( 'Translaticiarum', {
      id: local_id,
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description,
    })

    return { local_id }
  },
})
