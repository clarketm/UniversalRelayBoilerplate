Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactEventListener=require('react-event-listener');var _reactEventListener2=_interopRequireDefault(_reactEventListener);
var _MuiThemeProvider=require('material-ui/styles/MuiThemeProvider');var _MuiThemeProvider2=_interopRequireDefault(_MuiThemeProvider);

var _getWrapperRbCtx=require('../../_configuration/urb-base-webapp/getWrapperRbCtx');var _getWrapperRbCtx2=_interopRequireDefault(_getWrapperRbCtx);
var _createMUITheme=require('../../_configuration/urb-base-webapp/createMUITheme');var _createMUITheme2=_interopRequireDefault(_createMUITheme);
var _ViewportDimensions=require('../scripts/ViewportDimensions');var _ViewportDimensions2=_interopRequireDefault(_ViewportDimensions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Wrapper=function(_React$Component){_inherits(Wrapper,_React$Component);










function Wrapper(props,context){_classCallCheck(this,Wrapper);var _this=_possibleConstructorReturn(this,(Wrapper.__proto__||Object.getPrototypeOf(Wrapper)).call(this,
props,context));_this.






















handle_onResize=function(){
_this.rbCtx.viewportDimensions.handle_onResize();
};_this.rbCtx=(0,_getWrapperRbCtx2.default)(props.configuration);_this.rbCtx.viewportDimensions=new _ViewportDimensions2.default();_this.rbCtx.appData=props.configuration.appData;_this.muiTheme=(0,_createMUITheme2.default)(_this.rbCtx);return _this;}_createClass(Wrapper,[{key:'componentDidMount',value:function componentDidMount(){this.handle_onResize();}},{key:'getChildContext',value:function getChildContext(){return{rbCtx:this.rbCtx};}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactEventListener2.default,{target:'window',onResize:this.handle_onResize},
_react2.default.createElement(_MuiThemeProvider2.default,{theme:this.muiTheme},
this.props.children)));



}}]);return Wrapper;}(_react2.default.Component);Wrapper.childContextTypes={rbCtx:_propTypes2.default.object};exports.default=Wrapper;
//# sourceMappingURL=Wrapper.js.map