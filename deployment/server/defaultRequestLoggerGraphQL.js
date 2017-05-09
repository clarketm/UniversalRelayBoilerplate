Object.defineProperty(exports,"__esModule",{value:true});exports.default=
















defaultRequestLoggerGraphQL;var _log=require('./log');var _log2=_interopRequireDefault(_log);var _matchInDepth=require('../scripts/matchInDepth');var _matchInDepth2=_interopRequireDefault(_matchInDepth);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();var condition=JSON.parse(process.env.TRACE_CONDITION_REQUEST_GRAPHQL);function defaultRequestLoggerGraphQL(requestAndResponse){
var logLevel=null;


if(requestAndResponse.response.indexOf('"errors": [')>0)
logLevel='error';else

if((0,_matchInDepth2.default)(requestAndResponse,condition))
logLevel='info';

if(logLevel)
_log2.default.log(logLevel,'GraphQL request',requestAndResponse);
}
//# sourceMappingURL=defaultRequestLoggerGraphQL.js.map