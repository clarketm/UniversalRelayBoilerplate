Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Card=require('material-ui/Card');
var _add=require('material-ui/svg-icons/content/add');var _add2=_interopRequireDefault(_add);
var _FloatingActionButton=require('material-ui/FloatingActionButton');var _FloatingActionButton2=_interopRequireDefault(_FloatingActionButton);

var _Ensayo_addMutation=require('../../relay/Ensayo_addMutation');var _Ensayo_addMutation2=_interopRequireDefault(_Ensayo_addMutation);

var _Ensayo_Properties=require('./Ensayo_Properties');var _Ensayo_Properties2=_interopRequireDefault(_Ensayo_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Ensayo_Screen=function(_React$Component){_inherits(Ensayo_Screen,_React$Component);function Ensayo_Screen(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Ensayo_Screen);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Ensayo_Screen.__proto__||Object.getPrototypeOf(Ensayo_Screen)).call.apply(_ref,[this].concat(args))),_this),_this.





_handle_updateHandler_Ensayo=function(Ensayo_properties)
{
_this.context.relay.commitUpdate(
new _Ensayo_addMutation2.default(_extends({},Ensayo_properties,{Viewer:_this.props.Viewer})));

},_this.

_handle_onTouchTap_Add=function()
{
_this.refs.Ensayo_Properties._handle_Open();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Ensayo_Screen,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_Card.Card,{initiallyExpanded:true},

_react2.default.createElement(_Card.CardHeader,{title:'Ensayo',subtitle:'This means Essay in Spanish'}),

_react2.default.createElement('div',{style:{float:'right',marginTop:-58,marginRight:20}},
_react2.default.createElement(_FloatingActionButton2.default,{
secondary:true,
mini:true,
onTouchTap:this._handle_onTouchTap_Add},

_react2.default.createElement(_add2.default,null))),



this.props.children,

_react2.default.createElement(_Ensayo_Properties2.default,{
ref:'Ensayo_Properties',
Ensayo_Content:"",
Ensayo_Title:"",
Ensayo_Description:"",
updateHandler:this._handle_updateHandler_Ensayo})));




}}]);return Ensayo_Screen;}(_react2.default.Component);Ensayo_Screen.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(Ensayo_Screen,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_Screen_ViewerRelayQL',type:'Viewer'};}(

_Ensayo_addMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Ensayo_Screen.js.map