'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _styles = require('material-ui/styles');
var _Toolbar = require('material-ui/Toolbar');var _Toolbar2 = _interopRequireDefault(_Toolbar);
var _Drawer = require('material-ui/Drawer');var _Drawer2 = _interopRequireDefault(_Drawer);
var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);
var _Divider = require('material-ui/Divider');var _Divider2 = _interopRequireDefault(_Divider);

var _AppDrawerNavItems = require('../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems');var _AppDrawerNavItems2 = _interopRequireDefault(_AppDrawerNavItems);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper },

  title: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary[500] } },


  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center' },

  anchor: {
    color: theme.palette.text.secondary } });



class AppDrawer extends _react2.default.Component





{
  render() {
    const classes = this.props.classes;

    return (
      _react2.default.createElement(_Drawer2.default, {
          className: this.props.className,
          classes: {
            paper: classes.paper },

          open: this.props.open,
          onRequestClose: this.props.onRequestClose,
          type: this.props.docked ? 'permanent' : 'persistent' },

        _react2.default.createElement('div', { className: classes.nav },
          _react2.default.createElement(_Toolbar2.default, { className: classes.toolbar },
            _react2.default.createElement(_Typography2.default, { type: 'title', gutterBottom: true, color: 'inherit' }, 'Rebar ZZZ'),


            _react2.default.createElement(_Divider2.default, { absolute: true })),


          _react2.default.createElement(_AppDrawerNavItems2.default, null))));



  }}exports.default =


(0, _styles.withStyles)(styles)(AppDrawer);
//# sourceMappingURL=AppDrawer.js.map