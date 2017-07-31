Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _server=require('found/lib/server');
var _server2=require('react-dom/server');var _server3=_interopRequireDefault(_server2);
var _serializeJavascript=require('serialize-javascript');var _serializeJavascript2=_interopRequireDefault(_serializeJavascript);

var _fetcher=require('../urb-base-universal/scripts/fetcher');
var _router=require('./router');
var _Wrapper=require('./components/Wrapper');var _Wrapper2=_interopRequireDefault(_Wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var port=process.env.PORT;
var port_webpack=process.env.PORT_WEBPACK;


var router=(0,_express2.default)();

router.use(function _callee(req,res){var fetcher,_ref,redirect,status,element,userAgent;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
fetcher=new _fetcher.ServerFetcher('http://localhost:'+port+'/graphql');_context.next=3;return regeneratorRuntime.awrap(

(0,_server.getFarceResult)({
url:req.url,
historyMiddlewares:_router.historyMiddlewares,
routeConfig:_router.routeConfig,
resolver:(0,_router.createResolver)(fetcher),
render:_router.render}));case 3:_ref=_context.sent;redirect=_ref.redirect;status=_ref.status;element=_ref.element;if(!


redirect){_context.next=10;break;}
res.redirect(302,redirect.url);return _context.abrupt('return');case 10:



userAgent=req.headers['user-agent'];

res.render(_path2.default.resolve(__dirname,'html.ejs'),{
port_webpack:port_webpack,
root_html:_server3.default.renderToString(
_react2.default.createElement(_Wrapper2.default,{userAgent:userAgent},
element)),


relay_payload:(0,_serializeJavascript2.default)(fetcher,{isJSON:true})});case 12:case'end':return _context.stop();}}},null,_this);});exports.default=



router;
//# sourceMappingURL=server.js.map