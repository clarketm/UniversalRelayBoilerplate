Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _List=require('material-ui/List');
var _Menu=require('material-ui/Menu');var _Menu2=_interopRequireDefault(_Menu);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _EnsayoDeleteMutation=require('../../urb-example-ensayo-client/relay/EnsayoDeleteMutation');var _EnsayoDeleteMutation2=_interopRequireDefault(_EnsayoDeleteMutation);
var _EnsayoUpdateMutation=require('../../urb-example-ensayo-client/relay/EnsayoUpdateMutation');var _EnsayoUpdateMutation2=_interopRequireDefault(_EnsayoUpdateMutation);

var _EnsayoInPlaceEditProperties=require('./EnsayoInPlaceEditProperties');var _EnsayoInPlaceEditProperties2=_interopRequireDefault(_EnsayoInPlaceEditProperties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoInPlaceEditItem=function(_React$Component){_inherits(EnsayoInPlaceEditItem,_React$Component);











function EnsayoInPlaceEditItem(props,context){_classCallCheck(this,EnsayoInPlaceEditItem);var _this=_possibleConstructorReturn(this,(EnsayoInPlaceEditItem.__proto__||Object.getPrototypeOf(EnsayoInPlaceEditItem)).call(this,
props,context));_this.








_handle_Update_Properties=function(EnsayoInPlaceEditProperties){var

Ensayo_Title=


EnsayoInPlaceEditProperties.Ensayo_Title,Ensayo_Description=EnsayoInPlaceEditProperties.Ensayo_Description,Ensayo_Content=EnsayoInPlaceEditProperties.Ensayo_Content;var _this$props=
_this.props,relay=_this$props.relay,Ensayo=_this$props.Ensayo;

_EnsayoUpdateMutation2.default.commit(
relay.environment,
Ensayo,
Ensayo_Title,
Ensayo_Description,
Ensayo_Content);

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
};_this.state={anchorEl:undefined,menuIsOpen:false,propertiesIsOpen:false};return _this;}_createClass(EnsayoInPlaceEditItem,[{key:'render',value:function render()

{var _this2=this;var _props$Ensayo=




this.props.Ensayo,Ensayo_Title=_props$Ensayo.Ensayo_Title,Ensayo_Description=_props$Ensayo.Ensayo_Description,Ensayo_Content=_props$Ensayo.Ensayo_Content;var
propertiesIsOpen=this.state.propertiesIsOpen;

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

_react2.default.createElement(_Menu.MenuItem,{
key:'edit',
onClick:function onClick(event){return _this2._handle_Menu_onClick_Edit(event);}},'Edit'),



_react2.default.createElement(_Menu.MenuItem,{
key:'delete',
onClick:function onClick(event){return _this2._handle_Menu_onClick_Delete(event);}},'Delete')),




propertiesIsOpen&&
_react2.default.createElement(_EnsayoInPlaceEditProperties2.default,{
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content,
handlerUpdate:this._handle_Update_Properties,
handlerClose:this._handle_Close_Properties})));




}}]);return EnsayoInPlaceEditItem;}(_react2.default.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(EnsayoInPlaceEditItem,{
Viewer:function Viewer(){return require('./__generated__/EnsayoInPlaceEditItem_Viewer.graphql');},




Ensayo:function Ensayo(){return require('./__generated__/EnsayoInPlaceEditItem_Ensayo.graphql');}});
//# sourceMappingURL=EnsayoInPlaceEditItem.js.map