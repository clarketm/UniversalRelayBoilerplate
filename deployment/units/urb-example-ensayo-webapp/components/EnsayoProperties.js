Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-ensayo-webapp/components/EnsayoProperties.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _styles=require('material-ui/styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
container:{
display:'flex',
flexWrap:'wrap'},

formControl:{
margin:theme.spacing.unit},

richTextContainer:{
width:'100%',
height:300,
display:'inline-block',
position:'relative'}};});var



EnsayoProperties=function(_React$Component){_inherits(EnsayoProperties,_React$Component);















function EnsayoProperties(props,context){_classCallCheck(this,EnsayoProperties);var _this=_possibleConstructorReturn(this,(EnsayoProperties.__proto__||Object.getPrototypeOf(EnsayoProperties)).call(this,
props,context));_initialiseProps.call(_this);var _this$props=

_this.props,Ensayo_Title=_this$props.Ensayo_Title,Ensayo_Description=_this$props.Ensayo_Description,Ensayo_Content=_this$props.Ensayo_Content;

_this.state={
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description};return _this;






}_createClass(EnsayoProperties,[{key:'___handle_Close__REACT_HOT_LOADER__',value:function ___handle_Close__REACT_HOT_LOADER__()









{
this.props.handlerClose();
}},{key:'___handle_OK__REACT_HOT_LOADER__',value:function ___handle_OK__REACT_HOT_LOADER__()

{
this.props.handlerUpdate({
Ensayo_Title:this.state.Ensayo_Title,
Ensayo_Description:this.state.Ensayo_Description,
Ensayo_Content:''});



this.props.handlerClose();
}},{key:'render',value:function render()

{var _this2=this;
var classes=this.props.classes;var _state=
this.state,Ensayo_Title=_state.Ensayo_Title,Ensayo_Description=_state.Ensayo_Description;

return(
_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:88}},
_react2.default.createElement(_Dialog2.default,{open:this.props.open,onRequestClose:this._handle_Close,__source:{fileName:_jsxFileName,lineNumber:89}},
_react2.default.createElement(_Dialog.DialogTitle,{__source:{fileName:_jsxFileName,lineNumber:90}},'Ensayo'),

_react2.default.createElement(_Dialog.DialogContent,{__source:{fileName:_jsxFileName,lineNumber:92}},
_react2.default.createElement(_TextField2.default,{
label:'Title',
fullWidth:true,
value:Ensayo_Title,
onChange:function onChange(event){return _this2.setState({Ensayo_Title:event.target.value});},__source:{fileName:_jsxFileName,lineNumber:93}}),

_react2.default.createElement(_TextField2.default,{
label:'Description',
fullWidth:true,
value:Ensayo_Description,
onChange:function onChange(event){return _this2.setState({Ensayo_Description:event.target.value});},__source:{fileName:_jsxFileName,lineNumber:99}})),


_react2.default.createElement(_Dialog.DialogActions,{__source:{fileName:_jsxFileName,lineNumber:106}},
_react2.default.createElement(_Button2.default,{onClick:this._handle_Close,__source:{fileName:_jsxFileName,lineNumber:107}},'Cancel'),
_react2.default.createElement(_Button2.default,{onClick:this._handle_OK,color:'primary',__source:{fileName:_jsxFileName,lineNumber:108}},'OK')))));






}}]);return EnsayoProperties;}(_react2.default.Component);EnsayoProperties.propTypes={Ensayo_Title:_propTypes2.default.string.isRequired,Ensayo_Description:_propTypes2.default.string.isRequired,Ensayo_Content:_propTypes2.default.string.isRequired,open:_propTypes2.default.bool.isRequired,handlerUpdate:_propTypes2.default.func.isRequired,handlerClose:_propTypes2.default.func.isRequired};var _initialiseProps=function _initialiseProps(){var _this3=this;this._handle_Close=function(){return _this3.___handle_Close__REACT_HOT_LOADER__.apply(_this3,arguments);};this._handle_OK=function(){return _this3.___handle_OK__REACT_HOT_LOADER__.apply(_this3,arguments);};};var _default=EnsayoProperties;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(styleSheet,'styleSheet','units/urb-example-ensayo-webapp/components/EnsayoProperties.jsx');__REACT_HOT_LOADER__.register(EnsayoProperties,'EnsayoProperties','units/urb-example-ensayo-webapp/components/EnsayoProperties.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-webapp/components/EnsayoProperties.jsx');}();;
//# sourceMappingURL=EnsayoProperties.js.map