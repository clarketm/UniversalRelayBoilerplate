Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Dialog=require('material-ui/Dialog');var _Dialog2=_interopRequireDefault(_Dialog);




var _react=require('react');var _react2=_interopRequireDefault(_react);
var _styles=require('material-ui/styles');
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
container:{
display:'flex',
flexWrap:'wrap'}};};var



ToDo_Properties=function(_React$Component){_inherits(ToDo_Properties,_React$Component);










function ToDo_Properties(props,context){_classCallCheck(this,ToDo_Properties);var _this=_possibleConstructorReturn(this,(ToDo_Properties.__proto__||Object.getPrototypeOf(ToDo_Properties)).call(this,
props,context));_this.








_handle_Close=function(){
_this.props.handlerClose();
};_this.

_handle_OK=function(){
_this.props.handlerUpdate({ToDo_Text:_this.state.ToDo_Text});

_this.props.handlerClose();
};var ToDo_Text=_this.props.ToDo_Text;_this.state={ToDo_Text:ToDo_Text};return _this;}_createClass(ToDo_Properties,[{key:'render',value:function render()

{var _this2=this;var
ToDo_Text=this.state.ToDo_Text;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_Dialog2.default,{open:this.props.open,onRequestClose:this._handle_Close},
_react2.default.createElement(_Dialog.DialogTitle,null,'ToDo'),
_react2.default.createElement(_Dialog.DialogContent,null,
_react2.default.createElement(_TextField2.default,{
label:'To Do',
fullWidth:true,
value:ToDo_Text,
onChange:function onChange(event){return(
_this2.setState({ToDo_Text:event.target.value}));}})),


_react2.default.createElement(_Dialog.DialogActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_Close},'Cancel'),
_react2.default.createElement(_Button2.default,{onClick:this._handle_OK,color:'primary'},'OK')))));






}}]);return ToDo_Properties;}(_react2.default.Component);exports.default=


(0,_styles.withStyles)(styles)(ToDo_Properties);
//# sourceMappingURL=ToDoProperties.js.map