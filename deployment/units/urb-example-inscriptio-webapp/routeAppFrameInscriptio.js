'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactCodeSplitting = require('react-code-splitting');var _reactCodeSplitting2 = _interopRequireDefault(_reactCodeSplitting);
var _reactRelay = require('react-relay');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Route = require('found/lib/Route');var _Route2 = _interopRequireDefault(_Route);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const InscriptioScreen = props =>
_react2.default.createElement(_reactCodeSplitting2.default, {
  load: Promise.resolve().then(() => require('./components/InscriptioScreen')),
  componentProps: props });exports.default =



_react2.default.createElement(_Route2.default, { key: 'inscriptio', path: 'inscriptio' },
  _react2.default.createElement(_Route2.default, {
    path: '/',
    Component: InscriptioScreen,
    query: function () {return require('./__generated__/routeAppFrameInscriptio_InscriptioScreen_Query.graphql');} }));
//# sourceMappingURL=routeAppFrameInscriptio.js.map