'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _ToDosConnection = require('../type/ToDosConnection');var _ToDosConnection2 = _interopRequireDefault(_ToDosConnection);
var _ViewerType = require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'ToDoAdd',

  inputFields: {
    ToDo_Text: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    ToDosEdge: {
      type: _ToDosConnection2.default.edgeType,
      resolve: async (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) =>
      {let args = _objectWithoutProperties(_ref, []);
        const an_Object = await objectManager.getOneObject('ToDo', {
          id: local_id });


        const arr = await objectManager.getObjectList('ToDo', {
          ToDo_User_id: objectManager.getViewerUserId() });


        return {
          cursor: objectManager.cursorForObjectInConnection(
          'ToDo',
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
  { ToDo_Text },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('ToDo', {
      ToDo_User_id: objectManager.getViewerUserId(),
      ToDo_Text,
      ToDo_Complete: false });

    return { local_id };
  } });
//# sourceMappingURL=ToDoAdd.js.map