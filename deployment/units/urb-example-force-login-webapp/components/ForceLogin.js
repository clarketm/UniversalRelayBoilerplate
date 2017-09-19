'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');
var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _RequiresAuthentication = require('../../urb-account-management-webapp/components/RequiresAuthentication');var _RequiresAuthentication2 = _interopRequireDefault(_RequiresAuthentication);
var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class ForceLogin extends _react2.default.Component {
  render() {
    const { classes, Viewer } = this.props;

    if (Viewer.User_IsAnonymous)
    return _react2.default.createElement(_RequiresAuthentication2.default, null); // Anonymous users do not get to have a profile
    else
      return (
        _react2.default.createElement(_ResponsiveContentArea2.default, null,
          _react2.default.createElement(_Card2.default, { className: classes.card },
            _react2.default.createElement(_Card.CardHeader, {
              title: 'Only Authorized',
              subheader: 'Only users who log in see this.' }),

            _react2.default.createElement(_Card.CardContent, null,
              _react2.default.createElement(_Typography2.default, { paragraph: true }, 'Content seen by authorized users')))));






  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(ForceLogin), { Viewer: function () {return require('./__generated__/ForceLogin_Viewer.graphql');} });
//# sourceMappingURL=ForceLogin.js.map