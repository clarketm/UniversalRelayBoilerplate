Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _reactHelmet=require('react-helmet');var _reactHelmet2=_interopRequireDefault(_reactHelmet);
var _htmlToReact=require('html-to-react');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoPublicItem=function(_React$Component){_inherits(EnsayoPublicItem,_React$Component);function EnsayoPublicItem(){_classCallCheck(this,EnsayoPublicItem);return _possibleConstructorReturn(this,(EnsayoPublicItem.__proto__||Object.getPrototypeOf(EnsayoPublicItem)).apply(this,arguments));}_createClass(EnsayoPublicItem,[{key:'render',value:function render()
{var
Viewer=this.props.Viewer;

var contentH1=Viewer.Ensayo.Ensayo_Title.substring(0,100);
var contentH2=Viewer.Ensayo.Ensayo_Description.substring(0,100);

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_reactHelmet2.default,{
title:Viewer.Ensayo.Ensayo_Title,
meta:[
{name:'description',content:Viewer.Ensayo.Ensayo_Description}]}),


_react2.default.createElement(_Card2.default,null,
_react2.default.createElement(_Card.CardHeader,{
title:
_react2.default.createElement('h1',null,
contentH1),


subheader:
_react2.default.createElement('h2',null,
contentH2)}),



_react2.default.createElement(_Card.CardContent,null,
new _htmlToReact.Parser().parse(Viewer.Ensayo.Ensayo_Content)))));




}}]);return EnsayoPublicItem;}(_react2.default.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(
EnsayoPublicItem,{Viewer:function Viewer(){return require('./__generated__/EnsayoPublicItem_Viewer.graphql');}});
//# sourceMappingURL=EnsayoPublicItem.js.map