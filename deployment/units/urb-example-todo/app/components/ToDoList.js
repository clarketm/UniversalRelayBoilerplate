Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _Swipeout=require('../../../../units/urb-react-native-swipeout/app/components/Swipeout');var _Swipeout2=_interopRequireDefault(_Swipeout);
var _ToDo_addMutation=require('../../relay/ToDo_addMutation');var _ToDo_addMutation2=_interopRequireDefault(_ToDo_addMutation);
var _ToDo_list_updateMarkAllMutation=require('../../relay/ToDo_list_updateMarkAllMutation');var _ToDo_list_updateMarkAllMutation2=_interopRequireDefault(_ToDo_list_updateMarkAllMutation);
var _ToDo_deleteMutation=require('../../relay/ToDo_deleteMutation');var _ToDo_deleteMutation2=_interopRequireDefault(_ToDo_deleteMutation);
var _ToDo=require('./ToDo');var _ToDo2=_interopRequireDefault(_ToDo);
var _ToDoTextInput=require('./ToDoTextInput');var _ToDoTextInput2=_interopRequireDefault(_ToDoTextInput);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var _ToDosDataSource=new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(r1,r2){return r1.__dataID__!==r2.__dataID__;}});var


ToDoList=function(_React$Component){_inherits(ToDoList,_React$Component);









function ToDoList(props,context){_classCallCheck(this,ToDoList);var _this=_possibleConstructorReturn(this,(ToDoList.__proto__||Object.getPrototypeOf(ToDoList)).call(this,
props,context));var
edges=props.Viewer.ToDos.edges;
_this.state={
initialListSize:edges.length,
listScrollEnabled:true,
ToDosDataSource:_ToDosDataSource.cloneWithRows(edges)};

_this._handleMarkAllPress=_this._handleMarkAllPress.bind(_this);
_this._handleSwipeInactive=_this._handleSwipeInactive.bind(_this);
_this._handleTextInputSave=_this._handleTextInputSave.bind(_this);
_this._handleTodoDestroy=_this._handleTodoDestroy.bind(_this);
_this.renderTodoEdge=_this.renderTodoEdge.bind(_this);return _this;
}_createClass(ToDoList,[{key:'_handleMarkAllPress',value:function _handleMarkAllPress()

{
var numTodos=this.props.Viewer.ToDo_TotalCount;
var numCompletedTodos=this.props.Viewer.ToDo_CompletedCount;
var ToDo_Complete=numTodos!==numCompletedTodos;
this.context.relay.commitUpdate(
new _ToDo_list_updateMarkAllMutation2.default({
ToDo_Complete:ToDo_Complete,
ToDos:this.props.Viewer.ToDos,
Viewer:this.props.Viewer}));


}},{key:'_handleSwipeInactive',value:function _handleSwipeInactive(

swipeInactive){
this.setState({listScrollEnabled:swipeInactive});
}},{key:'_handleTextInputSave',value:function _handleTextInputSave(

ToDo_Text){
this.context.relay.commitUpdate(new _ToDo_addMutation2.default({ToDo_Text:ToDo_Text,Viewer:this.props.Viewer}));
}},{key:'_handleTodoDestroy',value:function _handleTodoDestroy(

ToDo){
this.context.relay.commitUpdate(
new _ToDo_deleteMutation2.default({
ToDo:ToDo,
Viewer:this.props.Viewer}));


}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.props.Viewer.ToDos.edges!==nextProps.Viewer.ToDos.edges){
this.setState({
ToDosDataSource:_ToDosDataSource.cloneWithRows(nextProps.Viewer.ToDos.edges)});

}
}},{key:'renderTodoEdge',value:function renderTodoEdge(

todoEdge){
var destroyHandler=this._handleTodoDestroy.bind(null,todoEdge.node);
return(
_react2.default.createElement(_Swipeout2.default,{
key:todoEdge.node.id,
right:[
{
text:'Delete',
type:'delete',
onPress:destroyHandler}],


scroll:this._handleSwipeInactive},

_react2.default.createElement(_ToDo2.default,{
onDestroy:destroyHandler,
style:styles.ToDo,
ToDo:todoEdge.node,
Viewer:this.props.Viewer})));



}},{key:'renderSeparator',value:function renderSeparator(

sectionId,rowId){
return _react2.default.createElement(_reactNative.View,{key:'sep_'+sectionId+'_'+rowId,style:styles.separator});
}},{key:'render',value:function render()

{
var numTodos=this.props.Viewer.ToDo_TotalCount;
var numCompletedTodos=this.props.Viewer.ToDo_CompletedCount;
return(
_react2.default.createElement(_reactNative.View,{style:[this.props.style,styles.container]},
_react2.default.createElement(_reactNative.View,{style:styles.addTodoContainer},
_react2.default.createElement(_reactNative.TouchableHighlight,{
onPress:this._handleMarkAllPress,
style:styles.markAllButtonContainer,
underlayColor:'transparent'},

_react2.default.createElement(_reactNative.Text,{
style:[
styles.markAllButton,
numTodos!==numCompletedTodos&&styles.markAllButtonDisabled]},


'\u276F')),


_react2.default.createElement(_ToDoTextInput2.default,{
clearButtonMode:'while-editing',
onSave:this._handleTextInputSave,
placeholder:'What needs to be done?',
style:styles.input,
initialValue:''})),


_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.ToDosDataSource,
initialListSize:this.state.initialListSize,
renderRow:this.renderTodoEdge,
renderSeparator:this.renderSeparator})));



}}]);return ToDoList;}(_react2.default.Component);ToDoList.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};ToDoList.propTypes={status:_propTypes2.default.oneOf(['active','any','completed']).isRequired,style:_reactNative.View.propTypes.style};exports.default=


_reactRelay2.default.createContainer(ToDoList,{
initialVariables:{
status:'any',
limit:2147483647},


prepareVariables:function prepareVariables(_ref){var status=_ref.status;
var nextStatus;
if(status==='active'||status==='completed'){
nextStatus=status;
}else{


nextStatus='any';
}
return{
status:nextStatus,
limit:2147483647};

},

fragments:{
Viewer:function Viewer(){return function(RQL_0,RQL_1,RQL_2,RQL_3,RQL_4,RQL_5,RQL_6){return{children:[].concat.apply([],[{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{calls:[{kind:'Call',metadata:{},name:'status',value:{kind:'CallVariable',callVariableName:'status'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'limit'}}],children:[].concat.apply([],[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0),_reactRelay2.default.QL.__frag(RQL_1)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'ToDo'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ToDosEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'},_reactRelay2.default.QL.__frag(RQL_2)]),fieldName:'ToDos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ToDosConnection'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_3),_reactRelay2.default.QL.__frag(RQL_4),_reactRelay2.default.QL.__frag(RQL_5),_reactRelay2.default.QL.__frag(RQL_6)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDoList_ViewerRelayQL',type:'Viewer'};}(






_ToDo_deleteMutation2.default.getFragment('ToDo'),
_ToDo2.default.getFragment('ToDo'),


_ToDo_list_updateMarkAllMutation2.default.getFragment('ToDos'),


_ToDo_addMutation2.default.getFragment('Viewer'),
_ToDo_list_updateMarkAllMutation2.default.getFragment('Viewer'),
_ToDo_deleteMutation2.default.getFragment('Viewer'),
_ToDo2.default.getFragment('Viewer'));}}});





var styles=_reactNative.StyleSheet.create({
addTodoContainer:{
borderBottomColor:'rgba(0,0,0,0.1)',
borderBottomWidth:1,
height:58,
paddingHorizontal:8,
paddingVertical:9},

container:{
backgroundColor:'white'},

input:{
bottom:0,
fontFamily:_reactNative.Platform.OS==='android'?'sans-serif-light':undefined,
fontSize:24,
fontStyle:'italic',
fontWeight:'300',
left:_reactNative.Platform.OS==='android'?61:65,
position:'absolute',
right:15,
top:0},

markAllButton:{
color:'#737373',
fontSize:22},

markAllButtonContainer:{
alignItems:'center',
height:44,
justifyContent:'center',
transform:[{rotate:'90deg'}],
width:44},

markAllButtonDisabled:{
color:'#e6e6e6'},

separator:{
backgroundColor:'rgba(0,0,0,0.1)',
height:1},

ToDo:{
backgroundColor:'white',
flex:1,
paddingLeft:10,
paddingRight:8}});
//# sourceMappingURL=ToDoList.js.map