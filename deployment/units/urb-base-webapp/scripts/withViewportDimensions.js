Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=






withViewportDimensions;var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function withViewportDimensions(
WrappedComponent,
dimensions)
{var _class,_temp,_initialiseProps;

return _temp=_class=function(_React$Component){_inherits(_class,_React$Component);




function _class(props,context){_classCallCheck(this,_class);var _this=_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,
props,context));_initialiseProps.call(_this);var

viewportDimensions=context.rbCtx.viewportDimensions;

var state={};

for(var _iterator=dimensions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var dimension=_ref;
state[dimension]=viewportDimensions.get(_this,dimension);}

_this.state=state;return _this;
}_createClass(_class,[{key:'componentWillUnmount',value:function componentWillUnmount()






{var
viewportDimensions=this.context.rbCtx.viewportDimensions;

viewportDimensions.removeComponent(this);
}},{key:'render',value:function render()












{
var props=_extends({},this.state,this.props);

return _react2.default.createElement(WrappedComponent,props);
}}]);return _class;}(_react2.default.Component),_class.contextTypes={rbCtx:_propTypes2.default.object.isRequired},_initialiseProps=function _initialiseProps(){var _this2=this;this._handle_ViewportDimensionChange=function(){var viewportDimensions=_this2.context.rbCtx.viewportDimensions;var state={};for(var _iterator2=dimensions,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var dimension=_ref2;state[dimension]=viewportDimensions.get(_this2,dimension);}_this2.setState(state);};},_temp;

}
//# sourceMappingURL=withViewportDimensions.js.map