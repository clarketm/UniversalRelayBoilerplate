// @flow

import { GraphQLObjectType } from 'graphql'

import _mutations from '../../../../configuration/urb-base-server/graphql/_mutations'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: { ..._mutations },
})
