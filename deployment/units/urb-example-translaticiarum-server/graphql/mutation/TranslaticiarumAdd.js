'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _TranslaticiarumsConnection = require('../type/TranslaticiarumsConnection');var _TranslaticiarumsConnection2 = _interopRequireDefault(_TranslaticiarumsConnection);
var _ViewerType = require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'TranslaticiarumAdd',

  inputFields: {
    Translaticiarum_Start: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Stop: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Translaticiarum_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    TranslaticiarumsEdge: {
      type: _TranslaticiarumsConnection2.default.edgeType,
      resolve: async (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) =>
      {let args = _objectWithoutProperties(_ref, []);
        const an_Object = await objectManager.getOneObject('Translaticiarum', {
          id: local_id });


        const arr = await objectManager.getObjectList('Translaticiarum', {
          Translaticiarum_User_id: objectManager.getViewerUserId() });


        return {
          cursor: objectManager.cursorForObjectInConnection(
          'Translaticiarum',
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
  {
    Translaticiarum_Start,
    Translaticiarum_Stop,
    Translaticiarum_Description },

  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('Translaticiarum', {
      Translaticiarum_User_id: objectManager.getViewerUserId(),
      Translaticiarum_Start,
      Translaticiarum_Stop,
      Translaticiarum_Description });

    return { local_id };
  } });
//# sourceMappingURL=TranslaticiarumAdd.js.map