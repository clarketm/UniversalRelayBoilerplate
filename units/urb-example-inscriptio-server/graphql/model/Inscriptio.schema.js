// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'Inscriptio', {
  fields: {
    id: 'uuid',
    Inscriptio_User_id: 'uuid',
    Inscriptio_LocationLon: 'text',
    Inscriptio_LocationLat: 'text',
    Inscriptio_Notes: 'text',
  },

  key: [ 'id' ],

  custom_indexes: [
    {
      on: 'Inscriptio_User_id',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
