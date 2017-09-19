'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphql = require('graphql');
var _graphqlRelay = require('graphql-relay');

var _defaultPersister = require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2 = _interopRequireDefault(_defaultPersister);
var _NodeInterface = require('../NodeInterface');var _NodeInterface2 = _interopRequireDefault(_NodeInterface);
var _ViewerFields2 = require('../../../_configuration/urb-base-server/graphql/_ViewerFields');var _ViewerFields3 = _interopRequireDefault(_ViewerFields2);
var _User = require('../../../_configuration/urb-base-server/graphql/model/User');var _User2 = _interopRequireDefault(_User);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

new _graphql.GraphQLObjectType({
  name: 'Viewer',
  interfaces: [_NodeInterface2.default],
  isTypeOf: object => object instanceof _User2.default,
  fields: Object.assign({
    id: (0, _graphqlRelay.globalIdField)('Viewer'),
    User_IsAnonymous: {
      type: _graphql.GraphQLBoolean,
      resolve: obj =>
      _defaultPersister2.default.uuidEquals(obj.id, _defaultPersister2.default.uuidNull()) },

    UserToken2: { type: _graphql.GraphQLString, resolve: obj => obj.UserToken2 },
    User_DisplayName: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.User_DisplayName },

    User_Email: { type: _graphql.GraphQLString, resolve: obj => obj.User_Email },
    User_PhoneNumberMobile: {
      type: _graphql.GraphQLString,
      resolve: obj => obj.User_PhoneNumberMobile } }, _ViewerFields3.default) });
//# sourceMappingURL=ViewerType.js.map