'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _EnsayosConnection = require('../type/EnsayosConnection');var _EnsayosConnection2 = _interopRequireDefault(_EnsayosConnection);
var _ViewerType = require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'EnsayoAdd',

  inputFields: {
    Ensayo_Title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Ensayo_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Ensayo_Content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    EnsayosEdge: {
      type: _EnsayosConnection2.default.edgeType,
      resolve: async (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) =>
      {let args = _objectWithoutProperties(_ref, []);
        const an_Object = await objectManager.getOneObject('Ensayo', {
          id: local_id });


        const arr = await objectManager.getObjectList('Ensayo', {
          Ensayo_User_id: objectManager.getViewerUserId() });


        return {
          cursor: objectManager.cursorForObjectInConnection(
          'Ensayo',
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
  { Ensayo_Title, Ensayo_Description, Ensayo_Content },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('Ensayo', {
      Ensayo_User_id: objectManager.getViewerUserId(),
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content });

    return { local_id };
  } });
//# sourceMappingURL=EnsayoAdd.js.map