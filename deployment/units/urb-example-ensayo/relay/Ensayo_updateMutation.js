Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Ensayo_updateMutation=function(_Relay$Mutation){_inherits(Ensayo_updateMutation,_Relay$Mutation);function Ensayo_updateMutation(){_classCallCheck(this,Ensayo_updateMutation);return _possibleConstructorReturn(this,(Ensayo_updateMutation.__proto__||Object.getPrototypeOf(Ensayo_updateMutation)).apply(this,arguments));}_createClass(Ensayo_updateMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Ensayo_update',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Ensayo_updateInput!'},name:'Ensayo_updateMutation',responseType:'Ensayo_updatePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'Ensayo_Content',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Title',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Description',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Ensayo',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Ensayo'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_updateMutation_ValueRelayQL',type:'Ensayo_updatePayload'};}();








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


}}]);return Ensayo_updateMutation;}(_reactRelay2.default.Mutation);Ensayo_updateMutation.fragments={Ensayo:function Ensayo(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_updateMutation_EnsayoRelayQL',type:'Ensayo'};}();}};exports.default=Ensayo_updateMutation;
//# sourceMappingURL=Ensayo_updateMutation.js.map