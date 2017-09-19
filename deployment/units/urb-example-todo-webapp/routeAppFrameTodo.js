'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactCodeSplitting = require('react-code-splitting');var _reactCodeSplitting2 = _interopRequireDefault(_reactCodeSplitting);
var _reactRelay = require('react-relay');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Route = require('found/lib/Route');var _Route2 = _interopRequireDefault(_Route);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const ToDoList = props =>
_react2.default.createElement(_reactCodeSplitting2.default, { load: Promise.resolve().then(() => require('./components/ToDoList')), componentProps: props });


const ToDoScreen = props =>
_react2.default.createElement(_reactCodeSplitting2.default, { load: Promise.resolve().then(() => require('./components/ToDoScreen')), componentProps: props });


const ToDoListQuery = function () {return require('./__generated__/routeAppFrameTodo_ToDoList_Query.graphql');};exports.default =








_react2.default.createElement(_Route2.default, {
    key: 'todo',
    path: 'todo',
    Component: ToDoScreen,
    query: function () {return require('./__generated__/routeAppFrameTodo_ToDoScreen_Query.graphql');} },







  _react2.default.createElement(_Route2.default, {
    Component: ToDoList,
    query: ToDoListQuery,
    prepareVariables: params => Object.assign({}, params, { status: 'any' }) }),

  _react2.default.createElement(_Route2.default, { path: ':status', Component: ToDoList, query: ToDoListQuery }));
//# sourceMappingURL=routeAppFrameTodo.js.map