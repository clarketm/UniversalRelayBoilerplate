'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.












registerAuthenticationRequiredCallback = registerAuthenticationRequiredCallback;exports.



unregisterAuthenticationRequiredCallback = unregisterAuthenticationRequiredCallback;var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);var _styles = require('material-ui/styles');var _react = require('react');var _react2 = _interopRequireDefault(_react);var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}const doNothing = () => {};let authenticationRequiredCallback = doNothing;function registerAuthenticationRequiredCallback(cb) {authenticationRequiredCallback = cb;}function unregisterAuthenticationRequiredCallback() {
  authenticationRequiredCallback = doNothing;
}

const styles = theme => ({
  card: {
    maxWidth: 400 } });



class RequiresAuthenticationNotice extends _react2.default.Component

{
  componentDidMount() {
    authenticationRequiredCallback();
  }

  render() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: 'Please log in' }),
          _react2.default.createElement(_Card.CardContent, null,
            _react2.default.createElement(_Typography2.default, { paragraph: true }, 'Accessing this area of the application requires you to be logged in.')))));







  }}exports.default =


(0, _styles.withStyles)(styles)(RequiresAuthenticationNotice);
//# sourceMappingURL=RequiresAuthentication.js.map