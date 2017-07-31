Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-todo-webapp/components/ToDoItem.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Checkbox=require('material-ui/Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);
var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _List=require('material-ui/List');
var _Menu=require('material-ui/Menu');var _Menu2=_interopRequireDefault(_Menu);
var _materialUiIcons=require('material-ui-icons');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _ToDoUpdateStatusMutation=require('../../urb-example-todo-client/relay/ToDoUpdateStatusMutation');var _ToDoUpdateStatusMutation2=_interopRequireDefault(_ToDoUpdateStatusMutation);
var _ToDoDeleteMutation=require('../../urb-example-todo-client/relay/ToDoDeleteMutation');var _ToDoDeleteMutation2=_interopRequireDefault(_ToDoDeleteMutation);
var _ToDoUpdateRenameMutation=require('../../urb-example-todo-client/relay/ToDoUpdateRenameMutation');var _ToDoUpdateRenameMutation2=_interopRequireDefault(_ToDoUpdateRenameMutation);
var _ToDoProperties=require('./ToDoProperties');var _ToDoProperties2=_interopRequireDefault(_ToDoProperties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDoItem=function(_React$Component){_inherits(ToDoItem,_React$Component);












function ToDoItem(props,context){_classCallCheck(this,ToDoItem);var _this=_possibleConstructorReturn(this,(ToDoItem.__proto__||Object.getPrototypeOf(ToDoItem)).call(this,
props,context));_this.








_handle_onClickCheckbox=function(){return _this.___handle_onClickCheckbox__REACT_HOT_LOADER__.apply(_this,arguments);};_this.





_handle_handlerUpdate_Properties=function(){return _this.___handle_handlerUpdate_Properties__REACT_HOT_LOADER__.apply(_this,arguments);};_this.





_handle_handlerClose_Properties=function(){return _this.___handle_handlerClose_Properties__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



handleClickListItem=function(){return _this.__handleClickListItem__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



_handle_Menu_onClick_Edit=function(){return _this.___handle_Menu_onClick_Edit__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



_handle_Menu_onClick_Delete=function(){return _this.___handle_Menu_onClick_Delete__REACT_HOT_LOADER__.apply(_this,arguments);};_this.







handleRequestClose=function(){return _this.__handleRequestClose__REACT_HOT_LOADER__.apply(_this,arguments);};_this.state={anchorEl:undefined,menuIsOpen:false,propertiesIsOpen:false};return _this;}_createClass(ToDoItem,[{key:'___handle_onClickCheckbox__REACT_HOT_LOADER__',value:function ___handle_onClickCheckbox__REACT_HOT_LOADER__(event,ToDo_Complete){var _props=this.props,relay=_props.relay,Viewer=_props.Viewer,ToDo=_props.ToDo;_ToDoUpdateStatusMutation2.default.commit(relay.environment,Viewer,ToDo,ToDo_Complete);}},{key:'___handle_handlerUpdate_Properties__REACT_HOT_LOADER__',value:function ___handle_handlerUpdate_Properties__REACT_HOT_LOADER__(ToDo_properties){var _props2=this.props,relay=_props2.relay,ToDo=_props2.ToDo;_ToDoUpdateRenameMutation2.default.commit(relay.environment,ToDo,ToDo_properties.ToDo_Text);}},{key:'___handle_handlerClose_Properties__REACT_HOT_LOADER__',value:function ___handle_handlerClose_Properties__REACT_HOT_LOADER__(){this.setState({propertiesIsOpen:false});}},{key:'__handleClickListItem__REACT_HOT_LOADER__',value:function __handleClickListItem__REACT_HOT_LOADER__(event){this.setState({menuIsOpen:true,anchorEl:event.currentTarget});}},{key:'___handle_Menu_onClick_Edit__REACT_HOT_LOADER__',value:function ___handle_Menu_onClick_Edit__REACT_HOT_LOADER__(event){this.setState({menuIsOpen:false,propertiesIsOpen:true});}},{key:'___handle_Menu_onClick_Delete__REACT_HOT_LOADER__',value:function ___handle_Menu_onClick_Delete__REACT_HOT_LOADER__(event){this.setState({menuIsOpen:false});var _props3=this.props,relay=_props3.relay,Viewer=_props3.Viewer,ToDo=_props3.ToDo;_ToDoDeleteMutation2.default.commit(relay.environment,Viewer,ToDo);}},{key:'__handleRequestClose__REACT_HOT_LOADER__',value:function __handleRequestClose__REACT_HOT_LOADER__(){
this.setState({menuIsOpen:false});
}},{key:'render',value:function render()

{var _this2=this;var _props$ToDo=
this.props.ToDo,ToDo_Complete=_props$ToDo.ToDo_Complete,ToDo_Text=_props$ToDo.ToDo_Text;

return(
_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:80}},
_react2.default.createElement(_List.ListItem,{
button:true,
'aria-haspopup':'true',
'aria-controls':'lock-menu',
onClick:function onClick(event){return _this2._handle_onClickCheckbox(event,!ToDo_Complete);},__source:{fileName:_jsxFileName,lineNumber:81}},

_react2.default.createElement(_Checkbox2.default,{checked:ToDo_Complete,__source:{fileName:_jsxFileName,lineNumber:87}}),
_react2.default.createElement(_List.ListItemText,{primary:ToDo_Text,__source:{fileName:_jsxFileName,lineNumber:88}}),
_react2.default.createElement(_List.ListItemSecondaryAction,{__source:{fileName:_jsxFileName,lineNumber:89}},
_react2.default.createElement(_IconButton2.default,{onClick:this.handleClickListItem,__source:{fileName:_jsxFileName,lineNumber:90}},
_react2.default.createElement(_materialUiIcons.MoreVert,{__source:{fileName:_jsxFileName,lineNumber:91}})))),



_react2.default.createElement(_Menu2.default,{
id:'lock-menu',
anchorEl:this.state.anchorEl,
open:this.state.menuIsOpen,
onRequestClose:this.handleRequestClose,__source:{fileName:_jsxFileName,lineNumber:95}},

_react2.default.createElement(_Menu.MenuItem,{key:'edit',onClick:function onClick(event){return _this2._handle_Menu_onClick_Edit(event);},__source:{fileName:_jsxFileName,lineNumber:101}},'Edit'),


_react2.default.createElement(_Menu.MenuItem,{key:'delete',onClick:function onClick(event){return _this2._handle_Menu_onClick_Delete(event);},__source:{fileName:_jsxFileName,lineNumber:104}},'Delete')),



_react2.default.createElement(_ToDoProperties2.default,{
ToDo_Text:ToDo_Text,
handlerUpdate:this._handle_handlerUpdate_Properties,
handlerClose:this._handle_handlerClose_Properties,
open:this.state.propertiesIsOpen,__source:{fileName:_jsxFileName,lineNumber:108}})));



}}]);return ToDoItem;}(_react2.default.Component);ToDoItem.propTypes={Viewer:_propTypes2.default.object.isRequired,ToDo:_propTypes2.default.object.isRequired,relay:_propTypes2.default.object.isRequired};var _default=


(0,_reactRelay.createFragmentContainer)(ToDoItem,{
Viewer:function(){return require('./__generated__/ToDoItem_Viewer.graphql');},




ToDo:function(){return require('./__generated__/ToDoItem_ToDo.graphql');}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(ToDoItem,'ToDoItem','units/urb-example-todo-webapp/components/ToDoItem.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-webapp/components/ToDoItem.jsx');}();;
//# sourceMappingURL=ToDoItem.js.map