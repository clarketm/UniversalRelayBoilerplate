Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _spacing=require('material-ui/styles/spacing');var _spacing2=_interopRequireDefault(_spacing);

var _ViewportDimensions=require('../scripts/ViewportDimensions');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


ResponsiveContentArea=function(_React$Component){_inherits(ResponsiveContentArea,_React$Component);function ResponsiveContentArea(){_classCallCheck(this,ResponsiveContentArea);return _possibleConstructorReturn(this,(ResponsiveContentArea.__proto__||Object.getPrototypeOf(ResponsiveContentArea)).apply(this,arguments));}_createClass(ResponsiveContentArea,[{key:'getStyles',value:function getStyles()






{

var styles={
root:{
paddingTop:_spacing2.default.desktopKeylineIncrement,
minHeight:400},

content:{
margin:_spacing2.default.desktopGutter},

contentWhenMedium:{
margin:_spacing2.default.desktopGutter*2+'px '+_spacing2.default.desktopGutter*3+'px'}};



var muiSize=this.context.rbContext.viewportDimensions.get(this,'muiSize');
if(muiSize===_ViewportDimensions.MEDIUM||muiSize===_ViewportDimensions.LARGE)
styles.content=_extends(styles.content,styles.contentWhenMedium);

return styles;
}},{key:'render',value:function render()

{

var styles=this.getStyles();var
prepareStyles=this.context.muiTheme.prepareStyles;

return(
_react2.default.createElement('div',{style:prepareStyles(styles.root)},
_react2.default.createElement('div',{style:prepareStyles(styles.content)},
this.props.children)));



}}]);return ResponsiveContentArea;}(_react2.default.Component);ResponsiveContentArea.contextTypes={muiTheme:_react2.default.PropTypes.object,rbContext:_react2.default.PropTypes.object};exports.default=ResponsiveContentArea;
//# sourceMappingURL=ResponsiveContentArea.js.map