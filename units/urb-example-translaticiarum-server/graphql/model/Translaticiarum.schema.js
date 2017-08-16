// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('Translaticiarum', {
  fields: {
    id: 'uuid',
    Translaticiarum_User_id: 'uuid',
    Translaticiarum_Stop: 'text',
    Translaticiarum_Start: 'text',
    Translaticiarum_Description: 'text',
  },

  key: ['id'],

  custom_indexes: [
    {
      on: 'Translaticiarum_User_id',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
