Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('Compendium',{
fields:{
id:'uuid',
Compendium_User_id:'uuid',
Compendium_FirstTextInput:'text',
Compendium_RangedNumber:'int',
Compendium_Excitement:'int',
Compendium_FollowUpQuestion:'text',
Compendium_FavoriteMammal:'int',
Compendium_FavoriteMammalOtherText:'text',
Compendium_LastText:'text',
Compendium_LikedSunset_Ocean:'boolean',
Compendium_LikedSunset_Lake:'boolean',
Compendium_LikedSunset_Mountains:'boolean',
Compendium_LikedSunset_Plains:'boolean',
Compendium_LikedSunset_Purple:'boolean',
Compendium_LikedSunset_Green:'boolean',
Compendium_LikedSunset_Other:'boolean',
Compendium_LikedSunset_OtherText:'text'},

key:['id'],
indexes:['Compendium_User_id']});exports.default=


true;
//# sourceMappingURL=Compendium.schema.js.map