'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _createRender = require('found/lib/createRender');var _createRender2 = _interopRequireDefault(_createRender);
var _server = require('found/lib/server');
var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _reactHelmet = require('react-helmet');var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactJss = require('react-jss');
var _server2 = require('react-dom/server');var _server3 = _interopRequireDefault(_server2);
var _serializeJavascript = require('serialize-javascript');var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _ErrorComponent = require('../_configuration/urb-base-webapp/ErrorComponent');var _ErrorComponent2 = _interopRequireDefault(_ErrorComponent);
var _getGraphQLLocalServerURL = require('../_configuration/urb-base-server/getGraphQLLocalServerURL');var _getGraphQLLocalServerURL2 = _interopRequireDefault(_getGraphQLLocalServerURL);
var _siteSettings = require('../_configuration/urb-base-server/siteSettings');
var _log = require('../urb-base-server/log');var _log2 = _interopRequireDefault(_log);
var _package = require('../_configuration/package');
var _UserToken2ServerRendering = require('../_configuration/urb-base-server/UserToken2ServerRendering');var _UserToken2ServerRendering2 = _interopRequireDefault(_UserToken2ServerRendering);

var _fetcherServer = require('./fetcherServer');var _fetcherServer2 = _interopRequireDefault(_fetcherServer);
var _router = require('./router');
var _Wrapper = require('./components/Wrapper');var _Wrapper2 = _interopRequireDefault(_Wrapper);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

const envHost = process.env.HOST;
if (envHost == null || typeof envHost !== 'string')
throw new Error('💔  urb-base-webapp requires the environment variable HOST to be set');
const envPort = process.env.PORT;
if (envPort == null || typeof envPort !== 'string')
throw new Error('💔  urb-base-webapp requires the environment variable PORT to be set');
const envPortWebpack = process.env.PORT_WEBPACK;
if (envPortWebpack == null || typeof envPortWebpack !== 'string')
throw new Error('💔  urb-base-webapp requires the environment variable PORT_WEBPACK to be set'); // Create express router
const serverWebApp = (0, _express2.default)();
async function gatherLocationAndSiteInformation(req, res) {
  let assetsPath;
  const siteInformation = await (0, _siteSettings.getSiteInformation)(req, res);
  if (process.env.NODE_ENV === 'production') {
    assetsPath =
    siteInformation.isSiteBuilderDisabled || siteInformation.inEditingMode ?
    // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
    `/assets/${_package.version}` :
    // When in production mode, serve the assets compiled by factory's publisher
    `/sassets/${_package.version}.${siteInformation.siteConfiguration.version}`;
  } else {
    // When in development, always go to webpack over http
    assetsPath = `http://${envHost}:${envPortWebpack}/${_package.version}`;
  }
  return { siteInformation, assetsPath };
}
const render = (0, _createRender2.default)({
  renderError(obj) {
    const { error } = obj;
    if (error.status !== 404)
    _log2.default.log('error', 'Error: Render on server createRender renderError', obj);
    return _react2.default.createElement(_ErrorComponent2.default, { httpStatus: error.status });
  } });

serverWebApp.use(async (req, res) => {
  try {
    const { siteInformation, assetsPath } = await gatherLocationAndSiteInformation(req, res);
    const fetcher = new _fetcherServer2.default(
    `http://localhost:${envPort}` + (0, _getGraphQLLocalServerURL2.default)(siteInformation),
    req.cookies.UserToken1, _UserToken2ServerRendering2.default);


    const { redirect, element } = await (0, _server.getFarceResult)({
      url: req.url,
      historyMiddlewares: _router.historyMiddlewares,
      routeConfig: _router.routeConfig,
      resolver: (0, _router.createResolver)(fetcher),
      render });

    if (redirect) {
      res.redirect(302, redirect.url);
      return;
    }
    const userAgent = req.headers['user-agent'];
    const { siteConfiguration } = siteInformation;
    const siteConfigurationSubset = {
      webapp: siteConfiguration.webapp,
      builder: siteConfiguration.builder };

    const sheets = new _reactJss.SheetsRegistry();
    const helmet = _reactHelmet2.default.rewind();
    const rootHTML = _server3.default.renderToString(
    _react2.default.createElement(_reactJss.JssProvider, { registry: sheets },
      _react2.default.createElement(_Wrapper2.default, { userAgent: userAgent, siteConfiguration: siteConfigurationSubset },
        element)));



    res.render(_path2.default.resolve(__dirname, 'html.ejs'), {
      assets_path: assetsPath,
      root_html: rootHTML,
      server_side_styles: sheets.toString(),
      helmet,
      siteConfiguration: JSON.stringify(siteConfigurationSubset),
      relay_payload: (0, _serializeJavascript2.default)(fetcher, { isJSON: true }) });

  } catch (err) {
    _log2.default.log('error', 'Error: Render on server request', err);
    res.status(500).send(_server3.default.renderToString(_react2.default.createElement(_ErrorComponent2.default, { httpStatus: 500 })));
  }
});exports.default =
serverWebApp;
//# sourceMappingURL=serverWebApp.js.map