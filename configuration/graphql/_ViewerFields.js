// @flow

import urb_example_compendium from '../../units/urb-example-compendium/graphql/type/_ViewerFields'
import urb_example_ensayo from '../../units/urb-example-ensayo/graphql/type/_ViewerFields'
import urb_example_todo from '../../units/urb-example-todo/graphql/type/_ViewerFields'
import urb_example_translaticiarum from '../../units/urb-example-translaticiarum/graphql/type/_ViewerFields'

export default {
  ...urb_example_compendium,
  ...urb_example_ensayo,
  ...urb_example_todo,
  ...urb_example_translaticiarum,
}