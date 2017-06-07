Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);
var _FlatButton=require('material-ui/FlatButton');var _FlatButton2=_interopRequireDefault(_FlatButton);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var RichTextEditor=typeof document!=='undefined'?require('react-rte').default:null;var

Ensayo_Properties=function(_React$Component){_inherits(Ensayo_Properties,_React$Component);












function Ensayo_Properties(props,context){_classCallCheck(this,Ensayo_Properties);var _this=_possibleConstructorReturn(this,(Ensayo_Properties.__proto__||Object.getPrototypeOf(Ensayo_Properties)).call(this,
props,context));_this.









_handle_Open=function(){
_this.setState({
Dialog_IsOpen:true});

};_this.

_handle_onTouchTap_Cancel=function(){
_this.setState({
Dialog_IsOpen:false});

};_this.

_handle_onTouchTap_OK=function(){
_this.props.updateHandler({
Ensayo_Content:_this.state.RichTextEditorValue.toString('html'),
Ensayo_Title:_this.refs.Ensayo_Title.getValue(),
Ensayo_Description:_this.refs.Ensayo_Description.getValue()});


_this.setState({
Dialog_IsOpen:false});

};_this.

_handle_OnChange_RTE=function(value){
_this.setState({
RichTextEditorValue:value});

};_this.state={Dialog_IsOpen:false,RichTextEditorValue:RichTextEditor?RichTextEditor.createValueFromString(_this.props.Ensayo_Content,'html'):{}};return _this;}_createClass(Ensayo_Properties,[{key:'render',value:function render()

{
return(
_react2.default.createElement('div',null,
_react2.default.createElement(_Dialog2.default,{
open:this.state.Dialog_IsOpen,
title:'Ensayo',
actions:[
_react2.default.createElement(_FlatButton2.default,{key:'Cancel',label:'Cancel',onTouchTap:this._handle_onTouchTap_Cancel}),
_react2.default.createElement(_FlatButton2.default,{
key:'OK',
label:'OK',
primary:true,
onTouchTap:this._handle_onTouchTap_OK})]},



_react2.default.createElement(_TextField2.default,{
ref:'Ensayo_Title',
defaultValue:this.props.Ensayo_Title,
floatingLabelText:'Title',
fullWidth:true}),

_react2.default.createElement(_TextField2.default,{
ref:'Ensayo_Description',
defaultValue:this.props.Ensayo_Description,
floatingLabelText:'Description',
fullWidth:true}),

_react2.default.createElement('div',{
style:{
width:'100%',
height:300,
display:'inline-block',
position:'relative'}},


RichTextEditor==null?
_react2.default.createElement('div',null):
_react2.default.createElement(RichTextEditor,{
value:this.state.RichTextEditorValue,
onChange:this._handle_OnChange_RTE})))));





}}]);return Ensayo_Properties;}(_react2.default.Component);Ensayo_Properties.propTypes={Ensayo_Title:_propTypes2.default.string.isRequired,Ensayo_Description:_propTypes2.default.string.isRequired,Ensayo_Content:_propTypes2.default.string.isRequired,updateHandler:_propTypes2.default.func.isRequired};exports.default=Ensayo_Properties;
//# sourceMappingURL=Ensayo_Properties.js.map