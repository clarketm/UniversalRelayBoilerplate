'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _ToDoType = require('../type/ToDoType');var _ToDoType2 = _interopRequireDefault(_ToDoType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'ToDoUpdateRename',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    ToDo_Text: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    ToDo: {
      type: _ToDoType2.default,
      resolve: (
      { local_id }, _ref,

      context,
      { rootValue: objectManager }) => {let args = _objectWithoutProperties(_ref, []);return (
          objectManager.getOneObject('ToDo', { id: local_id }));} } },



  mutateAndGetPayload: async (
  { id, ToDo_Text },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.update('ToDo', {
      id: local_id,
      ToDo_Text });


    return { local_id };
  } });
//# sourceMappingURL=ToDoUpdateRename.js.map