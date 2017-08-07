Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _bcrypt=require('bcrypt');var _bcrypt2=_interopRequireDefault(_bcrypt);
var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);

var _authExtensions=require('../_configuration/urb-base-server/authExtensions');var _authExtensions2=_interopRequireDefault(_authExtensions);
var _delayPromise=require('../urb-base-universal/delayPromise');var _delayPromise2=_interopRequireDefault(_delayPromise);
var _getNewUser=require('../_configuration/urb-base-server/graphql/model/getNewUser');var _getNewUser2=_interopRequireDefault(_getNewUser);
var _logServerRequest=require('./logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _ObjectManager=require('./graphql/ObjectManager');
var _requestLoggers=require('../_configuration/urb-base-server/requestLoggers');

var _validation=require('../urb-base-universal/validation');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var serverAuth=(0,_express2.default)();

serverAuth.use(_bodyParser2.default.json());
serverAuth.use(function(req,res,next){return(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerAuth);});



function login(req,res){var objectManager,User_AccountName,User_AccountPassword,arr_Users,a_User,token;return regeneratorRuntime.async(function login$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
(0,_ObjectManager.getObjectManager)(req,res));case 2:objectManager=_context.sent;if(!
objectManager.siteInformation){_context.next=32;break;}
User_AccountName=req.body.User_AccountName.toLowerCase();
User_AccountPassword=req.body.User_AccountPassword;_context.next=8;return regeneratorRuntime.awrap(

(0,_delayPromise2.default)(1000));case 8:_context.prev=8;_context.next=11;return regeneratorRuntime.awrap(


objectManager.getObjectList('User',{
User_AccountName:User_AccountName}));case 11:arr_Users=_context.sent;if(!(


arr_Users.length==0)){_context.next=16;break;}res.status(401).json({error:'💔  Incorrect user'});_context.next=27;break;case 16:

a_User=arr_Users[0];_context.next=19;return regeneratorRuntime.awrap(


new Promise(function(resolve){return(
_bcrypt2.default.compare(
User_AccountPassword,
a_User.User_AccountPassword,
function(err,passwordMatch){return resolve(passwordMatch);}));}));case 19:if(!_context.sent){_context.next=26;break;}



res.codeFoundriesInjected={user:a_User};


token=_jwtSimple2.default.encode({user_id:a_User.id},process.env.JWT_SECRET);

res.cookie('UserToken1',token,{httpOnly:true});
res.json({success:true,UserToken2:a_User.UserToken2});_context.next=27;break;case 26:
res.status(401).json({error:'💔  Incorrect password'});case 27:_context.next=32;break;case 29:_context.prev=29;_context.t0=_context['catch'](8);


res.status(401).json({error:_context.t0.message});case 32:case'end':return _context.stop();}}},null,this,[[8,29]]);}



serverAuth.post('/login',login);



function createuser(req,res){var objectManager,User_AccountName,User_AccountPassword,arr_Users,User_PasswordHash,accountNameIsValidEmail,User_Email,a_User,UserToken1;return regeneratorRuntime.async(function createuser$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
(0,_ObjectManager.getObjectManager)(req,res));case 2:objectManager=_context2.sent;if(!
objectManager.siteInformation){_context2.next=29;break;}
User_AccountName=req.body.User_AccountName.toLowerCase();
User_AccountPassword=req.body.User_AccountPassword;_context2.prev=6;_context2.next=9;return regeneratorRuntime.awrap(


objectManager.getObjectList('User',{
User_site_id:objectManager.siteInformation.site_id,
User_AccountName:User_AccountName}));case 9:arr_Users=_context2.sent;if(!(


arr_Users.length>0)){_context2.next=12;break;}throw new Error('💔  User account already exists');case 12:_context2.next=14;return regeneratorRuntime.awrap(

new Promise(function(resolve){return(
_bcrypt2.default.hash(User_AccountPassword,8,function(err,hash){return resolve(hash);}));}));case 14:User_PasswordHash=_context2.sent;



accountNameIsValidEmail=(0,_validation.validateEmail)(User_AccountName);
User_Email=accountNameIsValidEmail?User_AccountName:'';


a_User=_extends((0,_getNewUser2.default)(objectManager.siteInformation.site_id),{
UserToken2:
Math.random().toString(36).substring(2)+Math.random().toString(36).substring(2),
User_AccountName:User_AccountName,
User_AccountPassword:User_PasswordHash,
User_DisplayName:User_AccountName,
User_Email:User_Email});_context2.next=20;return regeneratorRuntime.awrap(



objectManager.add('User',a_User));case 20:

res.codeFoundriesInjected={user:a_User};


UserToken1=_jwtSimple2.default.encode({user_id:a_User.id},process.env.JWT_SECRET);


res.cookie('UserToken1',UserToken1,{httpOnly:true});
res.json({success:true});_context2.next=29;break;case 26:_context2.prev=26;_context2.t0=_context2['catch'](6);

res.status(401).json({error:''+_context2.t0.message});case 29:case'end':return _context2.stop();}}},null,this,[[6,26]]);}



serverAuth.post('/createuser',createuser);



serverAuth.post('/logout',function(req,res){
res.cookie('UserToken1','',{httpOnly:true,expires:new Date(1)});
res.json({success:true});
});


(0,_authExtensions2.default)(serverAuth);exports.default=

serverAuth;
//# sourceMappingURL=serverAuth.js.map