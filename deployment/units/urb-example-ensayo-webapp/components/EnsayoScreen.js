Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

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




_handle_updateHandler_Ensayo=function(ensayoProperties){var
Ensayo_Title=ensayoProperties.Ensayo_Title,Ensayo_Description=ensayoProperties.Ensayo_Description,Ensayo_Content=ensayoProperties.Ensayo_Content;var _this$props=
_this.props,relay=_this$props.relay,Viewer=_this$props.Viewer;

_EnsayoAddMutation2.default.commit(
relay.environment,
Viewer,
Ensayo_Title,
Ensayo_Description,
Ensayo_Content);

};_this.

_handle_Close_Properties=function(){
_this.setState({propertiesIsOpen:false});
};_this.

_handle_onClick_Add=function(){
_this.setState({propertiesIsOpen:true});
};_this.state={propertiesIsOpen:false};return _this;}_createClass(EnsayoScreen,[{key:'render',value:function render()

{var
classes=this.props.classes;var
propertiesIsOpen=this.state.propertiesIsOpen;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Ensayo',subheader:'List of essays'}),

_react2.default.createElement(_Card.CardContent,null,
_react2.default.createElement('div',{className:classes.addNewButton},
_react2.default.createElement(_Button2.default,{
fab:true,
color:'primary',
className:classes.button,
onClick:this._handle_onClick_Add},

_react2.default.createElement(_Add2.default,null))),



this.props.children),


propertiesIsOpen&&
_react2.default.createElement(_EnsayoProperties2.default,{
Ensayo_Title:'',
Ensayo_Content:'',
Ensayo_Description:'',
handlerUpdate:this._handle_updateHandler_Ensayo,
handlerClose:this._handle_Close_Properties}))));




}}]);return EnsayoScreen;}(_react2.default.Component);EnsayoScreen.propTypes={classes:_propTypes2.default.object.isRequired,Viewer:_propTypes2.default.object.isRequired,children:_propTypes2.default.node.isRequired,relay:_propTypes2.default.object.isRequired};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styleSheet)(EnsayoScreen),{Viewer:function Viewer(){return require('./__generated__/EnsayoScreen_Viewer.graphql');}});
//# sourceMappingURL=EnsayoScreen.js.map