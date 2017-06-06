
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDoTextInput=function(_React$Component){_inherits(ToDoTextInput,_React$Component);

















function ToDoTextInput(props,context){_classCallCheck(this,ToDoTextInput);var _this=_possibleConstructorReturn(this,(ToDoTextInput.__proto__||Object.getPrototypeOf(ToDoTextInput)).call(this,
props,context));
_this._commitChanges=_this._commitChanges.bind(_this);
_this._handleBlur=_this._handleBlur.bind(_this);
_this._handleChangeText=_this._handleChangeText.bind(_this);
_this._handleSubmitEditing=_this._handleSubmitEditing.bind(_this);

_this.state={
ToDo_Text:_this.props.initialValue||''};return _this;

}_createClass(ToDoTextInput,[{key:'_commitChanges',value:function _commitChanges()

{
var newText=this.state.ToDo_Text.trim();
if(this.props.onDelete&&newText===''){
this.props.onDelete();
}else if(this.props.onCancel&&newText===this.props.initialValue){
this.props.onCancel();
}else if(newText!==''){
this.props.onSave(newText);
if(this._mounted!==false){
this.setState({ToDo_Text:''});
}
}
}},{key:'_handleBlur',value:function _handleBlur()

{
if(this.props.commitOnBlur){
this._commitChanges();
}
}},{key:'_handleChangeText',value:function _handleChangeText(

ToDo_Text){
if(this._mounted!==false){
this.setState({ToDo_Text:ToDo_Text});
}
}},{key:'_handleSubmitEditing',value:function _handleSubmitEditing()

{
this._commitChanges();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._mounted=false;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.TextInput,{
autoFocus:this.props.autoFocus,
clearButtonMode:this.props.clearButtonMode,
onBlur:this._handleBlur,
onChangeText:this._handleChangeText,
onSubmitEditing:this._handleSubmitEditing,
placeholder:this.props.placeholder,
style:this.props.style,
underlineColorAndroid:'transparent',
value:this.state.ToDo_Text}));


}}]);return ToDoTextInput;}(_react2.default.Component);exports.default=ToDoTextInput;
//# sourceMappingURL=ToDoTextInput.js.map