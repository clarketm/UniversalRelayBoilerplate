// @flow

import process from 'process'

import schema from '../../units/urb-base-server/graphql/schema' // Schema for GraphQL server
import ObjectManager from '../urb-base-server/graphql/ObjectManager'

// Guarantee that all object registrations and schema definitions are executed
import _schemas from '../_configuration/urb-base-server/graphql/_schemas'

ObjectManager.initializePersisters(true, () => {
  process.exit()
})
