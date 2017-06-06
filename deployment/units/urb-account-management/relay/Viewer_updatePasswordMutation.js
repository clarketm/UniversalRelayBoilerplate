Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Viewer_updatePasswordMutation=function(_Relay$Mutation){_inherits(Viewer_updatePasswordMutation,_Relay$Mutation);function Viewer_updatePasswordMutation(){_classCallCheck(this,Viewer_updatePasswordMutation);return _possibleConstructorReturn(this,(Viewer_updatePasswordMutation.__proto__||Object.getPrototypeOf(Viewer_updatePasswordMutation)).apply(this,arguments));}_createClass(Viewer_updatePasswordMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Viewer_updatePassword',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Viewer_updatePasswordInput!'},name:'Viewer_updatePasswordMutation',responseType:'Viewer_updatePasswordPayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Viewer_updatePasswordMutation_ValueRelayQL',type:'Viewer_updatePasswordPayload'};}();






}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'REQUIRED_CHILDREN',
children:[function(){return{children:[{fieldName:'ErrorMessage',kind:'Field',metadata:{},type:'String'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Viewer_updatePasswordMutation_ChildrenRelayQL',type:'Viewer_updatePasswordPayload'};}()]}];








}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.Viewer.id,
User_AccountPassword_Current:this.props.User_AccountPassword_Current,
User_AccountPassword:this.props.User_AccountPassword};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
Viewer:{
id:this.props.Viewer.id}};


}}]);return Viewer_updatePasswordMutation;}(_reactRelay2.default.Mutation);Viewer_updatePasswordMutation.fragments={Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Viewer_updatePasswordMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=Viewer_updatePasswordMutation;
//# sourceMappingURL=Viewer_updatePasswordMutation.js.map