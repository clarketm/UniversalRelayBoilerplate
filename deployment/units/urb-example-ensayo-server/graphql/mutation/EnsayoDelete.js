'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphqlRelay = require('graphql-relay');
var _graphql = require('graphql');

var _ViewerType = require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2 = _interopRequireDefault(_ViewerType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'EnsayoDelete',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  outputFields: {
    deletedId: {
      type: _graphql.GraphQLID,
      resolve: ({ id }) => id },


    Viewer: {
      type: _ViewerType2.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async (
  { id },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.remove('Ensayo', { id: local_id });

    return { id };
  } }); //  weak
//# sourceMappingURL=EnsayoDelete.js.map