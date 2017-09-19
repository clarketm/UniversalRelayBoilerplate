'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _classnames = require('classnames');var _classnames2 = _interopRequireDefault(_classnames);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Button = require('material-ui/Button');var _Button2 = _interopRequireDefault(_Button);
var _Collapse = require('material-ui/transitions/Collapse');var _Collapse2 = _interopRequireDefault(_Collapse);
var _styles = require('material-ui/styles');
var _List = require('material-ui/List');

var _Link = require('./Link');var _Link2 = _interopRequireDefault(_Link);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest }),

    '&:hover': {
      textDecoration: 'none' } }),


  navItem: Object.assign({},
  theme.typography.body2, {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0 }),

  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0 },

  navLinkButton: {
    color: theme.palette.text.secondary,
    textIndent: 24,
    fontSize: 13 },

  activeButton: {
    color: theme.palette.text.primary } });



class AppDrawerNavItem extends _react2.default.Component









{constructor(...args) {var _temp;return _temp = super(...args), this.




    state = {
      open: false }, this.








    handleClick = () => {
      this.setState({ open: !this.state.open });
    }, _temp;}componentWillMount() {if (this.props.openImmediately) {this.setState({ open: true });}}

  render() {
    const { children, classes, title, to } = this.props;

    if (to) {
      return (
        _react2.default.createElement(_List.ListItem, { className: classes.navLink, disableGutters: true },
          _react2.default.createElement(_Button2.default, {
              component: _Link2.default,
              to: to,
              className: (0, _classnames2.default)(classes.button, classes.navLinkButton),
              activeClassName: classes.activeButton,
              disableRipple: true,
              onClick: this.props.onClick },

            title)));



    }

    return (
      _react2.default.createElement(_List.ListItem, { className: classes.navItem, disableGutters: true },
        _react2.default.createElement(_Button2.default, { className: classes.button, onClick: this.handleClick },
          title),

        _react2.default.createElement(_Collapse2.default, { 'in': this.state.open, transitionDuration: 'auto', unmountOnExit: true },
          children)));



  }}AppDrawerNavItem.defaultProps = { openImmediately: false };exports.default =


(0, _styles.withStyles)(styles)(AppDrawerNavItem);
//# sourceMappingURL=AppDrawerNavItem.js.map