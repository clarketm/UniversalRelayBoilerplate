Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _ToDoAddMutation=require('../../urb-example-todo-client/relay/ToDoAddMutation');var _ToDoAddMutation2=_interopRequireDefault(_ToDoAddMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
card:{
minWidth:275}};};var



ToDoScreen=function(_React$Component){_inherits(ToDoScreen,_React$Component);










function ToDoScreen(props,context){_classCallCheck(this,ToDoScreen);var _this=_possibleConstructorReturn(this,(ToDoScreen.__proto__||Object.getPrototypeOf(ToDoScreen)).call(this,
props,context));_this.






_handle_onKeyDown_AddToDo=function(e){
if(e.keyCode===13){var _this$props=
_this.props,_relay=_this$props.relay,_Viewer=_this$props.Viewer;

_ToDoAddMutation2.default.commit(
_relay.environment,
_Viewer,
_this.state.ToDo_Text_New);


_this.setState({
ToDo_Text_New:''});

}
};_this.

_handle_OnChange=function(event){
_this.setState({
ToDo_Text_New:event.target.value});

};_this.state={ToDo_Text_New:''};return _this;}_createClass(ToDoScreen,[{key:'render',value:function render()

{var
classes=this.props.classes;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'TO DOs',subheader:'List of TO DOs for user'}),
this.props.children,
_react2.default.createElement('div',{style:{marginLeft:4,marginRight:4}}),
_react2.default.createElement(_TextField2.default,{
label:'What needs to be done?',
value:this.state.ToDo_Text_New,
fullWidth:true,
onKeyDown:this._handle_onKeyDown_AddToDo,
onChange:this._handle_OnChange}))));




}}]);return ToDoScreen;}(_react2.default.Component);exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(ToDoScreen),{Viewer:function Viewer(){return require('./__generated__/ToDoScreen_Viewer.graphql');}});
//# sourceMappingURL=ToDoScreen.js.map