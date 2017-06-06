Object.defineProperty(exports,"__esModule",{value:true});exports.default=








routes;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNativeRouterFlux=require('react-native-router-flux');var _Login=require('../../units/urb-account-management/app/components/Login');var _Login2=_interopRequireDefault(_Login);var _Logout=require('../../units/urb-account-management/app/components/Logout');var _Logout2=_interopRequireDefault(_Logout);var _ToDoScreen=require('../../units/urb-example-todo/app/components/ToDoScreen');var _ToDoScreen2=_interopRequireDefault(_ToDoScreen);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function routes(MenuButton,viewerQuery,isAnonymous){
return(
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'main-nourl',tabs:true,hideTabBar:true},
_react2.default.createElement(_reactNativeRouterFlux.Scene,{
key:'/user/login',
title:'Login',
component:_Login2.default,
leftButton:MenuButton,
initial:isAnonymous}),

_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'/todo',leftButton:MenuButton,initial:!isAnonymous},
_react2.default.createElement(_reactNativeRouterFlux.Scene,{
key:'/todo-default-nourl',
title:'To Do',
component:_ToDoScreen2.default,
queries:viewerQuery})),


_react2.default.createElement(_reactNativeRouterFlux.Scene,{
key:'/user/logout',
title:'Logout',
component:_Logout2.default,
queries:viewerQuery,
leftButton:MenuButton})));



}
//# sourceMappingURL=routes.js.map