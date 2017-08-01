Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _List=require('material-ui/List');var _List2=_interopRequireDefault(_List);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _EnsayoItem=require('./EnsayoItem');var _EnsayoItem2=_interopRequireDefault(_EnsayoItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
root:{
width:'100%',
maxWidth:360,
background:theme.palette.background.paper}};});var



EnsayoList=function(_React$Component){_inherits(EnsayoList,_React$Component);function EnsayoList(){_classCallCheck(this,EnsayoList);return _possibleConstructorReturn(this,(EnsayoList.__proto__||Object.getPrototypeOf(EnsayoList)).apply(this,arguments));}_createClass(EnsayoList,[{key:'render',value:function render()





{var
Viewer=this.props.Viewer;var
Ensayos=Viewer.Ensayos;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List2.default,null,
Ensayos.edges.map(function(_ref){var node=_ref.node;return(
_react2.default.createElement(_EnsayoItem2.default,{key:node.id,Viewer:Viewer,Ensayo:node}));}))));




}}]);return EnsayoList;}(_react2.default.Component);EnsayoList.propTypes={Viewer:_propTypes2.default.object.isRequired,relay:_propTypes2.default.object.isRequired};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styleSheet)(EnsayoList),{Viewer:function Viewer(){return require('./__generated__/EnsayoList_Viewer.graphql');}});
//# sourceMappingURL=EnsayoList.js.map