Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _classnames=require('classnames');var _classnames2=_interopRequireDefault(_classnames);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Collapse=require('material-ui/transitions/Collapse');var _Collapse2=_interopRequireDefault(_Collapse);
var _styles=require('material-ui/styles');
var _List=require('material-ui/List');

var _Link=require('./Link');var _Link2=_interopRequireDefault(_Link);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
button:theme.mixins.gutters({
borderRadius:0,
justifyContent:'flex-start',
textTransform:'none',
width:'100%',
transition:theme.transitions.create('background-color',{
duration:theme.transitions.duration.shortest}),

'&:hover':{
textDecoration:'none'}}),


navItem:_extends({},
theme.typography.body2,{
display:'block',
paddingTop:0,
paddingBottom:0}),

navLink:{
fontWeight:theme.typography.fontWeightRegular,
display:'flex',
paddingTop:0,
paddingBottom:0},

navLinkButton:{
color:theme.palette.text.secondary,
textIndent:24,
fontSize:13},

activeButton:{
color:theme.palette.text.primary}};};var



AppDrawerNavItem=function(_React$Component){_inherits(AppDrawerNavItem,_React$Component);function AppDrawerNavItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppDrawerNavItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppDrawerNavItem.__proto__||Object.getPrototypeOf(AppDrawerNavItem)).call.apply(_ref,[this].concat(args))),_this),_this.














state={
open:false},_this.








handleClick=function(){
_this.setState({open:!_this.state.open});
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppDrawerNavItem,[{key:'componentWillMount',value:function componentWillMount(){if(this.props.openImmediately){this.setState({open:true});}}},{key:'render',value:function render()

{var _props=
this.props,children=_props.children,classes=_props.classes,title=_props.title,to=_props.to;

if(to){
return(
_react2.default.createElement(_List.ListItem,{className:classes.navLink,disableGutters:true},
_react2.default.createElement(_Button2.default,{
component:_Link2.default,
to:to,
className:(0,_classnames2.default)(classes.button,classes.navLinkButton),
activeClassName:classes.activeButton,
disableRipple:true,
onClick:this.props.onClick},

title)));



}

return(
_react2.default.createElement(_List.ListItem,{className:classes.navItem,disableGutters:true},
_react2.default.createElement(_Button2.default,{className:classes.button,onClick:this.handleClick},
title),

_react2.default.createElement(_Collapse2.default,{'in':this.state.open,transitionDuration:'auto',unmountOnExit:true},
children)));



}}]);return AppDrawerNavItem;}(_react2.default.Component);AppDrawerNavItem.defaultProps={openImmediately:false};exports.default=


(0,_styles.withStyles)(styles)(AppDrawerNavItem);
//# sourceMappingURL=AppDrawerNavItem.js.map