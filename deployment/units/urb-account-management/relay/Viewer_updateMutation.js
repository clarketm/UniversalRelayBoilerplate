Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Viewer_updateMutation=function(_Relay$Mutation){_inherits(Viewer_updateMutation,_Relay$Mutation);function Viewer_updateMutation(){_classCallCheck(this,Viewer_updateMutation);return _possibleConstructorReturn(this,(Viewer_updateMutation.__proto__||Object.getPrototypeOf(Viewer_updateMutation)).apply(this,arguments));}_createClass(Viewer_updateMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Viewer_update',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Viewer_updateInput!'},name:'Viewer_updateMutation',responseType:'Viewer_updatePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'User_DisplayName',kind:'Field',metadata:{},type:'String'},{fieldName:'User_Email',kind:'Field',metadata:{},type:'String'},{fieldName:'User_PhoneNumberMobile',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Viewer_updateMutation_ValueRelayQL',type:'Viewer_updatePayload'};}();








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
id:this.props.Viewer.id,
User_DisplayName:this.props.User_DisplayName,
User_Email:this.props.User_Email,
User_PhoneNumberMobile:this.props.User_PhoneNumberMobile};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
Viewer:{
id:this.props.Viewer.id,
User_DisplayName:this.props.User_DisplayName,
User_Email:this.props.User_Email,
User_PhoneNumberMobile:this.props.User_PhoneNumberMobile}};


}}]);return Viewer_updateMutation;}(_reactRelay2.default.Mutation);Viewer_updateMutation.fragments={Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Viewer_updateMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=Viewer_updateMutation;
//# sourceMappingURL=Viewer_updateMutation.js.map