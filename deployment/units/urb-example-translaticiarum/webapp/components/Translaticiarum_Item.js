Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _IconMenu=require('material-ui/IconMenu');var _IconMenu2=_interopRequireDefault(_IconMenu);
var _List=require('material-ui/List');
var _MenuItem=require('material-ui/MenuItem');var _MenuItem2=_interopRequireDefault(_MenuItem);
var _moreVert=require('material-ui/svg-icons/navigation/more-vert');var _moreVert2=_interopRequireDefault(_moreVert);

var _DateTimeHelpers=require('../../../../webapp/scripts/DateTimeHelpers');

var _Translaticiarum_deleteMutation=require('../../relay/Translaticiarum_deleteMutation');var _Translaticiarum_deleteMutation2=_interopRequireDefault(_Translaticiarum_deleteMutation);
var _Translaticiarum_updateMutation=require('../../relay/Translaticiarum_updateMutation');var _Translaticiarum_updateMutation2=_interopRequireDefault(_Translaticiarum_updateMutation);

var _Translaticiarum_Icon=require('./Translaticiarum_Icon');var _Translaticiarum_Icon2=_interopRequireDefault(_Translaticiarum_Icon);
var _Translaticiarum_Properties=require('./Translaticiarum_Properties');var _Translaticiarum_Properties2=_interopRequireDefault(_Translaticiarum_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Translaticiarum_Item=function(_React$Component){_inherits(Translaticiarum_Item,_React$Component);function Translaticiarum_Item(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Translaticiarum_Item);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Translaticiarum_Item.__proto__||Object.getPrototypeOf(Translaticiarum_Item)).call.apply(_ref,[this].concat(args))),_this),_this.




_handle_updateHandler_Translaticiarum_Properties=function(Translaticiarum_properties){
_this.context.relay.commitUpdate(
new _Translaticiarum_updateMutation2.default(_extends({
Translaticiarum:_this.props.Translaticiarum},
Translaticiarum_properties)));


},_this.










_handle_onItemTouchTap=function(e,item){
switch(item.ref){
case'edit':
_this.refs.Translaticiarum_Properties._handle_Open();
break;
case'delete':
_this._Translaticiarum_delete();
break;
default:
break;}

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Translaticiarum_Item,[{key:'_Translaticiarum_delete',value:function _Translaticiarum_delete(){this.context.relay.commitUpdate(new _Translaticiarum_deleteMutation2.default({Translaticiarum:this.props.Translaticiarum,Viewer:this.props.Viewer}));}},{key:'render',value:function render()

{
var theDate=(0,_DateTimeHelpers.dateFromUTCString)(this.props.Translaticiarum.Translaticiarum_Date);
var theTime=(0,_DateTimeHelpers.dateFromUTCString)(this.props.Translaticiarum.Translaticiarum_Time);

var theDateTime=(0,_DateTimeHelpers.dateUTCToLocal)(new Date(theDate.getTime()+theTime.getTime()));

var rightIconMenu=
_react2.default.createElement(_IconMenu2.default,{
iconButtonElement:_react2.default.createElement(_IconButton2.default,null,_react2.default.createElement(_moreVert2.default,null)),
onItemTouchTap:this._handle_onItemTouchTap},

_react2.default.createElement(_MenuItem2.default,{ref:'edit',value:0},'Edit'),
_react2.default.createElement(_MenuItem2.default,{ref:'delete',value:1},'Delete'));



return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List.ListItem,{
leftIcon:(0,_Translaticiarum_Icon2.default)(this.props.Translaticiarum.Translaticiarum_Type),
primaryText:theDateTime.toString(),
rightIconButton:rightIconMenu}),

_react2.default.createElement(_Translaticiarum_Properties2.default,{
ref:'Translaticiarum_Properties',
Translaticiarum_Type:this.props.Translaticiarum.Translaticiarum_Type,
Translaticiarum_Date:this.props.Translaticiarum.Translaticiarum_Date,
Translaticiarum_Time:this.props.Translaticiarum.Translaticiarum_Time,
updateHandler:this._handle_updateHandler_Translaticiarum_Properties})));



}}]);return Translaticiarum_Item;}(_react2.default.Component);Translaticiarum_Item.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(Translaticiarum_Item,{
fragments:{
Translaticiarum:function Translaticiarum(){return function(RQL_0,RQL_1){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Translaticiarum_Date',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'Translaticiarum_Time',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'Translaticiarum_Type',kind:'Field',metadata:{},type:'Int'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_Item_TranslaticiarumRelayQL',type:'Translaticiarum'};}(





_Translaticiarum_deleteMutation2.default.getFragment('Translaticiarum'),
_Translaticiarum_updateMutation2.default.getFragment('Translaticiarum'));},


Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_Item_ViewerRelayQL',type:'Viewer'};}(

_Translaticiarum_deleteMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Translaticiarum_Item.js.map