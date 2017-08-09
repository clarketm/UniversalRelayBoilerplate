Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Add=require('material-ui-icons/Add');var _Add2=_interopRequireDefault(_Add);
var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _Progress=require('material-ui/Progress');
var _styles=require('material-ui/styles');
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
card:{
minWidth:275}};});var



LogoutScreen=function(_React$Component){_inherits(LogoutScreen,_React$Component);









function LogoutScreen(props,context){var _this2=this;_classCallCheck(this,LogoutScreen);var _this=_possibleConstructorReturn(this,(LogoutScreen.__proto__||Object.getPrototypeOf(LogoutScreen)).call(this,
props,context));_this.







_handle_onClick_Logout=function _callee(){var UserAccount_Identifier,loc,host,response,responseData;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
UserAccount_Identifier=_this.props.UserAccount_Identifier;

_this.setState({currentOperation:'logging out'});_context.prev=2;


loc=window.location;
host=loc.protocol+'//'+loc.hostname+':'+loc.port;_context.next=7;return regeneratorRuntime.awrap(

fetch(host+'/auth/logout',{
method:'POST',
credentials:'same-origin',
headers:{
'Content-Type':'application/json'},

body:'{}'}));case 7:response=_context.sent;_context.next=10;return regeneratorRuntime.awrap(


response.json());case 10:responseData=_context.sent;

console.log('LOGOUT USER RESPONSE');
console.log(responseData);

if(responseData.success){

_this.setState({currentOperation:'success'});
}else{

_this.setState({currentOperation:'failure',errorMessage:responseData.error});
}_context.next=19;break;case 16:_context.prev=16;_context.t0=_context['catch'](2);



_this.setState({
currentOperation:'failure',
errorMessage:
'Did not receive proper response from server. Please try again. Message:'+_context.t0.message});case 19:case'end':return _context.stop();}}},null,_this2,[[2,16]]);};_this.




_handle_onClick_CancelLogout=function(){
_this.setState({
currentOperation:'failure',
errorMessage:'User log out has been canceled'});

};_this.

_handle_onClick_TryAgain=function(){
_this.setState({
currentOperation:'confirm',
errorMessage:''});

};_this.

_handle_onClick_Continue=function(){
location.replace('/');
};_this.state={currentOperation:'confirm',errorMessage:''};return _this;}_createClass(LogoutScreen,[{key:'renderCreating',value:function renderCreating()

{var
classes=this.props.classes;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Creating user'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'Logging out. Please wait.'),
_react2.default.createElement(_Progress.LinearProgress,{mode:'query'}),
_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_CancelLogout},'Cancel'))));



}},{key:'renderSuccess',value:function renderSuccess()

{var
classes=this.props.classes;var
errorMessage=this.state.errorMessage;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Logout'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'You have been logged out'),
_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_Continue},'Continue'))));



}},{key:'renderFailure',value:function renderFailure()

{var
classes=this.props.classes;var
errorMessage=this.state.errorMessage;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Creating user'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'Failed logging out.',

_react2.default.createElement('br',null),'Reason: ',
errorMessage),

_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_TryAgain},'Try Again'))));



}},{key:'renderPrompt',value:function renderPrompt()

{var
classes=this.props.classes;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Log Out'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'You are currently logged in. Are you sure you want to log out?'),


_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_Logout},'Yes, Log Out'))));



}},{key:'render',value:function render()

{var
currentOperation=this.state.currentOperation;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
currentOperation==='confirm'&&this.renderPrompt(),
currentOperation==='logging out'&&this.renderCreating(),
currentOperation==='success'&&this.renderSuccess(),
currentOperation==='failure'&&this.renderFailure()));


}}]);return LogoutScreen;}(_react2.default.Component);LogoutScreen.propTypes={classes:_propTypes2.default.object.isRequired};exports.default=


(0,_styles.withStyles)(styleSheet)(LogoutScreen);
//# sourceMappingURL=LogoutScreen.js.map