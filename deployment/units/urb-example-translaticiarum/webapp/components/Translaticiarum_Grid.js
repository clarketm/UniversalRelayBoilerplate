Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _add=require('material-ui/svg-icons/content/add');var _add2=_interopRequireDefault(_add);
var _DatePicker=require('material-ui/DatePicker/DatePicker');var _DatePicker2=_interopRequireDefault(_DatePicker);
var _FloatingActionButton=require('material-ui/FloatingActionButton');var _FloatingActionButton2=_interopRequireDefault(_FloatingActionButton);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _DateTimeHelpers=require('../../../../webapp/scripts/DateTimeHelpers');




var _ResponsiveContentArea=require('../../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _Translaticiarum_addMutation=require('../../relay/Translaticiarum_addMutation');var _Translaticiarum_addMutation2=_interopRequireDefault(_Translaticiarum_addMutation);
var _Translaticiarum_deleteMutation=require('../../relay/Translaticiarum_deleteMutation');var _Translaticiarum_deleteMutation2=_interopRequireDefault(_Translaticiarum_deleteMutation);
var _Translaticiarum_Icon=require('./Translaticiarum_Icon');var _Translaticiarum_Icon2=_interopRequireDefault(_Translaticiarum_Icon);
var _Translaticiarum_updateMutation=require('../../relay/Translaticiarum_updateMutation');var _Translaticiarum_updateMutation2=_interopRequireDefault(_Translaticiarum_updateMutation);
var _Translaticiarum_Properties=require('./Translaticiarum_Properties');var _Translaticiarum_Properties2=_interopRequireDefault(_Translaticiarum_Properties);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var dayOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var

Translaticiarum_Grid=function(_React$Component){_inherits(Translaticiarum_Grid,_React$Component);









function Translaticiarum_Grid(props,context){_classCallCheck(this,Translaticiarum_Grid);var _this=_possibleConstructorReturn(this,(Translaticiarum_Grid.__proto__||Object.getPrototypeOf(Translaticiarum_Grid)).call(this,
props,context));_initialiseProps.call(_this);

var Date_Start=new Date();
Date_Start.setHours(0);
Date_Start.setMinutes(0);
Date_Start.setSeconds(0);
Date_Start.setMilliseconds(0);

_this.state={
Date_Start:Date_Start};return _this;

}_createClass(Translaticiarum_Grid,[{key:'getTranslaticiarumByDateAndType',value:function getTranslaticiarumByDateAndType(

















transliticiarumDays){
var dayCount=transliticiarumDays.length-1;


var results={};
for(var ixDay=1;ixDay<=dayCount;ixDay++){
results[transliticiarumDays[ixDay].getTime()]={};
}

this.props.Viewer.Translaticiarums.edges.map(function(edge){
var Translaticiarum_Date_Epoch=new Date(edge.node.Translaticiarum_Date).getTime();

var resultsForDay=results[Translaticiarum_Date_Epoch];
if(resultsForDay!=null){
var type=edge.node.Translaticiarum_Type;
var arrTranslaticiarum=resultsForDay[type];
if(arrTranslaticiarum==null)arrTranslaticiarum=resultsForDay[type]=[];

arrTranslaticiarum.push(edge.node);
}
});

return results;
}},{key:'renderCell',value:function renderCell(

TranslaticiarumByDateAndType,translaticiarumType,transliticiarumDay){
var cell=void 0;


if(translaticiarumType==0){

if(transliticiarumDay==null)cell='';else
{

cell=dayOfWeek[(0,_DateTimeHelpers.dateUTCToLocal)(transliticiarumDay).getUTCDay()];
}
}else{

if(transliticiarumDay==null)cell=(0,_Translaticiarum_Icon2.default)(translaticiarumType);else
{
cell='-';
var TranslaticiarumByType=TranslaticiarumByDateAndType[transliticiarumDay.getTime()];
if(TranslaticiarumByType!=null){
var arrTranslaticiarum=TranslaticiarumByType[translaticiarumType];
if(arrTranslaticiarum!=null){
cell='';
for(var _iterator=arrTranslaticiarum,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var a_Translaticiarum=_ref;
cell+=(0,_DateTimeHelpers.dateFormat)(
(0,_DateTimeHelpers.dateUTCToLocal)(new Date(a_Translaticiarum.Translaticiarum_Time)),
'h:mmtt');}


}
}
}
}

return _react2.default.createElement('td',{style:{width:100},key:transliticiarumDay},cell);
}},{key:'render',value:function render()

{var _this2=this;
var translaticiarumTypes=[0,1,2,3,4,5,6,7,8];

var firstDayEpoch=(0,_DateTimeHelpers.dateLocalToUTC)(this.state.Date_Start).getTime();


var numberOfDays=Math.floor(
(this.context.rbContext.viewportDimensions.get(this,'contentWidth')-120)/100);

if(numberOfDays<1)numberOfDays=1;else
if(numberOfDays>7)numberOfDays=7;

var transliticiarumDays=[];
for(var day=0;day<numberOfDays;day++){
transliticiarumDays[day+1]=new Date(firstDayEpoch+day*24*60*60*1000);}

var TranslaticiarumByDateAndType=this.getTranslaticiarumByDateAndType(transliticiarumDays);

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



_react2.default.createElement('table',null,
_react2.default.createElement('tbody',null,
translaticiarumTypes.map(function(translaticiarumType){return(
_react2.default.createElement('tr',{key:translaticiarumType},
transliticiarumDays.map(function(transliticiarumDay){return(
_this2.renderCell(
TranslaticiarumByDateAndType,
translaticiarumType,
transliticiarumDay));})));}))),







_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_DatePicker2.default,{
hintText:'Date Start',
value:this.state.Date_Start,
onChange:this._handle_onChange_Date_Start})),



_react2.default.createElement(_Translaticiarum_Properties2.default,{
ref:'Translaticiarum_Properties',
Translaticiarum_Type:1,
Translaticiarum_Date:new Date().toJSON(),
Translaticiarum_Time:new Date().toJSON(),
updateHandler:this._handle_updateHandler_Translaticiarum_Add}))));





}}]);return Translaticiarum_Grid;}(_react2.default.Component);Translaticiarum_Grid.contextTypes={rbContext:_propTypes2.default.object.isRequired,relay:_reactRelay2.default.PropTypes.Environment};var _initialiseProps=function _initialiseProps(){var _this3=this;this._handle_onChange_Date_Start=function(event,value){_this3.setState({Date_Start:value});};this._handle_updateHandler_Translaticiarum_Add=function(Translaticiarum_properties){_this3.context.relay.commitUpdate(new _Translaticiarum_addMutation2.default(_extends({},Translaticiarum_properties,{Viewer:_this3.props.Viewer})));};this._handle_onTouchTap_Add=function(){_this3.refs.Translaticiarum_Properties._handle_Open();};};exports.default=


_reactRelay2.default.createContainer(Translaticiarum_Grid,{
fragments:{
Viewer:function Viewer(){return function(RQL_0,RQL_1,RQL_2,RQL_3){return{children:[].concat.apply([],[{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:2147483647}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Translaticiarum_Date',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'Translaticiarum_Time',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'Translaticiarum_Type',kind:'Field',metadata:{},type:'Int'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'Translaticiarum'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'TranslaticiarumsEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'Translaticiarums',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'TranslaticiarumsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_2),_reactRelay2.default.QL.__frag(RQL_3)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_Grid_ViewerRelayQL',type:'Viewer'};}(








_Translaticiarum_deleteMutation2.default.getFragment('Translaticiarum'),
_Translaticiarum_updateMutation2.default.getFragment('Translaticiarum'),



_Translaticiarum_addMutation2.default.getFragment('Viewer'),
_Translaticiarum_deleteMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Translaticiarum_Grid.js.map