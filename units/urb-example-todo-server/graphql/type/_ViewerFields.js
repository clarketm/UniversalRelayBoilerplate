// @flow weak

import { GraphQLInt, GraphQLString } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'

import ToDosConnection from './ToDosConnection'

export default {
  ToDos: {
    type: ToDosConnection.connectionType,

    args: {
      status: {
        type: GraphQLString,
        defaultValue: 'any',
      },
      ...connectionArgs,
    },

    resolve: async(
      obj,
      { status, ...args },
      context,
      { rootValue: objectManager }
    ) => {
      const arr = await objectManager.getObjectList( 'ToDo', {
        ToDo_User_id: objectManager.getViewerUserId(),
      })

      return connectionFromArray(
        arr.filter(
          a_ToDo =>
            status === 'any' ||
            a_ToDo.ToDo_Complete === ( status === 'completed' )
        ),
        args
      )
    },
  },

  ToDo_TotalCount: {
    type: GraphQLInt,

    resolve: async(
      obj,
      { ...args },
      context,
      { rootValue: objectManager }
    ) => {
      const arr = await objectManager.getObjectList( 'ToDo', {
        ToDo_User_id: objectManager.getViewerUserId(),
      })

      return arr.length
    },
  },

  ToDo_CompletedCount: {
    type: GraphQLInt,

    resolve: async(
      obj,
      { ...args },
      context,
      { rootValue: objectManager }
    ) => {
      const arr = await objectManager.getObjectList( 'ToDo', {
        ToDo_User_id: objectManager.getViewerUserId(),
      })

      return arr.filter( a_ToDo => a_ToDo.ToDo_Complete ).length
    },
  },
}
