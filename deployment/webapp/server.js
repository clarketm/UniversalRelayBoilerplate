Object.defineProperty(exports,"__esModule",{value:true});

var _express=require('express');var _express2=_interopRequireDefault(_express);

var _logServerRequest=require('../server/logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _package=require('../configuration/package');
var _renderOnServer=require('./renderOnServer');var _renderOnServer2=_interopRequireDefault(_renderOnServer);
var _requestLoggers=require('../configuration/server/requestLoggers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



require('dotenv').load();



var assetsPath=void 0;
if(process.env.NODE_ENV=='production')
assetsPath='/assets/'+_package.version;else
{
var host=process.env.HOST||4444;
assetsPath='http://'+host+':8080/'+_package.version;
}


var app=(0,_express2.default)();


app.use(function(req,res,next){return(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerRenderOnServer);});


app.get('/*',function(req,res,next){
(0,_renderOnServer2.default)(req,res,next,assetsPath);
});exports.default=


app;
//# sourceMappingURL=server.js.map