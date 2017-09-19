'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _TranslaticiarumType = require('../type/TranslaticiarumType');var _TranslaticiarumType2 = _interopRequireDefault(_TranslaticiarumType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'TranslaticiarumUpdate',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    Translaticiarum_Start: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Stop: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    Translaticiarum: {
      type: _TranslaticiarumType2.default,
      resolve: (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) => {let args = _objectWithoutProperties(_ref, []);return (
          objectManager.getOneObject('Translaticiarum', { id: local_id }));} } },



  mutateAndGetPayload: async (
  {
    id,
    Translaticiarum_Start,
    Translaticiarum_Stop,
    Translaticiarum_Description },

  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('Translaticiarum', {
      id: local_id,
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description });


    return { local_id };
  } });
//# sourceMappingURL=TranslaticiarumUpdate.js.map