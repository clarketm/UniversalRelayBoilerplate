'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _graphql = require('graphql');
var _graphqlRelay = require('graphql-relay');





var _EnsayosConnection = require('./EnsayosConnection');var _EnsayosConnection2 = _interopRequireDefault(_EnsayosConnection);
var _EnsayoType = require('./EnsayoType');var _EnsayoType2 = _interopRequireDefault(_EnsayoType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} //  weak
exports.default =
{
  Ensayos: {
    type: _EnsayosConnection2.default.connectionType,

    args: Object.assign({}, _graphqlRelay.connectionArgs),

    resolve: async (
    obj, _ref,

    context,
    { rootValue: objectManager }) =>
    {let args = _objectWithoutProperties(_ref, []);
      const arr = await objectManager.getObjectList('Ensayo', {
        Ensayo_User_id: objectManager.getViewerUserId() });


      return (0, _graphqlRelay.connectionFromArray)(arr, args);
    } },


  Ensayo: {
    type: _EnsayoType2.default,

    args: Object.assign({ id: { type: _graphql.GraphQLID } }),

    resolve: (parent, { id }, context, { rootValue: objectManager }) =>
    objectManager.getOneObject('Ensayo', { id: (0, _graphqlRelay.fromGlobalId)(id).id }) } };
//# sourceMappingURL=_ViewerFields.js.map