Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var styles=function styles(theme){return _defineProperty({
content:theme.mixins.gutters({
paddingTop:80,
flex:'1 1 100%',
maxWidth:'100%',
margin:'0 auto'})},

theme.breakpoints.up(948),{
content:{
maxWidth:900}});};var




ResponsiveContentArea=function(_React$Component){_inherits(ResponsiveContentArea,_React$Component);function ResponsiveContentArea(){_classCallCheck(this,ResponsiveContentArea);return _possibleConstructorReturn(this,(ResponsiveContentArea.__proto__||Object.getPrototypeOf(ResponsiveContentArea)).apply(this,arguments));}_createClass(ResponsiveContentArea,[{key:'render',value:function render()




{var
classes=this.props.classes;

return(
_react2.default.createElement('div',{className:classes.content},
this.props.children));


}}]);return ResponsiveContentArea;}(_react2.default.Component);ResponsiveContentArea.contextTypes={rbCtx:_propTypes2.default.object};exports.default=


(0,_styles.withStyles)(styles)(ResponsiveContentArea);
//# sourceMappingURL=ResponsiveContentArea.js.map