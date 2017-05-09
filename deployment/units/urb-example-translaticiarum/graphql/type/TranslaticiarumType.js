Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _GraphQLDateTime=require('../../../../graphql/type/GraphQLDateTime');var _GraphQLDateTime2=_interopRequireDefault(_GraphQLDateTime);
var _NodeInterface=require('../../../../graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);

var _Translaticiarum=require('../model/Translaticiarum');var _Translaticiarum2=_interopRequireDefault(_Translaticiarum);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'Translaticiarum',
interfaces:[_NodeInterface2.default],
isTypeOf:function isTypeOf(object){return object instanceof _Translaticiarum2.default;},
fields:{
id:(0,_graphqlRelay.globalIdField)('Translaticiarum'),
Translaticiarum_Date:{type:_GraphQLDateTime2.default,resolve:function resolve(obj){return obj.Translaticiarum_Date;}},
Translaticiarum_Time:{type:_GraphQLDateTime2.default,resolve:function resolve(obj){return obj.Translaticiarum_Time;}},
Translaticiarum_Type:{type:_graphql.GraphQLInt,resolve:function resolve(obj){return obj.Translaticiarum_Type;}}}});
//# sourceMappingURL=TranslaticiarumType.js.map