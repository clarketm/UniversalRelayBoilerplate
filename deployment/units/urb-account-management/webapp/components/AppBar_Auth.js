Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);
var _Divider=require('material-ui/Divider');var _Divider2=_interopRequireDefault(_Divider);
var _FlatButton=require('material-ui/FlatButton');var _FlatButton2=_interopRequireDefault(_FlatButton);
var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _person=require('material-ui/svg-icons/social/person');var _person2=_interopRequireDefault(_person);
var _personOutline=require('material-ui/svg-icons/social/person-outline');var _personOutline2=_interopRequireDefault(_personOutline);
var _LinearProgress=require('material-ui/LinearProgress');var _LinearProgress2=_interopRequireDefault(_LinearProgress);
var _List=require('material-ui/List');
var _Popover=require('material-ui/Popover');var _Popover2=_interopRequireDefault(_Popover);
var _Subheader=require('material-ui/Subheader');var _Subheader2=_interopRequireDefault(_Subheader);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _colors=require('material-ui/styles/colors');
var _RequiresAuthentication=require('./RequiresAuthentication.js');

var _accountNameAndPasswordRequirements=require('../../../../configuration/units/urb-account-management/accountNameAndPasswordRequirements');







var _AccountManagementExtensions=require('../../../../configuration/units/urb-account-management/webapp/components/AccountManagementExtensions');



var _XHR=require('../../../../webapp/scripts/XHR');
var _scorePassword=require('../../../../configuration/units/urb-account-management/scripts/scorePassword');var _scorePassword2=_interopRequireDefault(_scorePassword);
var _UserListItem=require('../../../../configuration/webapp/components/UserListItem');var _UserListItem2=_interopRequireDefault(_UserListItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles={
popover:{
padding:10}};



function isAccountNameAcceptable(AccountName){
if(AccountName.length<_accountNameAndPasswordRequirements.AccountNameLengthMin)return false;

return(0,_accountNameAndPasswordRequirements.AccountNameAdditionalValidation)(AccountName);
}var

AppBar_Auth=function(_React$Component){_inherits(AppBar_Auth,_React$Component);
function AppBar_Auth(props,context){_classCallCheck(this,AppBar_Auth);var _this=_possibleConstructorReturn(this,(AppBar_Auth.__proto__||Object.getPrototypeOf(AppBar_Auth)).call(this,
props,context));_this.



























_callback_OpenAuthenticationChallenge=function(){
_this.setState({
User_AccountName:'',
User_AccountPassword:'',
Account_information_Supplied:false,
Dialog_AuthenticationChallenge_IsOpen:true,
Dialog_AuthenticationInProgress_IsOpen:false,
Dialog_AuthenticationFailed_IsOpen:false,
Dialog_CreateUser_IsOpen:false,
Dialog_CreateUserInProgress_IsOpen:false,
Dialog_CreateUserFailed_IsOpen:false,
Dialog_LogOutConfirmation_IsOpen:false,
Dialog_LogOutInProgress_IsOpen:false,
Dialog_LogOutFailed_IsOpen:false,
Popover_AuthorizedUser_IsOpen:false});

};_this.














































































































































Dialog_AuthenticationChallenge_Open=function(){
_this.setState({
Dialog_AuthenticationChallenge_IsOpen:true});

};_this.

_handle_onChange_AuthenticationChallenge_User_AccountName=function(event){
_this.setState({User_AccountName:event.target.value});
_this._handle_onChange_AuthenticationChallenge_User_AccountName_or_Password(
event.target.value,
_this.state.User_AccountPassword);

};_this.

_handle_onKeyDown_AuthenticationChallenge_User_AccountName=function(e){
if(e.keyCode===13)_this.refs.User_AccountPassword.focus();
};_this.

_handle_onChange_AuthenticationChallenge_User_AccountPassword=function(event){
_this.setState({User_AccountPassword:event.target.value});
_this._handle_onChange_AuthenticationChallenge_User_AccountName_or_Password(
_this.state.User_AccountName,
event.target.value);

};_this.

_handle_onKeyDown_AuthenticationChallenge_User_AccountPassword=function(e){
if(e.keyCode===13)_this._handle_onTouchTap_AuthenticationChallenge_LogIn();
};_this.

_handle_onChange_AuthenticationChallenge_User_AccountName_or_Password=function(
AccountName,
AccountPassword)
{
_this.setState({
Account_information_Supplied:
isAccountNameAcceptable(AccountName)&&AccountPassword.length>=_accountNameAndPasswordRequirements.AccountPasswordLengthMin});

};_this.

_handle_onTouchTap_AuthenticationChallenge_LogIn=function(){
_this.setState({
Dialog_AuthenticationChallenge_IsOpen:false,
Dialog_AuthenticationInProgress_IsOpen:true});


var loc=window.location;
var host=loc.protocol+'//'+loc.hostname+':'+loc.port;

(0,_XHR.postXHR)(
host+'/auth/login',
{
User_AccountName:_this.state.User_AccountName,
User_AccountPassword:_this.state.User_AccountPassword},

function(response){return _this._handle_Authentication_Response_Success(response);},
function(response){return _this._handle_Authentication_Response_Failure(response);});


_this.setState({User_AccountPassword:''});
};_this.

_handle_onTouchTap_AuthenticationChallenge_CreateUser=function(){
_this.setState({
Dialog_AuthenticationChallenge_IsOpen:false,
Dialog_CreateUser_IsOpen:true,
Dialog_CreateUser_AccountPasswordStrength:0,
User_AccountPassword:''});

};_this.

_handle_onTouchTap_AuthenticationChallenge_Cancel=function(){
_this.setState({
Dialog_AuthenticationChallenge_IsOpen:false});

};_this.





















_handle_onTouchTap_AuthenticationInProgress_Cancel=function(){
_this.setState({
Dialog_AuthenticationInProgress_IsOpen:false});

};_this.






















_handle_onTouchTap_LogInFailure_OK=function(){
_this.setState({
Dialog_AuthenticationFailed_IsOpen:false});

};_this.



























































_handle_onChange_CreateUser_User_AccountName=function(event){
_this.setState({User_AccountName:event.target.value});
_this._handle_onChange_CreateUser_User_AccountName_or_Password(
event.target.value,
_this.state.User_AccountPassword);

};_this.

_handle_onKeyDown_CreateUser_User_AccountName=function(e){
if(e.keyCode===13)_this.refs.User_AccountPassword.focus();
};_this.

_handle_onChange_CreateUser_User_AccountPassword=function(event){
_this.setState({User_AccountPassword:event.target.value});
_this._handle_onChange_CreateUser_User_AccountName_or_Password(
_this.state.User_AccountName,
event.target.value);

};_this.

_handle_onKeyDown_CreateUser_User_AccountPassword=function(e){
if(e.keyCode===13)_this._handle_onTouchTap_CreateUser_Create();
};_this.

_handle_onChange_CreateUser_User_AccountName_or_Password=function(AccountName,AccountPassword){
var passwordScore=(0,_scorePassword2.default)(AccountPassword);
_this.setState({
Account_information_Supplied:
isAccountNameAcceptable(AccountName)&&AccountPassword.length>=_accountNameAndPasswordRequirements.AccountPasswordLengthMin,
Dialog_CreateUser_AccountPasswordStrength:passwordScore});

};_this.

_handle_onTouchTap_CreateUser_Create=function(){
_this.setState({
Dialog_CreateUser_IsOpen:false,
Dialog_CreateUserInProgress_IsOpen:true});


var loc=window.location;
var host=loc.protocol+'//'+loc.hostname+':'+loc.port;

(0,_XHR.postXHR)(
host+'/auth/createuser',
{
User_AccountName:_this.state.User_AccountName,
User_AccountPassword:_this.state.User_AccountPassword},

function(response){return _this._handle_CreateUser_Response_Success(response);},
function(response){return _this._handle_CreateUser_Response_Failure(response);});

};_this.

_handle_onTouchTap_CreateUser_Cancel=function(){
_this.setState({
Dialog_CreateUser_IsOpen:false});

};_this.





















_handle_onTouchTap_CreateUserInProgress_Cancel=function(){
_this.setState({
Dialog_CreateUserInProgress_IsOpen:false});

};_this.






















_handle_onTouchTap_CreateUserFailed_OK=function(){
_this.setState({
Dialog_CreateUserFailed_IsOpen:false});

};_this.

































_handle_onTouchTap_LogOutConfirmation_LogOut=function(){
_this.setState({
Dialog_LogOutConfirmation_IsOpen:false,
Dialog_LogOutInProgress_IsOpen:true});


var loc=window.location;
var host=loc.protocol+'//'+loc.hostname+':'+loc.port;

(0,_XHR.postXHR)(
host+'/auth/logout',
{},
function(response){return _this._handle_LogOutConfirmation_Response_Success(response);},
function(response){return _this._handle_LogOutConfirmation_Response_Failure(response);});

};_this.

_handle_onTouchTap_LogOutConfirmation_Cancel=function(){
_this.setState({
Dialog_LogOutConfirmation_IsOpen:false});

};_this.





















_handle_onTouchTap_LogOutInProgress_Cancel=function(){
_this.setState({
Dialog_LogOutInProgress_IsOpen:false});

};_this.




























_handle_onTouchTap_LogOutFailed_OK=function(){
_this.setState({
Dialog_LogOutFailed_IsOpen:false});

};_this.












































_handle_Popover_AuthorizedUser_Profile=function(){
_this.setState({
Popover_AuthorizedUser_IsOpen:false});

_this.context.router.push('/user');
};_this.

_handle_Popover_AuthorizedUser_ChangePassword=function(){
_this.setState({
Popover_AuthorizedUser_IsOpen:false});

_this.context.router.push('/user/update_password');
};_this.

_handle_Popover_AuthorizedUser_LogInAsADifferentUser=function(){
_this.setState({
Popover_AuthorizedUser_IsOpen:false});

_this.Dialog_AuthenticationChallenge_Open();
};_this.

_handle_Popover_AuthorizedUser_LogOut=function(){
_this.setState({
Popover_AuthorizedUser_IsOpen:false,
Dialog_LogOutConfirmation_IsOpen:true});

};_this.

_handle_Popover_AuthorizedUser_Close=function(){
_this.setState({
Popover_AuthorizedUser_IsOpen:false});

};_this.











































_handle_AuthorizedUserIcon_TouchTap=function(event){
_this.setState({
Popover_AuthorizedUser_IsOpen:true,
anchorEl:event.currentTarget});

};_this.state={User_AccountName:'',User_AccountPassword:'',Account_information_Supplied:false,Dialog_AuthenticationChallenge_IsOpen:false,Dialog_AuthenticationInProgress_IsOpen:false,Dialog_AuthenticationFailed_IsOpen:false,Dialog_CreateUser_IsOpen:false,Dialog_CreateUserInProgress_IsOpen:false,Dialog_CreateUserFailed_IsOpen:false,Dialog_LogOutConfirmation_IsOpen:false,Dialog_LogOutInProgress_IsOpen:false,Dialog_LogOutFailed_IsOpen:false,Popover_AuthorizedUser_IsOpen:false};return _this;}_createClass(AppBar_Auth,[{key:'componentWillMount',value:function componentWillMount(){(0,_RequiresAuthentication.registerAuthenticationRequiredCallback)(this._callback_OpenAuthenticationChallenge);}},{key:'componentWillUnmount',value:function componentWillUnmount(){(0,_RequiresAuthentication.registerAuthenticationRequiredCallback)(null);}},{key:'_handle_Authentication_Response_Success',value:function _handle_Authentication_Response_Success(response){try{var responseJSON=JSON.parse(response);if(responseJSON.success!=true)throw new Error('Login failed');}catch(err){this._handle_Authentication_Response_Failure('1');return;}location.replace(location.href);}},{key:'_handle_Authentication_Response_Failure',value:function _handle_Authentication_Response_Failure(response){var message=void 0;try{var responseJSON=JSON.parse(response);message=responseJSON.error;}catch(err){message='Improper server response';}this.setState({Dialog_AuthenticationInProgress_IsOpen:false,Dialog_AuthenticationFailed_IsOpen:true,Dialog_AuthenticationFailed_Message:message});}},{key:'_handle_CreateUser_Response_Success',value:function _handle_CreateUser_Response_Success(response){try{var responseJSON=JSON.parse(response);if(responseJSON.success!=true)throw new Error('New User Creation failed');}catch(err){this._handle_CreateUser_Response_Failure('1');return;}location.replace(location.href);}},{key:'_handle_CreateUser_Response_Failure',value:function _handle_CreateUser_Response_Failure(response){var message=void 0;try{var responseJSON=JSON.parse(response);message=responseJSON.error;}catch(err){message='Improper server response';}this.setState({Dialog_CreateUserInProgress_IsOpen:false,Dialog_CreateUserFailed_IsOpen:true,Dialog_CreateUserFailed_Message:message});}},{key:'_handle_LogOutConfirmation_Response_Success',value:function _handle_LogOutConfirmation_Response_Success(response){try{var responseJSON=JSON.parse(response);if(responseJSON.success!=true)throw new Error('Log Out failed');}catch(err){this._handle_LogOutConfirmation_Response_Failure('1');return;}location.replace(location.href);}},{key:'_handle_LogOutConfirmation_Response_Failure',value:function _handle_LogOutConfirmation_Response_Failure(response){var message=void 0;try{var responseJSON=JSON.parse(response);message=responseJSON.error;}catch(err){message='Improper server response';}this.setState({Dialog_LogOutInProgress_IsOpen:false,Dialog_LogOutFailed_IsOpen:true,Dialog_LogOutFailed_Message:message});}},{key:'Dialog_AuthenticationChallenge',value:function Dialog_AuthenticationChallenge(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_AuthenticationChallenge_IsOpen,title:'Log In',actions:[_react2.default.createElement(_FlatButton2.default,{key:'CreateUser',label:'Create User',secondary:true,onTouchTap:this._handle_onTouchTap_AuthenticationChallenge_CreateUser}),_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_AuthenticationChallenge_Cancel}),_react2.default.createElement(_FlatButton2.default,{key:'LogIn',label:'Log In',primary:true,onTouchTap:this._handle_onTouchTap_AuthenticationChallenge_LogIn,disabled:!this.state.Account_information_Supplied})]},_react2.default.createElement(_TextField2.default,{floatingLabelText:_accountNameAndPasswordRequirements.AccountNameAlias,fullWidth:true,value:this.state.User_AccountName,onKeyDown:this._handle_onKeyDown_AuthenticationChallenge_User_AccountName,onChange:this._handle_onChange_AuthenticationChallenge_User_AccountName}),_react2.default.createElement(_TextField2.default,{type:'password',floatingLabelText:'Password',fullWidth:true,value:this.state.User_AccountPassword,onKeyDown:this._handle_onKeyDown_AuthenticationChallenge_User_AccountPassword,onChange:this._handle_onChange_AuthenticationChallenge_User_AccountPassword,ref:'User_AccountPassword'}),_react2.default.createElement(_AccountManagementExtensions.ExtensionsForLogIn,null));}},{key:'Dialog_AuthenticationInProgress',value:function Dialog_AuthenticationInProgress(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_AuthenticationInProgress_IsOpen,title:'Logging In ...',actions:[_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_AuthenticationInProgress_Cancel})]},_react2.default.createElement(_LinearProgress2.default,{mode:'indeterminate'}));}},{key:'Dialog_AuthenticationFailed',value:function Dialog_AuthenticationFailed(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_AuthenticationFailed_IsOpen,title:'Login failed',actions:[_react2.default.createElement(_FlatButton2.default,{key:'OK',label:'OK',primary:true,onTouchTap:this._handle_onTouchTap_LogInFailure_OK})]},this.state.Dialog_AuthenticationFailed_Message);}},{key:'Dialog_CreateUser',value:function Dialog_CreateUser(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_CreateUser_IsOpen,title:'Sign Up',actions:[_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_CreateUser_Cancel}),_react2.default.createElement(_FlatButton2.default,{key:'Create',label:'Create',primary:true,onTouchTap:this._handle_onTouchTap_CreateUser_Create,disabled:this.state.Dialog_CreateUser_AccountPasswordStrength<_accountNameAndPasswordRequirements.AccountPasswordStrengthMin||!isAccountNameAcceptable(this.state.User_AccountName)})]},_react2.default.createElement(_TextField2.default,{floatingLabelText:_accountNameAndPasswordRequirements.AccountNameAlias,fullWidth:true,value:this.state.User_AccountName,onKeyDown:this._handle_onKeyDown_CreateUser_User_AccountName,onChange:this._handle_onChange_CreateUser_User_AccountName}),_react2.default.createElement(_TextField2.default,{type:'password',floatingLabelText:'Password',fullWidth:true,value:this.state.User_AccountPassword,onKeyDown:this._handle_onKeyDown_CreateUser_User_AccountPassword,onChange:this._handle_onChange_CreateUser_User_AccountPassword,ref:'User_AccountPassword'}),_react2.default.createElement('br',null),_react2.default.createElement('br',null),'Password strength',_react2.default.createElement(_LinearProgress2.default,{mode:'determinate',value:this.state.Dialog_CreateUser_AccountPasswordStrength,color:this.state.Dialog_CreateUser_AccountPasswordStrength<_accountNameAndPasswordRequirements.AccountPasswordStrengthMin?'#ff0000':this.state.Dialog_CreateUser_AccountPasswordStrength<_accountNameAndPasswordRequirements.AccountPasswordStrengthGood?'#c0c000':'#00d000'}),_react2.default.createElement(_AccountManagementExtensions.ExtensionsForCreateUser,null));}},{key:'Dialog_CreateUserInProgress',value:function Dialog_CreateUserInProgress(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_CreateUserInProgress_IsOpen,title:'Creating user ...',actions:[_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_CreateUserInProgress_Cancel})]},_react2.default.createElement(_LinearProgress2.default,{mode:'indeterminate'}));}},{key:'Dialog_CreateUserFailed',value:function Dialog_CreateUserFailed(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_CreateUserFailed_IsOpen,title:'Creating user failed',actions:[_react2.default.createElement(_FlatButton2.default,{key:'OK',label:'OK',primary:true,onTouchTap:this._handle_onTouchTap_CreateUserFailed_OK})]},this.state.Dialog_CreateUserFailed_Message);}},{key:'Dialog_LogOutConfirmation',value:function Dialog_LogOutConfirmation(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_LogOutConfirmation_IsOpen,title:'Log Out',actions:[_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_LogOutConfirmation_Cancel}),_react2.default.createElement(_FlatButton2.default,{key:'LogOut',label:'Log Out',primary:true,onTouchTap:this._handle_onTouchTap_LogOutConfirmation_LogOut})]},_react2.default.createElement(_List.List,null,_react2.default.createElement(_Subheader2.default,null,'You are currently logged in as'),_react2.default.createElement(_UserListItem2.default,{Viewer:this.props.Viewer})),_react2.default.createElement(_List.List,null,_react2.default.createElement(_Subheader2.default,null,'Are you sure you want to log out?')));}},{key:'Dialog_LogOutInProgress',value:function Dialog_LogOutInProgress(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_LogOutInProgress_IsOpen,title:'Logging out ...',actions:[_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_LogOutInProgress_Cancel})]},_react2.default.createElement(_LinearProgress2.default,{mode:'indeterminate'}));}},{key:'Dialog_LogOutFailed',value:function Dialog_LogOutFailed(){return _react2.default.createElement(_Dialog2.default,{open:this.state.Dialog_LogOutFailed_IsOpen,title:'Log out failed.',actions:[_react2.default.createElement(_FlatButton2.default,{key:'OK',label:'OK',primary:true,onTouchTap:this._handle_onTouchTap_LogOutFailed_OK})]},_react2.default.createElement(_List.List,null,_react2.default.createElement(_Subheader2.default,null,'You are still logged in as'),_react2.default.createElement(_UserListItem2.default,{Viewer:this.props.Viewer})),_react2.default.createElement(_List.List,null,_react2.default.createElement(_Subheader2.default,null,this.state.Dialog_LogOutFailed_Message)));}},{key:'Popover_AuthorizedUser',value:function Popover_AuthorizedUser(){return _react2.default.createElement(_Popover2.default,{open:this.state.Popover_AuthorizedUser_IsOpen,anchorEl:this.state.anchorEl,anchorOrigin:{horizontal:'left',vertical:'bottom'},targetOrigin:{horizontal:'left',vertical:'top'},onRequestClose:this._handle_Popover_AuthorizedUser_Close},_react2.default.createElement('div',{style:styles.popover},_react2.default.createElement(_List.List,null,_react2.default.createElement(_Subheader2.default,null,'Logged In as'),_react2.default.createElement(_UserListItem2.default,{Viewer:this.props.Viewer})),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_List.List,null,_react2.default.createElement(_List.ListItem,{primaryText:'Profile',onTouchTap:this._handle_Popover_AuthorizedUser_Profile}),_react2.default.createElement(_List.ListItem,{primaryText:'Change Password',onTouchTap:this._handle_Popover_AuthorizedUser_ChangePassword})),_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_List.List,null,_react2.default.createElement(_List.ListItem,{primaryText:'Log in as a different user',onTouchTap:this._handle_Popover_AuthorizedUser_LogInAsADifferentUser}),_react2.default.createElement(_List.ListItem,{primaryText:'Log out',onTouchTap:this._handle_Popover_AuthorizedUser_LogOut}))));}},{key:'render',value:function render(){if(this.props.Viewer.User_IsAnonymous)return _react2.default.createElement(_IconButton2.default,{key:'login',tooltip:'Log In',onTouchTap:this.Dialog_AuthenticationChallenge_Open},_react2.default.createElement(_personOutline2.default,{color:_colors.white}),this.Dialog_AuthenticationChallenge(),this.Dialog_AuthenticationInProgress(),this.Dialog_AuthenticationFailed(),this.Dialog_CreateUser(),this.Dialog_CreateUserInProgress(),this.Dialog_CreateUserFailed());else return _react2.default.createElement(_IconButton2.default,{key:'authenticated',tooltip:'User menu',onTouchTap:this._handle_AuthorizedUserIcon_TouchTap},_react2.default.createElement(_person2.default,{color:_colors.white}),this.Popover_AuthorizedUser(),this.Dialog_AuthenticationChallenge(),this.Dialog_AuthenticationInProgress(),this.Dialog_AuthenticationFailed(),this.Dialog_CreateUser(),this.Dialog_CreateUserInProgress(),this.Dialog_CreateUserFailed(),this.Dialog_LogOutConfirmation(),this.Dialog_LogOutInProgress(),this.Dialog_LogOutFailed());}}]);return AppBar_Auth;}(_react2.default.Component);


AppBar_Auth.contextTypes={
router:_propTypes2.default.object.isRequired};exports.default=


_reactRelay2.default.createContainer(AppBar_Auth,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'User_DisplayName',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'AppBar_Auth_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=AppBar_Auth.js.map