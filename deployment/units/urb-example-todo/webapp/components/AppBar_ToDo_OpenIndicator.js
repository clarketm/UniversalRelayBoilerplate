Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _badge=require('material-ui/badge');var _badge2=_interopRequireDefault(_badge);
var _IconButton=require('material-ui/IconButton');var _IconButton2=_interopRequireDefault(_IconButton);
var _eventAvailable=require('material-ui/svg-icons/notification/event-available');var _eventAvailable2=_interopRequireDefault(_eventAvailable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


AppBar_ToDo_OpenIndicator=function(_React$Component){_inherits(AppBar_ToDo_OpenIndicator,_React$Component);function AppBar_ToDo_OpenIndicator(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppBar_ToDo_OpenIndicator);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppBar_ToDo_OpenIndicator.__proto__||Object.getPrototypeOf(AppBar_ToDo_OpenIndicator)).call.apply(_ref,[this].concat(args))),_this),_this.

_handle_onTouchTap_IncompleteTODOs=function(){

_this.context.router.push('/todo/active');
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppBar_ToDo_OpenIndicator,[{key:'render',value:function render()

{

var incompleteCount=this.props.Viewer.ToDo_TotalCount-this.props.Viewer.ToDo_CompletedCount;

if(incompleteCount>0)
return(
_react2.default.createElement(_badge2.default,{key:'top-incomplete',style:{marginTop:-11,marginBottom:-17},badgeContent:incompleteCount,primary:true,badgeStyle:{top:20,right:16}},
_react2.default.createElement(_IconButton2.default,{tooltip:'Incomplete TODOs',onTouchTap:this._handle_onTouchTap_IncompleteTODOs},
_react2.default.createElement(_eventAvailable2.default,null))));else




return _react2.default.createElement('div',null);
}}]);return AppBar_ToDo_OpenIndicator;}(_react2.default.Component);




AppBar_ToDo_OpenIndicator.contextTypes={
router:_react2.default.PropTypes.object.isRequired};exports.default=




_reactRelay2.default.createContainer(AppBar_ToDo_OpenIndicator,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'AppBar_ToDo_OpenIndicator_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=AppBar_ToDo_OpenIndicator.js.map