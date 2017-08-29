Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
card:{
minWidth:275}};};var



EnsayoPublicList=function(_React$Component){_inherits(EnsayoPublicList,_React$Component);function EnsayoPublicList(){_classCallCheck(this,EnsayoPublicList);return _possibleConstructorReturn(this,(EnsayoPublicList.__proto__||Object.getPrototypeOf(EnsayoPublicList)).apply(this,arguments));}_createClass(EnsayoPublicList,[{key:'_handle_onClick',value:function _handle_onClick(




id){
this.context.router.push('/ensayo/item/'+id);
}},{key:'render',value:function render()

{var _this2=this;var _props=
this.props,classes=_props.classes,Viewer=_props.Viewer;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
Viewer.Ensayos.edges.map(function(edge){return(
_react2.default.createElement(_Card2.default,{key:edge.node.id,className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:edge.node.Ensayo_Title}),

_react2.default.createElement(_Card.CardContent,{onClick:function onClick(){return _this2._handle_onClick(edge.node.id);}},
edge.node.Ensayo_Description)));})));





}}]);return EnsayoPublicList;}(_react2.default.Component);EnsayoPublicList.contextTypes={router:_propTypes2.default.object};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(EnsayoPublicList),{Viewer:function Viewer(){return require('./__generated__/EnsayoPublicList_Viewer.graphql');}});
//# sourceMappingURL=EnsayoPublicList.js.map