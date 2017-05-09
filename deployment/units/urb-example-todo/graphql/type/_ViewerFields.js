Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphql=require('graphql');
var _graphqlRelay=require('graphql-relay');

var _ToDosConnection=require('./ToDosConnection');var _ToDosConnection2=_interopRequireDefault(_ToDosConnection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=


{

ToDos:{
type:_ToDosConnection2.default.connectionType,
args:_extends({
status:{
type:_graphql.GraphQLString,
defaultValue:'any'}},_graphqlRelay.connectionArgs),



resolve:function resolve(obj,_ref,


context,_ref2)

{var status=_ref.status,args=_objectWithoutProperties(_ref,['status']);var objectManager=_ref2.rootValue;
return objectManager.getObjectList('ToDo',{
ToDo_User_id:objectManager.getViewerUserId()}).

then(function(arr){return(0,_graphqlRelay.connectionFromArray)(arr.filter(function(a_ToDo){return status==='any'||a_ToDo.ToDo_Complete===(status==='completed');}),args);});
}},


ToDo_TotalCount:{
type:_graphql.GraphQLInt,
resolve:function resolve(obj,_ref3,
context,_ref4){var args=_objectWithoutProperties(_ref3,[]);var
objectManager=_ref4.rootValue;return(
objectManager.getObjectList('ToDo',{
ToDo_User_id:objectManager.getViewerUserId()}).
then(function(arr){return arr.length;}));}},


ToDo_CompletedCount:{
type:_graphql.GraphQLInt,
resolve:function resolve(obj,_ref5,
context,_ref6){var args=_objectWithoutProperties(_ref5,[]);var
objectManager=_ref6.rootValue;return(
objectManager.getObjectList('ToDo',{
ToDo_User_id:objectManager.getViewerUserId()}).
then(function(arr){return arr.filter(function(a_ToDo){return a_ToDo.ToDo_Complete;}).length;}));}}};
//# sourceMappingURL=_ViewerFields.js.map