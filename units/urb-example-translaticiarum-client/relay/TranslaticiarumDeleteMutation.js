// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation TranslaticiarumDeleteMutation($input: TranslaticiarumDeleteInput!) {
    TranslaticiarumDelete(input: $input) {
      deletedId
    }
  }
`

function sharedUpdater( store, user, deletedId ) {
  const userProxy = store.get( user.id )

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'TranslaticiarumList_Translaticiarums'
  )
  if ( connection ) {
    ConnectionHandler.deleteNode( connection, deletedId )
  }
}

function commit( environment, user, aTranslaticiarum ) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: { id: aTranslaticiarum.id },
    },

    updater( store ) {
      const payload = store.getRootField( 'TranslaticiarumDelete' )
      sharedUpdater( store, user, payload.getValue( 'deletedId' ) )
    },

    optimisticUpdater( store ) {
      sharedUpdater( store, user, aTranslaticiarum.id )
    },
  })
}

export default { commit }
