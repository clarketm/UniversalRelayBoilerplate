'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _classnames = require('classnames');var _classnames2 = _interopRequireDefault(_classnames);
var _found = require('found');
var _styles = require('material-ui/styles');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}

const styles = theme => ({
  root: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline' } },


  primary: {
    color: theme.palette.primary[500] },

  secondary: {
    color: theme.palette.secondary.A400 } });



class Link extends _react2.default.Component





{
  render(props) {
    const _props =






    this.props,{ component: ComponentProp, classes, className, variant, to } = _props,other = _objectWithoutProperties(_props, ['component', 'classes', 'className', 'variant', 'to']);

    let Component;

    if (ComponentProp) {
      Component = ComponentProp;
    } else if (to) {
      Component = _found.Link;
    } else {
      Component = 'a';
    }

    return (
      _react2.default.createElement(Component, _extends({
        to: to,
        className: (0, _classnames2.default)(
        classes.root,
        {
          [classes.primary]: variant === 'primary',
          [classes.secondary]: variant === 'secondary' },

        className) },

      other)));


  }}exports.default =


(0, _styles.withStyles)(styles)(Link);
//# sourceMappingURL=Link.js.map