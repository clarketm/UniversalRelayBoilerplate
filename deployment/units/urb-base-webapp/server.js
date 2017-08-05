Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _reactJss=require('react-jss');
var _server=require('found/lib/server');
var _server2=require('react-dom/server');var _server3=_interopRequireDefault(_server2);
var _serializeJavascript=require('serialize-javascript');var _serializeJavascript2=_interopRequireDefault(_serializeJavascript);

var _fetcherServer=require('./fetcherServer');var _fetcherServer2=_interopRequireDefault(_fetcherServer);
var _siteSettings=require('../_configuration/urb-base-webapp/siteSettings');
var _package=require('../_configuration/package');
var _router=require('./router');
var _Wrapper=require('./components/Wrapper');var _Wrapper2=_interopRequireDefault(_Wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var envHost=process.env.HOST;
if(envHost==null||typeof envHost!=='string')
throw new Error('💔  urb-base-webapp requires the environment variable HOST to be set');

var envPort=process.env.PORT;
if(envPort==null||typeof envPort!=='string')
throw new Error('💔  urb-base-webapp requires the environment variable PORT to be set');

var envPortWebpack=process.env.PORT_WEBPACK;
if(envPortWebpack==null||typeof envPortWebpack!=='string')
throw new Error('💔  urb-base-webapp requires the environment variable PORT_WEBPACK to be set');


var router=(0,_express2.default)();

function gatherLocationAndSiteInformation(req,res){var assetsPath,siteInformation,host,port_webpack;return regeneratorRuntime.async(function gatherLocationAndSiteInformation$(_context){while(1){switch(_context.prev=_context.next){case 0:
assetsPath=void 0;_context.next=3;return regeneratorRuntime.awrap(

(0,_siteSettings.getSiteInformation)(req,res));case 3:siteInformation=_context.sent;
if(siteInformation){
if(process.env.NODE_ENV==='production'){
assetsPath=
siteInformation.isSiteBuilderDisabled||siteInformation.inEditingMode?'/assets/'+_package.version:'/assets-site/'+_package.version+'.'+



siteInformation.configurationAsObject.version;
}else{

host=process.env.HOST;
port_webpack=process.env.PORT_WEBPACK;
assetsPath='http://'+envHost+':'+envPortWebpack+'/'+_package.version;
}
}return _context.abrupt('return',

{siteInformation:siteInformation,assetsPath:assetsPath});case 6:case'end':return _context.stop();}}},null,this);}


router.use(function _callee(req,res){var fetcher,_ref,redirect,status,element,userAgent,_ref2,siteInformation,assetsPath,sheets,rootHTML;return regeneratorRuntime.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
fetcher=new _fetcherServer2.default('http://localhost:'+
envPort+'/graphql',
req.cookies.UserToken1,
req.headers.UserToken2);_context2.next=3;return regeneratorRuntime.awrap(


(0,_server.getFarceResult)({
url:req.url,
historyMiddlewares:_router.historyMiddlewares,
routeConfig:_router.routeConfig,
resolver:(0,_router.createResolver)(fetcher),
render:_router.render}));case 3:_ref=_context2.sent;redirect=_ref.redirect;status=_ref.status;element=_ref.element;if(!


redirect){_context2.next=10;break;}
res.redirect(302,redirect.url);return _context2.abrupt('return');case 10:



userAgent=req.headers['user-agent'];_context2.next=13;return regeneratorRuntime.awrap(

gatherLocationAndSiteInformation(req,res));case 13:_ref2=_context2.sent;siteInformation=_ref2.siteInformation;assetsPath=_ref2.assetsPath;

sheets=new _reactJss.SheetsRegistry();

rootHTML=_server3.default.renderToString(
_react2.default.createElement(_reactJss.JssProvider,{registry:sheets},
_react2.default.createElement(_Wrapper2.default,{userAgent:userAgent},
element)));




res.render(_path2.default.resolve(__dirname,'html.ejs'),{
assets_path:assetsPath,
root_html:rootHTML,
server_side_styles:sheets.toString(),
relay_payload:(0,_serializeJavascript2.default)(fetcher,{isJSON:true})});case 19:case'end':return _context2.stop();}}},null,_this);});exports.default=



router;
//# sourceMappingURL=server.js.map