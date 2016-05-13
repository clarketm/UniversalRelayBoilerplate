/* @flow */

import Compendium_ViewerFields from '../../units/starter-kit-example-compendium/graphql/type/_ViewerFields'
import Ensayo_ViewerFields from '../../units/starter-kit-example-ensayo/graphql/type/_ViewerFields'
import ToDo_ViewerFields from '../../units/starter-kit-example-todo/graphql/type/_ViewerFields'
import Translaticiarum_ViewerFields from '../../units/starter-kit-example-translaticiarum/graphql/type/_ViewerFields'


export default {
  ...Compendium_ViewerFields,
  ...Ensayo_ViewerFields,
  ...ToDo_ViewerFields,
  ...Translaticiarum_ViewerFields,
}
