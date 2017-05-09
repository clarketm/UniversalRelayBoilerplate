Object.defineProperty(exports,"__esModule",{value:true});exports.default=

Compendium_getListOrCreate;var _Compendium=require('../model/Compendium');var _Compendium2=_interopRequireDefault(_Compendium);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function Compendium_getListOrCreate(objectManager)
{
return objectManager.getObjectList('Compendium',{Compendium_User_id:objectManager.getViewerUserId()}).
then(function(arr){
if(arr.length>0)
return arr;else

{
var compendium=new _Compendium2.default({
Compendium_User_id:objectManager.getViewerUserId(),
Compendium_FirstTextInput:"",
Compendium_RangedNumber:0,
Compendium_Excitement:0,
Compendium_FollowUpQuestion:"",
Compendium_FavoriteMammal:0,
Compendium_FavoriteMammalOtherText:"",
Compendium_LastText:"",
Compendium_LikedSunset_Ocean:false,
Compendium_LikedSunset_Lake:false,
Compendium_LikedSunset_Mountains:false,
Compendium_LikedSunset_Plains:false,
Compendium_LikedSunset_Purple:false,
Compendium_LikedSunset_Green:false,
Compendium_LikedSunset_Other:false,
Compendium_LikedSunset_OtherText:""});


return objectManager.add('Compendium',compendium).
then(function(local_id){
compendium.id=local_id;
return[compendium];
});
}
});

}
//# sourceMappingURL=Compendium_getListOrCreate.js.map