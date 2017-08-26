// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation EnsayoDeleteMutation($input: EnsayoDeleteInput!) {
    EnsayoDelete(input: $input) {
      deletedId
    }
  }
`

function sharedUpdater( store, user, deletedId ) {
  const userProxy = store.get( user.id )

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'EnsayoList_Ensayos'
  )
  if ( connection ) {
    ConnectionHandler.deleteNode( connection, deletedId )
  }
}

function commit( environment, user, aEnsayo ) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: { id: aEnsayo.id },
    },

    updater( store ) {
      const payload = store.getRootField( 'EnsayoDelete' )
      sharedUpdater( store, user, payload.getValue( 'deletedId' ) )
    },

    optimisticUpdater( store ) {
      sharedUpdater( store, user, aEnsayo.id )
    },
  })
}

export default { commit }
