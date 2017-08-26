Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _NodeInterface=require('../NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);

var _ViewerType=require('./ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function resolveNodeField(source,args,context,_ref){var objectManager=_ref.rootValue;var _fromGlobalId=



(0,_graphqlRelay.fromGlobalId)(args.id),id=_fromGlobalId.id,type=_fromGlobalId.type;



if(type==='Viewer')return objectManager.getOneObject('User',{id:id});else
return objectManager.getOneObject(type,{id:id});
}exports.default=

new _graphql.GraphQLObjectType({
name:'Query',
fields:function fields(){return{
node:{
type:_NodeInterface2.default,
args:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)}},

resolve:resolveNodeField},

Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref2){var objectManager=_ref2.rootValue;return(
objectManager.getOneObject('User',{
id:objectManager.getViewerUserId()}));}}};}});
//# sourceMappingURL=QueryType.js.map