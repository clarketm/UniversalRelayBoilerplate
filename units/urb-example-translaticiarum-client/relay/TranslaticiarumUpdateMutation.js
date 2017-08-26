// @flow weak

import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation TranslaticiarumUpdateMutation($input: TranslaticiarumUpdateInput!) {
    TranslaticiarumUpdate(input: $input) {
      Translaticiarum {
        id
        Translaticiarum_Start
        Translaticiarum_Stop
        Translaticiarum_Description
      }
    }
  }
`

function commit(
  environment,
  aTranslaticiarum,
  Translaticiarum_Start,
  Translaticiarum_Stop,
  Translaticiarum_Description
) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: {
        id: aTranslaticiarum.id,
        Translaticiarum_Start,
        Translaticiarum_Stop,
        Translaticiarum_Description,
      },
    },

    optimisticResponse() {
      return {
        TranslaticiarumUpdate: {
          Translaticiarum: {
            id: aTranslaticiarum.id,
            Translaticiarum_Start,
            Translaticiarum_Stop,
            Translaticiarum_Description,
          },
        },
      }
    },
  })
}

export default { commit }
