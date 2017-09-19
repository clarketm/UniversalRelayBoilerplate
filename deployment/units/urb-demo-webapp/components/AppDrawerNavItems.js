'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _List = require('material-ui/List');var _List2 = _interopRequireDefault(_List);
var _react = require('react');var _react2 = _interopRequireDefault(_react);

var _AppDrawerNavItem = require('../../urb-appdrawer-webapp/components/AppDrawerNavItem');var _AppDrawerNavItem2 = _interopRequireDefault(_AppDrawerNavItem);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class AppDrawernavItems extends _react2.default.Component {
  render() {
    return (
      _react2.default.createElement(_List2.default, null,
        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/force-login',
          openImmediately: true,
          title: 'Force Login',
          to: '/force-login' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/todo',
          openImmediately: true,
          title: 'To Dos',
          to: '/todo' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/Ensayo/edit',
          openImmediately: true,
          title: 'Ensayo edit',
          to: '/Ensayo/edit' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/ensayo/in-place-edit',
          openImmediately: true,
          title: 'Ensayo in place',
          to: '/ensayo/in-place-edit' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/ensayo',
          openImmediately: true,
          title: 'Ensayo public',
          to: '/ensayo' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/inscriptio',
          openImmediately: true,
          title: 'Inscriptio',
          to: '/inscriptio' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/translaticiarum',
          openImmediately: true,
          title: 'Translaticiarum',
          to: '/translaticiarum' }),

        _react2.default.createElement(_AppDrawerNavItem2.default, {
          key: '/viewport-dimensions',
          openImmediately: true,
          title: 'Viewport Dimensions',
          to: '/viewport-dimensions' })));



  }}exports.default = AppDrawernavItems;
//# sourceMappingURL=AppDrawerNavItems.js.map