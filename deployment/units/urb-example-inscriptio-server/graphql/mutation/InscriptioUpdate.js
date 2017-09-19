'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _InscriptioType = require('../type/InscriptioType');var _InscriptioType2 = _interopRequireDefault(_InscriptioType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'InscriptioUpdate',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    Inscriptio_LocationLat: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_LocationLon: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_Notes: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    Inscriptio: {
      type: _InscriptioType2.default,
      resolve: (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) => {let args = _objectWithoutProperties(_ref, []);return (
          objectManager.getOneObject('Inscriptio', { id: local_id }));} } },



  mutateAndGetPayload: async (
  { id, Inscriptio_LocationLat, Inscriptio_LocationLon, Inscriptio_Notes },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('Inscriptio', {
      id: local_id,
      Inscriptio_LocationLat,
      Inscriptio_LocationLon,
      Inscriptio_Notes });


    return { local_id };
  } });
//# sourceMappingURL=InscriptioUpdate.js.map