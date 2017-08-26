// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'Ensayo', {
  fields: {
    id: 'uuid',
    Ensayo_User_id: 'uuid',
    Ensayo_Content: 'text',
    Ensayo_Description: 'text',
    Ensayo_Title: 'text',
  },

  key: [ 'id' ],

  custom_indexes: [
    {
      on: 'Ensayo_User_id',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
