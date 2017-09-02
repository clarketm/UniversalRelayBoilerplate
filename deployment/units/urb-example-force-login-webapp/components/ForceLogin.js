Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');
var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);

var _RequiresAuthentication=require('../../urb-account-management-webapp/components/RequiresAuthentication');var _RequiresAuthentication2=_interopRequireDefault(_RequiresAuthentication);
var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
card:{
minWidth:275}};};var



ForceLogin=function(_React$Component){_inherits(ForceLogin,_React$Component);function ForceLogin(){_classCallCheck(this,ForceLogin);return _possibleConstructorReturn(this,(ForceLogin.__proto__||Object.getPrototypeOf(ForceLogin)).apply(this,arguments));}_createClass(ForceLogin,[{key:'render',value:function render()
{var _props=
this.props,classes=_props.classes,Viewer=_props.Viewer;

if(Viewer.User_IsAnonymous)
return _react2.default.createElement(_RequiresAuthentication2.default,null);else

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{
title:'Only Authorized',
subheader:'Only users who log in see this.'}),

_react2.default.createElement(_Card.CardContent,null,
_react2.default.createElement(_Typography2.default,{paragraph:true},'Content seen by authorized users')))));






}}]);return ForceLogin;}(_react2.default.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(ForceLogin),{Viewer:function Viewer(){return require('./__generated__/ForceLogin_Viewer.graphql');}});
//# sourceMappingURL=ForceLogin.js.map