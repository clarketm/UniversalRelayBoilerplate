Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.












registerAuthenticationRequiredCallback=registerAuthenticationRequiredCallback;exports.



unregisterAuthenticationRequiredCallback=unregisterAuthenticationRequiredCallback;var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);var _styles=require('material-ui/styles');var _react=require('react');var _react2=_interopRequireDefault(_react);var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var doNothing=function doNothing(){};var authenticationRequiredCallback=doNothing;function registerAuthenticationRequiredCallback(cb){authenticationRequiredCallback=cb;}function unregisterAuthenticationRequiredCallback(){
authenticationRequiredCallback=doNothing;
}

var styles=function styles(theme){return{
card:{
maxWidth:400}};};var



RequiresAuthenticationNotice=function(_React$Component){_inherits(RequiresAuthenticationNotice,_React$Component);function RequiresAuthenticationNotice(){_classCallCheck(this,RequiresAuthenticationNotice);return _possibleConstructorReturn(this,(RequiresAuthenticationNotice.__proto__||Object.getPrototypeOf(RequiresAuthenticationNotice)).apply(this,arguments));}_createClass(RequiresAuthenticationNotice,[{key:'componentDidMount',value:function componentDidMount()


{
authenticationRequiredCallback();
}},{key:'render',value:function render()

{var
classes=this.props.classes;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Please log in'}),
_react2.default.createElement(_Card.CardContent,null,
_react2.default.createElement(_Typography2.default,{paragraph:true},'Accessing this area of the application requires you to be logged in.')))));







}}]);return RequiresAuthenticationNotice;}(_react2.default.Component);exports.default=


(0,_styles.withStyles)(styles)(RequiresAuthenticationNotice);
//# sourceMappingURL=RequiresAuthentication.js.map