Object.defineProperty(exports,"__esModule",{value:true});

var _reactCodeSplitting=require('react-code-splitting');var _reactCodeSplitting2=_interopRequireDefault(_reactCodeSplitting);
var _reactRelay=require('react-relay');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var EnsayoList=function EnsayoList(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{load:Promise.resolve().then(function(){return require('./components/EnsayoList');}),componentProps:props}));};
var EnsayoScreen=function EnsayoScreen(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{load:Promise.resolve().then(function(){return require('./components/EnsayoScreen');}),componentProps:props}));};exports.default=


_react2.default.createElement(_Route2.default,{key:'ensayo',path:'ensayo'},
_react2.default.createElement(_Route2.default,{
path:'edit',
Component:EnsayoScreen,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:EnsayoList,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoList_Query.graphql');}})));
//# sourceMappingURL=routeAppFrameEnsayo.js.map