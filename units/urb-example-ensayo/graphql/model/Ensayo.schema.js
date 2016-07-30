/* @flow */

import { addTableSchema } from '../../../../graphql/ExpressCassandra'

addTableSchema( 'Ensayo', {
  fields: {
      id: 'uuid',
      Ensayo_Content: 'text',
      Ensayo_Description: 'text',
      Ensayo_Title: 'text',
      Ensayo_User_id: 'uuid',
  },
  key: [ 'id' ],
  indexes: [ 'Ensayo_User_id' ]
} )

export default true
