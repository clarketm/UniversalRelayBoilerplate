'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _NodeInterface = require('../NodeInterface');var _NodeInterface2 = _interopRequireDefault(_NodeInterface);

var _ViewerType = require('./ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak

function resolveNodeField(source, args, context, { rootValue: objectManager }) {
  // the node field will receive a globally
  // unique id, and here we convert that back
  // to the local type and id
  const { id, type } = (0, _graphqlRelay.fromGlobalId)(args.id);

  // map the local type and id into the
  // actual data for the record
  if (type === 'Viewer') return objectManager.getOneObject('User', { id: id });else
  return objectManager.getOneObject(type, { id: id });
}exports.default =

new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: {
      type: _NodeInterface2.default,
      args: {
        id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },

      resolve: resolveNodeField },

    Viewer: {
      type: _ViewerType2.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } }) });
//# sourceMappingURL=QueryType.js.map