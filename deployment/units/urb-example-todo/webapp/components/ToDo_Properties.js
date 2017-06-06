Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);
var _FlatButton=require('material-ui/FlatButton');var _FlatButton2=_interopRequireDefault(_FlatButton);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_Properties=function(_React$Component){_inherits(ToDo_Properties,_React$Component);





function ToDo_Properties(props,context){_classCallCheck(this,ToDo_Properties);var _this=_possibleConstructorReturn(this,(ToDo_Properties.__proto__||Object.getPrototypeOf(ToDo_Properties)).call(this,
props,context));_this.










_handle_onTouchTap_Close=function(){
_this.setState({Dialog_IsOpen:false});
};_this.

_handle_onTouchTap_OK=function(){
_this.props.updateHandler({ToDo_Text:_this.refs.ToDo_Text.getValue()});

_this.setState({Dialog_IsOpen:false});
};_this.state={Dialog_IsOpen:false};return _this;}_createClass(ToDo_Properties,[{key:'_handle_Open',value:function _handle_Open(){this.setState({Dialog_IsOpen:true});}},{key:'render',value:function render()

{
return(
_react2.default.createElement('div',null,
_react2.default.createElement(_Dialog2.default,{
open:this.state.Dialog_IsOpen,
title:'ToDo',
actions:[
_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_Close}),
_react2.default.createElement(_FlatButton2.default,{
key:'OK',
label:'OK',
primary:true,
onTouchTap:this._handle_onTouchTap_OK})]},



_react2.default.createElement(_TextField2.default,{
ref:'ToDo_Text',
defaultValue:this.props.ToDo_Text,
floatingLabelText:'To Do',
fullWidth:true}))));




}}]);return ToDo_Properties;}(_react2.default.Component);ToDo_Properties.propTypes={ToDo_Text:_react2.default.PropTypes.string.isRequired,updateHandler:_react2.default.PropTypes.func.isRequired};exports.default=ToDo_Properties;
//# sourceMappingURL=ToDo_Properties.js.map