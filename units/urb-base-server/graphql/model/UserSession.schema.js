// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'UserSession', {
  fields: {
    id: 'uuid',
    UserSession_site_id: 'uuid',
    UserSession_User_id: 'uuid',
    UserSession_Start: 'timestamp',
    UserSession_Expired: 'boolean',
  },

  key: [ 'id' ],

  custom_indexes: [
    {
      on: 'UserSession_User_id',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
