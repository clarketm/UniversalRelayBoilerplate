Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Translaticiarum_addMutation=function(_Relay$Mutation){_inherits(Translaticiarum_addMutation,_Relay$Mutation);function Translaticiarum_addMutation(){_classCallCheck(this,Translaticiarum_addMutation);return _possibleConstructorReturn(this,(Translaticiarum_addMutation.__proto__||Object.getPrototypeOf(Translaticiarum_addMutation)).apply(this,arguments));}_createClass(Translaticiarum_addMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Translaticiarum_add',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Translaticiarum_addInput!'},name:'Translaticiarum_addMutation',responseType:'Translaticiarum_addPayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'},{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isGenerated:true,isRequisite:true},type:'Translaticiarum'}],fieldName:'TranslaticiarumsEdge',kind:'Field',metadata:{canHaveSubselections:true},type:'TranslaticiarumsEdge'},{children:[{fieldName:'Translaticiarums',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'TranslaticiarumsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Viewer'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_addMutation_ValueRelayQL',type:'Translaticiarum_addPayload'};}();







}},{key:'getConfigs',value:function getConfigs()
{
return[{
type:'RANGE_ADD',
parentName:'Viewer',
parentID:this.props.Viewer.id,
connectionName:'Translaticiarums',
edgeName:'TranslaticiarumsEdge',
rangeBehaviors:{
'':'append'}}];


}},{key:'getVariables',value:function getVariables()
{
return{
Translaticiarum_Type:this.props.Translaticiarum_Type,
Translaticiarum_Date:this.props.Translaticiarum_Date,
Translaticiarum_Time:this.props.Translaticiarum_Time};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
TranslaticiarumsEdge:{
node:{
Translaticiarum_Type:this.props.Translaticiarum_Type,
Translaticiarum_Date:this.props.Translaticiarum_Date,
Translaticiarum_Time:this.props.Translaticiarum_Time}},


Viewer:{
id:this.props.Viewer.id}};


}}]);return Translaticiarum_addMutation;}(_reactRelay2.default.Mutation);Translaticiarum_addMutation.fragments={Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_addMutation_ViewerRelayQL',type:'Viewer'};}();}};exports.default=Translaticiarum_addMutation;
//# sourceMappingURL=Translaticiarum_addMutation.js.map