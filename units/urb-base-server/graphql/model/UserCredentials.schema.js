// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('UserCredentials', {
  fields: {
    id: 'uuid',
    UserCredentials_site_id: 'uuid',
    UserCredentials_User_id: 'uuid',
    UserCredentials_AccountIdentifier: 'text',
    UserCredentials_AccountSecret: 'text',
  },

  key: ['id'],

  custom_indexes: [
    {
      on: 'UserCredentials_AccountIdentifier',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
