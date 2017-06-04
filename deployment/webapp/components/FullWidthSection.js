Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ClearFix=require('material-ui/internal/ClearFix');var _ClearFix2=_interopRequireDefault(_ClearFix);
var _spacing=require('material-ui/styles/spacing');var _spacing2=_interopRequireDefault(_spacing);

var _ViewportDimensions=require('../scripts/ViewportDimensions');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var desktopGutter=_spacing2.default.desktopGutter;var

FullWidthSection=function(_Component){_inherits(FullWidthSection,_Component);function FullWidthSection(){_classCallCheck(this,FullWidthSection);return _possibleConstructorReturn(this,(FullWidthSection.__proto__||Object.getPrototypeOf(FullWidthSection)).apply(this,arguments));}_createClass(FullWidthSection,[{key:'getStyles',value:function getStyles()

















{
return{
root:{
padding:desktopGutter,
boxSizing:'border-box'},

content:{
maxWidth:1200,
margin:'0 auto'},

rootWhenSmall:{
paddingTop:desktopGutter*1,
paddingBottom:desktopGutter*1},

rootWhenMedium:{
paddingTop:desktopGutter*2,
paddingBottom:desktopGutter*2},

rootWhenLarge:{
paddingTop:desktopGutter*3,
paddingBottom:desktopGutter*3}};


}},{key:'render',value:function render()

{var _props=
this.props,style=_props.style,useContent=_props.useContent,contentType=_props.contentType,contentStyle=_props.contentStyle,other=_objectWithoutProperties(_props,['style','useContent','contentType','contentStyle']);

var muiSize=this.context.rbContext.viewportDimensions.get(this,'muiSize');

var styles=this.getStyles();

var content=void 0;
if(useContent)
content=_react2.default.createElement(
contentType,
{style:_extends(styles.content,contentStyle)},
this.props.children);else

content=this.props.children;

return(
_react2.default.createElement(_ClearFix2.default,_extends({},
other,{
style:_extends(
styles.root,
style,
muiSize===_ViewportDimensions.SMALL&&styles.rootWhenSmall,
muiSize===_ViewportDimensions.MEDIUM&&styles.rootWhenMedium,
muiSize===_ViewportDimensions.LARGE&&styles.rootWhenLarge)}),


content));


}}]);return FullWidthSection;}(_react.Component);FullWidthSection.propTypes={children:_react.PropTypes.node,contentStyle:_react.PropTypes.object,contentType:_react.PropTypes.string,style:_react.PropTypes.object,useContent:_react.PropTypes.bool};FullWidthSection.contextTypes={rbContext:_react2.default.PropTypes.object.isRequired};FullWidthSection.defaultProps={useContent:false,contentType:'div'};exports.default=FullWidthSection;
//# sourceMappingURL=FullWidthSection.js.map