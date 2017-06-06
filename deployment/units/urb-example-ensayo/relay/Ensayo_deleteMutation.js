Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Ensayo_deleteMutation=function(_Relay$Mutation){_inherits(Ensayo_deleteMutation,_Relay$Mutation);function Ensayo_deleteMutation(){_classCallCheck(this,Ensayo_deleteMutation);return _possibleConstructorReturn(this,(Ensayo_deleteMutation.__proto__||Object.getPrototypeOf(Ensayo_deleteMutation)).apply(this,arguments));}_createClass(Ensayo_deleteMutation,[{key:'getMutation',value:function getMutation()












{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Ensayo_delete',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Ensayo_deleteInput!'},name:'Ensayo_deleteMutation',responseType:'Ensayo_deletePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{fieldName:'deletedEnsayoId',kind:'Field',metadata:{},type:'ID'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_deleteMutation_ValueRelayQL',type:'Ensayo_deletePayload'};}();







}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'NODE_DELETE',
parentName:'Viewer',
parentID:this.props.Viewer.id,
connectionName:'Ensayos',
deletedIDFieldName:'deletedEnsayoId'}];


}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.Ensayo.id};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
deletedEnsayoId:this.props.Ensayo.id};

}}]);return Ensayo_deleteMutation;}(_reactRelay2.default.Mutation);Ensayo_deleteMutation.fragments={Ensayo:function Ensayo(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_deleteMutation_EnsayoRelayQL',type:'Ensayo'};}();},Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_deleteMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=Ensayo_deleteMutation;
//# sourceMappingURL=Ensayo_deleteMutation.js.map