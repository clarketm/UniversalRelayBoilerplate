Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-base-webapp/components/ResponsiveContentArea.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _spacing=require('material-ui/styles/spacing');var _spacing2=_interopRequireDefault(_spacing);

var _ViewportDimensions=require('../scripts/ViewportDimensions');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
root:{
paddingTop:_spacing2.default.unit,
minHeight:400},

content:{
margin:_spacing2.default.unit},

contentWhenMedium:{
margin:_spacing2.default.unit*2+'px '+_spacing2.default.unit*3+'px'}};});var



ResponsiveContentArea=function(_React$Component){_inherits(ResponsiveContentArea,_React$Component);function ResponsiveContentArea(){_classCallCheck(this,ResponsiveContentArea);return _possibleConstructorReturn(this,(ResponsiveContentArea.__proto__||Object.getPrototypeOf(ResponsiveContentArea)).apply(this,arguments));}_createClass(ResponsiveContentArea,[{key:'render',value:function render()












{
var classes=this.props.classes;

return(
_react2.default.createElement('div',{className:classes.root,__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement('div',{className:classes.content,__source:{fileName:_jsxFileName,lineNumber:41}},
this.props.children)));



}}]);return ResponsiveContentArea;}(_react2.default.Component);ResponsiveContentArea.contextTypes={muiTheme:_propTypes2.default.object,rbContext:_propTypes2.default.object};var _default=


(0,_styles.withStyles)(styleSheet)(ResponsiveContentArea);exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(styleSheet,'styleSheet','units/urb-base-webapp/components/ResponsiveContentArea.jsx');__REACT_HOT_LOADER__.register(ResponsiveContentArea,'ResponsiveContentArea','units/urb-base-webapp/components/ResponsiveContentArea.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-base-webapp/components/ResponsiveContentArea.jsx');}();;
//# sourceMappingURL=ResponsiveContentArea.js.map