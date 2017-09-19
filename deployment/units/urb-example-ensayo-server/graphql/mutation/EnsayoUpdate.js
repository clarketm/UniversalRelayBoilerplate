'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _EnsayoType = require('../type/EnsayoType');var _EnsayoType2 = _interopRequireDefault(_EnsayoType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'EnsayoUpdate',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    Ensayo_Title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Ensayo_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Ensayo_Content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    Ensayo: {
      type: _EnsayoType2.default,
      resolve: (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) => {let args = _objectWithoutProperties(_ref, []);return (
          objectManager.getOneObject('Ensayo', { id: local_id }));} } },



  mutateAndGetPayload: async (
  { id, Ensayo_Title, Ensayo_Description, Ensayo_Content },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('Ensayo', {
      id: local_id,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content });


    return { local_id };
  } });
//# sourceMappingURL=EnsayoUpdate.js.map