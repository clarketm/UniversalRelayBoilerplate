Object.defineProperty(exports,"__esModule",{value:true});

var _express=require('express');var _express2=_interopRequireDefault(_express);

var _logServerRequest=require('../server/logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _renderOnServer=require('./renderOnServer');var _renderOnServer2=_interopRequireDefault(_renderOnServer);
var _requestLoggers=require('../configuration/server/requestLoggers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var app=(0,_express2.default)();


app.use(function(req,res,next){return(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerRenderOnServer);});


app.get('/*',function(req,res,next){
(0,_renderOnServer2.default)(req,res,next);
});exports.default=


app;
//# sourceMappingURL=server.js.map