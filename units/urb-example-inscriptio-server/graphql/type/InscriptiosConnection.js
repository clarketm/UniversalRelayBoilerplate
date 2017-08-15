// @flow

import { connectionDefinitions } from 'graphql-relay'

import InscriptioType from './InscriptioType'

export default connectionDefinitions({
  name: 'Inscriptios',
  nodeType: InscriptioType,
})
