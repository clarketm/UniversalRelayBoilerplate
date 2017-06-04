Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Drawer=require('material-ui/Drawer');var _Drawer2=_interopRequireDefault(_Drawer);
var _styles=require('material-ui/styles');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _ChromeSettings=require('../../configuration/webapp/components/ChromeSettings');
var _NavMenu=require('../../configuration/webapp/components/NavMenu');var _NavMenu2=_interopRequireDefault(_NavMenu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

AppNavDrawer=function(_React$Component){_inherits(AppNavDrawer,_React$Component);function AppNavDrawer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppNavDrawer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppNavDrawer.__proto__||Object.getPrototypeOf(AppNavDrawer)).call.apply(_ref,[this].concat(args))),_this),_this.





_handle_onTouchTap_Drawer=function(){
_this.context.router.push('/');
_this.props.onRequestChangeNavDrawer(false);
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppNavDrawer,[{key:'render',value:function render()

{var _props=
this.props,location=_props.location,docked=_props.docked,onRequestChangeNavDrawer=_props.onRequestChangeNavDrawer,onChangeList=_props.onChangeList,open=_props.open,style=_props.style;

var drawerContainerStyle={
zIndex:_styles.zIndex.drawer-100,
backgroundColor:this.context.muiTheme.rawTheme.palette.backCanvas.viewportBackgroundColor};



if(!this.context.muiTheme.rawTheme.palette.backCanvas.navDrawerBoxShadow)
drawerContainerStyle.boxShadow=0;

return(
_react2.default.createElement(_Drawer2.default,{
style:style,
docked:docked,
open:open,
onRequestChange:onRequestChangeNavDrawer,
containerStyle:drawerContainerStyle},

_react2.default.createElement('div',{
style:{
cursor:'pointer',
fontSize:24,
color:_styles.typography.textFullWhite,
lineHeight:_styles.spacing.desktopKeylineIncrement+'px',
fontWeight:_styles.typography.fontWeightLight,
backgroundColor:this.context.muiTheme.palette.primary1Color,
paddingLeft:_styles.spacing.desktopGutter,
marginBottom:8},

onTouchTap:this._handle_onTouchTap_Drawer},_ChromeSettings.NavMenuTitle),



_react2.default.createElement(_NavMenu2.default,{Viewer:this.props.Viewer,value:location.pathname,onChange:onChangeList})));


}}]);return AppNavDrawer;}(_react2.default.Component);AppNavDrawer.contextTypes={muiTheme:_react2.default.PropTypes.object.isRequired,router:_react2.default.PropTypes.object.isRequired};exports.default=


_reactRelay2.default.createContainer(AppNavDrawer,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'AppNavDrawer_ViewerRelayQL',type:'Viewer'};}(

_NavMenu2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=AppNavDrawer.js.map