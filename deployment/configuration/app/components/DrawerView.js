Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _reactNative=require('react-native');
var _reactNativeElements=require('react-native-elements');

var _UrlRouter=require('../../../app/UrlRouter');var _UrlRouter2=_interopRequireDefault(_UrlRouter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:
{
flex:1,
marginTop:20,
justifyContent:'flex-start',
alignItems:'stretch',
backgroundColor:'#ffffff'},

greetingEnvelope:
{
height:64,
marginLeft:15,
marginRight:15,
justifyContent:'center',
alignItems:'center'},

greetingText:
{
fontSize:20,
color:'#000000'},

list:
{
flex:1}});var



DrawerView=function(_React$Component){_inherits(DrawerView,_React$Component);function DrawerView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerView.__proto__||Object.getPrototypeOf(DrawerView)).call.apply(_ref,[this].concat(args))),_this),_this.













openRoute=function(routeName,options)
{
_this.context.drawer.close();




_UrlRouter2.default.goToRouteByURL(routeName);
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerView,[{key:'render',value:function render()


{var _this2=this;
var isAnonymous=this.props.Viewer.User_IsAnonymous;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,this.props.sceneStyle]},
_react2.default.createElement(_reactNative.View,{style:[styles.greetingEnvelope]},
_react2.default.createElement(_reactNative.Text,{style:styles.greetingText},'Hello ',
' '+(isAnonymous?'Stranger':this.props.Viewer.User_DisplayName))),


_react2.default.createElement(_reactNativeElements.List,{containerStyle:styles.list},
isAnonymous&&_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/user/login');},title:'Login',hideChevron:true}),
_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/todo');},title:'To Do',hideChevron:true}),
_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/villa/search');},title:'Map',hideChevron:true}),
!isAnonymous&&_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/paymentmethod');},title:'Payment Methods',hideChevron:true}),
!isAnonymous&&_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/user/location');},title:'Set Location',hideChevron:true}),
!isAnonymous&&_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/user/profile');},title:'Profile',hideChevron:true}),
!isAnonymous&&_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/user/messages/thread/55');},title:'Test Thread',hideChevron:true}),
!isAnonymous&&_react2.default.createElement(_reactNativeElements.ListItem,{onPress:function onPress(){return _this2.openRoute('/user/logout');},title:'Log Out',hideChevron:true}))));



}}]);return DrawerView;}(_react2.default.Component);DrawerView.contextTypes={drawer:_react2.default.PropTypes.object};DrawerView.propTypes={name:_react2.default.PropTypes.string,sceneStyle:_reactNative.View.propTypes.style,title:_react2.default.PropTypes.string};exports.default=


_reactRelay2.default.createContainer(DrawerView,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'User_DisplayName',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'DrawerView_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=DrawerView.js.map