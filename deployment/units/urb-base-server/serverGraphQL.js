'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _expressGraphql = require('express-graphql');var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _requestLoggers = require('../_configuration/urb-base-server/requestLoggers');

var _checkCredentials = require('./checkCredentials');




var _log = require('./log');var _log2 = _interopRequireDefault(_log);
var _logServerRequest = require('./logServerRequest');var _logServerRequest2 = _interopRequireDefault(_logServerRequest);
var _ObjectManager = require('./graphql/ObjectManager');
var _schema = require('./graphql/schema');var _schema2 = _interopRequireDefault(_schema);


require('../_configuration/urb-base-server/graphql/_schemas');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Create router for GraphQL
const serverGraphQL = (0, _express2.default)();

// Set up parser
// Schema for GraphQL server
// Guarantee that all object registrations and schema definitions are executed
serverGraphQL.use(_bodyParser2.default.json()); // Set up logging
serverGraphQL.use((req, res, next) =>
(0, _logServerRequest2.default)(req, res, next, _requestLoggers.requestLoggerGraphQL));


async function root(req, res, next) {
  try {
    const objectManager = await (0, _ObjectManager.getObjectManager)(req, res);
    if (objectManager.siteInformation) {
      try {
        const a_User = (await (0, _checkCredentials.getUserAndSessionIDByUserToken1)(
        objectManager,
        req)).
        User;

        res.codeFoundriesInjected = { user: a_User };
        await (0, _checkCredentials.verifyUserAuthToken)(a_User, req);

        (0, _expressGraphql2.default)(() => {
          return {
            schema: _schema2.default,
            rootValue: objectManager,
            pretty: true,
            graphiql: true };

        })(req, res, next);
      } catch (err) {
        (0, _checkCredentials.serveAuthenticationFailed)(req, res, err, true);
      }
    }
  } catch (err) {
    _log2.default.log('error', 'Error: GraphQL', err);
    res.status(500).send(
    JSON.stringify({
      error: 'An error has occurred while running GraphQL query' }));


  }
}
serverGraphQL.use('/', root);exports.default =

serverGraphQL;
//# sourceMappingURL=serverGraphQL.js.map