Object.defineProperty(exports,"__esModule",{value:true});exports.LARGE=exports.MEDIUM=exports.SMALL=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=








withWidth;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactEventListener=require('react-event-listener');var _reactEventListener2=_interopRequireDefault(_reactEventListener);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SMALL=exports.SMALL=1;var MEDIUM=exports.MEDIUM=2;var LARGE=exports.LARGE=3;function withWidth(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _options$resizeInterv=



options.resizeInterval,resizeInterval=_options$resizeInterv===undefined?0:_options$resizeInterv;

return function(MyComponent){
return function(_Component){_inherits(WithWidth,_Component);

function WithWidth(props,context){_classCallCheck(this,WithWidth);var _this=_possibleConstructorReturn(this,(WithWidth.__proto__||Object.getPrototypeOf(WithWidth)).call(this,

props,context));_this.

















handleResize=function(){
clearTimeout(_this.deferTimer);
_this.deferTimer=setTimeout(function(){
_this.updateWidth();
},resizeInterval);
};var _this$getWidth=_this.getWidth(),width=_this$getWidth.width,innerWidth=_this$getWidth.innerWidth;_this.state={width:width,innerWidth:innerWidth};return _this;}_createClass(WithWidth,[{key:'componentDidMount',value:function componentDidMount(){this.updateWidth();}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.deferTimer);}},{key:'getWidth',value:function getWidth()

{

var innerWidth=window.innerWidth;
var width=void 0;

if(innerWidth>=992){
width=LARGE;
}else if(innerWidth>=768){
width=MEDIUM;
}else{
width=SMALL;
}

return{width:width,innerWidth:innerWidth};
}},{key:'updateWidth',value:function updateWidth()

{var _getWidth=

this.getWidth(),width=_getWidth.width,innerWidth=_getWidth.innerWidth;

if(width!==this.state.width)
this.setState({width:width});

if(innerWidth!==this.state.innerWidth)
this.setState({innerWidth:innerWidth});
}},{key:'render',value:function render()

{

return(
_react2.default.createElement(_reactEventListener2.default,{target:'window',onResize:this.handleResize},
_react2.default.createElement(MyComponent,_extends({},
this.props,{
width:this.state.width,
innerWidth:this.state.innerWidth}))));



}}]);return WithWidth;}(_react.Component);

};
}
//# sourceMappingURL=withWidth.js.map