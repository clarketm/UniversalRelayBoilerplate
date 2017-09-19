'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _styles = require('material-ui/styles');
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto' }),

  [theme.breakpoints.up(948)]: {
    content: {
      maxWidth: 900 } } });




class ResponsiveContentArea extends _react2.default.Component {




  render() {
    const { classes } = this.props;

    return (
      _react2.default.createElement('div', { className: classes.content },
        this.props.children));


  }}ResponsiveContentArea.contextTypes = { rbCtx: _propTypes2.default.object };exports.default =


(0, _styles.withStyles)(styles)(ResponsiveContentArea);
//# sourceMappingURL=ResponsiveContentArea.js.map