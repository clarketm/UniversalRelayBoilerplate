Object.defineProperty(exports,"__esModule",{value:true});exports.




























getUserAndSessionIDByUserToken1=getUserAndSessionIDByUserToken1;exports.




























verifyUserAuthToken=verifyUserAuthToken;exports.



























serveAuthenticationFailed=serveAuthenticationFailed;var _path=require('path');var _path2=_interopRequireDefault(_path);var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);var _defaultPersister=require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);var _UserToken2ServerRendering=require('../_configuration/urb-base-server/UserToken2ServerRendering');var _UserToken2ServerRendering2=_interopRequireDefault(_UserToken2ServerRendering);var _log=require('./log');var _log2=_interopRequireDefault(_log);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();function getSessionIdFromRequest(req){var UserToken1=req.cookies.UserToken1||req.headers.usertoken1;if(UserToken1)try{if(UserToken1.length>10){var decoded=_jwtSimple2.default.decode(UserToken1,process.env.JWT_SECRET);return _defaultPersister2.default.uuidFromString(decoded.session_id);}}catch(err){throw new Error('💔  Session cookie is invalid. Please log in again.');}return null;}function getUserAndSessionIDByUserToken1(objectManager,req){var user_id,session_id,a_UserSession,a_User;return regeneratorRuntime.async(function getUserAndSessionIDByUserToken1$(_context){while(1){switch(_context.prev=_context.next){case 0:user_id=void 0;session_id=getSessionIdFromRequest(req);a_UserSession=null;if(!session_id){_context.next=10;break;}_context.next=6;return regeneratorRuntime.awrap(objectManager.getOneObject('UserSession',{id:session_id,UserSession_site_id:objectManager.siteInformation.site_id}));case 6:a_UserSession=_context.sent;user_id=a_UserSession.UserSession_User_id;_context.next=11;break;case 10:user_id=_defaultPersister2.default.uuidNull();case 11:_context.next=13;return regeneratorRuntime.awrap(objectManager.getOneObject('User',{id:user_id,User_site_id:objectManager.siteInformation.site_id}));case 13:a_User=_context.sent;if(!a_User){_context.next=19;break;}objectManager.setViewerUserId(user_id);return _context.abrupt('return',{User:a_User,UserSession:a_UserSession});case 19:throw new Error('💔  User '+JSON.stringify(user_id)+' not found');case 20:case'end':return _context.stop();}}},null,this);}function verifyUserAuthToken(a_User,req){if(!a_User)return Promise.reject('💔  User not found');else{var request_UserToken2=req.get('UserToken2');if(request_UserToken2===a_User.UserToken2||req.ip==='127.0.0.1'&&request_UserToken2===_UserToken2ServerRendering2.default||process.env.USER_TOKEN_2_BYPASS_IP===req.ip)return Promise.resolve(a_User.id);else return Promise.reject('💔  Authentication token expected: '+a_User.UserToken2+', provided:'+request_UserToken2);}}var httpError403FileName=_path2.default.resolve(__dirname,'../_configuration/urb-base-server/httpError/403.html');function serveAuthenticationFailed(req,res,err,respondWithJSON){

var ip=req.headers['x-real-ip']||req.connection.remoteAddress;

var requestDetails={
headers:req.headers,
cookies:req.cookies,
ip:ip,
query:req.body};


_log2.default.log('warn','Checking credentials failed',{
errorMessage:err.message,
errorStack:err.stack,
requestDetails:requestDetails});



res.cookie('UserToken1','',{httpOnly:true,expires:new Date(1)});

if(respondWithJSON)
res.status(403).send('{ "error": "💔  Authentication Failed" }');else
res.status(403).sendFile(httpError403FileName);
}
//# sourceMappingURL=checkCredentials.js.map