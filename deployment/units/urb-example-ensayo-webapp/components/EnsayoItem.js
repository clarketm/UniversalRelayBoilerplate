Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-ensayo-webapp/components/EnsayoItem.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _List=require('material-ui/List');
var _Menu=require('material-ui/Menu');var _Menu2=_interopRequireDefault(_Menu);
var _materialUiIcons=require('material-ui-icons');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _EnsayoDeleteMutation=require('../../urb-example-ensayo-client/relay/EnsayoDeleteMutation');var _EnsayoDeleteMutation2=_interopRequireDefault(_EnsayoDeleteMutation);
var _EnsayoProperties=require('./EnsayoProperties');var _EnsayoProperties2=_interopRequireDefault(_EnsayoProperties);
var _EnsayoUpdateMutation=require('../../urb-example-ensayo-client/relay/EnsayoUpdateMutation');var _EnsayoUpdateMutation2=_interopRequireDefault(_EnsayoUpdateMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoItem=function(_React$Component){_inherits(EnsayoItem,_React$Component);












function EnsayoItem(props,context){_classCallCheck(this,EnsayoItem);var _this=_possibleConstructorReturn(this,(EnsayoItem.__proto__||Object.getPrototypeOf(EnsayoItem)).call(this,
props,context));_this.








_handle_handlerUpdate_Properties=function(){return _this.___handle_handlerUpdate_Properties__REACT_HOT_LOADER__.apply(_this,arguments);};_this.












_handle_handlerClose_Properties=function(){return _this.___handle_handlerClose_Properties__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



handleClickListItem=function(){return _this.__handleClickListItem__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



_handle_Menu_onClick_Edit=function(){return _this.___handle_Menu_onClick_Edit__REACT_HOT_LOADER__.apply(_this,arguments);};_this.



_handle_Menu_onClick_Delete=function(){return _this.___handle_Menu_onClick_Delete__REACT_HOT_LOADER__.apply(_this,arguments);};_this.







handleRequestClose=function(){return _this.__handleRequestClose__REACT_HOT_LOADER__.apply(_this,arguments);};_this.state={anchorEl:undefined,menuIsOpen:false,propertiesIsOpen:false};return _this;}_createClass(EnsayoItem,[{key:'___handle_handlerUpdate_Properties__REACT_HOT_LOADER__',value:function ___handle_handlerUpdate_Properties__REACT_HOT_LOADER__(ensayoProperties){var Ensayo_Title=ensayoProperties.Ensayo_Title,Ensayo_Description=ensayoProperties.Ensayo_Description,Ensayo_Content=ensayoProperties.Ensayo_Content;var _props=this.props,relay=_props.relay,Ensayo=_props.Ensayo;_EnsayoUpdateMutation2.default.commit(relay.environment,Ensayo,Ensayo_Content,Ensayo_Title,Ensayo_Description);}},{key:'___handle_handlerClose_Properties__REACT_HOT_LOADER__',value:function ___handle_handlerClose_Properties__REACT_HOT_LOADER__(){this.setState({propertiesIsOpen:false});}},{key:'__handleClickListItem__REACT_HOT_LOADER__',value:function __handleClickListItem__REACT_HOT_LOADER__(event){this.setState({menuIsOpen:true,anchorEl:event.currentTarget});}},{key:'___handle_Menu_onClick_Edit__REACT_HOT_LOADER__',value:function ___handle_Menu_onClick_Edit__REACT_HOT_LOADER__(event){this.setState({menuIsOpen:false,propertiesIsOpen:true});}},{key:'___handle_Menu_onClick_Delete__REACT_HOT_LOADER__',value:function ___handle_Menu_onClick_Delete__REACT_HOT_LOADER__(event){this.setState({menuIsOpen:false});var _props2=this.props,relay=_props2.relay,Viewer=_props2.Viewer,Ensayo=_props2.Ensayo;_EnsayoDeleteMutation2.default.commit(relay.environment,Viewer,Ensayo);}},{key:'__handleRequestClose__REACT_HOT_LOADER__',value:function __handleRequestClose__REACT_HOT_LOADER__(){
this.setState({menuIsOpen:false});
}},{key:'render',value:function render()

{var _this2=this;var _props$Ensayo=
this.props.Ensayo,Ensayo_Title=_props$Ensayo.Ensayo_Title,Ensayo_Description=_props$Ensayo.Ensayo_Description,Ensayo_Content=_props$Ensayo.Ensayo_Content;

return(
_react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:79}},
_react2.default.createElement(_List.ListItem,{
button:true,
'aria-haspopup':'true',
'aria-controls':'lock-menu',
onClick:this.handleClickListItem,__source:{fileName:_jsxFileName,lineNumber:80}},

_react2.default.createElement(_List.ListItemText,{primary:Ensayo_Title,secondary:Ensayo_Description,__source:{fileName:_jsxFileName,lineNumber:86}})),

_react2.default.createElement(_Menu2.default,{
id:'lock-menu',
anchorEl:this.state.anchorEl,
open:this.state.menuIsOpen,
onRequestClose:this.handleRequestClose,__source:{fileName:_jsxFileName,lineNumber:88}},

_react2.default.createElement(_Menu.MenuItem,{key:'edit',onClick:function onClick(event){return _this2._handle_Menu_onClick_Edit(event);},__source:{fileName:_jsxFileName,lineNumber:94}},'Edit'),


_react2.default.createElement(_Menu.MenuItem,{key:'delete',onClick:function onClick(event){return _this2._handle_Menu_onClick_Delete(event);},__source:{fileName:_jsxFileName,lineNumber:97}},'Delete')),



_react2.default.createElement(_EnsayoProperties2.default,{
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content,
handlerUpdate:this._handle_handlerUpdate_Properties,
handlerClose:this._handle_handlerClose_Properties,
open:this.state.propertiesIsOpen,__source:{fileName:_jsxFileName,lineNumber:101}})));



}}]);return EnsayoItem;}(_react2.default.Component);EnsayoItem.propTypes={Viewer:_propTypes2.default.object.isRequired,Ensayo:_propTypes2.default.object.isRequired,relay:_propTypes2.default.object.isRequired};var _default=


(0,_reactRelay.createFragmentContainer)(EnsayoItem,{
Viewer:function(){return require('./__generated__/EnsayoItem_Viewer.graphql');},




Ensayo:function(){return require('./__generated__/EnsayoItem_Ensayo.graphql');}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(EnsayoItem,'EnsayoItem','units/urb-example-ensayo-webapp/components/EnsayoItem.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-webapp/components/EnsayoItem.jsx');}();;
//# sourceMappingURL=EnsayoItem.js.map