Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-todo-webapp/components/ToDoList.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

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

var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
root:{
width:'100%',
maxWidth:360,
background:theme.palette.background.paper}};});



var contextTypes={
relay:_propTypes2.default.shape({
variables:_propTypes2.default.shape({
status:_propTypes2.default.string.isRequired}).
isRequired}).
isRequired,
router:_propTypes2.default.object.isRequired};var


ToDoList=function(_React$Component){_inherits(ToDoList,_React$Component);function ToDoList(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ToDoList);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ToDoList.__proto__||Object.getPrototypeOf(ToDoList)).call.apply(_ref,[this].concat(args))),_this),_this.





_handle_onClick_MarkAll=function(){var _this2;return(_this2=_this).___handle_onClick_MarkAll__REACT_HOT_LOADER__.apply(_this2,arguments);},_this.













_handle_onChange=function(){var _this3;return(_this3=_this).___handle_onChange__REACT_HOT_LOADER__.apply(_this3,arguments);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ToDoList,[{key:'___handle_onClick_MarkAll__REACT_HOT_LOADER__',value:function ___handle_onClick_MarkAll__REACT_HOT_LOADER__(event,checked){var _props=this.props,relay=_props.relay,Viewer=_props.Viewer;var variables=this.context.relay.variables;var ToDo_Complete=checked;_ToDoListUpdateMarkAllMutation2.default.commit(relay.environment,Viewer,Viewer.ToDos,ToDo_Complete,variables.status);}},{key:'___handle_onChange__REACT_HOT_LOADER__',value:function ___handle_onChange__REACT_HOT_LOADER__(event,index){
var url=index===2?'/todo/completed':index===1?'/todo/active':'/todo';
this.context.router.push(url);
}},{key:'renderTabs',value:function renderTabs()

{
var status=this.context.relay.variables.status;
var index=status==='active'?1:status==='completed'?2:0;

return(
_react2.default.createElement(_Tabs2.default,{index:index,onChange:this._handle_onChange,__source:{fileName:_jsxFileName,lineNumber:62}},
_react2.default.createElement(_Tabs.Tab,{label:'All',__source:{fileName:_jsxFileName,lineNumber:63}}),
_react2.default.createElement(_Tabs.Tab,{label:'Active',__source:{fileName:_jsxFileName,lineNumber:64}}),
_react2.default.createElement(_Tabs.Tab,{label:'Completed',__source:{fileName:_jsxFileName,lineNumber:65}})));


}},{key:'render',value:function render()

{var
Viewer=this.props.Viewer;var
ToDos=Viewer.ToDos,ToDo_TotalCount=Viewer.ToDo_TotalCount,ToDo_CompletedCount=Viewer.ToDo_CompletedCount;

if(!ToDo_TotalCount){
return null;
}

return(
_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:79}},
this.renderTabs(),
_react2.default.createElement(_Form.FormGroup,{row:true,__source:{fileName:_jsxFileName,lineNumber:81}},
_react2.default.createElement(_Form.FormControlLabel,{
control:
_react2.default.createElement(_Checkbox2.default,{
checked:ToDo_TotalCount===ToDo_CompletedCount,
onChange:this._handle_onClick_MarkAll,__source:{fileName:_jsxFileName,lineNumber:84}}),


label:'Mark all as complete',__source:{fileName:_jsxFileName,lineNumber:82}})),


_react2.default.createElement(_List2.default,{__source:{fileName:_jsxFileName,lineNumber:92}},
ToDos.edges.map(function(_ref2){var node=_ref2.node;return _react2.default.createElement(_ToDoItem2.default,{key:node.id,Viewer:Viewer,ToDo:node,__source:{fileName:_jsxFileName,lineNumber:93}});}))));



}}]);return ToDoList;}(_react2.default.Component);ToDoList.propTypes={Viewer:_propTypes2.default.object.isRequired,relay:_propTypes2.default.object.isRequired};


ToDoList.contextTypes=contextTypes;var _default=

(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styleSheet)(ToDoList),{Viewer:function Viewer(){return require('./__generated__/ToDoList_Viewer.graphql');}});exports.default=_default;;var _temp2=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(styleSheet,'styleSheet','units/urb-example-todo-webapp/components/ToDoList.jsx');__REACT_HOT_LOADER__.register(contextTypes,'contextTypes','units/urb-example-todo-webapp/components/ToDoList.jsx');__REACT_HOT_LOADER__.register(ToDoList,'ToDoList','units/urb-example-todo-webapp/components/ToDoList.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-webapp/components/ToDoList.jsx');}();;
//# sourceMappingURL=ToDoList.js.map