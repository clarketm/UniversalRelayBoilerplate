// @flow weak

import { GraphQLID } from 'graphql'
import {
  fromGlobalId,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay'

import EnsayosConnection from './EnsayosConnection'
import EnsayoType from './EnsayoType'

export default {
  Ensayos: {
    type: EnsayosConnection.connectionType,

    args: { ...connectionArgs },

    resolve: async(
      obj,
      { ...args },
      context,
      { rootValue: objectManager }
    ) => {
      const arr = await objectManager.getObjectList( 'Ensayo', {
        Ensayo_User_id: objectManager.getViewerUserId(),
      })

      return connectionFromArray( arr, args )
    },
  },

  Ensayo: {
    type: EnsayoType,

    args: { ...{ id: { type: GraphQLID } } },

    resolve: ( parent, { id }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject( 'Ensayo', { id: fromGlobalId( id ).id }),
  },
}
