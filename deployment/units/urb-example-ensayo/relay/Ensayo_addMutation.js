Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoAddMutation=function(_Relay$Mutation){_inherits(EnsayoAddMutation,_Relay$Mutation);function EnsayoAddMutation(){_classCallCheck(this,EnsayoAddMutation);return _possibleConstructorReturn(this,(EnsayoAddMutation.__proto__||Object.getPrototypeOf(EnsayoAddMutation)).apply(this,arguments));}_createClass(EnsayoAddMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'EnsayoAdd',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'EnsayoAddInput!'},name:'EnsayoAddMutation',responseType:'EnsayoAddPayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isGenerated:true,isRequisite:true},type:'Ensayo'}],fieldName:'EnsayosEdge',kind:'Field',metadata:{canHaveSubselections:true},type:'EnsayosEdge'},{children:[{fieldName:'Ensayos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'EnsayosConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'EnsayoAddMutation_ValueRelayQL',type:'EnsayoAddPayload'};}();







}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'RANGE_ADD',
parentName:'Viewer',
parentID:this.props.Viewer.id,
connectionName:'Ensayos',
edgeName:'EnsayosEdge',
rangeBehaviors:{
'':'append'}}];



}},{key:'getVariables',value:function getVariables()
{
return{
Ensayo_Content:this.props.Ensayo_Content,
Ensayo_Title:this.props.Ensayo_Title,
Ensayo_Description:this.props.Ensayo_Description};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
EnsayosEdge:{
node:{
Ensayo_Content:this.props.Ensayo_Content,
Ensayo_Title:this.props.Ensayo_Title,
Ensayo_Description:this.props.Ensayo_Description}},


Viewer:{
id:this.props.Viewer.id}};


}}]);return EnsayoAddMutation;}(_reactRelay2.default.Mutation);EnsayoAddMutation.fragments={Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'EnsayoAddMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=EnsayoAddMutation;
//# sourceMappingURL=EnsayoAddMutation.js.map