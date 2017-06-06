Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _ResponsiveContentArea=require('../../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);
var _ToDo_addMutation=require('../../relay/ToDo_addMutation');var _ToDo_addMutation2=_interopRequireDefault(_ToDo_addMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_Screen=function(_React$Component){_inherits(ToDo_Screen,_React$Component);








function ToDo_Screen(props,context){_classCallCheck(this,ToDo_Screen);var _this=_possibleConstructorReturn(this,(ToDo_Screen.__proto__||Object.getPrototypeOf(ToDo_Screen)).call(this,
props,context));_this.






_handle_onKeyDown_AddToDo=function(e){
if(e.keyCode===13){
_this.context.relay.commitUpdate(
new _ToDo_addMutation2.default({
ToDo_Text:_this.state.ToDo_Text_New,
Viewer:_this.props.Viewer}));



_this.setState({
ToDo_Text_New:''});

}
};_this.

_handle_OnChange=function(event){
_this.setState({
ToDo_Text_New:event.target.value});

};_this.state={ToDo_Text_New:''};return _this;}_createClass(ToDo_Screen,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card.Card,{initiallyExpanded:true},

_react2.default.createElement(_Card.CardHeader,{title:'TO DOs',subtitle:'List of TO DOs for user'}),

this.props.children,

_react2.default.createElement('div',{style:{marginLeft:4,marginRight:4}},
_react2.default.createElement(_TextField2.default,{
floatingLabelText:'What needs to be done?',
value:this.state.ToDo_Text_New,
fullWidth:true,
onKeyDown:this._handle_onKeyDown_AddToDo,
onChange:this._handle_OnChange})))));






}}]);return ToDo_Screen;}(_react2.default.Component);ToDo_Screen.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(ToDo_Screen,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_Screen_ViewerRelayQL',type:'Viewer'};}(


_ToDo_addMutation2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=ToDo_Screen.js.map