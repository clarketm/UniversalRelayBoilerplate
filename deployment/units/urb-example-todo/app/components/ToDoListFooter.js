Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var styles=_reactNative.StyleSheet.create({

container:{
alignItems:'center',
flexDirection:'row',
height:40,
justifyContent:'space-between'},

strong:{
fontWeight:'bold'}});var



ToDoListFooter=function(_React$Component){_inherits(ToDoListFooter,_React$Component);






function ToDoListFooter(props,context){_classCallCheck(this,ToDoListFooter);return _possibleConstructorReturn(this,(ToDoListFooter.__proto__||Object.getPrototypeOf(ToDoListFooter)).call(this,

props,context));
}_createClass(ToDoListFooter,[{key:'render',value:function render()

{

var numCompletedTodos=this.props.Viewer.ToDo_CompletedCount;
var numRemainingTodos=this.props.Viewer.ToDo_TotalCount-numCompletedTodos;
return(
_react2.default.createElement(_reactNative.View,{style:[this.props.style,styles.container]},
_react2.default.createElement(_reactNative.Text,null,
_react2.default.createElement(_reactNative.Text,{style:styles.strong},
numRemainingTodos),' item',
numRemainingTodos===1?'':'s',' left')));



}}]);return ToDoListFooter;}(_react2.default.Component);ToDoListFooter.propTypes={status:_react.PropTypes.oneOf(['active','any','completed']).isRequired,style:_reactNative.View.propTypes.style};exports.default=


_reactRelay2.default.createContainer(ToDoListFooter,{
initialVariables:{
status:'any'},

prepareVariables:function prepareVariables(prevVars){
return _extends({},
prevVars);

},
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDoListFooter_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=ToDoListFooter.js.map