'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphql = require('graphql');
var _graphqlRelay = require('graphql-relay');

var _ToDosConnection = require('./ToDosConnection');var _ToDosConnection2 = _interopRequireDefault(_ToDosConnection);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
{
  ToDos: {
    type: _ToDosConnection2.default.connectionType,

    args: Object.assign({
      status: {
        type: _graphql.GraphQLString,
        defaultValue: 'any' } }, _graphqlRelay.connectionArgs),




    resolve: async (
    obj, _ref,

    context,
    { rootValue: objectManager }) =>
    {let { status } = _ref,args = _objectWithoutProperties(_ref, ['status']);
      const arr = await objectManager.getObjectList('ToDo', {
        ToDo_User_id: objectManager.getViewerUserId() });


      return (0, _graphqlRelay.connectionFromArray)(
      arr.filter(
      a_ToDo =>
      status === 'any' ||
      a_ToDo.ToDo_Complete === (status === 'completed')),

      args);

    } },


  ToDo_TotalCount: {
    type: _graphql.GraphQLInt,

    resolve: async (
    obj, _ref2,

    context,
    { rootValue: objectManager }) =>
    {let args = _objectWithoutProperties(_ref2, []);
      const arr = await objectManager.getObjectList('ToDo', {
        ToDo_User_id: objectManager.getViewerUserId() });


      return arr.length;
    } },


  ToDo_CompletedCount: {
    type: _graphql.GraphQLInt,

    resolve: async (
    obj, _ref3,

    context,
    { rootValue: objectManager }) =>
    {let args = _objectWithoutProperties(_ref3, []);
      const arr = await objectManager.getObjectList('ToDo', {
        ToDo_User_id: objectManager.getViewerUserId() });


      return arr.filter(a_ToDo => a_ToDo.ToDo_Complete).length;
    } } };
//# sourceMappingURL=_ViewerFields.js.map