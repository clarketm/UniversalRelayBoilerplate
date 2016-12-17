/* @flow */

import process from 'process'

import schema from '../graphql/schema' // Schema for GraphQL server
import ObjectManager from '../graphql/ObjectManager'

// Guarantee that all object registrations and schema definitions are executed
import _schemas_system from '../graphql/model/_schemas'
import _schemas from '../configuration/graphql/_schemas'


ObjectManager.initializePersisters( true, () => {

  process.exit()
} )
