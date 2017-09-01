Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Checkbox=require('material-ui/Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);
var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _List=require('material-ui/List');




var _Menu=require('material-ui/Menu');var _Menu2=_interopRequireDefault(_Menu);
var _materialUiIcons=require('material-ui-icons');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _ToDoUpdateStatusMutation=require('../../urb-example-todo-client/relay/ToDoUpdateStatusMutation');var _ToDoUpdateStatusMutation2=_interopRequireDefault(_ToDoUpdateStatusMutation);
var _ToDoDeleteMutation=require('../../urb-example-todo-client/relay/ToDoDeleteMutation');var _ToDoDeleteMutation2=_interopRequireDefault(_ToDoDeleteMutation);
var _ToDoUpdateRenameMutation=require('../../urb-example-todo-client/relay/ToDoUpdateRenameMutation');var _ToDoUpdateRenameMutation2=_interopRequireDefault(_ToDoUpdateRenameMutation);

var _ToDoProperties=require('./ToDoProperties');var _ToDoProperties2=_interopRequireDefault(_ToDoProperties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDoItem=function(_React$Component){_inherits(ToDoItem,_React$Component);











function ToDoItem(props,context){_classCallCheck(this,ToDoItem);var _this=_possibleConstructorReturn(this,(ToDoItem.__proto__||Object.getPrototypeOf(ToDoItem)).call(this,
props,context));_this.








_handle_onClickCheckbox=function(event,ToDo_Complete){var _this$props=
_this.props,relay=_this$props.relay,Viewer=_this$props.Viewer,ToDo=_this$props.ToDo;

_ToDoUpdateStatusMutation2.default.commit(
relay.environment,
Viewer,
ToDo,
ToDo_Complete);

};_this.

_handle_Update_Properties=function(ToDo_properties){var _this$props2=
_this.props,relay=_this$props2.relay,ToDo=_this$props2.ToDo;

_ToDoUpdateRenameMutation2.default.commit(
relay.environment,
ToDo,
ToDo_properties.ToDo_Text);

};_this.

_handle_Close_Properties=function(){
_this.setState({propertiesIsOpen:false});
};_this.

handleClickListItem=function(event){
_this.setState({menuIsOpen:true,anchorEl:event.currentTarget});
};_this.

_handle_Menu_onClick_Edit=function(event){
_this.setState({menuIsOpen:false,propertiesIsOpen:true});
};_this.

_handle_Menu_onClick_Delete=function(event){
_this.setState({menuIsOpen:false});var _this$props3=

_this.props,relay=_this$props3.relay,Viewer=_this$props3.Viewer,ToDo=_this$props3.ToDo;

_ToDoDeleteMutation2.default.commit(relay.environment,Viewer,ToDo);
};_this.

handleRequestClose=function(){
_this.setState({menuIsOpen:false});
};_this.state={anchorEl:undefined,menuIsOpen:false,propertiesIsOpen:false};return _this;}_createClass(ToDoItem,[{key:'render',value:function render()

{var _this2=this;var _props$ToDo=
this.props.ToDo,ToDo_Complete=_props$ToDo.ToDo_Complete,ToDo_Text=_props$ToDo.ToDo_Text;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List.ListItem,{
button:true,
'aria-haspopup':'true',
'aria-controls':'lock-menu',
onClick:function onClick(event){return _this2._handle_onClickCheckbox(event,!ToDo_Complete);}},

_react2.default.createElement(_Checkbox2.default,{checked:ToDo_Complete}),
_react2.default.createElement(_List.ListItemText,{primary:ToDo_Text}),
_react2.default.createElement(_List.ListItemSecondaryAction,null,
_react2.default.createElement(_IconButton2.default,{onClick:this.handleClickListItem},
_react2.default.createElement(_materialUiIcons.MoreVert,null)))),



_react2.default.createElement(_Menu2.default,{
id:'lock-menu',
anchorEl:this.state.anchorEl,
open:this.state.menuIsOpen,
onRequestClose:this.handleRequestClose},

_react2.default.createElement(_Menu.MenuItem,{
key:'edit',
onClick:function onClick(event){return _this2._handle_Menu_onClick_Edit(event);}},'Edit'),



_react2.default.createElement(_Menu.MenuItem,{
key:'delete',
onClick:function onClick(event){return _this2._handle_Menu_onClick_Delete(event);}},'Delete')),




_react2.default.createElement(_ToDoProperties2.default,{
ToDo_Text:ToDo_Text,
handlerUpdate:this._handle_Update_Properties,
handlerClose:this._handle_Close_Properties,
open:this.state.propertiesIsOpen})));



}}]);return ToDoItem;}(_react2.default.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(ToDoItem,{
Viewer:function Viewer(){return require('./__generated__/ToDoItem_Viewer.graphql');},




ToDo:function ToDo(){return require('./__generated__/ToDoItem_ToDo.graphql');}});
//# sourceMappingURL=ToDoItem.js.map