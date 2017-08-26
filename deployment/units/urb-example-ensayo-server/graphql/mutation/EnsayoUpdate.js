Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _EnsayoType=require('../type/EnsayoType');var _EnsayoType2=_interopRequireDefault(_EnsayoType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'EnsayoUpdate',

inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
Ensayo_Title:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Ensayo_Description:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Ensayo_Content:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},


outputFields:{
Ensayo:{
type:_EnsayoType2.default,
resolve:function resolve(_ref,_ref2,


context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var
objectManager=_ref3.rootValue;return(
objectManager.getOneObject('Ensayo',{id:local_id}));}}},



mutateAndGetPayload:function mutateAndGetPayload(_ref4,

context,_ref5){var id=_ref4.id,Ensayo_Title=_ref4.Ensayo_Title,Ensayo_Description=_ref4.Ensayo_Description,Ensayo_Content=_ref4.Ensayo_Content;var
objectManager=_ref5.rootValue;var local_id;return regeneratorRuntime.async(function mutateAndGetPayload$(_context){while(1){switch(_context.prev=_context.next){case 0:

local_id=(0,_graphqlRelay.fromGlobalId)(id).id;_context.next=3;return regeneratorRuntime.awrap(

objectManager.update('Ensayo',{
id:local_id,
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content}));case 3:return _context.abrupt('return',


{local_id:local_id});case 4:case'end':return _context.stop();}}},null,_this);}});
//# sourceMappingURL=EnsayoUpdate.js.map