// @flow weak

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql'

import ToDoListUpdateMarkAll from '../helper/ToDoListUpdateMarkAll'
import ToDoType from '../type/ToDoType'
import ViewerType from '../../../../units/urb-base-server/graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'ToDoListUpdateMarkAll',

  inputFields: {
    ToDo_Complete: { type: new GraphQLNonNull( GraphQLBoolean ) },
  },

  outputFields: {
    changedToDos: {
      type: new GraphQLList( ToDoType ),
      resolve: (
        { arr_local_ids_Changed_ToDos },
        args,
        context,
        { rootValue: objectManager }
      ) =>
        arr_local_ids_Changed_ToDos.map( local_id =>
          objectManager.getOneObject( 'ToDo', { id: local_id })
        ),
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
    { ToDo_Complete },
    context,
    { rootValue: objectManager }
  ) => {
    const arr_local_ids_Changed_ToDos = await ToDoListUpdateMarkAll(
      objectManager,
      ToDo_Complete
    )

    return { arr_local_ids_Changed_ToDos }
  },
})
