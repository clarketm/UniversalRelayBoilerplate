'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.




























getUserAndSessionIDByUserToken1 = getUserAndSessionIDByUserToken1;exports.


























verifyUserAuthToken = verifyUserAuthToken;exports.



























serveAuthenticationFailed = serveAuthenticationFailed;var _path = require('path');var _path2 = _interopRequireDefault(_path);var _jwtSimple = require('jwt-simple');var _jwtSimple2 = _interopRequireDefault(_jwtSimple);var _defaultPersister = require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2 = _interopRequireDefault(_defaultPersister);var _UserToken2ServerRendering = require('../_configuration/urb-base-server/UserToken2ServerRendering');var _UserToken2ServerRendering2 = _interopRequireDefault(_UserToken2ServerRendering);var _log = require('./log');var _log2 = _interopRequireDefault(_log);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Read environment
require('dotenv').load(); //  weak
function getSessionIdFromRequest(req) {const UserToken1 = req.cookies.UserToken1 || req.headers.usertoken1;if (UserToken1) try {if (UserToken1.length > 10) {const decoded = _jwtSimple2.default.decode(UserToken1, process.env.JWT_SECRET);return _defaultPersister2.default.uuidFromString(decoded.session_id);}} catch (err) {// Do nothing. This most probably means an expired session, or
    // new session secret. Either way the user is consindered not logged in
  }return null; // Anonymous, unless cookie is passed
}async function getUserAndSessionIDByUserToken1(objectManager, req) {// Get session, and if session is present, user from session
  const session_id = getSessionIdFromRequest(req);let a_UserSession = null;if (session_id) a_UserSession = await objectManager.getOneObject('UserSession', { id: session_id, UserSession_site_id: objectManager.siteInformation.site_id });const user_id = a_UserSession ? a_UserSession.UserSession_User_id : _defaultPersister2.default.uuidNull();const a_User = await objectManager.getOneObject('User', { id: user_id, User_site_id: objectManager.siteInformation.site_id });if (a_User) {objectManager.setViewerUserId(user_id);return { User: a_User, UserSession: a_UserSession };} else {throw new Error('💔  User ' + JSON.stringify(user_id) + ' not found');}}function verifyUserAuthToken(a_User, req) {if (!a_User) return Promise.reject('💔  User not found');else {const request_UserToken2 = req.get('UserToken2');if (request_UserToken2 === a_User.UserToken2 || // A request coming from webapp will come from localhost and will bear the server's user token
    req.ip === '127.0.0.1' && request_UserToken2 === _UserToken2ServerRendering2.default || // For use with GraphiQL
    process.env.USER_TOKEN_2_BYPASS_IP === req.ip) return Promise.resolve(a_User.id);else return Promise.reject('💔  Authentication token expected: ' + a_User.UserToken2 + ', provided:' + request_UserToken2);}}const httpError403FileName = _path2.default.resolve(__dirname, '../_configuration/urb-base-server/httpError/403.html');function serveAuthenticationFailed(req, res, err, respondWithJSON) {// Collect information about the request
  var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;const requestDetails = { headers: req.headers, cookies: req.cookies, ip: ip, query: req.body };

  _log2.default.log('warn', 'Checking credentials failed', {
    errorMessage: err.message,
    errorStack: err.stack,
    requestDetails });


  // Expire cookie. This is the only way to 'delete' a cookie
  res.cookie('UserToken1', '', { httpOnly: true, expires: new Date(1) });

  if (respondWithJSON)
  res.status(403).send('{ "error": "💔  Authentication Failed" }');else
  res.status(403).sendFile(httpError403FileName);
}
//# sourceMappingURL=checkCredentials.js.map