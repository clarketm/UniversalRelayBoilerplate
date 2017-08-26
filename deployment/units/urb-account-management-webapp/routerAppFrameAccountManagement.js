Object.defineProperty(exports,"__esModule",{value:true});

var _reactCodeSplitting=require('react-code-splitting');var _reactCodeSplitting2=_interopRequireDefault(_reactCodeSplitting);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Route=require('found/lib/Route');var _Route2=_interopRequireDefault(_Route);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var LogoutScreen=function LogoutScreen(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{load:Promise.resolve().then(function(){return require('./components/LogoutScreen');}),componentProps:props}));};
var NewUserScreen=function NewUserScreen(props){return(
_react2.default.createElement(_reactCodeSplitting2.default,{load:Promise.resolve().then(function(){return require('./components/NewUserScreen');}),componentProps:props}));};exports.default=


_react2.default.createElement(_Route2.default,{path:'user'},
_react2.default.createElement(_Route2.default,{path:'new',Component:NewUserScreen}),
_react2.default.createElement(_Route2.default,{path:'logout',Component:LogoutScreen}));
//# sourceMappingURL=routerAppFrameAccountManagement.js.map