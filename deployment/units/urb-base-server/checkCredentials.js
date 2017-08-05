Object.defineProperty(exports,"__esModule",{value:true});exports.
























getUserByUserToken1=getUserByUserToken1;exports.

















verifyUserAuthToken=verifyUserAuthToken;exports.




















serveAuthenticationFailed=serveAuthenticationFailed;var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);var _path=require('path');var _path2=_interopRequireDefault(_path);var _defaultPersister=require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);var _log=require('./log');var _log2=_interopRequireDefault(_log);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();function get_user_id(req){var UserToken1=req.cookies.UserToken1||req.headers.usertoken1;if(UserToken1)try{if(UserToken1.length>10){var decoded=_jwtSimple2.default.decode(UserToken1,process.env.JWT_SECRET);return _defaultPersister2.default.uuidFromString(decoded.user_id);}}catch(err){return Promise.reject('💔  Could not read auth cookie. '+err);}return _defaultPersister2.default.uuidNull();}function getUserByUserToken1(objectManager,req){var user_id,a_User;return regeneratorRuntime.async(function getUserByUserToken1$(_context){while(1){switch(_context.prev=_context.next){case 0:user_id=get_user_id(req);_context.next=3;return regeneratorRuntime.awrap(objectManager.getOneObject('User',{id:user_id,User_site_id:objectManager.siteInformation.site_id}));case 3:a_User=_context.sent;console.log(a_User);if(!a_User){_context.next=10;break;}objectManager.setViewerUserId(user_id);return _context.abrupt('return',a_User);case 10:throw'💔  User not found';case 11:case'end':return _context.stop();}}},null,this);}function verifyUserAuthToken(a_User,req){if(!a_User)return Promise.reject('💔  User not found');else{var request_UserToken2=req.get('UserToken2');if(request_UserToken2==a_User.UserToken2||process.env.USER_TOKEN_2_BYPASS_IP==req.ip)return Promise.resolve(a_User.id);else return Promise.reject('💔  Authentication token expected: '+a_User.UserToken2+', provided:'+request_UserToken2);}}var httpError403FileName=_path2.default.resolve(__dirname,'../_configuration/urb-base-server/httpError/403.html');function serveAuthenticationFailed(req,res,error,respondWithJSON){

var ip=req.headers['x-real-ip']||req.connection.remoteAddress;

var requestDetails={
headers:req.headers,
cookies:req.cookies,
ip:ip,
query:req.body};


_log2.default.log('warn','Checking credentials failed',{error:error,requestDetails:requestDetails});


res.cookie('UserToken1','',{httpOnly:true,expires:new Date(1)});

if(respondWithJSON)res.status(403).send('{ "error": "💔  Authentication Failed" }');else
res.status(403).sendFile(httpError403FileName);
}
//# sourceMappingURL=checkCredentials.js.map