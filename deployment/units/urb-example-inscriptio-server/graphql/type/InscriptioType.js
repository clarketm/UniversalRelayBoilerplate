Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _Inscriptio=require('../model/Inscriptio');var _Inscriptio2=_interopRequireDefault(_Inscriptio);
var _NodeInterface=require('../../../../units/urb-base-server/graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'Inscriptio',

interfaces:[_NodeInterface2.default],

isTypeOf:function isTypeOf(object){return object instanceof _Inscriptio2.default;},

fields:{
id:(0,_graphqlRelay.globalIdField)('Inscriptio'),
Inscriptio_LocationLat:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){return obj.Inscriptio_LocationLat;}},

Inscriptio_LocationLon:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){return obj.Inscriptio_LocationLon;}},

Inscriptio_Notes:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){return obj.Inscriptio_Notes;}}}});
//# sourceMappingURL=InscriptioType.js.map