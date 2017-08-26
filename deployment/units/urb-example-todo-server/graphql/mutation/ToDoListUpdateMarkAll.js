Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ToDoListUpdateMarkAll=require('../helper/ToDoListUpdateMarkAll');var _ToDoListUpdateMarkAll2=_interopRequireDefault(_ToDoListUpdateMarkAll);
var _ToDoType=require('../type/ToDoType');var _ToDoType2=_interopRequireDefault(_ToDoType);
var _ViewerType=require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'ToDoListUpdateMarkAll',

inputFields:{
ToDo_Complete:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)}},


outputFields:{
changedToDos:{
type:new _graphql.GraphQLList(_ToDoType2.default),
resolve:function resolve(_ref,

args,
context,_ref2){var arr_local_ids_Changed_ToDos=_ref.arr_local_ids_Changed_ToDos;var
objectManager=_ref2.rootValue;return(

arr_local_ids_Changed_ToDos.map(function(local_id){return(
objectManager.getOneObject('ToDo',{id:local_id}));}));}},



Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref3){var objectManager=_ref3.rootValue;return(
objectManager.getOneObject('User',{
id:objectManager.getViewerUserId()}));}}},




mutateAndGetPayload:function mutateAndGetPayload(_ref4,

context,_ref5){var ToDo_Complete=_ref4.ToDo_Complete;var
objectManager=_ref5.rootValue;var arr_local_ids_Changed_ToDos;return regeneratorRuntime.async(function mutateAndGetPayload$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(

(0,_ToDoListUpdateMarkAll2.default)(
objectManager,
ToDo_Complete));case 2:arr_local_ids_Changed_ToDos=_context.sent;return _context.abrupt('return',


{arr_local_ids_Changed_ToDos:arr_local_ids_Changed_ToDos});case 4:case'end':return _context.stop();}}},null,_this);}});
//# sourceMappingURL=ToDoListUpdateMarkAll.js.map