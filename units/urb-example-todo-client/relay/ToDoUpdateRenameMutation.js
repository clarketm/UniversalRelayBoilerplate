// @flow weak

import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
  mutation ToDoUpdateRenameMutation($input: ToDoUpdateRenameInput!) {
    ToDoUpdateRename(input: $input) {
      ToDo {
        id
        ToDo_Text
      }
    }
  }
`

function commit(environment, aToDo, ToDo_Text) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: { id: aToDo.id, ToDo_Text },
    },

    optimisticResponse() {
      return {
        ToDoUpdateRename: {
          ToDo: {
            id: aToDo.id,
            ToDo_Text,
          },
        },
      }
    },
  })
}

export default { commit }
