Object.defineProperty(exports,"__esModule",{value:true});exports.default=






defaultrequestLoggerAuth;var _debug=require('../_configuration/debug');var _log=require('./log');var _log2=_interopRequireDefault(_log);var _matchInDepth=require('./matchInDepth');var _matchInDepth2=_interopRequireDefault(_matchInDepth);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function defaultrequestLoggerAuth(requestAndResponse){
var logLevel=null;







if((0,_matchInDepth2.default)(requestAndResponse,_debug.debugWriteToLogServerRequestAuth))
logLevel='info';

if(logLevel)_log2.default.log(logLevel,'Auth request',requestAndResponse);
}
//# sourceMappingURL=defaultRequestLoggerAuth.js.map