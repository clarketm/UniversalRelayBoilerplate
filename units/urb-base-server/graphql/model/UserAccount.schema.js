// @flow

import defaultPersister from '../../../_configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema( 'UserAccount', {
  fields: {
    id: 'uuid',
    UserAccount_site_id: 'uuid',
    UserAccount_User_id: 'uuid',
    UserAccount_Identifier: 'text',
    UserAccount_Type: 'text',
  },

  key: [ 'id' ],

  custom_indexes: [
    {
      on: 'UserAccount_Identifier',
      using: 'org.apache.cassandra.index.sasi.SASIIndex',
      options: {},
    },
  ],
})

export default true
