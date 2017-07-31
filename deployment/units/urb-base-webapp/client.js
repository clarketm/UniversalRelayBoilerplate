var _this=this;


require('babel-polyfill');

var _BrowserProtocol=require('farce/lib/BrowserProtocol');var _BrowserProtocol2=_interopRequireDefault(_BrowserProtocol);
var _createInitialFarceRouter=require('found/lib/createInitialFarceRouter');var _createInitialFarceRouter2=_interopRequireDefault(_createInitialFarceRouter);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);

var _fetcher=require('../urb-base-universal/scripts/fetcher');
var _router=require('./router');
var _Wrapper=require('./components/Wrapper');var _Wrapper2=_interopRequireDefault(_Wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


(function _callee(){var fetcher,resolver,Router;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:

fetcher=new _fetcher.ClientFetcher('/graphql',window.__RELAY_PAYLOADS__);
resolver=(0,_router.createResolver)(fetcher);_context.next=4;return regeneratorRuntime.awrap(

(0,_createInitialFarceRouter2.default)({
historyProtocol:new _BrowserProtocol2.default(),
historyMiddlewares:_router.historyMiddlewares,
routeConfig:_router.routeConfig,
resolver:resolver,
render:_router.render}));case 4:Router=_context.sent;


_reactDom2.default.render(
_react2.default.createElement(_Wrapper2.default,null,
_react2.default.createElement(Router,{resolver:resolver})),

document.getElementById('root'));case 6:case'end':return _context.stop();}}},null,_this);})();
//# sourceMappingURL=client.js.map