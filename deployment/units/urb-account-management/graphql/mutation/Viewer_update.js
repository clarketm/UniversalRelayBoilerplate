Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ViewerType=require('../../../../graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


(0,_graphqlRelay.mutationWithClientMutationId)({
name:'Viewer_update',
inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
User_DisplayName:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
User_Email:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
User_PhoneNumberMobile:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},

outputFields:{
Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref){var objectManager=_ref.rootValue;return objectManager.getOneObject('User',{id:objectManager.getViewerUserId()});}}},


mutateAndGetPayload:function mutateAndGetPayload(_ref2,




context,_ref3){var id=_ref2.id,User_DisplayName=_ref2.User_DisplayName,User_Email=_ref2.User_Email,User_PhoneNumberMobile=_ref2.User_PhoneNumberMobile;var objectManager=_ref3.rootValue;var local_id;return regeneratorRuntime.async(function mutateAndGetPayload$(_context){while(1){switch(_context.prev=_context.next){case 0:


local_id=objectManager.getViewerUserId();_context.next=3;return regeneratorRuntime.awrap(

objectManager.update('User',{
id:local_id,
User_DisplayName:User_DisplayName,
User_PhoneNumberMobile:User_PhoneNumberMobile,
User_Email:User_Email}));case 3:return _context.abrupt('return',


{local_id:local_id});case 4:case'end':return _context.stop();}}},null,_this);}});
//# sourceMappingURL=Viewer_update.js.map