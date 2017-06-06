Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Compendium_updateMutation=function(_Relay$Mutation){_inherits(Compendium_updateMutation,_Relay$Mutation);function Compendium_updateMutation(){_classCallCheck(this,Compendium_updateMutation);return _possibleConstructorReturn(this,(Compendium_updateMutation.__proto__||Object.getPrototypeOf(Compendium_updateMutation)).apply(this,arguments));}_createClass(Compendium_updateMutation,[{key:'getMutation',value:function getMutation()







{
return function(){return{calls:[{kind:'Call',metadata:{},name:'Compendium_update',value:{kind:'CallVariable',callVariableName:'input'}}],children:[{fieldName:'clientMutationId',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],kind:'Mutation',metadata:{inputType:'Compendium_updateInput!'},name:'Compendium_updateMutation',responseType:'Compendium_updatePayload'};}();
}},{key:'getFatQuery',value:function getFatQuery()
{
return function(){return{children:[{children:[{fieldName:'Compendium_FirstTextInput',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_RangedNumber',kind:'Field',metadata:{},type:'Int'},{fieldName:'Compendium_Excitement',kind:'Field',metadata:{},type:'Int'},{fieldName:'Compendium_FollowUpQuestion',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_FavoriteMammal',kind:'Field',metadata:{},type:'Int'},{fieldName:'Compendium_FavoriteMammalOtherText',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_LastText',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_LikedSunset_Ocean',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Lake',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Mountains',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Plains',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Purple',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Green',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Other',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_OtherText',kind:'Field',metadata:{},type:'String'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Compendium',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id'},type:'Compendium'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Compendium_updateMutation_ValueRelayQL',type:'Compendium_updatePayload'};}();




















}},{key:'getConfigs',value:function getConfigs()
{
return[
{
type:'FIELDS_CHANGE',
fieldIDs:{
Compendium:this.props.Compendium.id}}];



}},{key:'getVariables',value:function getVariables()
{
return{
id:this.props.Compendium.id,
Compendium_FirstTextInput:this.props.Compendium_FirstTextInput,
Compendium_RangedNumber:this.props.Compendium_RangedNumber,
Compendium_Excitement:this.props.Compendium_Excitement,
Compendium_FollowUpQuestion:this.props.Compendium_FollowUpQuestion,
Compendium_FavoriteMammal:this.props.Compendium_FavoriteMammal,
Compendium_FavoriteMammalOtherText:this.props.Compendium_FavoriteMammalOtherText,
Compendium_LastText:this.props.Compendium_LastText,
Compendium_LikedSunset_Ocean:this.props.Compendium_LikedSunset_Ocean,
Compendium_LikedSunset_Lake:this.props.Compendium_LikedSunset_Lake,
Compendium_LikedSunset_Mountains:this.props.Compendium_LikedSunset_Mountains,
Compendium_LikedSunset_Plains:this.props.Compendium_LikedSunset_Plains,
Compendium_LikedSunset_Purple:this.props.Compendium_LikedSunset_Purple,
Compendium_LikedSunset_Green:this.props.Compendium_LikedSunset_Green,
Compendium_LikedSunset_Other:this.props.Compendium_LikedSunset_Other,
Compendium_LikedSunset_OtherText:this.props.Compendium_LikedSunset_OtherText};

}},{key:'getOptimisticResponse',value:function getOptimisticResponse()
{
return{
Compendium:{
id:this.props.Compendium.id,
Compendium_FirstTextInput:this.props.Compendium_FirstTextInput,
Compendium_RangedNumber:this.props.Compendium_RangedNumber,
Compendium_Excitement:this.props.Compendium_Excitement,
Compendium_FollowUpQuestion:this.props.Compendium_FollowUpQuestion,
Compendium_FavoriteMammal:this.props.Compendium_FavoriteMammal,
Compendium_FavoriteMammalOtherText:this.props.Compendium_FavoriteMammalOtherText,
Compendium_LastText:this.props.Compendium_LastText,
Compendium_LikedSunset_Ocean:this.props.Compendium_LikedSunset_Ocean,
Compendium_LikedSunset_Lake:this.props.Compendium_LikedSunset_Lake,
Compendium_LikedSunset_Mountains:this.props.Compendium_LikedSunset_Mountains,
Compendium_LikedSunset_Plains:this.props.Compendium_LikedSunset_Plains,
Compendium_LikedSunset_Purple:this.props.Compendium_LikedSunset_Purple,
Compendium_LikedSunset_Green:this.props.Compendium_LikedSunset_Green,
Compendium_LikedSunset_Other:this.props.Compendium_LikedSunset_Other,
Compendium_LikedSunset_OtherText:this.props.Compendium_LikedSunset_OtherText}};


}}]);return Compendium_updateMutation;}(_reactRelay2.default.Mutation);Compendium_updateMutation.fragments={Compendium:function Compendium(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Compendium_updateMutation_CompendiumRelayQL',type:'Compendium'};}();}};exports.default=Compendium_updateMutation;
//# sourceMappingURL=Compendium_updateMutation.js.map