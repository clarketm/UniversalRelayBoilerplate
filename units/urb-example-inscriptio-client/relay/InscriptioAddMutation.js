// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation InscriptioAddMutation($input: InscriptioAddInput!) {
    InscriptioAdd(input: $input) {
      Viewer {
        id
      }
      InscriptiosEdge {
        cursor
        node {
          id
          Inscriptio_LocationLat
          Inscriptio_LocationLon
          Inscriptio_Notes
        }
      }
    }
  }
`

function sharedUpdater( store, user, InscriptiosEdge ) {
  const userProxy = store.get( user.id )

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'InscriptioList_Inscriptios'
  )
  if ( connection ) {
    ConnectionHandler.insertEdgeAfter( connection, InscriptiosEdge )
  }
}

let nextClientMutationId = 0

function commit(
  environment,
  user,
  Inscriptio_LocationLat,
  Inscriptio_LocationLon,
  Inscriptio_Notes
) {
  const clientMutationId = nextClientMutationId++

  return commitMutation( environment, {
    mutation,
    variables: {
      input: {
        Inscriptio_LocationLat,
        Inscriptio_LocationLon,
        Inscriptio_Notes,
        clientMutationId,
      },
    },

    updater( store ) {
      const payload = store.getRootField( 'InscriptioAdd' )
      sharedUpdater( store, user, payload.getLinkedRecord( 'InscriptiosEdge' ) )
    },

    optimisticUpdater( store ) {
      const id = `client:InscriptioAdd:Inscriptio:${clientMutationId}`
      const aInscriptio = store.create( id, 'Inscriptio' )
      aInscriptio.setValue( Inscriptio_LocationLat, 'Inscriptio_LocationLat' )
      aInscriptio.setValue( Inscriptio_LocationLon, 'Inscriptio_LocationLon' )
      aInscriptio.setValue( Inscriptio_Notes, 'Inscriptio_Notes' )
      aInscriptio.setValue( id, 'id' )

      const InscriptiosEdge = store.create(
        `client:InscriptioAdd:InscriptiosEdge:${clientMutationId}`,
        'InscriptiosEdge'
      )
      InscriptiosEdge.setLinkedRecord( aInscriptio, 'node' )

      sharedUpdater( store, user, InscriptiosEdge )
    },
  })
}

export default { commit }
