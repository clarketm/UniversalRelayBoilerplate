Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Menu=require('material-ui/Menu');var _Menu2=_interopRequireDefault(_Menu);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _RequiresAuthentication=require('./RequiresAuthentication');



var _LoginDialog=require('./LoginDialog');var _LoginDialog2=_interopRequireDefault(_LoginDialog);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{};};var

NavBarLoginButton=function(_React$Component){_inherits(NavBarLoginButton,_React$Component);














function NavBarLoginButton(props,context){_classCallCheck(this,NavBarLoginButton);var _this=_possibleConstructorReturn(this,(NavBarLoginButton.__proto__||Object.getPrototypeOf(NavBarLoginButton)).call(this,
props,context));_this.

















_handle_onClick_Login=function(){
_this.setState({loginDialogIsOpen:true,userMenuIsOpen:false});
};_this.

_handle_onClick_Profile=function(){
_this.setState({userMenuIsOpen:false});
};_this.

_handle_Login_Close=function(){
_this.setState({loginDialogIsOpen:false});
};_this.

_handle_onClick_UserMenu=function(event){
_this.setState({userMenuIsOpen:true,anchorEl:event.currentTarget});
};_this.

_handle_UserMenu_Close=function(){
_this.setState({userMenuIsOpen:false});
};_this.

_handle_onClick_Logout=function(){
_this.setState({userMenuIsOpen:false});
_this.context.router.push('/user/logout');
};_this.

_handle_Login_NewUser=function(){
_this.setState({loginDialogIsOpen:false});

_this.context.router.push('/user/new');
};_this.state={anchorEl:undefined,loginDialogIsOpen:false,userMenuIsOpen:false};return _this;}_createClass(NavBarLoginButton,[{key:'componentWillMount',value:function componentWillMount(){(0,_RequiresAuthentication.registerAuthenticationRequiredCallback)(this._handle_onClick_Login);}},{key:'componentWillUnmount',value:function componentWillUnmount(){(0,_RequiresAuthentication.unregisterAuthenticationRequiredCallback)();}},{key:'render',value:function render()

{var _props$Viewer=
this.props.Viewer,User_IsAnonymous=_props$Viewer.User_IsAnonymous,User_DisplayName=_props$Viewer.User_DisplayName;var _state=
this.state,loginDialogIsOpen=_state.loginDialogIsOpen,userMenuIsOpen=_state.userMenuIsOpen;

return(
_react2.default.createElement('div',null,
User_IsAnonymous&&
_react2.default.createElement(_Button2.default,{color:'contrast',onClick:this._handle_onClick_Login},'Login'),



!User_IsAnonymous&&
_react2.default.createElement(_Button2.default,{color:'contrast',onClick:this._handle_onClick_UserMenu},
User_DisplayName),


_react2.default.createElement(_LoginDialog2.default,{
open:loginDialogIsOpen,
handlerClose:this._handle_Login_Close,
handlerNewUser:this._handle_Login_NewUser}),

_react2.default.createElement(_Menu2.default,{
id:'lock-menu',
anchorEl:this.state.anchorEl,
open:userMenuIsOpen,
onRequestClose:this._handle_UserMenu_Close},

_react2.default.createElement(_Menu.MenuItem,{key:'profile',onClick:this._handle_onClick_Profile},'Profile'),


_react2.default.createElement(_Menu.MenuItem,{key:'login',onClick:this._handle_onClick_Login},'Login as a different user'),


_react2.default.createElement(_Menu.MenuItem,{key:'logout',onClick:this._handle_onClick_Logout},'Log out'))));





}}]);return NavBarLoginButton;}(_react2.default.Component);NavBarLoginButton.contextTypes={router:_propTypes2.default.object};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(NavBarLoginButton),{Viewer:function Viewer(){return require('./__generated__/NavBarLoginButton_Viewer.graphql');}});
//# sourceMappingURL=NavBarLoginButton.js.map