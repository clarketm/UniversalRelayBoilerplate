Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);

var _EnsayoList=require('./components/EnsayoList');var _EnsayoList2=_interopRequireDefault(_EnsayoList);
var _EnsayoScreen=require('./components/EnsayoScreen');var _EnsayoScreen2=_interopRequireDefault(_EnsayoScreen);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


_react2.default.createElement(_Route2.default,{path:'ensayo'},
_react2.default.createElement(_Route2.default,{
path:'edit',
Component:_EnsayoScreen2.default,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoScreen_Query.graphql');}},







_react2.default.createElement(_Route2.default,{
Component:_EnsayoList2.default,
query:function query(){return require('./__generated__/routeAppFrameEnsayo_EnsayoList_Query.graphql');}})));
//# sourceMappingURL=routeAppFrameEnsayo.js.map