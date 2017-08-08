Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _reactRelay=require('react-relay');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);

var _ToDoScreen=require('./components/ToDoScreen');var _ToDoScreen2=_interopRequireDefault(_ToDoScreen);
var _ToDoList=require('./components/ToDoList');var _ToDoList2=_interopRequireDefault(_ToDoList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ToDoListQuery=function ToDoListQuery(){return require('./__generated__/routeAppFrameTodo_ToDoList_Query.graphql');};exports.default=








_react2.default.createElement(_Route2.default,{
key:'todo',
path:'todo',
Component:_ToDoScreen2.default,
query:function query(){return require('./__generated__/routeAppFrameTodo_ToDoScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:_ToDoList2.default,
query:ToDoListQuery,
prepareVariables:function prepareVariables(params){return _extends({},params,{status:'any'});}}),

_react2.default.createElement(_Route2.default,{path:':status',Component:_ToDoList2.default,query:ToDoListQuery}));
//# sourceMappingURL=routeAppFrameTodo.js.map