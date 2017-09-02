Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _List=require('material-ui/List');var _List2=_interopRequireDefault(_List);
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _AppDrawerNavItem=require('../../urb-appdrawer-webapp/components/AppDrawerNavItem');var _AppDrawerNavItem2=_interopRequireDefault(_AppDrawerNavItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AppDrawernavItems=function(_React$Component){_inherits(AppDrawernavItems,_React$Component);function AppDrawernavItems(){_classCallCheck(this,AppDrawernavItems);return _possibleConstructorReturn(this,(AppDrawernavItems.__proto__||Object.getPrototypeOf(AppDrawernavItems)).apply(this,arguments));}_createClass(AppDrawernavItems,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_List2.default,null,
_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/force-login',
openImmediately:true,
title:'Force Login',
to:'/force-login'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/todo',
openImmediately:true,
title:'To Dos',
to:'/todo'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/Ensayo/edit',
openImmediately:true,
title:'Ensayo edit',
to:'/Ensayo/edit'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/ensayo/in-place-edit',
openImmediately:true,
title:'Ensayo in place',
to:'/ensayo/in-place-edit'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/ensayo',
openImmediately:true,
title:'Ensayo public',
to:'/ensayo'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/inscriptio',
openImmediately:true,
title:'Inscriptio',
to:'/inscriptio'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{
key:'/translaticiarum',
openImmediately:true,
title:'Translaticiarum',
to:'/translaticiarum'})));



}}]);return AppDrawernavItems;}(_react2.default.Component);exports.default=AppDrawernavItems;
//# sourceMappingURL=AppDrawerNavItems.js.map