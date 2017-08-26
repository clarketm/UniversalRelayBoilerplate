// @flow weak

import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLString, GraphQLID, GraphQLNonNull } from 'graphql'

import InscriptioType from '../type/InscriptioType'

export default mutationWithClientMutationId({
  name: 'InscriptioUpdate',

  inputFields: {
    id: { type: new GraphQLNonNull( GraphQLID ) },
    Inscriptio_LocationLat: { type: new GraphQLNonNull( GraphQLString ) },
    Inscriptio_LocationLon: { type: new GraphQLNonNull( GraphQLString ) },
    Inscriptio_Notes: { type: new GraphQLNonNull( GraphQLString ) },
  },

  outputFields: {
    Inscriptio: {
      type: InscriptioType,
      resolve: (
        { local_id },
        { ...args },
        context,
        { rootValue: objectManager }
      ) => objectManager.getOneObject( 'Inscriptio', { id: local_id }),
    },
  },

  mutateAndGetPayload: async(
    { id, Inscriptio_LocationLat, Inscriptio_LocationLon, Inscriptio_Notes },
    context,
    { rootValue: objectManager }
  ) => {
    const local_id = fromGlobalId( id ).id

    await objectManager.update( 'Inscriptio', {
      id: local_id,
      Inscriptio_LocationLat,
      Inscriptio_LocationLon,
      Inscriptio_Notes,
    })

    return { local_id }
  },
})
