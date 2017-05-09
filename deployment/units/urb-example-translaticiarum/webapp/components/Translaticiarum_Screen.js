Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _Card=require('material-ui/Card');
var _add=require('material-ui/svg-icons/content/add');var _add2=_interopRequireDefault(_add);
var _FloatingActionButton=require('material-ui/FloatingActionButton');var _FloatingActionButton2=_interopRequireDefault(_FloatingActionButton);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _ResponsiveContentArea=require('../../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _Translaticiarum_addMutation=require('../../relay/Translaticiarum_addMutation');var _Translaticiarum_addMutation2=_interopRequireDefault(_Translaticiarum_addMutation);
var _Translaticiarum_Properties=require('./Translaticiarum_Properties');var _Translaticiarum_Properties2=_interopRequireDefault(_Translaticiarum_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Translaticiarum_Screen=function(_React$Component){_inherits(Translaticiarum_Screen,_React$Component);function Translaticiarum_Screen(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Translaticiarum_Screen);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Translaticiarum_Screen.__proto__||Object.getPrototypeOf(Translaticiarum_Screen)).call.apply(_ref,[this].concat(args))),_this),_this.





_handle_updateHandler_Translaticiarum_Add=function(Translaticiarum_properties){

_this.context.relay.commitUpdate(
new _Translaticiarum_addMutation2.default(_extends({},Translaticiarum_properties,{Viewer:_this.props.Viewer})));

},_this.

_handle_onTouchTap_Add=function(){

_this.refs.Translaticiarum_Properties._handle_Open();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Translaticiarum_Screen,[{key:'render',value:function render()

{

var today=new Date();

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card.Card,{initiallyExpanded:true},

_react2.default.createElement(_Card.CardHeader,{title:'Translaticiarum',subtitle:'This means routine in Latin'}),

_react2.default.createElement('div',{style:{float:'right',marginTop:-58,marginRight:20}},
_react2.default.createElement(_FloatingActionButton2.default,{
secondary:true,
mini:true,
onTouchTap:this._handle_onTouchTap_Add},

_react2.default.createElement(_add2.default,null))),



this.props.children,

_react2.default.createElement(_Translaticiarum_Properties2.default,{
ref:'Translaticiarum_Properties',
Translaticiarum_Type:1,
Translaticiarum_Date:new Date(Date.UTC(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0)).toJSON(),
Translaticiarum_Time:new Date(Date.UTC(1970,0,1,12,0,0)).toJSON(),
updateHandler:this._handle_updateHandler_Translaticiarum_Add}))));





}}]);return Translaticiarum_Screen;}(_react2.default.Component);Translaticiarum_Screen.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(Translaticiarum_Screen,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_Screen_ViewerRelayQL',type:'Viewer'};}(

_Translaticiarum_addMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Translaticiarum_Screen.js.map