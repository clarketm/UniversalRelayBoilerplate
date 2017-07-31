Object.defineProperty(exports,"__esModule",{value:true});exports.default=













defaultrequestLoggerRenderOnServer;var _log=require('./log');var _log2=_interopRequireDefault(_log);var _matchInDepth=require('./matchInDepth');var _matchInDepth2=_interopRequireDefault(_matchInDepth);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();var condition=JSON.parse(process.env.TRACE_CONDITION_REQUEST_RENDER_ON_SERVER);function defaultrequestLoggerRenderOnServer(requestAndResponse){
var logLevel=null;







if((0,_matchInDepth2.default)(requestAndResponse,condition))logLevel='info';

if(logLevel)_log2.default.log(logLevel,'Render on server request',requestAndResponse);
}
//# sourceMappingURL=defaultRequestLoggerRenderOnServer.js.map