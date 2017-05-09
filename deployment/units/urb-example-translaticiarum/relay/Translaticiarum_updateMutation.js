Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Translaticiarum_updateMutation=function(_Relay$Mutation){_inherits(Translaticiarum_updateMutation,_Relay$Mutation);function Translaticiarum_updateMutation(){_classCallCheck(this,Translaticiarum_updateMutation);return _possibleConstructorReturn(this,(Translaticiarum_updateMutation.__proto__||Object.getPrototypeOf(Translaticiarum_updateMutation)).apply(this,arguments));}_createClass(Translaticiarum_updateMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Translaticiarum_update',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Translaticiarum_updateInput!'},name:'Translaticiarum_updateMutation',responseType:'Translaticiarum_updatePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'Translaticiarum_Type',kind:'Field',metadata:{},type:'Int'},{fieldName:'Translaticiarum_Date',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'Translaticiarum_Time',kind:'Field',metadata:{},type:'DateTime'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Translaticiarum',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Translaticiarum'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_updateMutation_ValueRelayQL',type:'Translaticiarum_updatePayload'};}();








}},{key:'getConfigs',value:function getConfigs()
{
return[{
type:'FIELDS_CHANGE',
fieldIDs:{
Translaticiarum:this.props.Translaticiarum.id}}];


}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.Translaticiarum.id,
Translaticiarum_Type:this.props.Translaticiarum_Type,
Translaticiarum_Date:this.props.Translaticiarum_Date,
Translaticiarum_Time:this.props.Translaticiarum_Time};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
Translaticiarum:{
id:this.props.Translaticiarum.id,
Translaticiarum_Type:this.props.Translaticiarum_Type,
Translaticiarum_Date:this.props.Translaticiarum_Date,
Translaticiarum_Time:this.props.Translaticiarum_Time}};


}}]);return Translaticiarum_updateMutation;}(_reactRelay2.default.Mutation);Translaticiarum_updateMutation.fragments={Translaticiarum:function Translaticiarum(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_updateMutation_TranslaticiarumRelayQL',type:'Translaticiarum'};}();}};exports.default=Translaticiarum_updateMutation;
//# sourceMappingURL=Translaticiarum_updateMutation.js.map