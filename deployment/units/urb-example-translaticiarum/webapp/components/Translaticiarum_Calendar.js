Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _add=require('material-ui/svg-icons/content/add');var _add2=_interopRequireDefault(_add);
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactBigCalendar=require('react-big-calendar');var _reactBigCalendar2=_interopRequireDefault(_reactBigCalendar);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _DateTimeHelpers=require('../../../../webapp/scripts/DateTimeHelpers');
var _ResponsiveContentArea=require('../../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _Translaticiarum_addMutation=require('../../relay/Translaticiarum_addMutation');var _Translaticiarum_addMutation2=_interopRequireDefault(_Translaticiarum_addMutation);
var _Translaticiarum_Properties=require('./Translaticiarum_Properties');var _Translaticiarum_Properties2=_interopRequireDefault(_Translaticiarum_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



_reactBigCalendar2.default.momentLocalizer(_moment2.default);var

Translaticiarum_Calendar=function(_React$Component){_inherits(Translaticiarum_Calendar,_React$Component);function Translaticiarum_Calendar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Translaticiarum_Calendar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Translaticiarum_Calendar.__proto__||Object.getPrototypeOf(Translaticiarum_Calendar)).call.apply(_ref,[this].concat(args))),_this),_this.




_handle_updateHandler_Translaticiarum_Add=function(Translaticiarum_properties){
_this.context.relay.commitUpdate(
new _Translaticiarum_addMutation2.default(_extends({},Translaticiarum_properties,{Viewer:_this.props.Viewer})));

},_this.

_handle_onTouchTap_Add=function(){
_this.refs.Translaticiarum_Properties._handle_Open();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Translaticiarum_Calendar,[{key:'render',value:function render()

{
var today=new Date();

var translaticiarum=this.props.Viewer.Translaticiarums.edges;

var calendarEvents=translaticiarum.map(function(translaticiarumEdge){
var translaticiarum=translaticiarumEdge.node;
var theDate=(0,_DateTimeHelpers.dateFromUTCString)(translaticiarum.Translaticiarum_Date);
var theTime=(0,_DateTimeHelpers.dateFromUTCString)(translaticiarum.Translaticiarum_Time);

var theDateTimeStart=(0,_DateTimeHelpers.dateUTCToLocal)(new Date(theDate.getTime()+theTime.getTime()));
var theDateTimeStop=(0,_DateTimeHelpers.dateUTCToLocal)(
new Date(theDate.getTime()+theTime.getTime()+7200000));


return{
title:'Type '+translaticiarum.Translaticiarum_Type,
start:theDateTimeStart,
end:theDateTimeStop};

});

console.log(calendarEvents);

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card.Card,{initiallyExpanded:true},

_react2.default.createElement(_Card.CardHeader,{
title:'Calendar view of Translaticiarum',
subtitle:'Using React Big Calendar'}),


_react2.default.createElement(_reactBigCalendar2.default,{events:calendarEvents,defaultDate:new Date(2017,6,1)}))));




}}]);return Translaticiarum_Calendar;}(_react2.default.Component);Translaticiarum_Calendar.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(Translaticiarum_Calendar,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:2147483647}}],children:[{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Translaticiarum_Type',kind:'Field',metadata:{},type:'Int'},{fieldName:'Translaticiarum_Date',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'Translaticiarum_Time',kind:'Field',metadata:{},type:'DateTime'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'Translaticiarum'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'TranslaticiarumsEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'Translaticiarums',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'TranslaticiarumsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_Calendar_ViewerRelayQL',type:'Viewer'};}(











_Translaticiarum_addMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Translaticiarum_Calendar.js.map