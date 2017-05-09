Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _CompendiumType=require('../type/CompendiumType');var _CompendiumType2=_interopRequireDefault(_CompendiumType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=


(0,_graphqlRelay.mutationWithClientMutationId)({
name:'Compendium_update',
inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
Compendium_FirstTextInput:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Compendium_RangedNumber:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLInt)},
Compendium_Excitement:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLInt)},
Compendium_FollowUpQuestion:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Compendium_FavoriteMammal:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLInt)},
Compendium_FavoriteMammalOtherText:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Compendium_LastText:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Compendium_LikedSunset_Ocean:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_Lake:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_Mountains:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_Plains:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_Purple:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_Green:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_Other:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)},
Compendium_LikedSunset_OtherText:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},

outputFields:{
Compendium:{
type:_CompendiumType2.default,
resolve:function resolve(_ref,_ref2,context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var objectManager=_ref3.rootValue;return objectManager.getOneObject('Compendium',{id:local_id});}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref4,
















context,_ref5){var id=_ref4.id,Compendium_FirstTextInput=_ref4.Compendium_FirstTextInput,Compendium_RangedNumber=_ref4.Compendium_RangedNumber,Compendium_Excitement=_ref4.Compendium_Excitement,Compendium_FollowUpQuestion=_ref4.Compendium_FollowUpQuestion,Compendium_FavoriteMammal=_ref4.Compendium_FavoriteMammal,Compendium_FavoriteMammalOtherText=_ref4.Compendium_FavoriteMammalOtherText,Compendium_LastText=_ref4.Compendium_LastText,Compendium_LikedSunset_Ocean=_ref4.Compendium_LikedSunset_Ocean,Compendium_LikedSunset_Lake=_ref4.Compendium_LikedSunset_Lake,Compendium_LikedSunset_Mountains=_ref4.Compendium_LikedSunset_Mountains,Compendium_LikedSunset_Plains=_ref4.Compendium_LikedSunset_Plains,Compendium_LikedSunset_Purple=_ref4.Compendium_LikedSunset_Purple,Compendium_LikedSunset_Green=_ref4.Compendium_LikedSunset_Green,Compendium_LikedSunset_Other=_ref4.Compendium_LikedSunset_Other,Compendium_LikedSunset_OtherText=_ref4.Compendium_LikedSunset_OtherText;var objectManager=_ref5.rootValue;
var local_id=(0,_graphqlRelay.fromGlobalId)(id).id;
return objectManager.update('Compendium',{
id:local_id,
Compendium_FirstTextInput:Compendium_FirstTextInput,
Compendium_RangedNumber:Compendium_RangedNumber,
Compendium_Excitement:Compendium_Excitement,
Compendium_FollowUpQuestion:Compendium_FollowUpQuestion,
Compendium_FavoriteMammal:Compendium_FavoriteMammal,
Compendium_FavoriteMammalOtherText:Compendium_FavoriteMammalOtherText,
Compendium_LastText:Compendium_LastText,
Compendium_LikedSunset_Ocean:Compendium_LikedSunset_Ocean,
Compendium_LikedSunset_Lake:Compendium_LikedSunset_Lake,
Compendium_LikedSunset_Mountains:Compendium_LikedSunset_Mountains,
Compendium_LikedSunset_Plains:Compendium_LikedSunset_Plains,
Compendium_LikedSunset_Purple:Compendium_LikedSunset_Purple,
Compendium_LikedSunset_Green:Compendium_LikedSunset_Green,
Compendium_LikedSunset_Other:Compendium_LikedSunset_Other,
Compendium_LikedSunset_OtherText:Compendium_LikedSunset_OtherText}).

then(function(){
return{local_id:local_id};
});

}});
//# sourceMappingURL=Compendium_update.js.map