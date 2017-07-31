Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-ensayo-webapp/components/EnsayoScreen.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Add=require('material-ui-icons/Add');var _Add2=_interopRequireDefault(_Add);
var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _EnsayoAddMutation=require('../../urb-example-ensayo-client/relay/EnsayoAddMutation');var _EnsayoAddMutation2=_interopRequireDefault(_EnsayoAddMutation);
var _EnsayoProperties=require('./EnsayoProperties');var _EnsayoProperties2=_interopRequireDefault(_EnsayoProperties);
var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
card:{
minWidth:275},

addNewButton:{float:'right',marginTop:-58,marginRight:20}};});var


EnsayoScreen=function(_React$Component){_inherits(EnsayoScreen,_React$Component);











function EnsayoScreen(props,context){_classCallCheck(this,EnsayoScreen);var _this=_possibleConstructorReturn(this,(EnsayoScreen.__proto__||Object.getPrototypeOf(EnsayoScreen)).call(this,
props,context));_this.




_handle_updateHandler_Ensayo=function(){return _this.___handle_updateHandler_Ensayo__REACT_HOT_LOADER__.apply(_this,arguments);};_this.












_handle_handlerClose_Properties=function(){return _this.___handle_handlerClose_Properties__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



_handle_onClick_Add=function(){return _this.___handle_onClick_Add__REACT_HOT_LOADER__.apply(_this,arguments);};_this.state={propertiesIsOpen:false};return _this;}_createClass(EnsayoScreen,[{key:'___handle_updateHandler_Ensayo__REACT_HOT_LOADER__',value:function ___handle_updateHandler_Ensayo__REACT_HOT_LOADER__(ensayoProperties){var Ensayo_Title=ensayoProperties.Ensayo_Title,Ensayo_Description=ensayoProperties.Ensayo_Description,Ensayo_Content=ensayoProperties.Ensayo_Content;var _props=this.props,relay=_props.relay,Viewer=_props.Viewer;_EnsayoAddMutation2.default.commit(relay.environment,Viewer,Ensayo_Content,Ensayo_Title,Ensayo_Description);}},{key:'___handle_handlerClose_Properties__REACT_HOT_LOADER__',value:function ___handle_handlerClose_Properties__REACT_HOT_LOADER__(){this.setState({propertiesIsOpen:false});}},{key:'___handle_onClick_Add__REACT_HOT_LOADER__',value:function ___handle_onClick_Add__REACT_HOT_LOADER__(){
this.setState({propertiesIsOpen:true});
}},{key:'render',value:function render()

{
var classes=this.props.classes;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,{__source:{fileName:_jsxFileName,lineNumber:65}},
_react2.default.createElement(_Card2.default,{className:classes.card,__source:{fileName:_jsxFileName,lineNumber:66}},
_react2.default.createElement(_Card.CardHeader,{title:'Ensayo',subheader:'List of essays',__source:{fileName:_jsxFileName,lineNumber:67}}),

_react2.default.createElement('div',{className:classes.addNewButton,__source:{fileName:_jsxFileName,lineNumber:69}},
_react2.default.createElement(_Button2.default,{
fab:true,
color:'primary',
className:classes.button,
onClick:this._handle_onClick_Add,__source:{fileName:_jsxFileName,lineNumber:70}},

_react2.default.createElement(_Add2.default,{__source:{fileName:_jsxFileName,lineNumber:76}}))),



this.props.children,

_react2.default.createElement(_EnsayoProperties2.default,{
Ensayo_Title:'',
Ensayo_Content:'',
Ensayo_Description:'',
handlerUpdate:this._handle_updateHandler_Ensayo,
handlerClose:this._handle_handlerClose_Properties,
open:this.state.propertiesIsOpen,__source:{fileName:_jsxFileName,lineNumber:82}}))));




}}]);return EnsayoScreen;}(_react2.default.Component);EnsayoScreen.propTypes={classes:_propTypes2.default.object.isRequired,Viewer:_propTypes2.default.object.isRequired,children:_propTypes2.default.node.isRequired,relay:_propTypes2.default.object.isRequired};var _default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styleSheet)(EnsayoScreen),{Viewer:function Viewer(){return require('./__generated__/EnsayoScreen_Viewer.graphql');}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(styleSheet,'styleSheet','units/urb-example-ensayo-webapp/components/EnsayoScreen.jsx');__REACT_HOT_LOADER__.register(EnsayoScreen,'EnsayoScreen','units/urb-example-ensayo-webapp/components/EnsayoScreen.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-webapp/components/EnsayoScreen.jsx');}();;
//# sourceMappingURL=EnsayoScreen.js.map