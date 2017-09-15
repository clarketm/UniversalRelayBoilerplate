Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _Table=require('material-ui/Table');var _Table2=_interopRequireDefault(_Table);





var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _withViewportDimensions=require('../../urb-base-webapp/scripts/withViewportDimensions');var _withViewportDimensions2=_interopRequireDefault(_withViewportDimensions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles={
card:{
minWidth:275}};var



ViewportDimensionsScreen=function(_React$Component){_inherits(ViewportDimensionsScreen,_React$Component);function ViewportDimensionsScreen(){_classCallCheck(this,ViewportDimensionsScreen);return _possibleConstructorReturn(this,(ViewportDimensionsScreen.__proto__||Object.getPrototypeOf(ViewportDimensionsScreen)).apply(this,arguments));}_createClass(ViewportDimensionsScreen,[{key:'render',value:function render()





{var _props=
this.props,classes=_props.classes,totalHeight=_props.totalHeight,totalWidth=_props.totalWidth;

var data=[
{name:'totalWidth',value:totalWidth},
{name:'totalHeight',value:totalHeight}];


return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Viewport Dimensions'}),
_react2.default.createElement(_Table2.default,null,
_react2.default.createElement(_Table.TableHead,null,
_react2.default.createElement(_Table.TableRow,null,
_react2.default.createElement(_Table.TableCell,null,'Property'),
_react2.default.createElement(_Table.TableCell,{numeric:true},'Value'))),


_react2.default.createElement(_Table.TableBody,null,
data.map(function(n){
return(
_react2.default.createElement(_Table.TableRow,{key:n.name},
_react2.default.createElement(_Table.TableCell,null,n.name),
_react2.default.createElement(_Table.TableCell,{numeric:true},n.value)));


}))),


_react2.default.createElement(_Card.CardContent,null))));



}}]);return ViewportDimensionsScreen;}(_react2.default.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(
(0,_withViewportDimensions2.default)(ViewportDimensionsScreen,[
'totalHeight',
'totalWidth'])),{Viewer:function Viewer(){return require('./__generated__/ViewportDimensionsScreen_Viewer.graphql');}});
//# sourceMappingURL=ViewportDimensionsScreen.js.map