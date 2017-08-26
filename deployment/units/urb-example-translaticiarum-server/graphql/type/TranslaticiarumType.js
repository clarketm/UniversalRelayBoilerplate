Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');
var _graphqlIsoDate=require('graphql-iso-date');

var _Translaticiarum=require('../model/Translaticiarum');var _Translaticiarum2=_interopRequireDefault(_Translaticiarum);
var _NodeInterface=require('../../../../units/urb-base-server/graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'Translaticiarum',

interfaces:[_NodeInterface2.default],

isTypeOf:function isTypeOf(object){return object instanceof _Translaticiarum2.default;},

fields:{
id:(0,_graphqlRelay.globalIdField)('Translaticiarum'),
Translaticiarum_Start:{
type:_graphqlIsoDate.GraphQLDateTime,
resolve:function resolve(obj){return obj.Translaticiarum_Start;}},

Translaticiarum_Stop:{
type:_graphqlIsoDate.GraphQLDateTime,
resolve:function resolve(obj){return obj.Translaticiarum_Stop;}},

Translaticiarum_Description:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){return obj.Translaticiarum_Description;}}}});
//# sourceMappingURL=TranslaticiarumType.js.map