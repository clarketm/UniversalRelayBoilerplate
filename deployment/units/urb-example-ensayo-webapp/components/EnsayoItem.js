Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

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








_handle_Update_Properties=function(ensayoProperties){var
Ensayo_Title=ensayoProperties.Ensayo_Title,Ensayo_Description=ensayoProperties.Ensayo_Description,Ensayo_Content=ensayoProperties.Ensayo_Content;var _this$props=
_this.props,relay=_this$props.relay,Ensayo=_this$props.Ensayo;

_EnsayoUpdateMutation2.default.commit(
relay.environment,
Ensayo,
Ensayo_Content,
Ensayo_Title,
Ensayo_Description);

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
_this.setState({menuIsOpen:false});var _this$props2=

_this.props,relay=_this$props2.relay,Viewer=_this$props2.Viewer,Ensayo=_this$props2.Ensayo;

_EnsayoDeleteMutation2.default.commit(relay.environment,Viewer,Ensayo);
};_this.

handleRequestClose=function(){
_this.setState({menuIsOpen:false});
};_this.state={anchorEl:undefined,menuIsOpen:false,propertiesIsOpen:false};return _this;}_createClass(EnsayoItem,[{key:'render',value:function render()

{var _this2=this;var _props$Ensayo=
this.props.Ensayo,Ensayo_Title=_props$Ensayo.Ensayo_Title,Ensayo_Description=_props$Ensayo.Ensayo_Description,Ensayo_Content=_props$Ensayo.Ensayo_Content;

return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List.ListItem,{
button:true,
'aria-haspopup':'true',
'aria-controls':'lock-menu',
onClick:this.handleClickListItem},

_react2.default.createElement(_List.ListItemText,{primary:Ensayo_Title,secondary:Ensayo_Description})),

_react2.default.createElement(_Menu2.default,{
id:'lock-menu',
anchorEl:this.state.anchorEl,
open:this.state.menuIsOpen,
onRequestClose:this.handleRequestClose},

_react2.default.createElement(_Menu.MenuItem,{key:'edit',onClick:function onClick(event){return _this2._handle_Menu_onClick_Edit(event);}},'Edit'),


_react2.default.createElement(_Menu.MenuItem,{key:'delete',onClick:function onClick(event){return _this2._handle_Menu_onClick_Delete(event);}},'Delete')),



_react2.default.createElement(_EnsayoProperties2.default,{
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content,
handlerUpdate:this._handle_Update_Properties,
handlerClose:this._handle_Close_Properties,
open:this.state.propertiesIsOpen})));



}}]);return EnsayoItem;}(_react2.default.Component);EnsayoItem.propTypes={Viewer:_propTypes2.default.object.isRequired,Ensayo:_propTypes2.default.object.isRequired,relay:_propTypes2.default.object.isRequired};exports.default=


(0,_reactRelay.createFragmentContainer)(EnsayoItem,{
Viewer:function(){return require('./__generated__/EnsayoItem_Viewer.graphql');},




Ensayo:function(){return require('./__generated__/EnsayoItem_Ensayo.graphql');}});
//# sourceMappingURL=EnsayoItem.js.map