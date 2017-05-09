Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _GraphQLDateTime=require('../../../../graphql/type/GraphQLDateTime');var _GraphQLDateTime2=_interopRequireDefault(_GraphQLDateTime);

var _TranslaticiarumType=require('../type/TranslaticiarumType');var _TranslaticiarumType2=_interopRequireDefault(_TranslaticiarumType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'Translaticiarum_update',
inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
Translaticiarum_Type:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLInt)},
Translaticiarum_Date:{type:new _graphql.GraphQLNonNull(_GraphQLDateTime2.default)},
Translaticiarum_Time:{type:new _graphql.GraphQLNonNull(_GraphQLDateTime2.default)}},

outputFields:{
Translaticiarum:{
type:_TranslaticiarumType2.default,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;return objectManager.getOneObject('Translaticiarum',{id:local_id});}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref4,context,_ref5){var id=_ref4.id,Translaticiarum_Type=_ref4.Translaticiarum_Type,Translaticiarum_Date=_ref4.Translaticiarum_Date,Translaticiarum_Time=_ref4.Translaticiarum_Time;var objectManager=_ref5.rootValue;
var local_id=(0,_graphqlRelay.fromGlobalId)(id).id;
return objectManager.update('Translaticiarum',{
id:local_id,
Translaticiarum_Type:Translaticiarum_Type,
Translaticiarum_Date:Translaticiarum_Date,
Translaticiarum_Time:Translaticiarum_Time}).

then(function(){return{local_id:local_id};});

}});
//# sourceMappingURL=Translaticiarum_update.js.map