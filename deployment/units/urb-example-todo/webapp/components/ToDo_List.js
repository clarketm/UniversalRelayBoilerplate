Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Checkbox=require('material-ui/Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);
var _List=require('material-ui/List');
var _Tabs=require('material-ui/Tabs');

var _ToDo_list_updateMarkAllMutation=require('../../relay/ToDo_list_updateMarkAllMutation');var _ToDo_list_updateMarkAllMutation2=_interopRequireDefault(_ToDo_list_updateMarkAllMutation);
var _ToDo_Item=require('./ToDo_Item');var _ToDo_Item2=_interopRequireDefault(_ToDo_Item);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_List=function(_React$Component){_inherits(ToDo_List,_React$Component);function ToDo_List(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ToDo_List);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ToDo_List.__proto__||Object.getPrototypeOf(ToDo_List)).call.apply(_ref,[this].concat(args))),_this),_this.





_handle_onCheck_MarkAll=function(event,checked){
_this.context.relay.commitUpdate(
new _ToDo_list_updateMarkAllMutation2.default({
ToDo_Complete:checked,
ToDos:_this.props.Viewer.ToDos,
Viewer:_this.props.Viewer}));


},_this.







_handle_requestChange=function(value){
_this.context.router.push('/todo/'+value);
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ToDo_List,[{key:'renderToDos',value:function renderToDos(){var _this2=this;return this.props.Viewer.ToDos.edges.map(function(edge){return _react2.default.createElement(_ToDo_Item2.default,{key:edge.node.id,ToDo:edge.node,Viewer:_this2.props.Viewer});});}},{key:'renderTabs',value:function renderTabs()

{
return(
_react2.default.createElement(_Tabs.Tabs,{
valueLink:{
value:this.props.relay.variables.status,
requestChange:this._handle_requestChange}},


_react2.default.createElement(_Tabs.Tab,{label:'All',value:'any'}),
_react2.default.createElement(_Tabs.Tab,{label:'Active',value:'active'}),
_react2.default.createElement(_Tabs.Tab,{label:'Completed',value:'completed'})));


}},{key:'render',value:function render()

{
var numToDos=this.props.Viewer.ToDo_TotalCount;
var numCompletedToDos=this.props.Viewer.ToDo_CompletedCount;
return(
_react2.default.createElement('div',null,
this.renderTabs(),
_react2.default.createElement(_Checkbox2.default,{
label:'Mark all as complete',
defaultChecked:numToDos===numCompletedToDos,
onCheck:this._handle_onCheck_MarkAll}),

_react2.default.createElement(_List.List,null,
this.renderToDos())));



}}]);return ToDo_List;}(_react2.default.Component);ToDo_List.contextTypes={relay:_reactRelay2.default.PropTypes.Environment,router:_react2.default.PropTypes.object.isRequired};exports.default=


_reactRelay2.default.createContainer(ToDo_List,{
initialVariables:{
status:'any',
limit:2147483647},


prepareVariables:function prepareVariables(_ref2){var status=_ref2.status;
var nextStatus;
if(status==='active'||status==='completed')nextStatus=status;else



nextStatus='any';

return{
status:nextStatus,
limit:2147483647};

},

fragments:{
Viewer:function Viewer(){return function(RQL_0,RQL_1,RQL_2,RQL_3){return{children:[].concat.apply([],[{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{calls:[{kind:'Call',metadata:{},name:'status',value:{kind:'CallVariable',callVariableName:'status'}},{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallVariable',callVariableName:'limit'}}],children:[].concat.apply([],[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'ToDo'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ToDosEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'},_reactRelay2.default.QL.__frag(RQL_1)]),fieldName:'ToDos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ToDosConnection'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_2),_reactRelay2.default.QL.__frag(RQL_3)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_List_ViewerRelayQL',type:'Viewer'};}(






_ToDo_Item2.default.getFragment('ToDo'),


_ToDo_list_updateMarkAllMutation2.default.getFragment('ToDos'),


_ToDo_list_updateMarkAllMutation2.default.getFragment('Viewer'),
_ToDo_Item2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=ToDo_List.js.map