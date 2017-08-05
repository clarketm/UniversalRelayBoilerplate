Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);
var _Slide=require('material-ui/transitions/Slide');var _Slide2=_interopRequireDefault(_Slide);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _styles=require('material-ui/styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
grow:{
flex:'1 1 auto'}};});var



LoginDialog=function(_React$Component){_inherits(LoginDialog,_React$Component);












function LoginDialog(props,context){_classCallCheck(this,LoginDialog);var _this=_possibleConstructorReturn(this,(LoginDialog.__proto__||Object.getPrototypeOf(LoginDialog)).call(this,
props,context));_initialiseProps.call(_this);var _this$props=

_this.props,AccountName=_this$props.AccountName,AccountPassword=_this$props.AccountPassword;

_this.state={
AccountName:'',
AccountPassword:''};return _this;

}_createClass(LoginDialog,[{key:'render',value:function render()













{var _this2=this;
var classes=this.props.classes;var _state=
this.state,AccountName=_state.AccountName,AccountPassword=_state.AccountPassword;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_Dialog2.default,{open:this.props.open,transition:_Slide2.default,onRequestClose:this._handle_Close},
_react2.default.createElement(_Dialog.DialogTitle,null,'Log In'),

_react2.default.createElement(_Dialog.DialogContent,null,
_react2.default.createElement(_TextField2.default,{
label:'Account Name',
fullWidth:true,
value:AccountName,
onChange:function onChange(event){return _this2.setState({AccountName:event.target.value});}}),

_react2.default.createElement(_TextField2.default,{
label:'Password',
type:'password',
fullWidth:true,
value:AccountPassword,
onChange:function onChange(event){return _this2.setState({AccountPassword:event.target.value});}})),


_react2.default.createElement(_Dialog.DialogActions,null,
_react2.default.createElement(_Button2.default,{color:'accent',onClick:this._handle_NewUser},'New User'),


_react2.default.createElement('div',{className:classes.grow}),
_react2.default.createElement(_Button2.default,{onClick:this._handle_Close},'Cancel'),
_react2.default.createElement(_Button2.default,{color:'primary',onClick:this._handle_LogIn},'Log In')))));






}}]);return LoginDialog;}(_react2.default.Component);LoginDialog.propTypes={open:_propTypes2.default.bool.isRequired,handlerClose:_propTypes2.default.func.isRequired,handlerLogIn:_propTypes2.default.func.isRequired,handlerNewUser:_propTypes2.default.func.isRequired};var _initialiseProps=function _initialiseProps(){var _this3=this;this._handle_Close=function(){_this3.props.handlerClose();};this._handle_LogIn=function(){_this3.props.handlerLogIn();};this._handle_NewUser=function(){_this3.props.handlerNewUser();};};exports.default=


(0,_styles.withStyles)(styleSheet)(LoginDialog);
//# sourceMappingURL=LoginDialog.js.map