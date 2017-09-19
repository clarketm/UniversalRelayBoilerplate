'use strict';


require('babel-polyfill');

var _BrowserProtocol = require('farce/lib/BrowserProtocol');var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);
var _createInitialFarceRouter = require('found/lib/createInitialFarceRouter');var _createInitialFarceRouter2 = _interopRequireDefault(_createInitialFarceRouter);
var _createRender = require('found/lib/createRender');var _createRender2 = _interopRequireDefault(_createRender);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactDom = require('react-dom');var _reactDom2 = _interopRequireDefault(_reactDom);

var _getGraphQLServerURL = require('../_configuration/urb-base-webapp/getGraphQLServerURL');var _getGraphQLServerURL2 = _interopRequireDefault(_getGraphQLServerURL);

var _fetcherClient = require('./fetcherClient');var _fetcherClient2 = _interopRequireDefault(_fetcherClient);
var _router = require('./router');
var _Wrapper = require('./components/Wrapper');var _Wrapper2 = _interopRequireDefault(_Wrapper);


require('../_configuration/urb-base-webapp/global.css');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const render = (0, _createRender2.default)({})

//
; // Include global CSS used in all units. Will not be chunked
// In order to use ES7 async/await
(async () => {// eslint-disable-next-line no-underscore-dangle
  const fetcher = new _fetcherClient2.default((0, _getGraphQLServerURL2.default)(),
  window.__RELAY_PAYLOADS__,
  window.__RELAY_PAYLOADS__[0].data.Viewer.UserToken2);

  const resolver = (0, _router.createResolver)(fetcher);

  const Router = await (0, _createInitialFarceRouter2.default)({
    historyProtocol: new _BrowserProtocol2.default(),
    historyMiddlewares: _router.historyMiddlewares,
    routeConfig: _router.routeConfig,
    resolver,
    render });


  _reactDom2.default.render(
  _react2.default.createElement(_Wrapper2.default, { siteConfiguration: window.__siteConfiguration__ },
    _react2.default.createElement(Router, { resolver: resolver })),

  document.getElementById('root'),
  () => {
    // We don't need the static css any more once we have launched our application.
    const ssStyles = document.getElementById('server-side-styles');
    // $FlowIssue it is guaranteed to be there
    ssStyles.parentNode.removeChild(ssStyles);
  });

})();
//# sourceMappingURL=client.js.map