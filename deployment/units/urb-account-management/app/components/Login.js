Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeElements=require('react-native-elements');

var _Button=require('../../../../app/components/Button');var _Button2=_interopRequireDefault(_Button);
var _LoginExtensions=require('../../../../configuration/units/urb-account-management/app/components/LoginExtensions');var _LoginExtensions2=_interopRequireDefault(_LoginExtensions);
var _NetworkLayer=require('../../../../app/NetworkLayer');var _NetworkLayer2=_interopRequireDefault(_NetworkLayer);
var _publicURL=require('../../../../configuration/app/publicURL');var _publicURL2=_interopRequireDefault(_publicURL);
var _SuccessfulLoginRoute=require('../../../../configuration/units/urb-account-management/app/SuccessfulLoginRoute');
var _UrlRouter=require('../../../../app/UrlRouter');var _UrlRouter2=_interopRequireDefault(_UrlRouter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'stretch',
backgroundColor:'#f0f0f0'}});



var mode_challenge=1;
var mode_login_in_progress=2;
var mode_login_failed=3;var


Login=function(_React$Component){_inherits(Login,_React$Component);

function Login(props,context){_classCallCheck(this,Login);var _this=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props,context));_this.











handle_onPress_Login=function(){
_this.setState({
mode:mode_login_in_progress});


var currentLoginAttempt=++_this.loginAttempt;

var UserToken1=void 0;

fetch(_publicURL2.default+'/auth/login',{
method:"POST",
headers:{
'Accept':'application/json',
'Content-Type':'application/json',
'Origin':''},

body:JSON.stringify({
User_AccountName:_this.state.User_AccountName,
User_AccountPassword:_this.state.User_AccountPassword})}).


then(function(response){
if('set-cookie'in response.headers.map){
for(var _iterator=response.headers.map['set-cookie'],_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var cookie=_ref;
if(cookie.startsWith('UserToken1=')){
console.log('cookie='+cookie);
UserToken1=cookie.substring(11,cookie.indexOf(';'));
console.log('UserToken1='+UserToken1);
}}}
return response.json();
}).
then(function(responseData){
if(currentLoginAttempt==_this.loginAttempt){
if(responseData.success){
_NetworkLayer2.default.setUserTokens(
UserToken1,
responseData.UserToken2,
true,
function(){return _UrlRouter2.default.goToRouteByNameAndParams(_SuccessfulLoginRoute.SuccessfulLoginRouteName,_SuccessfulLoginRoute.SuccessfulLoginRouteOptions);});

}else{
var errorMessage=void 0;
if(responseData.error)
errorMessage=responseData.error;else

errorMessage="Login failed";

_this.setState({
mode:mode_login_failed,
ErrorMessage:errorMessage});

}
}else
console.log("XXX Expired login event");
}).

done();
};_this.

handle_onPress_Cancel=function(){
_this.loginAttempt++;

_this.setState({
mode:mode_challenge,
User_AccountPassword:""});

};_this.

handle_onPress_Retry=function(){
_this.setState({
mode:mode_challenge,
User_AccountPassword:""});

};_this.loginAttempt=0;_this.state={mode:mode_challenge,User_AccountName:"",User_AccountPassword:"",ErrorMessage:""};return _this;}_createClass(Login,[{key:'render',value:function render()


{var _this2=this;
if(this.state.mode==mode_challenge)
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNativeElements.FormLabel,null,'Account Name'),
_react2.default.createElement(_reactNativeElements.FormInput,{
value:this.state.User_AccountName,
onChangeText:function onChangeText(text){return _this2.setState({User_AccountName:text});}}),


_react2.default.createElement(_reactNativeElements.FormLabel,null,'Password'),
_react2.default.createElement(_reactNativeElements.FormInput,{
secureTextEntry:true,
value:this.state.User_AccountPassword,
onChangeText:function onChangeText(text){return _this2.setState({User_AccountPassword:text});}}),

_react2.default.createElement(_reactNativeElements.FormLabel,null,' '),

_react2.default.createElement(_Button2.default,{kind:'action',onPress:this.handle_onPress_Login,title:'Login'}),
_react2.default.createElement(_reactNativeElements.FormLabel,null,' '),

_react2.default.createElement(_LoginExtensions2.default,null)));else



if(this.state.mode==mode_login_in_progress)
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNativeElements.FormLabel,null,'Logging in as'),
_react2.default.createElement(_reactNativeElements.FormLabel,null,this.state.User_AccountName),
_react2.default.createElement(_reactNativeElements.FormLabel,null,' '),
_react2.default.createElement(_Button2.default,{kind:'action',onPress:this.handle_onPress_Cancel,title:'Cancel'})));else


if(this.state.mode==mode_login_failed)
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNativeElements.FormLabel,null,'Failed to log in as'),
_react2.default.createElement(_reactNativeElements.FormLabel,null,this.state.User_AccountName),
_react2.default.createElement(_reactNativeElements.FormLabel,null,this.state.ErrorMessage),
_react2.default.createElement(_reactNativeElements.FormLabel,null,' '),
_react2.default.createElement(_Button2.default,{kind:'action',onPress:this.handle_onPress_Retry,title:'Retry'})));


}}]);return Login;}(_react2.default.Component);exports.default=Login;
//# sourceMappingURL=Login.js.map