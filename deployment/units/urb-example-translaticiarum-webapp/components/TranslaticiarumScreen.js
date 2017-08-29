Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactBigCalendar=require('react-big-calendar');var _reactBigCalendar2=_interopRequireDefault(_reactBigCalendar);
var _reactRelay=require('react-relay');

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

_reactBigCalendar2.default.momentLocalizer(_moment2.default);

var styles={
card:{
minWidth:275}};var







TranslaticiarumScreen=function(_React$Component){_inherits(TranslaticiarumScreen,_React$Component);









function TranslaticiarumScreen(props,context){_classCallCheck(this,TranslaticiarumScreen);var _this=_possibleConstructorReturn(this,(TranslaticiarumScreen.__proto__||Object.getPrototypeOf(TranslaticiarumScreen)).call(this,
props,context));_this.






_handle_onView=function(view){
_this.setState({calendarView:view});
};_this.

_handle_onSelectSlot=function(slotInfo)



{
console.log(slotInfo);
};_this.state={calendarView:'week'};return _this;}_createClass(TranslaticiarumScreen,[{key:'render',value:function render()

{var _props=
this.props,classes=_props.classes,Viewer=_props.Viewer;

var translaticiarumEdges=Viewer.Translaticiarums.edges;

var calendarEvents=translaticiarumEdges.map(function(translaticiarumEdge){
var translaticiarum=translaticiarumEdge.node;

return{
title:translaticiarum.Translaticiarum_Description,
start:(0,_moment2.default)(translaticiarum.Translaticiarum_Start).toDate(),
end:(0,_moment2.default)(translaticiarum.Translaticiarum_Stop).toDate()};

});

console.log(this.state.calendarView);
console.log(calendarEvents);

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Translaticiarum'}),

_react2.default.createElement(_Card.CardContent,null,
_react2.default.createElement(_reactBigCalendar2.default,{
events:calendarEvents,
view:this.state.calendarView,
onView:this._handle_onView,
selectable:true,
onSelectSlot:this._handle_onSelectSlot})))));





}}]);return TranslaticiarumScreen;}(_react2.default.Component);TranslaticiarumScreen.contextTypes={router:_propTypes2.default.object};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(TranslaticiarumScreen),{Viewer:function Viewer(){return require('./__generated__/TranslaticiarumScreen_Viewer.graphql');}});
//# sourceMappingURL=TranslaticiarumScreen.js.map