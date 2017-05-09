Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeElements=require('react-native-elements');

var _Button=require('../../../../app/components/Button');var _Button2=_interopRequireDefault(_Button);
var _NetworkLayer=require('../../../../app/NetworkLayer');var _NetworkLayer2=_interopRequireDefault(_NetworkLayer);
var _UrlRouter=require('../../../../app/UrlRouter');var _UrlRouter2=_interopRequireDefault(_UrlRouter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Logout=function(_React$Component){_inherits(Logout,_React$Component);
function Logout(props,context){_classCallCheck(this,Logout);var _this=_possibleConstructorReturn(this,(Logout.__proto__||Object.getPrototypeOf(Logout)).call(this,
props,context));_this.


handle_onPress_Logout=function(){

_NetworkLayer2.default.logout(function(){return _UrlRouter2.default.goToRouteByNameAndParams('/user/login',{});});
};return _this;}_createClass(Logout,[{key:'render',value:function render()


{
var userName=this.props.Viewer.User_DisplayName;
if(!userName)
userName="";
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNativeElements.FormLabel,null,'Logged in as'),
_react2.default.createElement(_reactNativeElements.FormLabel,null,userName),
_react2.default.createElement(_Button2.default,{kind:'action',title:'Log Out',onPress:this.handle_onPress_Logout})));


}}]);return Logout;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(Logout,{
fragments:{
Viewer:function Viewer(variables){return function(){return{children:[{fieldName:'User_DisplayName',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Logout_ViewerRelayQL',type:'Viewer'};}();}}});







var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'stretch',
backgroundColor:'#f0f0f0'}});
//# sourceMappingURL=Logout.js.map