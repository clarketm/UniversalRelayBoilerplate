'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _bcryptjs = require('bcryptjs');var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _jwtSimple = require('jwt-simple');var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _authExtensions = require('../_configuration/urb-base-server/authExtensions');var _authExtensions2 = _interopRequireDefault(_authExtensions);
var _delayPromise = require('../urb-base-universal/delayPromise');var _delayPromise2 = _interopRequireDefault(_delayPromise);
var _getNewUser = require('../_configuration/urb-base-server/graphql/model/getNewUser');var _getNewUser2 = _interopRequireDefault(_getNewUser);
var _validation = require('../urb-base-universal/validation');
var _requestLoggers = require('../_configuration/urb-base-server/requestLoggers');

var _checkCredentials = require('./checkCredentials');
var _logServerRequest = require('./logServerRequest');var _logServerRequest2 = _interopRequireDefault(_logServerRequest);
var _ObjectManager = require('./graphql/ObjectManager');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

const serverAuth = (0, _express2.default)();

serverAuth.use(_bodyParser2.default.json());
serverAuth.use((req, res, next) =>
(0, _logServerRequest2.default)(req, res, next, _requestLoggers.requestLoggerAuth));


//

async function login(req, res) {
  const objectManager = await (0, _ObjectManager.getObjectManager)(req, res);
  if (objectManager.siteInformation) {
    const UserAccount_Identifier = req.body.UserAccount_Identifier.toLowerCase();
    const User_Secret = req.body.User_Secret;

    await (0, _delayPromise2.default)(1000); // Wait for a second to hamper a possible potential brute force attack

    try {
      const arr_UserAccount = await objectManager.getObjectList('UserAccount', {
        UserAccount_site_id: objectManager.siteInformation.site_id,
        UserAccount_Identifier: UserAccount_Identifier });


      if (arr_UserAccount.length === 0) {
        res.status(401).json({ error: '💔  User account not found' });
      } else {
        const a_User = await objectManager.getOneObject('User', {
          id: arr_UserAccount[0].UserAccount_User_id });


        if (
        await new Promise(resolve =>
        _bcryptjs2.default.compare(
        User_Secret,
        a_User.User_Secret,
        (err, passwordMatch) => resolve(passwordMatch))))


        {
          // Create user session object
          const a_UserSession = {
            UserSession_site_id: objectManager.siteInformation.site_id, // Get previously assigned primary key
            UserSession_User_id: a_User.id,
            UserSession_Start: new Date(),
            UserSession_Expired: false


            // Addsession to database
          };objectManager.add('UserSession', a_UserSession);

          res.codeFoundriesInjected = { user: a_User

            // User has authenticated correctly thus we create a JWT token ith the session.
          };const UserToken1 = _jwtSimple2.default.encode(
          // $FlowIssue - id will be filled in by ObjectManager.add
          { session_id: a_UserSession.id },
          process.env.JWT_SECRET);


          res.cookie('UserToken1', UserToken1, { httpOnly: true });
          res.json({ success: true, UserToken2: a_User.UserToken2 });
        } else res.status(401).json({ error: '💔  Incorrect password' });
      }
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}
serverAuth.post('/login', login);

//

async function createuser(req, res) {
  const objectManager = await (0, _ObjectManager.getObjectManager)(req, res);
  if (objectManager.siteInformation) {
    const UserAccount_Identifier = req.body.UserAccount_Identifier.toLowerCase();
    const User_Secret = req.body.User_Secret;

    try {
      const arr_UserAccount = await objectManager.getObjectList('UserAccount', {
        UserAccount_site_id: objectManager.siteInformation.site_id,
        UserAccount_Identifier: UserAccount_Identifier });


      if (arr_UserAccount.length > 0)
      throw new Error('💔  User account already exists');

      const User_PasswordHash = await new Promise(resolve =>
      _bcryptjs2.default.hash(User_Secret, 8, (err, hash) => resolve(hash)));


      // If account name looks like email address, use it as email
      const accountNameIsValidEmail = (0, _validation.validateEmail)(UserAccount_Identifier);
      const User_Email = accountNameIsValidEmail ? UserAccount_Identifier : '';

      // Create the user object
      const a_User = Object.assign(
      (0, _getNewUser2.default)(objectManager.siteInformation.site_id),
      {
        User_site_id: objectManager.siteInformation.site_id,
        UserToken2:
        Math.random().
        toString(36).
        substring(2) +
        Math.random().
        toString(36).
        substring(2),
        User_Secret: User_PasswordHash,
        User_DisplayName: UserAccount_Identifier,
        User_Email: User_Email });


      objectManager.assignPrimaryKey('User', a_User);

      // Create user session object
      const a_UserSession = {
        UserSession_site_id: objectManager.siteInformation.site_id, // Get previously assigned primary key
        UserSession_User_id: a_User.id,
        UserSession_Start: new Date(),
        UserSession_Expired: false


        // Create user account object
      };const a_UserAccount = {
        UserAccount_site_id: objectManager.siteInformation.site_id, // Get previously assigned primary key
        UserAccount_User_id: a_User.id,
        UserAccount_Identifier: UserAccount_Identifier,
        UserAccount_Type: 'un'


        // Add user and session to database
      };await Promise.all([
      objectManager.add('User', a_User),
      objectManager.add('UserSession', a_UserSession),
      objectManager.add('UserAccount', a_UserAccount)]);


      res.codeFoundriesInjected = { user: a_User

        // User has been created thus we create a JWT token.
      };const UserToken1 = _jwtSimple2.default.encode(
      // $FlowIssue - id will be filled in by ObjectManager.add
      { session_id: a_UserSession.id },
      process.env.JWT_SECRET);


      // Set cookie and return
      res.cookie('UserToken1', UserToken1, { httpOnly: true });
      res.json({ success: true });
    } catch (error) {
      res.status(401).json({ error: '' + error.message });
    }
  }
}
serverAuth.post('/createuser', createuser);

//

serverAuth.post('/logout', async (req, res) => {
  const objectManager = await (0, _ObjectManager.getObjectManager)(req, res);
  const UserSession = (await (0, _checkCredentials.getUserAndSessionIDByUserToken1)(
  objectManager,
  req)).
  UserSession;

  await objectManager.remove('UserSession', { id: UserSession.id });

  res.cookie('UserToken1', '', { httpOnly: true, expires: new Date(1) });
  res.json({ success: true });
});

// Add extensions - custom configurations
(0, _authExtensions2.default)(serverAuth);exports.default =

serverAuth;
//# sourceMappingURL=serverAuth.js.map