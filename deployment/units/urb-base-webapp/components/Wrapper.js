Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _blue=require('material-ui/colors/blue');var _blue2=_interopRequireDefault(_blue);
var _palette=require('material-ui/styles/palette');var _palette2=_interopRequireDefault(_palette);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _pink=require('material-ui/colors/pink');var _pink2=_interopRequireDefault(_pink);
var _reactEventListener=require('react-event-listener');var _reactEventListener2=_interopRequireDefault(_reactEventListener);

var _ViewportDimensions=require('../scripts/ViewportDimensions');var _ViewportDimensions2=_interopRequireDefault(_ViewportDimensions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Wrapper=function(_React$Component){_inherits(Wrapper,_React$Component);










function Wrapper(props,context){_classCallCheck(this,Wrapper);var _this=_possibleConstructorReturn(this,(Wrapper.__proto__||Object.getPrototypeOf(Wrapper)).call(this,
props,context));_this.




























handle_onResize=function(){
_this.rbCtx.viewportDimensions.handle_onResize();
};_this.rbCtx={};_this.rbCtx.viewportDimensions=new _ViewportDimensions2.default();_this.rbCtx.appData=_this.props.appData;_this.muiTheme=(0,_styles.createMuiTheme)({palette:(0,_palette2.default)({primary:_blue2.default,accent:_pink2.default,type:'light'})});return _this;}_createClass(Wrapper,[{key:'componentDidMount',value:function componentDidMount(){this.handle_onResize();}},{key:'getChildContext',value:function getChildContext(){return{rbCtx:this.rbCtx};}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactEventListener2.default,{target:'window',onResize:this.handle_onResize},
_react2.default.createElement(_styles.MuiThemeProvider,{theme:this.muiTheme},
this.props.children)));



}}]);return Wrapper;}(_react2.default.Component);Wrapper.childContextTypes={rbCtx:_propTypes2.default.object};exports.default=Wrapper;
//# sourceMappingURL=Wrapper.js.map