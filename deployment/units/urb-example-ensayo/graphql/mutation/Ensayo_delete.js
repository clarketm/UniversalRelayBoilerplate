Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ViewerType=require('../../../../graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


(0,_graphqlRelay.mutationWithClientMutationId)({
name:'Ensayo_delete',
inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)}},

outputFields:{
deletedEnsayoId:{
type:_graphql.GraphQLID,
resolve:function resolve(_ref){var id=_ref.id;return id;}},

Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref2){var objectManager=_ref2.rootValue;return objectManager.getOneObject('User',{id:objectManager.getViewerUserId()});}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref3,context,_ref4)
{var id=_ref3.id;var objectManager=_ref4.rootValue;
var local_id=(0,_graphqlRelay.fromGlobalId)(id).id;
return objectManager.remove('Ensayo',{id:local_id}).
then(function(){return{id:id};});

}});
//# sourceMappingURL=Ensayo_delete.js.map