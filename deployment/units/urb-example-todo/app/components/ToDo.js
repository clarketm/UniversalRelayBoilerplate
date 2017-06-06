Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _ToDoTextInput=require('./ToDoTextInput');var _ToDoTextInput2=_interopRequireDefault(_ToDoTextInput);
var _ToDo_updateStatusMutation=require('../../relay/ToDo_updateStatusMutation');var _ToDo_updateStatusMutation2=_interopRequireDefault(_ToDo_updateStatusMutation);
var _ToDo_updateRenameMutation=require('../../relay/ToDo_updateRenameMutation');var _ToDo_updateRenameMutation2=_interopRequireDefault(_ToDo_updateRenameMutation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo=function(_React$Component){_inherits(ToDo,_React$Component);













function ToDo(props,context){_classCallCheck(this,ToDo);var _this=_possibleConstructorReturn(this,(ToDo.__proto__||Object.getPrototypeOf(ToDo)).call(this,
props,context));_this.state={isEditing:false};

_this._handleCompletePress=_this._handleCompletePress.bind(_this);
_this._handleLabelPress=_this._handleLabelPress.bind(_this);
_this._handleTextInputCancel=_this._handleTextInputCancel.bind(_this);
_this._handleTextInputDelete=_this._handleTextInputDelete.bind(_this);
_this._handleTextInputSave=_this._handleTextInputSave.bind(_this);
_this._setEditMode=_this._setEditMode.bind(_this);return _this;
}_createClass(ToDo,[{key:'_handleCompletePress',value:function _handleCompletePress()

{
var ToDo_Complete=!this.props.ToDo.ToDo_Complete;
this.context.relay.commitUpdate(
new _ToDo_updateStatusMutation2.default({
ToDo_Complete:ToDo_Complete,
ToDo:this.props.ToDo,
Viewer:this.props.Viewer}));


}},{key:'_handleLabelPress',value:function _handleLabelPress()

{
this._setEditMode(true);
}},{key:'_handleTextInputCancel',value:function _handleTextInputCancel()

{
this._setEditMode(false);
}},{key:'_handleTextInputDelete',value:function _handleTextInputDelete()

{
this._setEditMode(false);
this.props.onDestroy();
}},{key:'_handleTextInputSave',value:function _handleTextInputSave(

ToDo_Text){
this._setEditMode(false);
this.context.relay.commitUpdate(
new _ToDo_updateRenameMutation2.default({ToDo:this.props.ToDo,ToDo_Text:ToDo_Text}));

}},{key:'_setEditMode',value:function _setEditMode(

shouldEdit){
this.setState({isEditing:shouldEdit});
}},{key:'renderCompleteCheckbox',value:function renderCompleteCheckbox()

{
var imageModule=this.props.ToDo.ToDo_Complete?
require('../images/todo_checkbox-active.png'):
require('../images/todo_checkbox.png');
return(
_react2.default.createElement(_reactNative.TouchableHighlight,{
onPress:this._handleCompletePress,
style:styles.checkbox,
underlayColor:'transparent'},

_react2.default.createElement(_reactNative.Image,{source:imageModule})));


}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:[this.props.style,styles.container]},
this.renderCompleteCheckbox(),
this.state.isEditing?
_react2.default.createElement(_ToDoTextInput2.default,{
autoFocus:true,
commitOnBlur:true,
initialValue:this.props.ToDo.ToDo_Text,
onCancel:this._handleTextInputCancel,
onDelete:this._handleTextInputDelete,
onSave:this._handleTextInputSave,
style:[styles.labelText,styles.inputText,styles.input]}):

_react2.default.createElement(_reactNative.TouchableHighlight,{
activeOpacity:1,
onPress:this._handleLabelPress,
style:styles.label,
underlayColor:'transparent'},

_react2.default.createElement(_reactNative.Text,{numberOfLines:1,style:styles.labelText},
this.props.ToDo.ToDo_Text))));




}}]);return ToDo;}(_react2.default.Component);ToDo.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};ToDo.propTypes={onDestroy:_propTypes2.default.func.isRequired,style:_reactNative.View.propTypes.style};exports.default=


_reactRelay2.default.createContainer(ToDo,{
fragments:{
ToDo:function ToDo(){return function(RQL_0,RQL_1){return{children:[].concat.apply([],[{fieldName:'ToDo_Complete',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'ToDo_Text',kind:'Field',metadata:{},type:'String'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_ToDoRelayQL',type:'ToDo'};}(




_ToDo_updateStatusMutation2.default.getFragment('ToDo'),
_ToDo_updateRenameMutation2.default.getFragment('ToDo'));},


Viewer:function Viewer(){return function(RQL_0){return{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_ViewerRelayQL',type:'Viewer'};}(

_ToDo_updateStatusMutation2.default.getFragment('Viewer'));}}});





var styles=_reactNative.StyleSheet.create({
checkbox:{
width:40},

container:{
alignItems:'center',
flex:1,
flexDirection:'row',
height:58},

input:{
flex:1},

inputText:{
marginHorizontal:_reactNative.Platform.OS==='android'?11:15},

label:{
borderBottomColor:_reactNative.Platform.OS==='android'?'transparent':undefined,
borderBottomWidth:_reactNative.Platform.OS==='android'?1:undefined,
flex:1},

labelText:{
color:'rgb(77, 77, 77)',
fontFamily:_reactNative.Platform.OS==='android'?'sans-serif-regular':undefined,
fontSize:24,
fontWeight:'300',
marginHorizontal:15,
textAlign:'left'}});
//# sourceMappingURL=ToDo.js.map