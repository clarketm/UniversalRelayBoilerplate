// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'ToDo', {
  fields: {
    id: 'uuid',
    ToDo_User_id: 'uuid',
    ToDo_Text: 'text',
    ToDo_Complete: 'boolean',
  },

  key: [ 'id' ],

  custom_indexes: [
    {
      on: 'ToDo_User_id',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
