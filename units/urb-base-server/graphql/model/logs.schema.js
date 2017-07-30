// @flow

import defaultPersister from '../../../../configuration/urb-base-server/graphql/defaultPersister'

defaultPersister.addTableSchema('logs', {
  fields: {
    key: 'text',
    date: 'timestamp',
    level: 'text',
    message: 'text',
    meta: 'text',
  },
  key: ['key', 'date'],
})

export default true
