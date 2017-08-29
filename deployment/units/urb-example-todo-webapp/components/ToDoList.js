Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Checkbox=require('material-ui/Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);
var _Form=require('material-ui/Form');
var _List=require('material-ui/List');var _List2=_interopRequireDefault(_List);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');
var _Tabs=require('material-ui/Tabs');var _Tabs2=_interopRequireDefault(_Tabs);

var _ToDoListUpdateMarkAllMutation=require('../../urb-example-todo-client/relay/ToDoListUpdateMarkAllMutation');var _ToDoListUpdateMarkAllMutation2=_interopRequireDefault(_ToDoListUpdateMarkAllMutation);

var _ToDoItem=require('./ToDoItem');var _ToDoItem2=_interopRequireDefault(_ToDoItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
root:{
width:'100%',
maxWidth:360,
background:theme.palette.background.paper}};};var



ToDoList=function(_React$Component){_inherits(ToDoList,_React$Component);function ToDoList(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ToDoList);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ToDoList.__proto__||Object.getPrototypeOf(ToDoList)).call.apply(_ref,[this].concat(args))),_this),_this.











_handle_onClick_MarkAll=function(event,checked){var _this$props=
_this.props,relay=_this$props.relay,Viewer=_this$props.Viewer;var
variables=_this.context.relay.variables;
var ToDo_Complete=checked;

_ToDoListUpdateMarkAllMutation2.default.commit(
relay.environment,
Viewer,
Viewer.ToDos,
ToDo_Complete,
variables.status);

},_this.

_handle_onChange=function(event,tabsValue){
var url=
tabsValue===2?
'/todo/completed':
tabsValue===1?'/todo/active':'/todo';
_this.context.router.push(url);
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ToDoList,[{key:'renderTabs',value:function renderTabs()

{
var status=this.context.relay.variables.status;
var tabsValue=status==='active'?1:status==='completed'?2:0;

return(
_react2.default.createElement(_Tabs2.default,{value:tabsValue,onChange:this._handle_onChange},
_react2.default.createElement(_Tabs.Tab,{label:'All'}),
_react2.default.createElement(_Tabs.Tab,{label:'Active'}),
_react2.default.createElement(_Tabs.Tab,{label:'Completed'})));


}},{key:'render',value:function render()

{var
Viewer=this.props.Viewer;var
ToDos=Viewer.ToDos,ToDo_TotalCount=Viewer.ToDo_TotalCount,ToDo_CompletedCount=Viewer.ToDo_CompletedCount;

if(!ToDo_TotalCount){
return null;
}

return(
_react2.default.createElement('div',null,
this.renderTabs(),
_react2.default.createElement(_Form.FormGroup,{row:true},
_react2.default.createElement(_Form.FormControlLabel,{
control:
_react2.default.createElement(_Checkbox2.default,{
checked:ToDo_TotalCount===ToDo_CompletedCount,
onChange:this._handle_onClick_MarkAll}),


label:'Mark all as complete'})),


_react2.default.createElement(_List2.default,null,
ToDos.edges.map(function(_ref2){var node=_ref2.node;return(
_react2.default.createElement(_ToDoItem2.default,{key:node.id,Viewer:Viewer,ToDo:node}));}))));




}}]);return ToDoList;}(_react2.default.Component);ToDoList.contextTypes={relay:_propTypes2.default.object,router:_propTypes2.default.object};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(ToDoList),{Viewer:function Viewer(){return require('./__generated__/ToDoList_Viewer.graphql');}});
//# sourceMappingURL=ToDoList.js.map