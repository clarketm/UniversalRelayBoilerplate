Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _AppBar=require('material-ui/AppBar');var _AppBar2=_interopRequireDefault(_AppBar);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _AppNavDrawer=require('./AppNavDrawer');var _AppNavDrawer2=_interopRequireDefault(_AppNavDrawer);
var _ChromeHelmet=require('../../configuration/webapp/components/ChromeHelmet');var _ChromeHelmet2=_interopRequireDefault(_ChromeHelmet);
var _ChromeRightIcon=require('../../configuration/webapp/components/ChromeRightIcon');var _ChromeRightIcon2=_interopRequireDefault(_ChromeRightIcon);
var _Footer=require('../../configuration/webapp/components/Footer');var _Footer2=_interopRequireDefault(_Footer);
var _ChromeSettings=require('../../configuration/webapp/components/ChromeSettings');
var _ViewportDimensions=require('../scripts/ViewportDimensions');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



Chrome=function(_React$Component){_inherits(Chrome,_React$Component);










function Chrome(props,context){_classCallCheck(this,Chrome);var _this=_possibleConstructorReturn(this,(Chrome.__proto__||Object.getPrototypeOf(Chrome)).call(this,
props,context));_this.






_handle_onTouchTap_NavigationToggle=function(){
_this._handle_RequestChangeNavDrawer(!_this.state.navDrawerIsOpen);
};_this.

_handle_RequestChangeNavDrawer=function(open){
_this.setState({navDrawerIsOpen:open});
};_this.

_handle_onChangeList_AppNavDrawer=function(event,value){
_this.context.router.push(value);
_this.setState({navDrawerIsOpen:false});
};_this.state={navDrawerIsOpen:false};return _this;}_createClass(Chrome,[{key:'getStyles',value:function getStyles()

{
var styles={
appBar:{
position:'fixed',
zIndex:this.context.muiTheme.zIndex.appBar+1,
top:0},

viewport:{
paddingLeft:0,
minHeight:500},

navDrawer:{},
viewportContainer:{
backgroundColor:this.context.muiTheme.rawTheme.palette.backCanvas.viewportBackgroundColor}};



return styles;
}},{key:'render',value:function render()

{
var styles=this.getStyles();var

navDrawerIsOpen=this.state.navDrawerIsOpen;

var showMenuIconButton=true;

if(this.context.rbContext.viewportDimensions.get(this,'muiSize')===_ViewportDimensions.LARGE){
navDrawerIsOpen=true;
showMenuIconButton=false;

styles.navDrawer.zIndex=styles.appBar.zIndex-1;
styles.appBar.paddingLeft=276;
styles.viewport.paddingLeft=256;
}

return(
_react2.default.createElement('div',{style:styles.viewportContainer},
_react2.default.createElement(_ChromeHelmet2.default,null),
_react2.default.createElement(_AppBar2.default,{
onLeftIconButtonTouchTap:this._handle_onTouchTap_NavigationToggle,
title:_ChromeSettings.MainScreenTitle,
zDepth:0,
iconElementRight:_react2.default.createElement(_ChromeRightIcon2.default,{Viewer:this.props.Viewer}),
style:styles.appBar,
showMenuIconButton:showMenuIconButton}),

_react2.default.createElement('div',{style:styles.viewport},
this.props.children),

_react2.default.createElement(_AppNavDrawer2.default,{
Viewer:this.props.Viewer,
style:styles.navDrawer,
location:location,
docked:true,
onRequestChangeNavDrawer:this._handle_RequestChangeNavDrawer,
onChangeList:this._handle_onChangeList_AppNavDrawer,
open:navDrawerIsOpen}),

_react2.default.createElement(_Footer2.default,{Viewer:this.props.Viewer})));


}}]);return Chrome;}(_react2.default.Component);Chrome.contextTypes={muiTheme:_react2.default.PropTypes.object,router:_react2.default.PropTypes.object.isRequired,rbContext:_react2.default.PropTypes.object};exports.default=





_reactRelay2.default.createContainer(Chrome,{
fragments:{
Viewer:function Viewer(){return function(RQL_0,RQL_1,RQL_2){return{children:[].concat.apply([],[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'UserToken2',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1),_reactRelay2.default.QL.__frag(RQL_2)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Chrome_ViewerRelayQL',type:'Viewer'};}(



_ChromeRightIcon2.default.getFragment('Viewer'),
_AppNavDrawer2.default.getFragment('Viewer'),
_Footer2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Chrome.js.map