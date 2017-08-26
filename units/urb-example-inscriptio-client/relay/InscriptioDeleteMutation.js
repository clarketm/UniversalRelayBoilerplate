// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation InscriptioDeleteMutation($input: InscriptioDeleteInput!) {
    InscriptioDelete(input: $input) {
      deletedId
    }
  }
`

function sharedUpdater( store, user, deletedId ) {
  const userProxy = store.get( user.id )

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'InscriptioList_Inscriptios'
  )
  if ( connection ) {
    ConnectionHandler.deleteNode( connection, deletedId )
  }
}

function commit( environment, user, aInscriptio ) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: { id: aInscriptio.id },
    },

    updater( store ) {
      const payload = store.getRootField( 'InscriptioDelete' )
      sharedUpdater( store, user, payload.getValue( 'deletedId' ) )
    },

    optimisticUpdater( store ) {
      sharedUpdater( store, user, aInscriptio.id )
    },
  })
}

export default { commit }
