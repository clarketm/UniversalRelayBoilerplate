// @flow weak

import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation TranslaticiarumAddMutation($input: TranslaticiarumAddInput!) {
    TranslaticiarumAdd(input: $input) {
      Viewer {
        id
      }
      TranslaticiarumsEdge {
        cursor
        node {
          id
          Translaticiarum_Start
          Translaticiarum_Stop
          Translaticiarum_Description
        }
      }
    }
  }
`

function sharedUpdater( store, user, TranslaticiarumsEdge ) {
  const userProxy = store.get( user.id )

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'TranslaticiarumList_Translaticiarums'
  )
  if ( connection ) {
    ConnectionHandler.insertEdgeAfter( connection, TranslaticiarumsEdge )
  }
}

let nextClientMutationId = 0

function commit(
  environment,
  user,
  Translaticiarum_Start,
  Translaticiarum_Stop,
  Translaticiarum_Description
) {
  const clientMutationId = nextClientMutationId++

  return commitMutation( environment, {
    mutation,
    variables: {
      input: {
        Translaticiarum_Start,
        Translaticiarum_Stop,
        Translaticiarum_Description,
        clientMutationId,
      },
    },

    updater( store ) {
      const payload = store.getRootField( 'TranslaticiarumAdd' )
      sharedUpdater(
        store,
        user,
        payload.getLinkedRecord( 'TranslaticiarumsEdge' )
      )
    },

    optimisticUpdater( store ) {
      const id = `client:TranslaticiarumAdd:Translaticiarum:${clientMutationId}`
      const aTranslaticiarum = store.create( id, 'Translaticiarum' )
      aTranslaticiarum.setValue( Translaticiarum_Start, 'Translaticiarum_Start' )
      aTranslaticiarum.setValue( Translaticiarum_Stop, 'Translaticiarum_Stop' )
      aTranslaticiarum.setValue(
        Translaticiarum_Description,
        'Translaticiarum_Description'
      )
      aTranslaticiarum.setValue( id, 'id' )

      const TranslaticiarumsEdge = store.create(
        `client:TranslaticiarumAdd:TranslaticiarumsEdge:${clientMutationId}`,
        'TranslaticiarumsEdge'
      )
      TranslaticiarumsEdge.setLinkedRecord( aTranslaticiarum, 'node' )

      sharedUpdater( store, user, TranslaticiarumsEdge )
    },
  })
}

export default { commit }
