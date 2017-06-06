Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ToDosConnection=require('../type/ToDosConnection');var _ToDosConnection2=_interopRequireDefault(_ToDosConnection);
var _ViewerType=require('../../../../graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'ToDo_add',
inputFields:{
ToDo_Text:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},

outputFields:{
ToDosEdge:{
type:_ToDosConnection2.default.edgeType,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;
var an_Object=void 0;
return objectManager.
getOneObject('ToDo',{id:local_id}).
then(function(retrieved_Object){
an_Object=retrieved_Object;
}).
then(function(){return(
objectManager.getObjectList('ToDo',{ToDo_User_id:objectManager.getViewerUserId()}));}).

then(function(arr){return{
cursor:objectManager.cursorForObjectInConnection('ToDo',arr,an_Object),
node:an_Object};});

}},

Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref4){var objectManager=_ref4.rootValue;return(
objectManager.getOneObject('User',{id:objectManager.getViewerUserId()}));}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref5,context,_ref6){var ToDo_Text=_ref5.ToDo_Text;var objectManager=_ref6.rootValue;return(
objectManager.
add('ToDo',{
ToDo_User_id:objectManager.getViewerUserId(),
ToDo_Text:ToDo_Text,
ToDo_Complete:false}).

then(function(local_id){return{local_id:local_id};}));}});
//# sourceMappingURL=ToDo_add.js.map