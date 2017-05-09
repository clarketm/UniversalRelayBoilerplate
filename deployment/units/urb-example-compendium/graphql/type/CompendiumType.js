Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _NodeInterface=require('../../../../graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);

var _Compendium=require('../model/Compendium');var _Compendium2=_interopRequireDefault(_Compendium);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


new _graphql.GraphQLObjectType({
name:'Compendium',
interfaces:[_NodeInterface2.default],
isTypeOf:function isTypeOf(object){return object instanceof _Compendium2.default;},
fields:{
id:(0,_graphqlRelay.globalIdField)('Compendium'),
Compendium_FirstTextInput:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Compendium_FirstTextInput;}},
Compendium_RangedNumber:{type:_graphql.GraphQLInt,resolve:function resolve(obj){return obj.Compendium_RangedNumber;}},
Compendium_Excitement:{type:_graphql.GraphQLInt,resolve:function resolve(obj){return obj.Compendium_Excitement;}},
Compendium_FollowUpQuestion:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Compendium_FollowUpQuestion;}},
Compendium_FavoriteMammal:{type:_graphql.GraphQLInt,resolve:function resolve(obj){return obj.Compendium_FavoriteMammal;}},
Compendium_FavoriteMammalOtherText:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Compendium_FavoriteMammalOtherText;}},
Compendium_LastText:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Compendium_LastText;}},
Compendium_LikedSunset_Ocean:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Ocean;}},
Compendium_LikedSunset_Lake:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Lake;}},
Compendium_LikedSunset_Mountains:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Mountains;}},
Compendium_LikedSunset_Plains:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Plains;}},
Compendium_LikedSunset_Purple:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Purple;}},
Compendium_LikedSunset_Green:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Green;}},
Compendium_LikedSunset_Other:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.Compendium_LikedSunset_Other;}},
Compendium_LikedSunset_OtherText:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Compendium_LikedSunset_OtherText;}}}});
//# sourceMappingURL=CompendiumType.js.map