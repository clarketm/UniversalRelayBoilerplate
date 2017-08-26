// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation ToDoUpdateStatusMutation($input: ToDoUpdateStatusInput!) {
    ToDoUpdateStatus(input: $input) {
      Viewer {
        id
        ToDo_CompletedCount
      }
      ToDo {
        id
        ToDo_Complete
      }
    }
  }
`

function sharedUpdater( store, user, proxyToDo ) {
  // In principle this could add to the active connection, but such an
  // interaction is not possible from the front end.
  const userProxy = store.get( user.id )
  const status = proxyToDo.getValue( 'complete' ) ? 'active' : 'completed'
  const connection = ConnectionHandler.getConnection(
    userProxy,
    'ToDoList_ToDos',
    { status }
  )
  if ( connection ) {
    ConnectionHandler.deleteNode( connection, proxyToDo.getValue( 'id' ) )
  }
}

function commit( environment, user, aToDo, ToDo_Complete ) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: { id: aToDo.id, ToDo_Complete },
    },

    updater( store ) {
      const payload = store.getRootField( 'ToDoUpdateStatus' )
      sharedUpdater( store, user, payload.getLinkedRecord( 'ToDo' ) )
    },

    optimisticUpdater( store ) {
      const proxyToDo = store.get( aToDo.id )
      proxyToDo.setValue( ToDo_Complete, 'complete' )
      sharedUpdater( store, user, proxyToDo )

      const userProxy = store.get( user.id )
      const ToDo_CompletedCount = userProxy.getValue( 'ToDo_CompletedCount' )
      if ( ToDo_CompletedCount != null ) {
        userProxy.setValue(
          ToDo_CompletedCount + ( ToDo_Complete ? 1 : -1 ),
          'ToDo_CompletedCount'
        )
      }
    },
  })
}

export default { commit }
