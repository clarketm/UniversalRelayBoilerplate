Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _AppBar=require('material-ui/AppBar');var _AppBar2=_interopRequireDefault(_AppBar);
var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _Menu=require('material-ui-icons/Menu');var _Menu2=_interopRequireDefault(_Menu);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');
var _styles=require('material-ui/styles');
var _Toolbar=require('material-ui/Toolbar');var _Toolbar2=_interopRequireDefault(_Toolbar);
var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);

var _NavBarLoginButton=require('../../urb-account-management-webapp/components/NavBarLoginButton');var _NavBarLoginButton2=_interopRequireDefault(_NavBarLoginButton);

var _AppDrawer=require('./AppDrawer');var _AppDrawer2=_interopRequireDefault(_AppDrawer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var styles=function styles(theme){return _defineProperty({
'@global':{
html:{
boxSizing:'border-box'},

'*, *:before, *:after':{
boxSizing:'inherit'},

body:{
margin:0,
background:theme.palette.background.default,
color:theme.palette.text.primary,
lineHeight:'1.2',
overflowX:'hidden',
WebkitFontSmoothing:'antialiased',
MozOsxFontSmoothing:'grayscale'},

img:{
maxWidth:'100%',
height:'auto',
width:'auto'}},


appFrame:{
display:'flex',
alignItems:'stretch',
minHeight:'100vh',
width:'100%'},

grow:{
flex:'1 1 auto'},

title:{
marginLeft:24,
flex:'0 1 auto'},

appBar:{
transition:theme.transitions.create('width')}},





theme.breakpoints.up('lg'),{
drawer:{
width:'250px'},

appBarShift:{
width:'calc(100% - 250px)'},

navIconHide:{
display:'none'}});};var




AppFrame=function(_Component){_inherits(AppFrame,_Component);
function AppFrame(props,context){_classCallCheck(this,AppFrame);var _this=_possibleConstructorReturn(this,(AppFrame.__proto__||Object.getPrototypeOf(AppFrame)).call(this,
props,context));_this.




handleDrawerClose=function(){
_this.setState({drawerOpen:false});
};_this.

handleDrawerToggle=function(){
_this.setState({drawerOpen:!_this.state.drawerOpen});
};_this.state={drawerOpen:false};return _this;}_createClass(AppFrame,[{key:'render',value:function render()

{var _props=
this.props,children=_props.children,classes=_props.classes,Viewer=_props.Viewer;

var drawerDocked=false;

var appBarClassName=classes.appBar;
var navIconClassName=classes.icon;

if(drawerDocked){
navIconClassName+=' '+classes.navIconHide;
appBarClassName+=' '+classes.appBarShift;
}else{
appBarClassName+=' '+classes.appBarHome;
}

var title='Hello World';

return(
_react2.default.createElement('div',{className:classes.appFrame},
_react2.default.createElement(_AppBar2.default,{className:appBarClassName},
_react2.default.createElement(_Toolbar2.default,null,
_react2.default.createElement(_IconButton2.default,{
color:'contrast',
onClick:this.handleDrawerToggle,
className:navIconClassName},

_react2.default.createElement(_Menu2.default,null)),

title!==null&&
_react2.default.createElement(_Typography2.default,{
className:classes.title,
type:'title',
color:'inherit',
noWrap:true},

title),

_react2.default.createElement('div',{className:classes.grow}),
_react2.default.createElement(_NavBarLoginButton2.default,{Viewer:Viewer}))),


_react2.default.createElement(_AppDrawer2.default,{
className:classes.drawer,
docked:drawerDocked,
onRequestClose:this.handleDrawerClose,
open:drawerDocked||this.state.drawerOpen}),

children));


}}]);return AppFrame;}(_react.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(AppFrame),{Viewer:function Viewer(){return require('./__generated__/AppFrame_Viewer.graphql');}});
//# sourceMappingURL=AppFrame.js.map