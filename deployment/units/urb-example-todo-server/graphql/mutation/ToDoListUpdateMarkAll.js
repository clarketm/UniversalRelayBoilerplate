'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _ToDoListUpdateMarkAll = require('../helper/ToDoListUpdateMarkAll');var _ToDoListUpdateMarkAll2 = _interopRequireDefault(_ToDoListUpdateMarkAll);
var _ToDoType = require('../type/ToDoType');var _ToDoType2 = _interopRequireDefault(_ToDoType);
var _ViewerType = require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'ToDoListUpdateMarkAll',

  inputFields: {
    ToDo_Complete: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean) } },


  outputFields: {
    changedToDos: {
      type: new _graphql.GraphQLList(_ToDoType2.default),
      resolve: (
      { arr_local_ids_Changed_ToDos },
      args,
      context,
      { rootValue: objectManager }) =>

      arr_local_ids_Changed_ToDos.map(local_id =>
      objectManager.getOneObject('ToDo', { id: local_id })) },



    Viewer: {
      type: _ViewerType2.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async (
  { ToDo_Complete },
  context,
  { rootValue: objectManager }) =>
  {
    const arr_local_ids_Changed_ToDos = await (0, _ToDoListUpdateMarkAll2.default)(
    objectManager,
    ToDo_Complete);


    return { arr_local_ids_Changed_ToDos };
  } }); //  weak
//# sourceMappingURL=ToDoListUpdateMarkAll.js.map