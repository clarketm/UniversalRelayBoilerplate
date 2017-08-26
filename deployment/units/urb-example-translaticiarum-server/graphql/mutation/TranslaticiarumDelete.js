Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ViewerType=require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'TranslaticiarumDelete',

inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)}},


outputFields:{
deletedId:{
type:_graphql.GraphQLID,
resolve:function resolve(_ref){var id=_ref.id;return id;}},


Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref2){var objectManager=_ref2.rootValue;return(
objectManager.getOneObject('User',{
id:objectManager.getViewerUserId()}));}}},




mutateAndGetPayload:function mutateAndGetPayload(_ref3,

context,_ref4){var id=_ref3.id;var
objectManager=_ref4.rootValue;var local_id;return regeneratorRuntime.async(function mutateAndGetPayload$(_context){while(1){switch(_context.prev=_context.next){case 0:

local_id=(0,_graphqlRelay.fromGlobalId)(id).id;_context.next=3;return regeneratorRuntime.awrap(

objectManager.remove('Translaticiarum',{id:local_id}));case 3:return _context.abrupt('return',

{id:id});case 4:case'end':return _context.stop();}}},null,_this);}});
//# sourceMappingURL=TranslaticiarumDelete.js.map