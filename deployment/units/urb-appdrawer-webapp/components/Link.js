Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _classnames=require('classnames');var _classnames2=_interopRequireDefault(_classnames);
var _found=require('found');
var _styles=require('material-ui/styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
root:{
color:'inherit',
textDecoration:'none',
'&:hover':{
textDecoration:'underline'}},


primary:{
color:theme.palette.primary[500]},

secondary:{
color:theme.palette.secondary.A400}};};var



Link=function(_React$Component){_inherits(Link,_React$Component);function Link(){_classCallCheck(this,Link);return _possibleConstructorReturn(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));}_createClass(Link,[{key:'render',value:function render(






props){var _classNames;var _props=







this.props,ComponentProp=_props.component,classes=_props.classes,className=_props.className,variant=_props.variant,to=_props.to,other=_objectWithoutProperties(_props,['component','classes','className','variant','to']);

var Component=void 0;

if(ComponentProp){
Component=ComponentProp;
}else if(to){
Component=_found.Link;
}else{
Component='a';
}

return(
_react2.default.createElement(Component,_extends({
to:to,
className:(0,_classnames2.default)(
classes.root,(_classNames={},_defineProperty(_classNames,

classes.primary,variant==='primary'),_defineProperty(_classNames,
classes.secondary,variant==='secondary'),_classNames),

className)},

other)));


}}]);return Link;}(_react2.default.Component);exports.default=


(0,_styles.withStyles)(styles)(Link);
//# sourceMappingURL=Link.js.map