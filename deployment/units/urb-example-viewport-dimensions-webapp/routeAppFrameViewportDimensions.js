Object.defineProperty(exports,"__esModule",{value:true});

var _reactCodeSplitting=require('react-code-splitting');var _reactCodeSplitting2=_interopRequireDefault(_reactCodeSplitting);
var _reactRelay=require('react-relay');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ViewportDimensionsScreen=function ViewportDimensionsScreen(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{
load:Promise.resolve().then(function(){return require('./components/ViewportDimensionsScreen');}),
componentProps:props}));};exports.default=




_react2.default.createElement(_Route2.default,{key:'viewport-dimensions',path:'viewport-dimensions'},
_react2.default.createElement(_Route2.default,{
path:'/',
Component:ViewportDimensionsScreen,
query:function query(){return require('./__generated__/routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query.graphql');}}));
//# sourceMappingURL=routeAppFrameViewportDimensions.js.map