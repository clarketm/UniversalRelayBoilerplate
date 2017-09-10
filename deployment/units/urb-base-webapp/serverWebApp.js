Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _path=require('path');var _path2=_interopRequireDefault(_path);

var _createRender=require('found/lib/createRender');var _createRender2=_interopRequireDefault(_createRender);
var _server=require('found/lib/server');
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _reactHelmet=require('react-helmet');var _reactHelmet2=_interopRequireDefault(_reactHelmet);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactJss=require('react-jss');
var _server2=require('react-dom/server');var _server3=_interopRequireDefault(_server2);
var _serializeJavascript=require('serialize-javascript');var _serializeJavascript2=_interopRequireDefault(_serializeJavascript);

var _ErrorComponent=require('../_configuration/urb-base-webapp/ErrorComponent');var _ErrorComponent2=_interopRequireDefault(_ErrorComponent);
var _siteSettings=require('../_configuration/urb-base-server/siteSettings');
var _log=require('../urb-base-server/log');var _log2=_interopRequireDefault(_log);
var _package=require('../_configuration/package');
var _UserToken2ServerRendering=require('../_configuration/urb-base-server/UserToken2ServerRendering');var _UserToken2ServerRendering2=_interopRequireDefault(_UserToken2ServerRendering);

var _fetcherServer=require('./fetcherServer');var _fetcherServer2=_interopRequireDefault(_fetcherServer);
var _router=require('./router');
var _Wrapper=require('./components/Wrapper');var _Wrapper2=_interopRequireDefault(_Wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var envHost=process.env.HOST;
if(envHost==null||typeof envHost!=='string')
throw new Error(
'💔  urb-base-webapp requires the environment variable HOST to be set');


var envPort=process.env.PORT;
if(envPort==null||typeof envPort!=='string')
throw new Error(
'💔  urb-base-webapp requires the environment variable PORT to be set');


var envPortWebpack=process.env.PORT_WEBPACK;
if(envPortWebpack==null||typeof envPortWebpack!=='string')
throw new Error(
'💔  urb-base-webapp requires the environment variable PORT_WEBPACK to be set');



var serverWebApp=(0,_express2.default)();

function gatherLocationAndSiteInformation(req,res){var assetsPath,siteInformation;return regeneratorRuntime.async(function gatherLocationAndSiteInformation$(_context){while(1){switch(_context.prev=_context.next){case 0:
assetsPath=void 0;_context.next=3;return regeneratorRuntime.awrap(

(0,_siteSettings.getSiteInformation)(req,res));case 3:siteInformation=_context.sent;
if(siteInformation){
if(process.env.NODE_ENV==='production'){
assetsPath=
siteInformation.isSiteBuilderDisabled||siteInformation.inEditingMode?'/assets/'+_package.version:'/assets-site/'+_package.version+'.'+



siteInformation.configurationAsObject.
version;
}else{

assetsPath='http://'+envHost+':'+envPortWebpack+'/'+_package.version;
}
}return _context.abrupt('return',

{siteInformation:siteInformation,assetsPath:assetsPath});case 6:case'end':return _context.stop();}}},null,this);}


var render=(0,_createRender2.default)({
renderError:function renderError(obj){var
error=obj.error;

if(error.status!==404)
_log2.default.log('error','Error: Render on server createRender renderError',obj);

return _react2.default.createElement(_ErrorComponent2.default,{httpStatus:error.status});
}});


serverWebApp.use(function _callee(req,res){var fetcher,_ref,redirect,element,userAgent,_ref2,siteInformation,assetsPath,configuration,sheets,helmet,rootHTML;return regeneratorRuntime.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;

fetcher=new _fetcherServer2.default('http://localhost:'+
envPort+'/graphql',
req.cookies.UserToken1,_UserToken2ServerRendering2.default);_context2.next=4;return regeneratorRuntime.awrap(



(0,_server.getFarceResult)({
url:req.url,
historyMiddlewares:_router.historyMiddlewares,
routeConfig:_router.routeConfig,
resolver:(0,_router.createResolver)(fetcher),
render:render}));case 4:_ref=_context2.sent;redirect=_ref.redirect;element=_ref.element;if(!


redirect){_context2.next=10;break;}
res.redirect(302,redirect.url);return _context2.abrupt('return');case 10:



userAgent=req.headers['user-agent'];_context2.next=13;return regeneratorRuntime.awrap(




gatherLocationAndSiteInformation(req,res));case 13:_ref2=_context2.sent;siteInformation=_ref2.siteInformation;assetsPath=_ref2.assetsPath;
configuration=siteInformation.configurationAsObject;

sheets=new _reactJss.SheetsRegistry();

helmet=_reactHelmet2.default.rewind();

rootHTML=_server3.default.renderToString(
_react2.default.createElement(_reactJss.JssProvider,{registry:sheets},
_react2.default.createElement(_Wrapper2.default,{userAgent:userAgent,configuration:configuration},
element)));




res.render(_path2.default.resolve(__dirname,'html.ejs'),{
assets_path:assetsPath,
root_html:rootHTML,
server_side_styles:sheets.toString(),
helmet:helmet,
appData:JSON.stringify(configuration.appData),
relay_payload:(0,_serializeJavascript2.default)(fetcher,{isJSON:true})});_context2.next=27;break;case 23:_context2.prev=23;_context2.t0=_context2['catch'](0);


_log2.default.log('error','Error: Render on server request',_context2.t0);
res.
status(500).
send(_server3.default.renderToString(_react2.default.createElement(_ErrorComponent2.default,{httpStatus:500})));case 27:case'end':return _context2.stop();}}},null,_this,[[0,23]]);});exports.default=



serverWebApp;
//# sourceMappingURL=serverWebApp.js.map