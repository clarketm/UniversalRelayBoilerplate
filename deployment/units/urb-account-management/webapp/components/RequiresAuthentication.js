Object.defineProperty(exports,"__esModule",{value:true});exports.RequiresAuthenticationNotice=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.





registerAuthenticationRequiredCallback=registerAuthenticationRequiredCallback;var _react=require('react');var _react2=_interopRequireDefault(_react);var _Card=require('material-ui/Card');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var authenticationRequiredCallback=null;function registerAuthenticationRequiredCallback(cb){
authenticationRequiredCallback=cb;
}var

RequiresAuthenticationNotice=exports.RequiresAuthenticationNotice=function(_React$Component){_inherits(RequiresAuthenticationNotice,_React$Component);function RequiresAuthenticationNotice(){_classCallCheck(this,RequiresAuthenticationNotice);return _possibleConstructorReturn(this,(RequiresAuthenticationNotice.__proto__||Object.getPrototypeOf(RequiresAuthenticationNotice)).apply(this,arguments));}_createClass(RequiresAuthenticationNotice,[{key:'componentDidMount',value:function componentDidMount()
{
if(authenticationRequiredCallback)authenticationRequiredCallback();
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{title:'Please log in'}),
_react2.default.createElement(_Card.CardText,null,'Accessing this area of the application requires you to be logged in.')));




}}]);return RequiresAuthenticationNotice;}(_react2.default.Component);
//# sourceMappingURL=RequiresAuthentication.js.map