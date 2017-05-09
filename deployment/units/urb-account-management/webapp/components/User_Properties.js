Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Card=require('material-ui/Card');
var _RaisedButton=require('material-ui/RaisedButton');var _RaisedButton2=_interopRequireDefault(_RaisedButton);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);

var _RequiresAuthentication=require('./RequiresAuthentication.js');

var _Viewer_updateMutation=require('../../relay/Viewer_updateMutation');var _Viewer_updateMutation2=_interopRequireDefault(_Viewer_updateMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


User_Properties=function(_React$Component){_inherits(User_Properties,_React$Component);





function User_Properties(props,context)
{_classCallCheck(this,User_Properties);var _this=_possibleConstructorReturn(this,(User_Properties.__proto__||Object.getPrototypeOf(User_Properties)).call(this,
props,context));_this.


_handleUpdate=function()
{
_this.context.relay.commitUpdate(
new _Viewer_updateMutation2.default({
Viewer:_this.props.Viewer,
User_DisplayName:_this.refs.User_DisplayName.getValue(),
User_Email:_this.refs.User_Email.getValue(),
User_PhoneNumberMobile:_this.refs.User_PhoneNumberMobile.getValue()}));


};return _this;}_createClass(User_Properties,[{key:'render',value:function render()


{var _this2=this;
if(this.props.Viewer.User_IsAnonymous)
return _react2.default.createElement(_RequiresAuthentication.RequiresAuthenticationNotice,null);else

return(
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{
title:'User profile'}),

_react2.default.createElement(_Card.CardText,null,
_react2.default.createElement(_TextField2.default,{
value:this.props.Viewer.User_AccountName,
floatingLabelText:'Account Name (read only)',
fullWidth:true}),

_react2.default.createElement(_TextField2.default,{
ref:'User_DisplayName',
defaultValue:this.props.Viewer.User_DisplayName,
floatingLabelText:'Display Name',
fullWidth:true}),

_react2.default.createElement(_TextField2.default,{
ref:'User_Email',
defaultValue:this.props.Viewer.User_Email,
floatingLabelText:'Email',
fullWidth:true}),

_react2.default.createElement(_TextField2.default,{
ref:'User_PhoneNumberMobile',
defaultValue:this.props.Viewer.User_PhoneNumberMobile,
floatingLabelText:'Mobile Phone #',
fullWidth:true}),

_react2.default.createElement('div',null,
_react2.default.createElement(_RaisedButton2.default,{
label:'Update',
secondary:true,
onTouchTap:function onTouchTap(){return _this2._handleUpdate();}})))));





}}]);return User_Properties;}(_react2.default.Component);User_Properties.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(User_Properties,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'User_AccountName',kind:'Field',metadata:{},type:'String'},{fieldName:'User_DisplayName',kind:'Field',metadata:{},type:'String'},{fieldName:'User_Email',kind:'Field',metadata:{},type:'String'},{fieldName:'User_PhoneNumberMobile',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'User_Properties_ViewerRelayQL',type:'Viewer'};}(






_Viewer_updateMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=User_Properties.js.map