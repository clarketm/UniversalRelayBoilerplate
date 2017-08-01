Object.defineProperty(exports,"__esModule",{value:true});exports.










getUserByCookie=getUserByCookie;exports.




























verifyUserAuthToken=verifyUserAuthToken;exports.




















serveAuthenticationFailed=serveAuthenticationFailed;var _jwtSimple=require('jwt-simple');var _jwtSimple2=_interopRequireDefault(_jwtSimple);var _path=require('path');var _path2=_interopRequireDefault(_path);var _defaultPersister=require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);var _log=require('./log');var _log2=_interopRequireDefault(_log);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();function getUserByCookie(objectManager,req){var user_id=_defaultPersister2.default.uuidNull();return objectManager.getOneObject('User',{id:user_id,User_site_id:objectManager.siteInformation.site_id}).then(function(a_User){if(a_User){objectManager.setViewerUserId(user_id);return a_User;}else return Promise.reject('💔  User not found');});}function verifyUserAuthToken(a_User,req){if(!a_User)return Promise.reject('💔  User not found');else{var request_UserToken2=req.get('UserToken2');if(request_UserToken2==a_User.UserToken2||process.env.USER_TOKEN_2_BYPASS_IP==req.ip)return Promise.resolve(a_User.id);else return Promise.reject('💔  Authentication token expected: '+a_User.UserToken2+', provided:'+request_UserToken2);}}var httpError403FileName=_path2.default.resolve(__dirname,'../_configuration/urb-base-server/httpError/403.html');function serveAuthenticationFailed(req,res,error,respondWithJSON){

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