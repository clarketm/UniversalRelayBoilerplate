Object.defineProperty(exports,"__esModule",{value:true});exports.routeConfig=exports.historyMiddlewares=undefined;exports.















createResolver=createResolver;var _queryMiddleware=require('farce/lib/queryMiddleware');var _queryMiddleware2=_interopRequireDefault(_queryMiddleware);var _makeRouteConfig=require('found/lib/makeRouteConfig');var _makeRouteConfig2=_interopRequireDefault(_makeRouteConfig);var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);var _foundRelay=require('found-relay');var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRelay=require('react-relay');var _relayRuntime=require('relay-runtime');var _AppFrame=require('../_configuration/urb-base-webapp/AppFrame');var _AppFrame2=_interopRequireDefault(_AppFrame);var _routesAppFrame=require('../_configuration/urb-base-webapp/routesAppFrame');var _routesAppFrame2=_interopRequireDefault(_routesAppFrame);var _routesRoot=require('../_configuration/urb-base-webapp/routesRoot');var _routesRoot2=_interopRequireDefault(_routesRoot);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var historyMiddlewares=exports.historyMiddlewares=[_queryMiddleware2.default];function createResolver(fetcher){
var environment=new _relayRuntime.Environment({
network:_relayRuntime.Network.create(function(){return fetcher.fetch.apply(fetcher,arguments);}),
store:new _relayRuntime.Store(new _relayRuntime.RecordSource())});


return new _foundRelay.Resolver(environment);
}

var routeConfig=exports.routeConfig=(0,_makeRouteConfig2.default)(
_react2.default.createElement(_Route2.default,{path:'/'},
_react2.default.createElement(_Route2.default,{
path:'/',
Component:_AppFrame2.default,
query:function query(){return require('./__generated__/router_AppFrame_Query.graphql');}},_routesAppFrame2.default),









_routesRoot2.default.length>0&&_routesRoot2.default));
//# sourceMappingURL=router.js.map