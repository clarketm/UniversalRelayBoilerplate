
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _StatusButton=require('./StatusButton');var _StatusButton2=_interopRequireDefault(_StatusButton);
var _ToDoList=require('./ToDoList');var _ToDoList2=_interopRequireDefault(_ToDoList);
var _ToDoListFooter=require('./ToDoListFooter');var _ToDoListFooter2=_interopRequireDefault(_ToDoListFooter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDoScreen=function(_React$Component){_inherits(ToDoScreen,_React$Component);
function ToDoScreen(props,context){_classCallCheck(this,ToDoScreen);var _this=_possibleConstructorReturn(this,(ToDoScreen.__proto__||Object.getPrototypeOf(ToDoScreen)).call(this,
props,context));_this.


_handleStatusChange=function(status){
_this.props.relay.setVariables({status:status});
};return _this;}_createClass(ToDoScreen,[{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.actionList},
_react2.default.createElement(_StatusButton2.default,{
active:this.props.relay.variables.status==='any',
onPress:function onPress(){return _this2._handleStatusChange('any');}},'All'),



_react2.default.createElement(_StatusButton2.default,{
active:this.props.relay.variables.status==='active',
onPress:function onPress(){return _this2._handleStatusChange('active');}},'Active'),



_react2.default.createElement(_StatusButton2.default,{
active:this.props.relay.variables.status==='completed',
onPress:function onPress(){return _this2._handleStatusChange('completed');}},'Completed')),




_react2.default.createElement(_ToDoList2.default,{
status:this.props.relay.variables.status,
style:styles.list,
Viewer:this.props.Viewer}),

_react2.default.createElement(_ToDoListFooter2.default,{
status:this.props.relay.variables.status,
style:styles.footer,
Viewer:this.props.Viewer})));



}}]);return ToDoScreen;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(ToDoScreen,{
initialVariables:{
status:'any'},

fragments:{
Viewer:function Viewer(variables){return function(RQL_0,RQL_1){return{children:[].concat.apply([],[{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDoScreen_ViewerRelayQL',type:'Viewer'};}(


_ToDoList2.default.getFragment('Viewer',{status:variables.status}),
_ToDoListFooter2.default.getFragment('Viewer',{status:variables.status}));}}});





var styles=_reactNative.StyleSheet.create({
actionList:{
alignItems:'center',
flexDirection:'row',
justifyContent:'center',
marginBottom:15},

container:{
backgroundColor:'#F5F5F5',
flex:1,

paddingTop:84},

footer:{
height:10,
paddingHorizontal:15},

list:{
borderTopColor:'rgba(0,0,0,0.1)',
borderTopWidth:1,
flex:1,
shadowColor:'black',
shadowOffset:{
height:-2},

shadowOpacity:0.03,
shadowRadius:1}});
//# sourceMappingURL=ToDoScreen.js.map