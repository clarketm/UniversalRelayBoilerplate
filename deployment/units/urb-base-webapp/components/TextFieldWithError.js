Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _FormControl=require('material-ui/Form/FormControl');var _FormControl2=_interopRequireDefault(_FormControl);
var _FormHelperText=require('material-ui/Form/FormHelperText');var _FormHelperText2=_interopRequireDefault(_FormHelperText);
var _Input=require('material-ui/Input');var _Input2=_interopRequireDefault(_Input);
var _InputLabel=require('material-ui/Input/InputLabel');var _InputLabel2=_interopRequireDefault(_InputLabel);
var _styles=require('material-ui/styles');
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
formControl:{
marginBottom:theme.spacing.unit}};};var



TextFieldWithError=function(_React$Component){_inherits(TextFieldWithError,_React$Component);function TextFieldWithError(){_classCallCheck(this,TextFieldWithError);return _possibleConstructorReturn(this,(TextFieldWithError.__proto__||Object.getPrototypeOf(TextFieldWithError)).apply(this,arguments));}_createClass(TextFieldWithError,[{key:'render',value:function render()







{var _props=
this.props,classes=_props.classes,errorText=_props.errorText,id=_props.id,label=_props.label,onChange=_props.onChange,value=_props.value;

var isError=errorText!=='';

return(
_react2.default.createElement(_FormControl2.default,{
className:classes.formControl,
error:isError,
id:id,
fullWidth:true},

_react2.default.createElement(_InputLabel2.default,{htmlFor:isError?'name-simple':'name-error'},
label),

_react2.default.createElement(_Input2.default,{id:'value',value:value,onChange:onChange}),
_react2.default.createElement(_FormHelperText2.default,null,isError?errorText:'')));


}}]);return TextFieldWithError;}(_react2.default.Component);exports.default=


(0,_styles.withStyles)(styles)(TextFieldWithError);
//# sourceMappingURL=TextFieldWithError.js.map