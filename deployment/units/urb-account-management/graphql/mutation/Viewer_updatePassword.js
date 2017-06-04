Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _bcrypt=require('bcrypt');var _bcrypt2=_interopRequireDefault(_bcrypt);
var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _ViewerType=require('../../../../graphql/type/ViewerType');var _ViewerType2=_interopRequireDefault(_ViewerType);
var _delayPromise=require('../../../../scripts/delayPromise');var _delayPromise2=_interopRequireDefault(_delayPromise);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=


(0,_graphqlRelay.mutationWithClientMutationId)({
name:'Viewer_updatePassword',
inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
User_AccountPassword_Current:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
User_AccountPassword:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},

outputFields:{
Viewer:{
type:_ViewerType2.default,
resolve:function resolve(parent,args,context,_ref){var objectManager=_ref.rootValue;return objectManager.getOneObject('User',{id:objectManager.getViewerUserId()});}},

ErrorMessage:{type:_graphql.GraphQLString,resolve:function resolve(parent){return parent.ErrorMessage;}}},

mutateAndGetPayload:function mutateAndGetPayload(_ref2,



context,_ref3){var id=_ref2.id,User_AccountPassword_Current=_ref2.User_AccountPassword_Current,User_AccountPassword=_ref2.User_AccountPassword;var objectManager=_ref3.rootValue;var local_id,a_User,ErrorMessage,newHash;return regeneratorRuntime.async(function mutateAndGetPayload$(_context){while(1){switch(_context.prev=_context.next){case 0:


local_id=objectManager.getViewerUserId();_context.next=3;return regeneratorRuntime.awrap(

(0,_delayPromise2.default)(1000));case 3:_context.next=5;return regeneratorRuntime.awrap(

objectManager.getOneObject('User',{
id:local_id}));case 5:a_User=_context.sent;


ErrorMessage="";_context.next=9;return regeneratorRuntime.awrap(
promiseBcryptCompare(User_AccountPassword_Current,a_User.User_AccountPassword));case 9:if(!_context.sent){_context.next=17;break;}_context.next=12;return regeneratorRuntime.awrap(
promiseBcryptHash(User_AccountPassword));case 12:newHash=_context.sent;_context.next=15;return regeneratorRuntime.awrap(
objectManager.update('User',{
id:local_id,
User_AccountPassword:newHash}));case 15:_context.next=18;break;case 17:


ErrorMessage="Incorrect current password";case 18:return _context.abrupt('return',

{ErrorMessage:ErrorMessage});case 19:case'end':return _context.stop();}}},null,_this);}});



function promiseBcryptCompare(pass1,pass2){
return new Promise(function(resolve,reject){return _bcrypt2.default.compare(pass1,pass2,
function(err,passwordsMatch){
if(err)
reject(err);else

resolve(passwordsMatch);
});});
}

function promiseBcryptHash(pass){
return new Promise(function(resolve,reject){return _bcrypt2.default.hash(pass,8,
function(err,hash){
if(err)
reject(err);else

resolve(hash);
});});
}
//# sourceMappingURL=Viewer_updatePassword.js.map