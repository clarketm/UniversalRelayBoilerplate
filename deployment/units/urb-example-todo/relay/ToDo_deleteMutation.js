Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_deleteMutation=function(_Relay$Mutation){_inherits(ToDo_deleteMutation,_Relay$Mutation);function ToDo_deleteMutation(){_classCallCheck(this,ToDo_deleteMutation);return _possibleConstructorReturn(this,(ToDo_deleteMutation.__proto__||Object.getPrototypeOf(ToDo_deleteMutation)).apply(this,arguments));}_createClass(ToDo_deleteMutation,[{key:'getMutation',value:function getMutation()

















{
return function(){return{calls:[{kind:'Call',metadata:{},name:'ToDo_delete',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'ToDo_deleteInput!'},name:'ToDo_deleteMutation',responseType:'ToDo_deletePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{fieldName:'deletedToDoId',kind:'Field',metadata:{},type:'ID'},{children:[{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_deleteMutation_ValueRelayQL',type:'ToDo_deletePayload'};}();








}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'NODE_DELETE',
parentName:'Viewer',
parentID:this.props.Viewer.id,
connectionName:'ToDos',
deletedIDFieldName:'deletedToDoId'}];


}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.ToDo.id};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
var ViewerPayload={id:this.props.Viewer.id};
if(this.props.Viewer.ToDo_CompletedCount!=null){
ViewerPayload.ToDo_CompletedCount=this.props.ToDo.ToDo_Complete===true?
this.props.Viewer.ToDo_CompletedCount-1:
this.props.Viewer.ToDo_CompletedCount;
}
if(this.props.Viewer.ToDo_TotalCount!=null){
ViewerPayload.ToDo_TotalCount=this.props.Viewer.ToDo_TotalCount-1;
}
return{
deletedToDoId:this.props.ToDo.id,
Viewer:ViewerPayload};

}}]);return ToDo_deleteMutation;}(_reactRelay2.default.Mutation);ToDo_deleteMutation.fragments={ToDo:function ToDo(){return function(){return{children:[{fieldName:'ToDo_Complete',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_deleteMutation_ToDoRelayQL',type:'ToDo'};}();},Viewer:function Viewer(){return function(){return{children:[{fieldName:'ToDo_CompletedCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_deleteMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=ToDo_deleteMutation;
//# sourceMappingURL=ToDo_deleteMutation.js.map