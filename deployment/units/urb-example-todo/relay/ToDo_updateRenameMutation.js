Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToDo_updateRenameMutation=function(_Relay$Mutation){_inherits(ToDo_updateRenameMutation,_Relay$Mutation);function ToDo_updateRenameMutation(){_classCallCheck(this,ToDo_updateRenameMutation);return _possibleConstructorReturn(this,(ToDo_updateRenameMutation.__proto__||Object.getPrototypeOf(ToDo_updateRenameMutation)).apply(this,arguments));}_createClass(ToDo_updateRenameMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'ToDo_updateRename',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'ToDo_updateRenameInput!'},name:'ToDo_updateRenameMutation',responseType:'ToDo_updateRenamePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'ToDo_Text',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'ToDo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'ToDo'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_updateRenameMutation_ValueRelayQL',type:'ToDo_updateRenamePayload'};}();






}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'FIELDS_CHANGE',
fieldIDs:{
ToDo:this.props.ToDo.id}}];



}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.ToDo.id,
ToDo_Text:this.props.ToDo_Text};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
ToDo:{
id:this.props.ToDo.id,
ToDo_Text:this.props.ToDo_Text}};


}}]);return ToDo_updateRenameMutation;}(_reactRelay2.default.Mutation);ToDo_updateRenameMutation.fragments={ToDo:function ToDo(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'ToDo_updateRenameMutation_ToDoRelayQL',type:'ToDo'};}();}};exports.default=ToDo_updateRenameMutation;
//# sourceMappingURL=ToDo_updateRenameMutation.js.map