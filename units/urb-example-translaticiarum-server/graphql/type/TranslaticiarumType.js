// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLString, GraphQLObjectType } from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'

import Translaticiarum from '../model/Translaticiarum'
import NodeInterface from '../../../../units/urb-base-server/graphql/NodeInterface'

export default new GraphQLObjectType({
  name: 'Translaticiarum',

  interfaces: [ NodeInterface ],

  isTypeOf: object => object instanceof Translaticiarum,

  fields: {
    id: globalIdField( 'Translaticiarum' ),
    Translaticiarum_Start: {
      type: GraphQLDateTime,
      resolve: obj => obj.Translaticiarum_Start,
    },
    Translaticiarum_Stop: {
      type: GraphQLDateTime,
      resolve: obj => obj.Translaticiarum_Stop,
    },
    Translaticiarum_Description: {
      type: GraphQLString,
      resolve: obj => obj.Translaticiarum_Description,
    },
  },
})
