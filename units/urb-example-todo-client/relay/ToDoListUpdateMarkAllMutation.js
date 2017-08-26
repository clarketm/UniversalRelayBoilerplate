// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation ToDoListUpdateMarkAllMutation(
    $input: ToDoListUpdateMarkAllInput!
    $status: String!
  ) {
    ToDoListUpdateMarkAll(input: $input) {
      Viewer {
        ToDos(status: $status) {
          edges {
            node {
              id
              ToDo_Complete
              ToDo_Text
            }
          }
        }
        id
        ToDo_CompletedCount
      }
      changedToDos {
        id
        ToDo_Complete
      }
    }
  }
`

function commit( environment, user, ToDos, ToDo_Complete, status ) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: { ToDo_Complete },
      status,
    },

    updater( store ) {
      const userProxy = store.get( user.id )
      const connection = ConnectionHandler.getConnection(
        userProxy,
        'ToDoList_ToDos',
        { status }
      )
      const ToDosEdges = store
        .getRootField( 'ToDoListUpdateMarkAll' )
        .getLinkedRecord( 'Viewer' )
        .getLinkedRecord( 'ToDos', { status })
        .getLinkedRecords( 'edges' )
      connection.setLinkedRecords( ToDosEdges, 'edges' )
    },

    optimisticUpdater( store ) {
      const userProxy = store.get( user.id )
      const connection = ConnectionHandler.getConnection(
        userProxy,
        'ToDoList_ToDos',
        { status }
      )

      if (
        ( ToDo_Complete && status === 'active' ) ||
        ( !ToDo_Complete && status === 'completed' )
      ) {
        connection.setLinkedRecords([], 'edges' )
      }
    },

    optimisticResponse() {
      const payload = {
        Viewer: {
          id: user.id,
          ToDo_CompletedCount: 0,
        },
        changedToDos: null,
      }

      if ( ToDos && ToDos.edges ) {
        payload.changedToDos = ToDos.edges
          .filter( ({ node }) => node.ToDo_Complete !== ToDo_Complete )
          .map( ({ node }) => ({ id: node.id, ToDo_Complete }) )
      }

      if ( ToDo_Complete ) {
        if ( user.ToDo_TotalCount != null ) {
          payload.Viewer.ToDo_CompletedCount = user.ToDo_TotalCount
        }
      } else {
        payload.Viewer.ToDo_CompletedCount = 0
      }

      return {
        ToDoListUpdateMarkAll: payload,
      }
    },
  })
}

export default { commit }
