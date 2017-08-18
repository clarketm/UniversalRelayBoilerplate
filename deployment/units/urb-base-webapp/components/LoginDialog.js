Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);
var _Progress=require('material-ui/Progress');
var _Slide=require('material-ui/transitions/Slide');var _Slide2=_interopRequireDefault(_Slide);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _styles=require('material-ui/styles');
var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
grow:{
flex:'1 1 auto'}};};var



LoginDialog=function(_React$Component){_inherits(LoginDialog,_React$Component);















function LoginDialog(props,context){_classCallCheck(this,LoginDialog);var _this=_possibleConstructorReturn(this,(LoginDialog.__proto__||Object.getPrototypeOf(LoginDialog)).call(this,
props,context));_initialiseProps.call(_this);var _this$props=

_this.props,UserAccount_Identifier=_this$props.UserAccount_Identifier,User_Secret=_this$props.User_Secret;

_this.state={
currentOperation:'challenge',
errorMessage:'',
UserAccount_Identifier:'',
User_Secret:''};return _this;

}_createClass(LoginDialog,[{key:'renderChallenge',value:function renderChallenge()






































































{var _this2=this;var _props=
this.props,classes=_props.classes,open=_props.open;var _state=
this.state,UserAccount_Identifier=_state.UserAccount_Identifier,User_Secret=_state.User_Secret;

return(
_react2.default.createElement(_Dialog2.default,{open:open,transition:_Slide2.default,onRequestClose:this._handle_Close},
_react2.default.createElement(_Dialog.DialogTitle,null,'Log In'),

_react2.default.createElement(_Dialog.DialogContent,null,
_react2.default.createElement(_TextField2.default,{
label:'Account Name',
fullWidth:true,
value:UserAccount_Identifier,
onChange:function onChange(event){return _this2.setState({UserAccount_Identifier:event.target.value});}}),

_react2.default.createElement(_TextField2.default,{
label:'Password',
type:'password',
fullWidth:true,
value:User_Secret,
onChange:function onChange(event){return _this2.setState({User_Secret:event.target.value});}})),


_react2.default.createElement(_Dialog.DialogActions,null,
_react2.default.createElement(_Button2.default,{color:'accent',onClick:this._handle_onCLick_NewUser},'New User'),


_react2.default.createElement('div',{className:classes.grow}),
_react2.default.createElement(_Button2.default,{onClick:this._handle_Close},'Cancel'),
_react2.default.createElement(_Button2.default,{color:'primary',onClick:this._handle_onClick_LogIn},'Log In'))));





}},{key:'renderInProgress',value:function renderInProgress()

{var _props2=
this.props,classes=_props2.classes,open=_props2.open;var
UserAccount_Identifier=this.state.UserAccount_Identifier;

return(
_react2.default.createElement(_Dialog2.default,{open:open,onRequestClose:this._handle_Close},
_react2.default.createElement(_Dialog.DialogTitle,null,'Logging in'),

_react2.default.createElement(_Dialog.DialogContent,null,
_react2.default.createElement(_Typography2.default,{component:'p'},'Logging in as',

_react2.default.createElement('br',null),
UserAccount_Identifier),

_react2.default.createElement(_Progress.LinearProgress,{mode:'query'})),

_react2.default.createElement(_Dialog.DialogActions,null,
_react2.default.createElement(_Button2.default,{color:'accent',onClick:this._handle_onCLick_CancelLogIn},'New User'))));





}},{key:'renderFailure',value:function renderFailure()

{var _props3=
this.props,classes=_props3.classes,open=_props3.open;var _state2=
this.state,UserAccount_Identifier=_state2.UserAccount_Identifier,errorMessage=_state2.errorMessage;

return(
_react2.default.createElement(_Dialog2.default,{open:open,onRequestClose:this._handle_Close},
_react2.default.createElement(_Dialog.DialogTitle,null,'Log In Failed'),

_react2.default.createElement(_Dialog.DialogContent,null,
_react2.default.createElement(_Typography2.default,{component:'p'},'Failed loggin in as',

_react2.default.createElement('br',null),
UserAccount_Identifier,
_react2.default.createElement('br',null),'Reason: ',
errorMessage)),


_react2.default.createElement(_Dialog.DialogActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_TryAgain},'Try Again'))));



}},{key:'render',value:function render()

{var
currentOperation=this.state.currentOperation;

return(
_react2.default.createElement('div',null,
currentOperation==='challenge'&&this.renderChallenge(),
currentOperation==='in progress'&&this.renderInProgress(),
currentOperation==='failure'&&this.renderFailure()));


}}]);return LoginDialog;}(_react2.default.Component);var _initialiseProps=function _initialiseProps(){var _this3=this;this._handle_Close=function(){_this3.props.handlerClose();};this._handle_onClick_LogIn=function _callee(){var _state3,UserAccount_Identifier,User_Secret,loc,host,response,responseData;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_state3=_this3.state,UserAccount_Identifier=_state3.UserAccount_Identifier,User_Secret=_state3.User_Secret;_this3.setState({currentOperation:'in progress',User_Secret:''});_context.prev=2;loc=window.location;host=loc.protocol+'//'+loc.hostname+':'+loc.port;_context.next=7;return regeneratorRuntime.awrap(fetch(host+'/auth/login',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({UserAccount_Identifier:UserAccount_Identifier,User_Secret:User_Secret})}));case 7:response=_context.sent;_context.next=10;return regeneratorRuntime.awrap(response.json());case 10:responseData=_context.sent;console.log('LOG IN RESPONSE');console.log(responseData);if(responseData.success){location.replace(location.href);}else{_this3.setState({currentOperation:'failure',errorMessage:responseData.error});}_context.next=19;break;case 16:_context.prev=16;_context.t0=_context['catch'](2);_this3.setState({currentOperation:'failure',errorMessage:'Did not receive proper response from server. Please try again. Message:'+_context.t0.message});case 19:case'end':return _context.stop();}}},null,_this3,[[2,16]]);};this._handle_onCLick_NewUser=function(){_this3.props.handlerNewUser();};this._handle_onCLick_CancelLogIn=function(){_this3.setState({currentOperation:'failure',errorMessage:'Log in has been canceled'});};this._handle_onClick_TryAgain=function(){_this3.setState({currentOperation:'challenge',errorMessage:''});};};exports.default=


(0,_styles.withStyles)(styles)(LoginDialog);
//# sourceMappingURL=LoginDialog.js.map