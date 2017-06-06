Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_list_updateMarkAllMutation=function(_Relay$Mutation){_inherits(ToDo_list_updateMarkAllMutation,_Relay$Mutation);function ToDo_list_updateMarkAllMutation(){_classCallCheck(this,ToDo_list_updateMarkAllMutation);return _possibleConstructorReturn(this,(ToDo_list_updateMarkAllMutation.__proto__||Object.getPrototypeOf(ToDo_list_updateMarkAllMutation)).apply(this,arguments));}_createClass(ToDo_list_updateMarkAllMutation,[{key:'getMutation',value:function getMutation()



















{
return function(){return{calls:[{kind:'Call',metadata:{},name:'ToDo_list_updateMarkAll',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'ToDo_list_updateMarkAllInput!'},name:'ToDo_list_updateMarkAllMutation',responseType:'ToDo_list_updateMarkAllPayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'ToDos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ToDosConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_list_updateMarkAllMutation_ValueRelayQL',type:'ToDo_list_updateMarkAllPayload'};}();







}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'FIELDS_CHANGE',
fieldIDs:{
Viewer:this.props.Viewer.id}}];



}},{key:'getVariables',value:function getVariables()
{
return{
ToDo_Complete:this.props.ToDo_Complete};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{var _this2=this;
var ViewerPayload={id:this.props.Viewer.id};
if(this.props.ToDos&&this.props.ToDos.edges){
ViewerPayload.ToDos={
edges:this.props.ToDos.edges.
filter(function(edge){return edge.node.ToDo_Complete!==_this2.props.ToDo_Complete;}).
map(function(edge){return{
node:{
ToDo_Complete:_this2.props.ToDo_Complete,
id:edge.node.id}};})};



}
if(this.props.Viewer.ToDo_TotalCount!=null){
ViewerPayload.ToDo_CompletedCount=this.props.ToDo_Complete?
this.props.Viewer.ToDo_TotalCount:
0;
}
return{
Viewer:ViewerPayload};

}}]);return ToDo_list_updateMarkAllMutation;}(_reactRelay2.default.Mutation);ToDo_list_updateMarkAllMutation.fragments={ToDos:function ToDos(){return function(){return{children:[{children:[{children:[{fieldName:'ToDo_Complete',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'ToDo'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'ToDosEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_list_updateMarkAllMutation_ToDosRelayQL',type:'ToDosConnection'};}();},Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_list_updateMarkAllMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=ToDo_list_updateMarkAllMutation;
//# sourceMappingURL=ToDo_list_updateMarkAllMutation.js.map