Object.defineProperty(exports,"__esModule",{value:true});

var _graphql=require('graphql');

var _QueryType=require('./type/QueryType');var _QueryType2=_interopRequireDefault(_QueryType);
var _graphQLError=require('./graphQLError');
var _MutationType=require('./type/MutationType');var _MutationType2=_interopRequireDefault(_MutationType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var schema=new _graphql.GraphQLSchema({
query:_QueryType2.default,
mutation:_MutationType2.default});


(0,_graphQLError.maskErrors)(schema);exports.default=

schema;
//# sourceMappingURL=schema.js.map