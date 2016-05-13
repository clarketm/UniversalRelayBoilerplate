/* @flow */

import UserManagement_mutations from '../../units/sys-account-management/graphql/mutation/_mutations'

import Compendium_mutations from '../../units/starter-kit-example-compendium/graphql/mutation/_mutations'
import Ensayo_mutations from '../../units/starter-kit-example-ensayo/graphql/mutation/_mutations'
import ToDo_mutations from '../../units/starter-kit-example-todo/graphql/mutation/_mutations'
import Translaticiarum_mutations from '../../units/starter-kit-example-translaticiarum/graphql/mutation/_mutations'


export default {
  ...UserManagement_mutations,
  ...Compendium_mutations,
  ...Ensayo_mutations,
  ...ToDo_mutations,
  ...Translaticiarum_mutations,
}
