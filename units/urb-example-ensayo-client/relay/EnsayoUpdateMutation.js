// @flow weak

import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation EnsayoUpdateMutation($input: EnsayoUpdateInput!) {
    EnsayoUpdate(input: $input) {
      Ensayo {
        id
        Ensayo_Title
        Ensayo_Description
        Ensayo_Content
      }
    }
  }
`

function commit(
  environment,
  aEnsayo,
  Ensayo_Title,
  Ensayo_Description,
  Ensayo_Content
) {
  return commitMutation( environment, {
    mutation,
    variables: {
      input: {
        id: aEnsayo.id,
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content,
      },
    },

    optimisticResponse() {
      return {
        EnsayoUpdate: {
          Ensayo: {
            id: aEnsayo.id,
            Ensayo_Title,
            Ensayo_Description,
            Ensayo_Content,
          },
        },
      }
    },
  })
}

export default { commit }
