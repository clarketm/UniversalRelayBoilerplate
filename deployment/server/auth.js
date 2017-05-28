Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _bcryptjs=require('bcryptjs');var _bcryptjs2=_interopRequireDefault(_bcryptjs);
var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);

var _authExtensions=require('../configuration/server/authExtensions');var _authExtensions2=_interopRequireDefault(_authExtensions);
var _delayPromise=require('../scripts/delayPromise');var _delayPromise2=_interopRequireDefault(_delayPromise);
var _getNewUser=require('../configuration/graphql/model/getNewUser');var _getNewUser2=_interopRequireDefault(_getNewUser);
var _logServerRequest=require('./logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _ObjectManager=require('../graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);
var _requestLoggers=require('../configuration/server/requestLoggers');
var _validation=require('../scripts/validation');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



require('dotenv').load();


var auth=(0,_express2.default)();

auth.use(_bodyParser2.default.json());
auth.use(function(req,res,next){return(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerAuth);});

auth.post('/login',function(req,res){

var objectManager=new _ObjectManager2.default();

var User_AccountName=req.body.User_AccountName.toLowerCase();
var User_AccountPassword=req.body.User_AccountPassword;

(0,_delayPromise2.default)(1000).
then(function(){return objectManager.getObjectList('User',{User_AccountName:User_AccountName});}).
then(function(arr_Users){
if(arr_Users.length==0)
res.status(401).json({error:'Incorrect user'});else
{
var a_User=arr_Users[0];

_bcryptjs2.default.compare(User_AccountPassword,a_User.User_AccountPassword,function(err,User_AccountPasswordIsCorrect){
if(User_AccountPasswordIsCorrect){
res.codeFoundriesInjected={user:a_User};


var token=_jwtSimple2.default.encode({user_id:a_User.id},process.env.JWT_SECRET);

res.cookie('UserToken1',token,{httpOnly:true});
res.json({success:true,UserToken2:a_User.UserToken2});
}else
res.status(401).json({error:'Incorrect password'});
});
}
}).
catch(function(reason){res.status(401).json({error:reason});});
});

auth.post('/createuser',function(req,res){
var objectManager=new _ObjectManager2.default();

var User_AccountName=req.body.User_AccountName.toLowerCase();
var User_AccountPassword=req.body.User_AccountPassword;
objectManager.getObjectList('User',{
User_AccountName:User_AccountName}).

then(function(arr_Users){
if(arr_Users.length>0)
return Promise.reject("User account already exists");else

return new Promise(function(resolve){_bcryptjs2.default.hash(User_AccountPassword,8,function(err,User_AccountPassword){return resolve(User_AccountPassword);});}).
then(function(User_AccountPassword){

var accountNameIsValidEmail=(0,_validation.validateEmail)(User_AccountName);
var User_Email=accountNameIsValidEmail?User_AccountName:'';

var a_User=_extends((0,_getNewUser2.default)(),{
UserToken2:Math.random().toString(36).substring(2)+Math.random().toString(36).substring(2),
User_AccountName:User_AccountName,
User_AccountPassword:User_AccountPassword,
User_DisplayName:User_AccountName,
User_Email:User_Email});

return objectManager.add('User',a_User);
});
}).
then(function(user_id){return objectManager.getOneObject('User',{id:user_id});}).
then(function(a_User){
res.codeFoundriesInjected={user:a_User};


var token=_jwtSimple2.default.encode({user_id:a_User.id},process.env.JWT_SECRET);

res.cookie('UserToken1',token,{httpOnly:true});
res.json({success:true});
}).
catch(function(reason){res.status(401).json({error:""+reason});});
});

auth.post('/logout',function(req,res){
res.cookie('UserToken1','',{httpOnly:true,expires:new Date(1)});
res.json({success:true});
});



(0,_authExtensions2.default)(auth);exports.default=


auth;
//# sourceMappingURL=auth.js.map