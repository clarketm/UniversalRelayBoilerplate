Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _TranslaticiarumsConnection=require('../type/TranslaticiarumsConnection');var _TranslaticiarumsConnection2=_interopRequireDefault(_TranslaticiarumsConnection);
var _ViewerType=require('../../../../units/urb-base-server/graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'TranslaticiarumAdd',

inputFields:{
Translaticiarum_Start:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Translaticiarum_Stop:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Translaticiarum_Description:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},


outputFields:{
TranslaticiarumsEdge:{
type:_TranslaticiarumsConnection2.default.edgeType,
resolve:function resolve(_ref,_ref2,


context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var
objectManager=_ref3.rootValue;var an_Object,arr;return regeneratorRuntime.async(function resolve$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(

objectManager.getOneObject('Translaticiarum',{
id:local_id}));case 2:an_Object=_context.sent;_context.next=5;return regeneratorRuntime.awrap(


objectManager.getObjectList('Translaticiarum',{
Translaticiarum_User_id:objectManager.getViewerUserId()}));case 5:arr=_context.sent;return _context.abrupt('return',


{
cursor:objectManager.cursorForObjectInConnection(
'Translaticiarum',
arr,
an_Object),

node:an_Object});case 7:case'end':return _context.stop();}}},null,_this);}},




Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref4){var objectManager=_ref4.rootValue;return(
objectManager.getOneObject('User',{
id:objectManager.getViewerUserId()}));}}},




mutateAndGetPayload:function mutateAndGetPayload(_ref5,





context,_ref6){var Translaticiarum_Start=_ref5.Translaticiarum_Start,Translaticiarum_Stop=_ref5.Translaticiarum_Stop,Translaticiarum_Description=_ref5.Translaticiarum_Description;var
objectManager=_ref6.rootValue;var local_id;return regeneratorRuntime.async(function mutateAndGetPayload$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(

objectManager.add('Translaticiarum',{
Translaticiarum_User_id:objectManager.getViewerUserId(),
Translaticiarum_Start:Translaticiarum_Start,
Translaticiarum_Stop:Translaticiarum_Stop,
Translaticiarum_Description:Translaticiarum_Description}));case 2:local_id=_context2.sent;return _context2.abrupt('return',

{local_id:local_id});case 4:case'end':return _context2.stop();}}},null,_this);}});
//# sourceMappingURL=TranslaticiarumAdd.js.map