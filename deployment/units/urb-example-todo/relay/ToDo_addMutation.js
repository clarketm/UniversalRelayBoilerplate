Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_addMutation=function(_Relay$Mutation){_inherits(ToDo_addMutation,_Relay$Mutation);function ToDo_addMutation(){_classCallCheck(this,ToDo_addMutation);return _possibleConstructorReturn(this,(ToDo_addMutation.__proto__||Object.getPrototypeOf(ToDo_addMutation)).apply(this,arguments));}_createClass(ToDo_addMutation,[{key:'getMutation',value:function getMutation()








{
return function(){return{calls:[{kind:'Call',metadata:{},name:'ToDo_add',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'ToDo_addInput!'},name:'ToDo_addMutation',responseType:'ToDo_addPayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isGenerated:true,isRequisite:true},type:'ToDo'}],fieldName:'ToDosEdge',kind:'Field',metadata:{canHaveSubselections:true},type:'ToDosEdge'},{children:[{fieldName:'ToDos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'ToDosConnection'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_addMutation_ValueRelayQL',type:'ToDo_addPayload'};}();








}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'RANGE_ADD',
parentName:'Viewer',
parentID:this.props.Viewer.id,
connectionName:'ToDos',
edgeName:'ToDosEdge',
rangeBehaviors:{
'':'append',
'status(any)':'append',
'status(active)':'append',
'status(completed)':null}}];



}},{key:'getVariables',value:function getVariables()
{
return{
ToDo_Text:this.props.ToDo_Text};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{


ToDosEdge:{
node:{
ToDo_Complete:false,
ToDo_Text:this.props.ToDo_Text}},


Viewer:{
id:this.props.Viewer.id,
ToDo_TotalCount:this.props.Viewer.ToDo_TotalCount+1}};


}}]);return ToDo_addMutation;}(_reactRelay2.default.Mutation);ToDo_addMutation.fragments={Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'ToDo_TotalCount',kind:'Field',metadata:{},type:'Int'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_addMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=ToDo_addMutation;
//# sourceMappingURL=ToDo_addMutation.js.map