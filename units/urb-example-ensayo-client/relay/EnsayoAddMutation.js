// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation EnsayoAddMutation($input: EnsayoAddInput!) {
    EnsayoAdd(input: $input) {
      Viewer {
        id
      }
      EnsayoEdge {
        cursor
        node {
          id
          Ensayo_Title
          Ensayo_Description
        }
      }
    }
  }
`

function sharedUpdater(store, user, EnsayoEdge) {
  const userProxy = store.get(user.id)

  const connection = ConnectionHandler.getConnection(userProxy, 'EnsayoList_Ensayos')
  if (connection) {
    ConnectionHandler.insertEdgeAfter(connection, EnsayoEdge)
  }
}

let nextClientMutationId = 0

function commit(environment, user, Ensayo_Title, Ensayo_Description, Ensayo_Content) {
  const clientMutationId = nextClientMutationId++

  return commitMutation(environment, {
    mutation,
    variables: {
      input: { Ensayo_Title, Ensayo_Description, Ensayo_Content, clientMutationId },
    },

    updater(store) {
      const payload = store.getRootField('EnsayoAdd')
      sharedUpdater(store, user, payload.getLinkedRecord('EnsayoEdge'))
    },

    optimisticUpdater(store) {
      const id = `client:EnsayoAdd:Ensayo:${clientMutationId}`
      const aEnsayo = store.create(id, 'Ensayo')
      aEnsayo.setValue(Ensayo_Title, 'Ensayo_Title')
      aEnsayo.setValue(Ensayo_Description, 'Ensayo_Description')
      aEnsayo.setValue(Ensayo_Content, 'Ensayo_Content')
      aEnsayo.setValue(id, 'id')

      const EnsayoEdge = store.create(
        `client:EnsayoAdd:EnsayoEdge:${clientMutationId}`,
        'EnsayoEdge',
      )
      EnsayoEdge.setLinkedRecord(aEnsayo, 'node')

      sharedUpdater(store, user, EnsayoEdge)
    },
  })
}

export default { commit }
