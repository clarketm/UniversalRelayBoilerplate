Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _GraphQLDateTime=require('../../../../graphql/type/GraphQLDateTime');var _GraphQLDateTime2=_interopRequireDefault(_GraphQLDateTime);

var _TranslaticiarumsConnection=require('../type/TranslaticiarumsConnection');var _TranslaticiarumsConnection2=_interopRequireDefault(_TranslaticiarumsConnection);
var _ViewerType=require('../../../../graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'Translaticiarum_add',
inputFields:{
Translaticiarum_Type:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLInt)},
Translaticiarum_Date:{type:new _graphql.GraphQLNonNull(_GraphQLDateTime2.default)},
Translaticiarum_Time:{type:new _graphql.GraphQLNonNull(_GraphQLDateTime2.default)}},

outputFields:{
TranslaticiarumsEdge:{
type:_TranslaticiarumsConnection2.default.edgeType,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;
var an_Object=void 0;
return objectManager.
getOneObject('Translaticiarum',{id:local_id}).
then(function(retrieved_Object){
an_Object=retrieved_Object;
}).
then(function(){return(
objectManager.getObjectList('Translaticiarum',{
Translaticiarum_User_id:objectManager.getViewerUserId()}));}).


then(function(arr){return{
cursor:objectManager.cursorForObjectInConnection('Translaticiarum',arr,an_Object),
node:an_Object};});

}},

Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref4){var objectManager=_ref4.rootValue;return(
objectManager.getOneObject('User',{id:objectManager.getViewerUserId()}));}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref5,

context,_ref6){var Translaticiarum_Type=_ref5.Translaticiarum_Type,Translaticiarum_Date=_ref5.Translaticiarum_Date,Translaticiarum_Time=_ref5.Translaticiarum_Time;var
objectManager=_ref6.rootValue;return(

objectManager.
add('Translaticiarum',{
Translaticiarum_User_id:objectManager.getViewerUserId(),
Translaticiarum_Type:Translaticiarum_Type,
Translaticiarum_Date:Translaticiarum_Date,
Translaticiarum_Time:Translaticiarum_Time}).

then(function(local_id){return{local_id:local_id};}));}});
//# sourceMappingURL=Translaticiarum_add.js.map