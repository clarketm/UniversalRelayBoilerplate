/* @flow weak */

import {GraphQLObjectType} from "graphql";

import _mutations from "../../configuration/graphql/_mutations";


export default new GraphQLObjectType( {
  name: 'Mutation',
  fields: {

    ..._mutations,

  },
} );
