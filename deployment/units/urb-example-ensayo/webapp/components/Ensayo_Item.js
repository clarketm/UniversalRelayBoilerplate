Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _IconMenu=require('material-ui/IconMenu');var _IconMenu2=_interopRequireDefault(_IconMenu);
var _List=require('material-ui/List');
var _MenuItem=require('material-ui/MenuItem');var _MenuItem2=_interopRequireDefault(_MenuItem);
var _moreVert=require('material-ui/svg-icons/navigation/more-vert');var _moreVert2=_interopRequireDefault(_moreVert);

var _EnsayoDeleteMutation=require('../../relay/EnsayoDeleteMutation');var _EnsayoDeleteMutation2=_interopRequireDefault(_EnsayoDeleteMutation);
var _EnsayoUpdateMutation=require('../../relay/EnsayoUpdateMutation');var _EnsayoUpdateMutation2=_interopRequireDefault(_EnsayoUpdateMutation);

var _Ensayo_Properties=require('./Ensayo_Properties');var _Ensayo_Properties2=_interopRequireDefault(_Ensayo_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Ensayo_Item=function(_React$Component){_inherits(Ensayo_Item,_React$Component);function Ensayo_Item(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Ensayo_Item);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Ensayo_Item.__proto__||Object.getPrototypeOf(Ensayo_Item)).call.apply(_ref,[this].concat(args))),_this),_this.




_handle_updateHandler_Ensayo=function(Ensayo_properties){
_this.context.relay.commitUpdate(
new _EnsayoUpdateMutation2.default(_extends({Ensayo:_this.props.Ensayo},Ensayo_properties)));

},_this.







_handle_onItemTouchTap=function(e,item){
switch(item.ref){
case'edit':
_this.refs.Ensayo_Properties._handle_Open();
break;
case'delete':
_this._EnsayoDelete();
break;
default:
break;}

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Ensayo_Item,[{key:'_EnsayoDelete',value:function _EnsayoDelete(){this.context.relay.commitUpdate(new _EnsayoDeleteMutation2.default({Ensayo:this.props.Ensayo,Viewer:this.props.Viewer}));}},{key:'render',value:function render()

{
var rightIconMenu=
_react2.default.createElement(_IconMenu2.default,{
iconButtonElement:_react2.default.createElement(_IconButton2.default,null,_react2.default.createElement(_moreVert2.default,null)),
onItemTouchTap:this._handle_onItemTouchTap},

_react2.default.createElement(_MenuItem2.default,{ref:'edit',value:0},'Edit'),
_react2.default.createElement(_MenuItem2.default,{ref:'delete',value:1},'Delete'));



return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List.ListItem,{primaryText:this.props.Ensayo.Ensayo_Title,rightIconButton:rightIconMenu}),
_react2.default.createElement(_Ensayo_Properties2.default,{
ref:'Ensayo_Properties',
Ensayo_Content:this.props.Ensayo.Ensayo_Content,
Ensayo_Title:this.props.Ensayo.Ensayo_Title,
Ensayo_Description:this.props.Ensayo.Ensayo_Description,
updateHandler:this._handle_updateHandler_Ensayo})));



}}]);return Ensayo_Item;}(_react2.default.Component);Ensayo_Item.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(Ensayo_Item,{
fragments:{
Ensayo:function Ensayo(){return function(RQL_0,RQL_1){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Ensayo_Title',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Description',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Content',kind:'Field',metadata:{},type:'String'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_Item_EnsayoRelayQL',type:'Ensayo'};}(





_EnsayoDeleteMutation2.default.getFragment('Ensayo'),
_EnsayoUpdateMutation2.default.getFragment('Ensayo'));},


Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_Item_ViewerRelayQL',type:'Viewer'};}(

_EnsayoDeleteMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Ensayo_Item.js.map