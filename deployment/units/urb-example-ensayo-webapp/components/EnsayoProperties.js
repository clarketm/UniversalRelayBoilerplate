Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

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






}_createClass(EnsayoProperties,[{key:'render',value:function render()
























{var _this2=this;var
classes=this.props.classes;var _state=
this.state,Ensayo_Title=_state.Ensayo_Title,Ensayo_Description=_state.Ensayo_Description;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_Dialog2.default,{open:true,onRequestClose:this._handle_Close},
_react2.default.createElement(_Dialog.DialogTitle,null,'Ensayo'),

_react2.default.createElement(_Dialog.DialogContent,null,
_react2.default.createElement(_TextField2.default,{
label:'Title',
fullWidth:true,
value:Ensayo_Title,
onChange:function onChange(event){return _this2.setState({Ensayo_Title:event.target.value});}}),

_react2.default.createElement(_TextField2.default,{
label:'Description',
fullWidth:true,
value:Ensayo_Description,
onChange:function onChange(event){return _this2.setState({Ensayo_Description:event.target.value});}})),


_react2.default.createElement(_Dialog.DialogActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_Close},'Cancel'),
_react2.default.createElement(_Button2.default,{onClick:this._handle_OK,color:'primary'},'OK')))));






}}]);return EnsayoProperties;}(_react2.default.Component);EnsayoProperties.propTypes={Ensayo_Title:_propTypes2.default.string.isRequired,Ensayo_Description:_propTypes2.default.string.isRequired,Ensayo_Content:_propTypes2.default.string.isRequired,handlerUpdate:_propTypes2.default.func.isRequired,handlerClose:_propTypes2.default.func.isRequired};var _initialiseProps=function _initialiseProps(){var _this3=this;this._handle_Close=function(){_this3.props.handlerClose();};this._handle_OK=function(){_this3.props.handlerUpdate({Ensayo_Title:_this3.state.Ensayo_Title,Ensayo_Description:_this3.state.Ensayo_Description,Ensayo_Content:''});_this3.props.handlerClose();};};exports.default=EnsayoProperties;
//# sourceMappingURL=EnsayoProperties.js.map