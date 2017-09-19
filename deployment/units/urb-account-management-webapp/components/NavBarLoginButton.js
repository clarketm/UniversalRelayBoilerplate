'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('material-ui/Button');var _Button2 = _interopRequireDefault(_Button);
var _Menu = require('material-ui/Menu');var _Menu2 = _interopRequireDefault(_Menu);
var _styles = require('material-ui/styles');
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _RequiresAuthentication = require('./RequiresAuthentication');



var _LoginDialog = require('./LoginDialog');var _LoginDialog2 = _interopRequireDefault(_LoginDialog);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({});

class NavBarLoginButton extends _react2.default.Component









{




  constructor(props, context) {
    super(props, context);this.

















    _handle_onClick_Login = () => {
      this.setState({ loginDialogIsOpen: true, userMenuIsOpen: false });
    };this.

    _handle_onClick_Profile = () => {
      this.setState({ userMenuIsOpen: false });
    };this.

    _handle_Login_Close = () => {
      this.setState({ loginDialogIsOpen: false });
    };this.

    _handle_onClick_UserMenu = event => {
      this.setState({ userMenuIsOpen: true, anchorEl: event.currentTarget });
    };this.

    _handle_UserMenu_Close = () => {
      this.setState({ userMenuIsOpen: false });
    };this.

    _handle_onClick_Logout = () => {
      this.setState({ userMenuIsOpen: false });
      this.context.router.push('/user/logout');
    };this.

    _handle_Login_NewUser = () => {
      this.setState({ loginDialogIsOpen: false });

      this.context.router.push('/user/new');
    };this.state = { anchorEl: undefined, loginDialogIsOpen: false, userMenuIsOpen: false };} // Handle popping open the login dialog if authentication is required
  componentWillMount() {(0, _RequiresAuthentication.registerAuthenticationRequiredCallback)(this._handle_onClick_Login);}componentWillUnmount() {(0, _RequiresAuthentication.unregisterAuthenticationRequiredCallback)();}
  render() {
    const { User_IsAnonymous, User_DisplayName } = this.props.Viewer;
    const { loginDialogIsOpen, userMenuIsOpen } = this.state;

    return (
      _react2.default.createElement('div', null,
        User_IsAnonymous &&
        _react2.default.createElement(_Button2.default, { color: 'contrast', onClick: this._handle_onClick_Login }, 'Login'),



        !User_IsAnonymous &&
        _react2.default.createElement(_Button2.default, { color: 'contrast', onClick: this._handle_onClick_UserMenu },
          User_DisplayName),


        _react2.default.createElement(_LoginDialog2.default, {
          open: loginDialogIsOpen,
          handlerClose: this._handle_Login_Close,
          handlerNewUser: this._handle_Login_NewUser }),

        _react2.default.createElement(_Menu2.default, {
            id: 'lock-menu',
            anchorEl: this.state.anchorEl,
            open: userMenuIsOpen,
            onRequestClose: this._handle_UserMenu_Close },

          _react2.default.createElement(_Menu.MenuItem, { key: 'profile', onClick: this._handle_onClick_Profile }, 'Profile'),


          _react2.default.createElement(_Menu.MenuItem, { key: 'login', onClick: this._handle_onClick_Login }, 'Login as a different user'),


          _react2.default.createElement(_Menu.MenuItem, { key: 'logout', onClick: this._handle_onClick_Logout }, 'Log out'))));





  }}NavBarLoginButton.contextTypes = { router: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(NavBarLoginButton), { Viewer: function () {return require('./__generated__/NavBarLoginButton_Viewer.graphql');} });
//# sourceMappingURL=NavBarLoginButton.js.map