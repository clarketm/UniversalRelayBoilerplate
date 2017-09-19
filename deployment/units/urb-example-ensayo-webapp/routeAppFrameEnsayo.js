'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactCodeSplitting = require('react-code-splitting');var _reactCodeSplitting2 = _interopRequireDefault(_reactCodeSplitting);
var _reactRelay = require('react-relay');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Route = require('found/lib/Route');var _Route2 = _interopRequireDefault(_Route);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const EnsayoInPaceEditList = props =>
_react2.default.createElement(_reactCodeSplitting2.default, {
  load: Promise.resolve().then(() => require('./components/EnsayoInPaceEditList')),
  componentProps: props });


const EnsayoInPaceEditScreen = props =>
_react2.default.createElement(_reactCodeSplitting2.default, {
  load: Promise.resolve().then(() => require('./components/EnsayoInPaceEditScreen')),
  componentProps: props });


const EnsayoPublicList = props =>
_react2.default.createElement(_reactCodeSplitting2.default, {
  load: Promise.resolve().then(() => require('./components/EnsayoPublicList')),
  componentProps: props });


const EnsayoPublicItem = props =>
_react2.default.createElement(_reactCodeSplitting2.default, {
  load: Promise.resolve().then(() => require('./components/EnsayoPublicItem')),
  componentProps: props });exports.default =




_react2.default.createElement(_Route2.default, { key: 'ensayo', path: 'ensayo' },
  _react2.default.createElement(_Route2.default, {
    path: '/',
    Component: EnsayoPublicList,
    query: function () {return require('./__generated__/routeAppFrameEnsayo_EnsayoPublicList_Query.graphql');} }),







  _react2.default.createElement(_Route2.default, { path: 'item' },
    _react2.default.createElement(_Route2.default, {
      path: ':id',
      Component: EnsayoPublicItem,
      query: function () {return require('./__generated__/routeAppFrameEnsayo_EnsayoPublicItem_Query.graphql');} })),








  _react2.default.createElement(_Route2.default, {
      path: 'in-place-edit',
      Component: EnsayoInPaceEditScreen,
      query: function () {return require('./__generated__/routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query.graphql');} },







    _react2.default.createElement(_Route2.default, {
      Component: EnsayoInPaceEditList,
      query: function () {return require('./__generated__/routeAppFrameEnsayo_EnsayoInPaceEditList_Query.graphql');} })));
//# sourceMappingURL=routeAppFrameEnsayo.js.map