Object.defineProperty(exports,"__esModule",{value:true});

var _graphql=require('graphql');

var _QueryType=require('./type/QueryType');var _QueryType2=_interopRequireDefault(_QueryType);
var _graphQLError=require('./graphQLError');
var _MutationType=require('./type/MutationType');var _MutationType2=_interopRequireDefault(_MutationType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var schema=new _graphql.GraphQLSchema({
query:_QueryType2.default,
mutation:_MutationType2.default});


(0,_graphQLError.maskErrors)(schema);var _default=

schema;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(schema,'schema','units/urb-base-server/graphql/schema.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-base-server/graphql/schema.js');}();;
//# sourceMappingURL=schema.js.map