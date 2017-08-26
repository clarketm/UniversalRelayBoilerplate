// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLString, GraphQLObjectType } from 'graphql'

import Inscriptio from '../model/Inscriptio'
import NodeInterface from '../../../../units/urb-base-server/graphql/NodeInterface'

export default new GraphQLObjectType({
  name: 'Inscriptio',

  interfaces: [ NodeInterface ],

  isTypeOf: object => object instanceof Inscriptio,

  fields: {
    id: globalIdField( 'Inscriptio' ),
    Inscriptio_LocationLat: {
      type: GraphQLString,
      resolve: obj => obj.Inscriptio_LocationLat,
    },
    Inscriptio_LocationLon: {
      type: GraphQLString,
      resolve: obj => obj.Inscriptio_LocationLon,
    },
    Inscriptio_Notes: {
      type: GraphQLString,
      resolve: obj => obj.Inscriptio_Notes,
    },
  },
})
