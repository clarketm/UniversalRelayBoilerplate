'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _InscriptiosConnection = require('../type/InscriptiosConnection');var _InscriptiosConnection2 = _interopRequireDefault(_InscriptiosConnection);
var _ViewerType = require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'InscriptioAdd',

  inputFields: {
    Inscriptio_LocationLat: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_LocationLon: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Inscriptio_Notes: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    InscriptiosEdge: {
      type: _InscriptiosConnection2.default.edgeType,
      resolve: async (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) =>
      {let args = _objectWithoutProperties(_ref, []);
        const an_Object = await objectManager.getOneObject('Inscriptio', {
          id: local_id });


        const arr = await objectManager.getObjectList('Inscriptio', {
          Inscriptio_User_id: objectManager.getViewerUserId() });


        return {
          cursor: objectManager.cursorForObjectInConnection(
          'Inscriptio',
          arr,
          an_Object),

          node: an_Object };

      } },


    Viewer: {
      type: _ViewerType2.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async (
  { Inscriptio_LocationLat, Inscriptio_LocationLon, Inscriptio_Notes },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('Inscriptio', {
      Inscriptio_User_id: objectManager.getViewerUserId(),
      Inscriptio_LocationLat,
      Inscriptio_LocationLon,
      Inscriptio_Notes });

    return { local_id };
  } });
//# sourceMappingURL=InscriptioAdd.js.map