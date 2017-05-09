
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


StatusButton=function(_React$Component){_inherits(StatusButton,_React$Component);function StatusButton(){_classCallCheck(this,StatusButton);return _possibleConstructorReturn(this,(StatusButton.__proto__||Object.getPrototypeOf(StatusButton)).apply(this,arguments));}_createClass(StatusButton,[{key:'render',value:function render()











{

return(
_react2.default.createElement(_reactNative.TouchableHighlight,{
onPress:this.props.onPress,
style:[
styles.baseButton,
this.props.active&&styles.activeButton],

underlayColor:'transparent'},
_react2.default.createElement(_reactNative.Text,{style:[this.props.style,styles.buttonText]},
this.props.children)));



}}]);return StatusButton;}(_react2.default.Component);StatusButton.propTypes={active:_react.PropTypes.bool.isRequired,children:_react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node),_react.PropTypes.node]).isRequired,onPress:_react.PropTypes.func.isRequired,style:_reactNative.Text.propTypes.style};exports.default=StatusButton;


var styles=_reactNative.StyleSheet.create({
activeButton:{
borderColor:'rgba(175, 47, 47, 0.2)',
borderRadius:6},

baseButton:{
borderColor:'transparent',
borderWidth:1,
paddingHorizontal:14,
paddingVertical:6,
top:1},

buttonText:{
fontSize:16}});
//# sourceMappingURL=StatusButton.js.map