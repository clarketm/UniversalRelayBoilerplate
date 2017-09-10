Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _reactCodeSplitting=require('react-code-splitting');var _reactCodeSplitting2=_interopRequireDefault(_reactCodeSplitting);
var _reactRelay=require('react-relay');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ToDoList=function ToDoList(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{load:Promise.resolve().then(function(){return require('./components/ToDoList');}),componentProps:props}));};


var ToDoScreen=function ToDoScreen(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{load:Promise.resolve().then(function(){return require('./components/ToDoScreen');}),componentProps:props}));};


var ToDoListQuery=function ToDoListQuery(){return require('./__generated__/routeAppFrameTodo_ToDoList_Query.graphql');};exports.default=








_react2.default.createElement(_Route2.default,{
key:'todo',
path:'todo',
Component:ToDoScreen,
query:function query(){return require('./__generated__/routeAppFrameTodo_ToDoScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:ToDoList,
query:ToDoListQuery,
prepareVariables:function prepareVariables(params){return _extends({},params,{status:'any'});}}),

_react2.default.createElement(_Route2.default,{path:':status',Component:ToDoList,query:ToDoListQuery}));
//# sourceMappingURL=routeAppFrameTodo.js.map