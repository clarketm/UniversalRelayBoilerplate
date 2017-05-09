Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _RequiresAuthentication=require('../../../../units/urb-account-management/webapp/components/RequiresAuthentication.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


ForceLogin=function(_React$Component){_inherits(ForceLogin,_React$Component);function ForceLogin(){_classCallCheck(this,ForceLogin);return _possibleConstructorReturn(this,(ForceLogin.__proto__||Object.getPrototypeOf(ForceLogin)).apply(this,arguments));}_createClass(ForceLogin,[{key:'render',value:function render()

{

if(this.props.Viewer.User_IsAnonymous)
return _react2.default.createElement(_RequiresAuthentication.RequiresAuthenticationNotice,null);else

return(
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{
title:'Only Authorized',
subtitle:'Only users who log in see this.'}),

_react2.default.createElement(_Card.CardText,null,'Content seen by authorized users')));




}}]);return ForceLogin;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(ForceLogin,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ForceLogin_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=ForceLogin.js.map