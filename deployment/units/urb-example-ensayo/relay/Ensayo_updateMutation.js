Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoUpdateMutation=function(_Relay$Mutation){_inherits(EnsayoUpdateMutation,_Relay$Mutation);function EnsayoUpdateMutation(){_classCallCheck(this,EnsayoUpdateMutation);return _possibleConstructorReturn(this,(EnsayoUpdateMutation.__proto__||Object.getPrototypeOf(EnsayoUpdateMutation)).apply(this,arguments));}_createClass(EnsayoUpdateMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'EnsayoUpdate',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'EnsayoUpdateInput!'},name:'EnsayoUpdateMutation',responseType:'EnsayoUpdatePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'Ensayo_Content',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Title',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Description',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Ensayo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Ensayo'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'EnsayoUpdateMutation_ValueRelayQL',type:'EnsayoUpdatePayload'};}();








}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'FIELDS_CHANGE',
fieldIDs:{
Ensayo:this.props.Ensayo.id}}];



}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.Ensayo.id,
Ensayo_Content:this.props.Ensayo_Content,
Ensayo_Title:this.props.Ensayo_Title,
Ensayo_Description:this.props.Ensayo_Description};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
Ensayo:{
id:this.props.Ensayo.id,
Ensayo_Content:this.props.Ensayo_Content,
Ensayo_Title:this.props.Ensayo_Title,
Ensayo_Description:this.props.Ensayo_Description}};


}}]);return EnsayoUpdateMutation;}(_reactRelay2.default.Mutation);EnsayoUpdateMutation.fragments={Ensayo:function Ensayo(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'EnsayoUpdateMutation_EnsayoRelayQL',type:'Ensayo'};}();}};exports.default=EnsayoUpdateMutation;
//# sourceMappingURL=EnsayoUpdateMutation.js.map