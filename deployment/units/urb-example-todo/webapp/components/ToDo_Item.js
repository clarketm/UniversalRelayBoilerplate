Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Checkbox=require('material-ui/Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);
var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _IconMenu=require('material-ui/IconMenu');var _IconMenu2=_interopRequireDefault(_IconMenu);
var _List=require('material-ui/List');
var _MenuItem=require('material-ui/MenuItem');var _MenuItem2=_interopRequireDefault(_MenuItem);
var _moreVert=require('material-ui/svg-icons/navigation/more-vert');var _moreVert2=_interopRequireDefault(_moreVert);

var _ToDo_updateStatusMutation=require('../../relay/ToDo_updateStatusMutation');var _ToDo_updateStatusMutation2=_interopRequireDefault(_ToDo_updateStatusMutation);
var _ToDo_deleteMutation=require('../../relay/ToDo_deleteMutation');var _ToDo_deleteMutation2=_interopRequireDefault(_ToDo_deleteMutation);
var _ToDo_updateRenameMutation=require('../../relay/ToDo_updateRenameMutation');var _ToDo_updateRenameMutation2=_interopRequireDefault(_ToDo_updateRenameMutation);

var _ToDo_Properties=require('./ToDo_Properties');var _ToDo_Properties2=_interopRequireDefault(_ToDo_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_Item=function(_React$Component){_inherits(ToDo_Item,_React$Component);function ToDo_Item(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ToDo_Item);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ToDo_Item.__proto__||Object.getPrototypeOf(ToDo_Item)).call.apply(_ref,[this].concat(args))),_this),_this.




_handle_updateHandler_ToDo=function(ToDo_properties){
_this.context.relay.commitUpdate(
new _ToDo_updateRenameMutation2.default(_extends({ToDo:_this.props.ToDo},ToDo_properties)));

},_this.

_handle_onCheck_Completed=function(event,ToDo_Complete){
_this.context.relay.commitUpdate(
new _ToDo_updateStatusMutation2.default({
ToDo_Complete:ToDo_Complete,
ToDo:_this.props.ToDo,
Viewer:_this.props.Viewer}));


},_this.













_handle_onItemTouchTap=function(e,item){
switch(item.ref){
case'edit':
_this.refs.ToDo_Properties._handle_Open();
break;
case'delete':
_this._ToDo_delete();
break;
default:
break;}

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ToDo_Item,[{key:'_handleTextInputSave',value:function _handleTextInputSave(ToDo_Text){this.context.relay.commitUpdate(new _ToDo_updateRenameMutation2.default({ToDo:this.props.ToDo,ToDo_Text:ToDo_Text}));}},{key:'_ToDo_delete',value:function _ToDo_delete(){this.context.relay.commitUpdate(new _ToDo_deleteMutation2.default({ToDo:this.props.ToDo,Viewer:this.props.Viewer}));}},{key:'render',value:function render()

{
var rightIconMenu=
_react2.default.createElement(_IconMenu2.default,{
iconButtonElement:_react2.default.createElement(_IconButton2.default,null,_react2.default.createElement(_moreVert2.default,null)),
onItemTouchTap:this._handle_onItemTouchTap},

_react2.default.createElement(_MenuItem2.default,{ref:'edit',value:0},'Edit'),
_react2.default.createElement(_MenuItem2.default,{ref:'delete',value:1},'Delete'));



return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List.ListItem,{
primaryText:this.props.ToDo.ToDo_Text,
leftCheckbox:
_react2.default.createElement(_Checkbox2.default,{
defaultChecked:this.props.ToDo.ToDo_Complete,
onCheck:this._handle_onCheck_Completed}),


rightIconButton:rightIconMenu}),

_react2.default.createElement(_ToDo_Properties2.default,{
ref:'ToDo_Properties',
ToDo_Text:this.props.ToDo.ToDo_Text,
updateHandler:this._handle_updateHandler_ToDo})));



}}]);return ToDo_Item;}(_react2.default.Component);ToDo_Item.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(ToDo_Item,{
fragments:{
ToDo:function ToDo(){return function(RQL_0,RQL_1,RQL_2){return{children:[].concat.apply([],[{fieldName:'ToDo_Complete',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'ToDo_Text',kind:'Field',metadata:{},type:'String'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1),_reactRelay2.default.QL.__frag(RQL_2)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_Item_ToDoRelayQL',type:'ToDo'};}(




_ToDo_updateStatusMutation2.default.getFragment('ToDo'),
_ToDo_deleteMutation2.default.getFragment('ToDo'),
_ToDo_updateRenameMutation2.default.getFragment('ToDo'));},


Viewer:function Viewer(){return function(RQL_0,RQL_1){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_Item_ViewerRelayQL',type:'Viewer'};}(

_ToDo_updateStatusMutation2.default.getFragment('Viewer'),
_ToDo_deleteMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=ToDo_Item.js.map