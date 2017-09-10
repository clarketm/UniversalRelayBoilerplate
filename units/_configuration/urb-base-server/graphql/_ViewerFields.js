// @flow

import urb_example_ensayo_server from '../../../urb-example-ensayo-server/graphql/type/_ViewerFields'
import urb_example_inscriptio_server from '../../../urb-example-inscriptio-server/graphql/type/_ViewerFields'
import urb_example_todo_server from '../../../urb-example-todo-server/graphql/type/_ViewerFields'
import urb_example_translaticiarum_server from '../../../urb-example-translaticiarum-server/graphql/type/_ViewerFields'

export default {
  ...urb_example_ensayo_server,
  ...urb_example_inscriptio_server,
  ...urb_example_todo_server,
  ...urb_example_translaticiarum_server,
}
