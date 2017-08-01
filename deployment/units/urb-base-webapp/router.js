Object.defineProperty(exports,"__esModule",{value:true});exports.render=exports.routeConfig=exports.historyMiddlewares=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.


















createResolver=createResolver;var _queryMiddleware=require('farce/lib/queryMiddleware');var _queryMiddleware2=_interopRequireDefault(_queryMiddleware);var _createRender=require('found/lib/createRender');var _createRender2=_interopRequireDefault(_createRender);var _makeRouteConfig=require('found/lib/makeRouteConfig');var _makeRouteConfig2=_interopRequireDefault(_makeRouteConfig);var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);var _foundRelay=require('found-relay');var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRelay=require('react-relay');var _relayRuntime=require('relay-runtime');var _AppFrame=require('./components/AppFrame');var _AppFrame2=_interopRequireDefault(_AppFrame);var _EnsayoList=require('../urb-example-ensayo-webapp/components/EnsayoList');var _EnsayoList2=_interopRequireDefault(_EnsayoList);var _EnsayoScreen=require('../urb-example-ensayo-webapp/components/EnsayoScreen');var _EnsayoScreen2=_interopRequireDefault(_EnsayoScreen);var _ToDoScreen=require('../urb-example-todo-webapp/components/ToDoScreen');var _ToDoScreen2=_interopRequireDefault(_ToDoScreen);var _ToDoList=require('../urb-example-todo-webapp/components/ToDoList');var _ToDoList2=_interopRequireDefault(_ToDoList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var historyMiddlewares=exports.historyMiddlewares=[_queryMiddleware2.default];function createResolver(fetcher){
var environment=new _relayRuntime.Environment({
network:_relayRuntime.Network.create(function(){return fetcher.fetch.apply(fetcher,arguments);}),
store:new _relayRuntime.Store(new _relayRuntime.RecordSource())});


return new _foundRelay.Resolver(environment);
}

var ToDoListQuery=function ToDoListQuery(){return require('./__generated__/router_ToDoList_Query.graphql');};







var routeConfig=exports.routeConfig=(0,_makeRouteConfig2.default)(
_react2.default.createElement(_Route2.default,{path:'/',Component:_AppFrame2.default},
_react2.default.createElement(_Route2.default,{
path:'todo',
Component:_ToDoScreen2.default,
query:function query(){return require('./__generated__/router_ToDoScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:_ToDoList2.default,
query:ToDoListQuery,
prepareVariables:function prepareVariables(params){return _extends({},params,{status:'any'});}}),

_react2.default.createElement(_Route2.default,{path:':status',Component:_ToDoList2.default,query:ToDoListQuery})),

_react2.default.createElement(_Route2.default,{path:'ensayo'},
_react2.default.createElement(_Route2.default,{
path:'edit',
Component:_EnsayoScreen2.default,
query:function query(){return require('./__generated__/router_EnsayoScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:_EnsayoList2.default,
query:function query(){return require('./__generated__/router_EnsayoList_Query.graphql');}})))));












var render=exports.render=(0,_createRender2.default)({});
//# sourceMappingURL=router.js.map