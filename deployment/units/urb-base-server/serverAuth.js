Object.defineProperty(exports,"__esModule",{value:true});var _this=this;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _bcryptjs=require('bcryptjs');var _bcryptjs2=_interopRequireDefault(_bcryptjs);
var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);

var _authExtensions=require('../_configuration/urb-base-server/authExtensions');var _authExtensions2=_interopRequireDefault(_authExtensions);
var _delayPromise=require('../urb-base-universal/delayPromise');var _delayPromise2=_interopRequireDefault(_delayPromise);
var _getNewUser=require('../_configuration/urb-base-server/graphql/model/getNewUser');var _getNewUser2=_interopRequireDefault(_getNewUser);
var _validation=require('../urb-base-universal/validation');
var _requestLoggers=require('../_configuration/urb-base-server/requestLoggers');

var _checkCredentials=require('./checkCredentials');
var _logServerRequest=require('./logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _ObjectManager=require('./graphql/ObjectManager');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var serverAuth=(0,_express2.default)();

serverAuth.use(_bodyParser2.default.json());
serverAuth.use(function(req,res,next){return(
(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerAuth));});




function login(req,res){var objectManager,UserAccount_Identifier,User_Secret,arr_UserAccount,a_User,a_UserSession,UserToken1;return regeneratorRuntime.async(function login$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
(0,_ObjectManager.getObjectManager)(req,res));case 2:objectManager=_context.sent;if(!
objectManager.siteInformation){_context.next=36;break;}
UserAccount_Identifier=req.body.UserAccount_Identifier.toLowerCase();
User_Secret=req.body.User_Secret;_context.next=8;return regeneratorRuntime.awrap(

(0,_delayPromise2.default)(1000));case 8:_context.prev=8;_context.next=11;return regeneratorRuntime.awrap(


objectManager.getObjectList('UserAccount',{
UserAccount_site_id:objectManager.siteInformation.site_id,
UserAccount_Identifier:UserAccount_Identifier}));case 11:arr_UserAccount=_context.sent;if(!(


arr_UserAccount.length===0)){_context.next=16;break;}
res.status(401).json({error:'💔  User account not found'});_context.next=31;break;case 16:_context.next=18;return regeneratorRuntime.awrap(

objectManager.getOneObject('User',{
id:arr_UserAccount[0].UserAccount_User_id}));case 18:a_User=_context.sent;_context.next=21;return regeneratorRuntime.awrap(



new Promise(function(resolve){return(
_bcryptjs2.default.compare(
User_Secret,
a_User.User_Secret,
function(err,passwordMatch){return resolve(passwordMatch);}));}));case 21:if(!_context.sent){_context.next=30;break;}




a_UserSession={
UserSession_site_id:objectManager.siteInformation.site_id,
UserSession_User_id:a_User.id,
UserSession_Start:new Date(),
UserSession_Expired:false};



objectManager.add('UserSession',a_UserSession);

res.codeFoundriesInjected={user:a_User};


UserToken1=_jwtSimple2.default.encode(

{session_id:a_UserSession.id},
process.env.JWT_SECRET);


res.cookie('UserToken1',UserToken1,{httpOnly:true});
res.json({success:true,UserToken2:a_User.UserToken2});_context.next=31;break;case 30:
res.status(401).json({error:'💔  Incorrect password'});case 31:_context.next=36;break;case 33:_context.prev=33;_context.t0=_context['catch'](8);


res.status(401).json({error:_context.t0.message});case 36:case'end':return _context.stop();}}},null,this,[[8,33]]);}



serverAuth.post('/login',login);



function createuser(req,res){var objectManager,UserAccount_Identifier,User_Secret,arr_UserAccount,User_PasswordHash,accountNameIsValidEmail,User_Email,a_User,a_UserSession,a_UserAccount,UserToken1;return regeneratorRuntime.async(function createuser$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
(0,_ObjectManager.getObjectManager)(req,res));case 2:objectManager=_context2.sent;if(!
objectManager.siteInformation){_context2.next=32;break;}
UserAccount_Identifier=req.body.UserAccount_Identifier.toLowerCase();
User_Secret=req.body.User_Secret;_context2.prev=6;_context2.next=9;return regeneratorRuntime.awrap(


objectManager.getObjectList('UserAccount',{
UserAccount_site_id:objectManager.siteInformation.site_id,
UserAccount_Identifier:UserAccount_Identifier}));case 9:arr_UserAccount=_context2.sent;if(!(


arr_UserAccount.length>0)){_context2.next=12;break;}throw(
new Error('💔  User account already exists'));case 12:_context2.next=14;return regeneratorRuntime.awrap(

new Promise(function(resolve){return(
_bcryptjs2.default.hash(User_Secret,8,function(err,hash){return resolve(hash);}));}));case 14:User_PasswordHash=_context2.sent;



accountNameIsValidEmail=(0,_validation.validateEmail)(UserAccount_Identifier);
User_Email=accountNameIsValidEmail?UserAccount_Identifier:'';


a_User=_extends(
(0,_getNewUser2.default)(objectManager.siteInformation.site_id),
{
User_site_id:objectManager.siteInformation.site_id,
UserToken2:
Math.random().
toString(36).
substring(2)+
Math.random().
toString(36).
substring(2),
User_Secret:User_PasswordHash,
User_DisplayName:UserAccount_Identifier,
User_Email:User_Email});


objectManager.assignPrimaryKey('User',a_User);


a_UserSession={
UserSession_site_id:objectManager.siteInformation.site_id,
UserSession_User_id:a_User.id,
UserSession_Start:new Date(),
UserSession_Expired:false};



a_UserAccount={
UserAccount_site_id:objectManager.siteInformation.site_id,
UserAccount_User_id:a_User.id,
UserAccount_Identifier:UserAccount_Identifier,
UserAccount_Type:'un'};_context2.next=23;return regeneratorRuntime.awrap(



Promise.all([
objectManager.add('User',a_User),
objectManager.add('UserSession',a_UserSession),
objectManager.add('UserAccount',a_UserAccount)]));case 23:


res.codeFoundriesInjected={user:a_User};


UserToken1=_jwtSimple2.default.encode(

{session_id:a_UserSession.id},
process.env.JWT_SECRET);



res.cookie('UserToken1',UserToken1,{httpOnly:true});
res.json({success:true});_context2.next=32;break;case 29:_context2.prev=29;_context2.t0=_context2['catch'](6);

res.status(401).json({error:''+_context2.t0.message});case 32:case'end':return _context2.stop();}}},null,this,[[6,29]]);}



serverAuth.post('/createuser',createuser);



serverAuth.post('/logout',function _callee(req,res){var objectManager,UserSession;return regeneratorRuntime.async(function _callee$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(
(0,_ObjectManager.getObjectManager)(req,res));case 2:objectManager=_context3.sent;_context3.next=5;return regeneratorRuntime.awrap(
(0,_checkCredentials.getUserAndSessionIDByUserToken1)(
objectManager,
req));case 5:UserSession=_context3.sent.
UserSession;_context3.next=8;return regeneratorRuntime.awrap(

objectManager.remove('UserSession',{id:UserSession.id}));case 8:

res.cookie('UserToken1','',{httpOnly:true,expires:new Date(1)});
res.json({success:true});case 10:case'end':return _context3.stop();}}},null,_this);});



(0,_authExtensions2.default)(serverAuth);exports.default=

serverAuth;
//# sourceMappingURL=serverAuth.js.map