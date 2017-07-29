Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _EnsayoType=require('../type/EnsayoType');var _EnsayoType2=_interopRequireDefault(_EnsayoType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'EnsayoUpdate',
inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
Ensayo_Content:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Ensayo_Title:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Ensayo_Description:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},

outputFields:{
Ensayo:{
type:_EnsayoType2.default,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;return(
objectManager.getOneObject('Ensayo',{id:local_id}));}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref4,

context,_ref5)

{var id=_ref4.id,Ensayo_Content=_ref4.Ensayo_Content,Ensayo_Title=_ref4.Ensayo_Title,Ensayo_Description=_ref4.Ensayo_Description;var objectManager=_ref5.rootValue;
var local_id=(0,_graphqlRelay.fromGlobalId)(id).id;
return objectManager.
update('Ensayo',{
id:local_id,
Ensayo_Content:Ensayo_Content,
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description}).

then(function(){return{local_id:local_id};});
}});
//# sourceMappingURL=EnsayoUpdate.js.map