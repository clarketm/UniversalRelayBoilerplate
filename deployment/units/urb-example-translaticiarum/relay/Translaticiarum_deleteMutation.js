Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Translaticiarum_deleteMutation=function(_Relay$Mutation){_inherits(Translaticiarum_deleteMutation,_Relay$Mutation);function Translaticiarum_deleteMutation(){_classCallCheck(this,Translaticiarum_deleteMutation);return _possibleConstructorReturn(this,(Translaticiarum_deleteMutation.__proto__||Object.getPrototypeOf(Translaticiarum_deleteMutation)).apply(this,arguments));}_createClass(Translaticiarum_deleteMutation,[{key:'getMutation',value:function getMutation()












{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Translaticiarum_delete',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Translaticiarum_deleteInput!'},name:'Translaticiarum_deleteMutation',responseType:'Translaticiarum_deletePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{fieldName:'deletedTranslaticiarumId',kind:'Field',metadata:{},type:'ID'},{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_deleteMutation_ValueRelayQL',type:'Translaticiarum_deletePayload'};}();







}},{key:'getConfigs',value:function getConfigs()
{
return[{
type:'NODE_DELETE',
parentName:'Viewer',
parentID:this.props.Viewer.id,
connectionName:'Translaticiarums',
deletedIDFieldName:'deletedTranslaticiarumId'}];

}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.Translaticiarum.id};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
deletedTranslaticiarumId:this.props.Translaticiarum.id};

}}]);return Translaticiarum_deleteMutation;}(_reactRelay2.default.Mutation);Translaticiarum_deleteMutation.fragments={Translaticiarum:function Translaticiarum(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_deleteMutation_TranslaticiarumRelayQL',type:'Translaticiarum'};}();},Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_deleteMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=Translaticiarum_deleteMutation;
//# sourceMappingURL=Translaticiarum_deleteMutation.js.map