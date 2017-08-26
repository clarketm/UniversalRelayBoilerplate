// @flow weak

import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation InscriptioUpdateMutation($input: InscriptioUpdateInput!) {
    InscriptioUpdate(input: $input) {
      Inscriptio {
        id
        Inscriptio_LocationLat
        Inscriptio_LocationLon
        Inscriptio_Notes
      }
    }
  }
`

function commit(
  environment,
  aInscriptio,
  Inscriptio_LocationLat,
  Inscriptio_LocationLon,
  Inscriptio_Notes
) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: {
        id: aInscriptio.id,
        Inscriptio_LocationLat,
        Inscriptio_LocationLon,
        Inscriptio_Notes,
      },
    },

    optimisticResponse() {
      return {
        InscriptioUpdate: {
          Inscriptio: {
            id: aInscriptio.id,
            Inscriptio_LocationLat,
            Inscriptio_LocationLon,
            Inscriptio_Notes,
          },
        },
      }
    },
  })
}

export default { commit }
