// @flow weak

import { GraphQLID } from 'graphql'
import {
  fromGlobalId,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay'

import InscriptiosConnection from './InscriptiosConnection'
import InscriptioType from './InscriptioType'

export default {
  Inscriptios: {
    type: InscriptiosConnection.connectionType,

    args: { ...connectionArgs },

    resolve: async(
      obj,
      { ...args },
      context,
      { rootValue: objectManager }
    ) => {
      const arr = await objectManager.getObjectList( 'Inscriptio', {
        Inscriptio_User_id: objectManager.getViewerUserId(),
      })

      return connectionFromArray( arr, args )
    },
  },

  Inscriptio: {
    type: InscriptioType,

    args: { ...{ id: { type: GraphQLID } } },

    resolve: ( parent, { id }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject( 'Inscriptio', { id: fromGlobalId( id ).id }),
  },
}
