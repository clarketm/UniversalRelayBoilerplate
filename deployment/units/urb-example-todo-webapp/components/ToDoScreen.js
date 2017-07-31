Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-todo-webapp/components/ToDoScreen.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _ToDoAddMutation=require('../../urb-example-todo-client/relay/ToDoAddMutation');var _ToDoAddMutation2=_interopRequireDefault(_ToDoAddMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styleSheet=(0,_styles.createStyleSheet)(function(theme){return{
card:{
minWidth:275}};});var



ToDoScreen=function(_React$Component){_inherits(ToDoScreen,_React$Component);











function ToDoScreen(props,context){_classCallCheck(this,ToDoScreen);var _this=_possibleConstructorReturn(this,(ToDoScreen.__proto__||Object.getPrototypeOf(ToDoScreen)).call(this,
props,context));_this.






_handle_onKeyDown_AddToDo=function(){return _this.___handle_onKeyDown_AddToDo__REACT_HOT_LOADER__.apply(_this,arguments);};_this.











_handle_OnChange=function(){return _this.___handle_OnChange__REACT_HOT_LOADER__.apply(_this,arguments);};_this.state={ToDo_Text_New:''};return _this;}_createClass(ToDoScreen,[{key:'___handle_onKeyDown_AddToDo__REACT_HOT_LOADER__',value:function ___handle_onKeyDown_AddToDo__REACT_HOT_LOADER__(e){if(e.keyCode===13){var _props=this.props,relay=_props.relay,Viewer=_props.Viewer;_ToDoAddMutation2.default.commit(relay.environment,Viewer,this.state.ToDo_Text_New);this.setState({ToDo_Text_New:''});}}},{key:'___handle_OnChange__REACT_HOT_LOADER__',value:function ___handle_OnChange__REACT_HOT_LOADER__(event){
this.setState({
ToDo_Text_New:event.target.value});

}},{key:'render',value:function render()

{
var classes=this.props.classes;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,{__source:{fileName:_jsxFileName,lineNumber:61}},
_react2.default.createElement(_Card2.default,{className:classes.card,__source:{fileName:_jsxFileName,lineNumber:62}},
_react2.default.createElement(_Card.CardHeader,{title:'TO DOs',subheader:'List of TO DOs for user',__source:{fileName:_jsxFileName,lineNumber:63}}),
this.props.children,
_react2.default.createElement('div',{style:{marginLeft:4,marginRight:4},__source:{fileName:_jsxFileName,lineNumber:65}}),
_react2.default.createElement(_TextField2.default,{
label:'What needs to be done?',
value:this.state.ToDo_Text_New,
fullWidth:true,
onKeyDown:this._handle_onKeyDown_AddToDo,
onChange:this._handle_OnChange,__source:{fileName:_jsxFileName,lineNumber:66}}))));




}}]);return ToDoScreen;}(_react2.default.Component);ToDoScreen.propTypes={classes:_propTypes2.default.object.isRequired,Viewer:_propTypes2.default.object.isRequired,children:_propTypes2.default.node.isRequired,relay:_propTypes2.default.object.isRequired};var _default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styleSheet)(ToDoScreen),{Viewer:function Viewer(){return require('./__generated__/ToDoScreen_Viewer.graphql');}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(styleSheet,'styleSheet','units/urb-example-todo-webapp/components/ToDoScreen.jsx');__REACT_HOT_LOADER__.register(ToDoScreen,'ToDoScreen','units/urb-example-todo-webapp/components/ToDoScreen.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-webapp/components/ToDoScreen.jsx');}();;
//# sourceMappingURL=ToDoScreen.js.map