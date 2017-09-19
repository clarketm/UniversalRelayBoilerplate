'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphql = require('graphql');

var _mutations2 = require('../../../_configuration/urb-base-server/graphql/_mutations');var _mutations3 = _interopRequireDefault(_mutations2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

new _graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign({}, _mutations3.default) });
//# sourceMappingURL=MutationType.js.map