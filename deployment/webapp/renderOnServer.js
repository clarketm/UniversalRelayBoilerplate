Object.defineProperty(exports,"__esModule",{value:true});var _this=this;exports.


































serveFailure=serveFailure;var _reactHelmet=require('react-helmet');var _reactHelmet2=_interopRequireDefault(_reactHelmet);var _isomorphicRelayRouter=require('isomorphic-relay-router');var _isomorphicRelayRouter2=_interopRequireDefault(_isomorphicRelayRouter);var _mobileDetect=require('mobile-detect');var _mobileDetect2=_interopRequireDefault(_mobileDetect);var _path=require('path');var _path2=_interopRequireDefault(_path);var _react=require('react');var _react2=_interopRequireDefault(_react);var _server=require('react-dom/server');var _server2=_interopRequireDefault(_server);var _relayLocalSchema=require('relay-local-schema');var _relayLocalSchema2=_interopRequireDefault(_relayLocalSchema);var _reactRouter=require('react-router');var _checkCredentials=require('../server/checkCredentials');var _isomorphicVars=require('../configuration/webapp/scripts/isomorphicVars');var _isomorphicVars2=_interopRequireDefault(_isomorphicVars);var _siteSettings=require('../configuration/webapp/siteSettings');var _log=require('../server/log');var _log2=_interopRequireDefault(_log);var _ObjectManager=require('../graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);var _muiTheme=require('../configuration/webapp/muiTheme');var _muiTheme2=_interopRequireDefault(_muiTheme);var _routes=require('../configuration/webapp/routes');var _routes2=_interopRequireDefault(_routes);var _schema=require('../graphql/schema');var _schema2=_interopRequireDefault(_schema);var _package=require('../configuration/package');var _Wrapper=require('../configuration/webapp/components/Wrapper');var _Wrapper2=_interopRequireDefault(_Wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();var isoVars=JSON.stringify((0,_isomorphicVars2.default)());var httpError500FileName=_path2.default.resolve(__dirname,'../configuration/server/httpError/500.html');var httpError404FileName=_path2.default.resolve(__dirname,'../configuration/server/httpError/404.html');function serveFailure(type,res,message,err){
_log2.default.log(type,'Server error: '+message,err);
res.status(500).sendFile(httpError500FileName);
}exports.default=


function _callee(req,res,next){var assetsPath,siteInformation,host,port_webpack;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:

assetsPath=void 0;_context.next=3;return regeneratorRuntime.awrap(

(0,_siteSettings.getSiteInformation)(req,res));case 3:siteInformation=_context.sent;
if(siteInformation){

if(process.env.NODE_ENV==='production'){

assetsPath=siteInformation.isSiteBuilderDisabled||siteInformation.inEditingMode?'/assets/'+_package.version:'/assets-site/'+_package.version+'.'+



siteInformation.configurationAsObject.version;

}else{


host=process.env.HOST;
port_webpack=process.env.PORT_WEBPACK;
assetsPath='http://'+host+':'+port_webpack+'/'+_package.version;
}

(0,_reactRouter.match)({routes:_routes2.default,location:req.originalUrl},function(error,redirectLocation,renderProps){
if(error)
next(error);else
if(redirectLocation)
res.redirect(302,redirectLocation.pathname+redirectLocation.search);else
if(renderProps)
reunderOnServerCorrectRequest(req,res,next,assetsPath,renderProps,siteInformation);else

res.status(404).sendFile(httpError404FileName);
});
}case 5:case'end':return _context.stop();}}},null,_this);};


function reunderOnServerCorrectRequest(req,res,next,assetsPath,renderProps,siteInformation){


var objectManager=new _ObjectManager2.default();


objectManager.setSiteInformation(siteInformation);

(0,_checkCredentials.getUserByCookie)(objectManager,req,res).
then(function(){


res.codeFoundriesInjected={user:objectManager.getOneObject('User',{id:objectManager.getViewerUserId()})};
}).
then(function(){

try{

var networkLayer=new _relayLocalSchema2.default.NetworkLayer({
schema:_schema2.default,
rootValue:objectManager,
onError:function onError(errors,request){return serveFailure('error',res,'Local network layer GraphQL failure',{errors:errors,request:request});}});


function render(_ref){var data=_ref.data,props=_ref.props;
try{


global.navigator={userAgent:req.headers['user-agent']};


var md=new _mobileDetect2.default(req.headers['user-agent']);

var innerWidth=void 0;
if(md.phone())
innerWidth=700;else
if(md.tablet())
innerWidth=900;else

innerWidth=1100;


global.window={innerWidth:innerWidth};


global.location={pathname:req.originalUrl};


var isomorphicResponse=_isomorphicRelayRouter2.default.render(props);
var reactOutput=_server2.default.renderToString(
_react2.default.createElement(_Wrapper2.default,{
innerWidth:innerWidth},

isomorphicResponse));


var helmet=_reactHelmet2.default.rewind();

res.render(_path2.default.resolve(__dirname,'renderOnServer.ejs'),{
preloadedData:JSON.stringify(data).replace(/\//g,'\\/'),
assetsPath:assetsPath,
reactOutput:reactOutput,
title:helmet.title,
meta:helmet.meta,
link:helmet.link,
backgroundColor:_muiTheme2.default.palette.backCanvas.viewportBackgroundColor,
isomorphicVars:isoVars,
configurationAsObject:JSON.stringify(siteInformation.inEditingMode||process.env.NODE_ENV=='development'?siteInformation.configurationAsObject:{


appData:siteInformation.configurationAsObject.appData}),

NODE_ENV:process.env.NODE_ENV});

}catch(err){
serveFailure('error',res,'renderOnServer render funcion failed',err);
}
}

_isomorphicRelayRouter2.default.prepareData(renderProps,networkLayer).then(render,next);
}catch(err){
serveFailure('error',res,'renderOnServer failed',err);
}
}).
catch(function(error){return(0,_checkCredentials.serveAuthenticationFailed)(req,res,error,false);});
}
//# sourceMappingURL=renderOnServer.js.map