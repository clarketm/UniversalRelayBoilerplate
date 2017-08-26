// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation ToDoAddMutation($input: ToDoAddInput!) {
    ToDoAdd(input: $input) {
      Viewer {
        id
        ToDo_TotalCount
      }
      ToDosEdge {
        cursor
        node {
          id
          ToDo_Complete
          ToDo_Text
        }
      }
    }
  }
`

function sharedUpdater( store, user, ToDosEdge ) {
  const userProxy = store.get( user.id )
  ;[ 'any', 'active' ].forEach( status => {
    const connection = ConnectionHandler.getConnection(
      userProxy,
      'ToDoList_ToDos',
      { status }
    )
    if ( connection ) {
      ConnectionHandler.insertEdgeAfter( connection, ToDosEdge )
    }
  })
}

let nextClientMutationId = 0

function commit( environment, user, ToDo_Text ) {
  const clientMutationId = nextClientMutationId++

  return commitMutation( environment, {
    mutation,
    variables: {
      input: { ToDo_Text, clientMutationId },
    },

    updater( store ) {
      const payload = store.getRootField( 'ToDoAdd' )
      sharedUpdater( store, user, payload.getLinkedRecord( 'ToDosEdge' ) )
    },

    optimisticUpdater( store ) {
      const id = `client:ToDoAdd:ToDo:${clientMutationId}`
      const aToDo = store.create( id, 'ToDo' )
      aToDo.setValue( ToDo_Text, 'ToDo_Text' )
      aToDo.setValue( id, 'id' )

      const ToDosEdge = store.create(
        `client:ToDoAdd:ToDosEdge:${clientMutationId}`,
        'ToDosEdge'
      )
      ToDosEdge.setLinkedRecord( aToDo, 'node' )

      sharedUpdater( store, user, ToDosEdge )

      const userProxy = store.get( user.id )
      const ToDo_TotalCount = userProxy.getValue( 'ToDo_TotalCount' )
      if ( ToDo_TotalCount != null ) {
        userProxy.setValue( ToDo_TotalCount + 1, 'ToDo_TotalCount' )
      }
    },
  })
}

export default { commit }
