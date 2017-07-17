// @flow

import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql'

import ToDoListUpdateMarkAll from '../helper/ToDoListUpdateMarkAll'
import ToDoType from '../type/ToDoType'
import ViewerType from '../../../../graphql/type/ViewerType'

export default mutationWithClientMutationId({
  name: 'ToDoListUpdateMarkAll',
  inputFields: {
    ToDo_Complete: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  outputFields: {
    changedToDos: {
      type: new GraphQLList(ToDoType),
      resolve: ({ arr_local_ids_Changed_ToDos }, args, context, { rootValue: objectManager }) =>
        arr_local_ids_Changed_ToDos.map(local_id =>
          objectManager.getOneObject('ToDo', { id: local_id }),
        ),
    },
    Viewer: {
      type: ViewerType,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
        objectManager.getOneObject('User', { id: objectManager.getViewerUserId() }),
    },
  },
  mutateAndGetPayload: ({ ToDo_Complete }, context, { rootValue: objectManager }) => {
    return ToDoListUpdateMarkAll(
      objectManager,
      ToDo_Complete,
    ).then(arr_local_ids_Changed_ToDos => ({ arr_local_ids_Changed_ToDos }))
  },
})
