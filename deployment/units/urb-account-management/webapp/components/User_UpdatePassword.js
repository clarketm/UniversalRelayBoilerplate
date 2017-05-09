Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Card=require('material-ui/Card');
var _LinearProgress=require('material-ui/LinearProgress');var _LinearProgress2=_interopRequireDefault(_LinearProgress);
var _RaisedButton=require('material-ui/RaisedButton');var _RaisedButton2=_interopRequireDefault(_RaisedButton);
var _Snackbar=require('material-ui/Snackbar');var _Snackbar2=_interopRequireDefault(_Snackbar);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);

var _accountNameAndPasswordRequirements=require('../../../../configuration/units/urb-account-management/accountNameAndPasswordRequirements');



var _RequiresAuthentication=require('./RequiresAuthentication.js');
var _scorePassword=require('../../../../configuration/units/urb-account-management/scripts/scorePassword');var _scorePassword2=_interopRequireDefault(_scorePassword);
var _Viewer_updatePasswordMutation=require('../../relay/Viewer_updatePasswordMutation');var _Viewer_updatePasswordMutation2=_interopRequireDefault(_Viewer_updatePasswordMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


User_Properties=function(_React$Component){_inherits(User_Properties,_React$Component);





function User_Properties(props,context)
{_classCallCheck(this,User_Properties);var _this=_possibleConstructorReturn(this,(User_Properties.__proto__||Object.getPrototypeOf(User_Properties)).call(this,
props,context));_this.














_handle_Close_Snackbar=function()
{
_this.setState({SnackbarOpen:false});
};_this.

_handle_onChange_User_AccountPassword_Current=function(event)
{
_this.setState({User_AccountPassword_Current:event.target.value});

_this.validateInputs(event.target.value,_this.state.User_AccountPassword,_this.state.User_AccountPasswordConfirmation);
};_this.

_handle_onChange_User_AccountPassword=function(event)
{
var passwordScore=(0,_scorePassword2.default)(event.target.value);

_this.setState({
User_AccountPassword:event.target.value,
User_AccountPasswordStrength:passwordScore});


_this.validateInputs(_this.state.User_AccountPassword_Current,event.target.value,_this.state.User_AccountPasswordConfirmation);
};_this.

_handle_onChange_User_AccountPasswordConfirmation=function(event)
{
_this.setState({User_AccountPasswordConfirmation:event.target.value});

_this.validateInputs(_this.state.User_AccountPassword_Current,_this.state.User_AccountPassword,event.target.value);
};_this.

























_handleUpdate=function()
{
var onFailure=function onFailure(){
_this.setState({
SnackbarOpen:true,
SnackbarMessage:"Failed to update password",
User_AccountPassword_Current:"",
User_AccountPassword_CurrentError:"",
User_AccountPassword:"",
User_AccountPasswordError:"Enter password",
User_AccountPasswordConfirmation:"",
User_AccountPasswordConfirmationError:"Confirm password",
User_AccountPasswordStrength:0});

};

var onSuccess=function onSuccess(response)
{
var ErrorMessage=response.Viewer_updatePassword.ErrorMessage;

_this.setState({
SnackbarOpen:true,
SnackbarMessage:ErrorMessage.length>0?"Failed to update password: "+ErrorMessage:"Password updated successfully",
User_AccountPassword_Current:"",
User_AccountPassword_CurrentError:"",
User_AccountPassword:"",
User_AccountPasswordError:"Enter password",
User_AccountPasswordConfirmation:"",
User_AccountPasswordConfirmationError:"Confirm password",
User_AccountPasswordStrength:0});

};

_this.context.relay.commitUpdate(
new _Viewer_updatePasswordMutation2.default({
Viewer:_this.props.Viewer,
User_AccountPassword_Current:_this.state.User_AccountPassword_Current,
User_AccountPassword:_this.state.User_AccountPassword}),

{onSuccess:onSuccess,onFailure:onFailure});

};_this.state={User_AccountPassword_Current:"",User_AccountPassword_CurrentError:"",User_AccountPassword:"",User_AccountPasswordError:"Enter password",User_AccountPasswordConfirmation:"",User_AccountPasswordConfirmationError:"Confirm password",User_AccountPasswordStrength:0,SnackbarOpen:false,SnackbarMessage:""};return _this;}_createClass(User_Properties,[{key:'validateInputs',value:function validateInputs(currentPassword,password,passwordConfirmation){this.setState({User_AccountPassword_CurrentError:currentPassword==""?"Enter current password":""});this.setState({User_AccountPasswordError:password==""?"Password can not be empty":""});this.setState({User_AccountPasswordConfirmationError:password!=passwordConfirmation?"Passwords do not match":""});this.setState({SnackbarOpen:false});}},{key:'render',value:function render()


{var _this2=this;
if(this.props.Viewer.User_IsAnonymous)
return _react2.default.createElement(_RequiresAuthentication.RequiresAuthenticationNotice,null);else

return(
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{
title:'User password'}),

_react2.default.createElement(_Card.CardText,null,
_react2.default.createElement(_TextField2.default,{
ref:'User_AccountPassword_Current',
type:'password',
floatingLabelText:'Current Password',
value:this.state.User_AccountPassword_Current,
errorText:this.state.User_AccountPassword_CurrentError,
onChange:this._handle_onChange_User_AccountPassword_Current,
fullWidth:true}),

_react2.default.createElement(_TextField2.default,{
ref:'User_AccountPassword',
type:'password',
floatingLabelText:'New Password',
value:this.state.User_AccountPassword,
errorText:this.state.User_AccountPasswordError,
onChange:this._handle_onChange_User_AccountPassword,
fullWidth:true}),

_react2.default.createElement(_TextField2.default,{
ref:'User_AccountPasswordConfirmation',
type:'password',
floatingLabelText:'Confirm New Password',
value:this.state.User_AccountPasswordConfirmation,
errorText:this.state.User_AccountPasswordConfirmationError,
onChange:this._handle_onChange_User_AccountPasswordConfirmation,
fullWidth:true}),

_react2.default.createElement('br',null),_react2.default.createElement('br',null),'Password strength',
_react2.default.createElement(_LinearProgress2.default,{
mode:'determinate',
value:this.state.User_AccountPasswordStrength,
color:this.state.User_AccountPasswordStrength<_accountNameAndPasswordRequirements.AccountPasswordStrengthMin?
"#ff0000":
this.state.User_AccountPasswordStrength<_accountNameAndPasswordRequirements.AccountPasswordStrengthGood?
"#c0c000":
"#00d000"}),


_react2.default.createElement('br',null),
_react2.default.createElement('div',null,
_react2.default.createElement(_RaisedButton2.default,{
label:'Update',
secondary:true,
disabled:
this.state.User_AccountPassword_CurrentError!=""||

this.state.User_AccountPasswordError!=""||

this.state.User_AccountPasswordConfirmationError!="",

onTouchTap:function onTouchTap(){return _this2._handleUpdate();}}))),



_react2.default.createElement(_Snackbar2.default,{
open:this.state.SnackbarOpen,
message:this.state.SnackbarMessage,
autoHideDuration:15000,
onRequestClose:this._handle_Close_Snackbar})));



}}]);return User_Properties;}(_react2.default.Component);User_Properties.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(User_Properties,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'User_UpdatePassword_ViewerRelayQL',type:'Viewer'};}(


_Viewer_updatePasswordMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=User_UpdatePassword.js.map