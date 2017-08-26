Object.defineProperty(exports,"__esModule",{value:true});exports.default=






defaultRequestLoggerGraphQL;var _debug=require('../_configuration/debug');var _log=require('./log');var _log2=_interopRequireDefault(_log);var _matchInDepth=require('./matchInDepth');var _matchInDepth2=_interopRequireDefault(_matchInDepth);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function defaultRequestLoggerGraphQL(requestAndResponse){
var logLevel=null;


if(requestAndResponse.response.indexOf('"errors": [')>0)logLevel='error';else
if(
(0,_matchInDepth2.default)(requestAndResponse,_debug.debugWriteToLogServerRequestGraphQL))


logLevel='info';

if(logLevel)_log2.default.log(logLevel,'GraphQL request',requestAndResponse);
}
//# sourceMappingURL=defaultRequestLoggerGraphQL.js.map