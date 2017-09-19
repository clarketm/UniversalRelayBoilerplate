'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('material-ui/Button');var _Button2 = _interopRequireDefault(_Button);
var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _Progress = require('material-ui/Progress');
var _styles = require('material-ui/styles');
var _TextField = require('material-ui/TextField');var _TextField2 = _interopRequireDefault(_TextField);
var _Typography = require('material-ui/Typography');var _Typography2 = _interopRequireDefault(_Typography);
var _react = require('react');var _react2 = _interopRequireDefault(_react);

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class NewUserScreen extends _react2.default.Component









{
  constructor(props, context) {
    super(props, context);this.









    _handle_onClick_Create = async () => {
      const { UserAccount_Identifier, User_Secret } = this.state;

      this.setState({
        currentOperation: 'creating',
        User_Secret: '' // In order to prevent the password from being accessed later
      });

      try {
        const loc = window.location;
        const host = loc.protocol + '//' + loc.hostname + ':' + loc.port;

        const response = await fetch(host + '/auth/createuser', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json' },

          body: JSON.stringify({
            UserAccount_Identifier: UserAccount_Identifier,
            User_Secret: User_Secret }) });



        const responseData = await response.json();

        console.log('CREATE USER RESPONSE');
        console.log(responseData);

        if (responseData.success) {
          // In case of success, notify user
          this.setState({ currentOperation: 'success' });
        } else {
          // In case of error, tell user what the error is
          this.setState({
            currentOperation: 'failure',
            errorMessage: responseData.error });

        }
      } catch (err) {
        // In case response could not be received properly, tell the user
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage:
          'Did not receive proper response from server. Please try again. Message:' +
          err.message });

      }
    };this.

    _handle_onClick_CancelCreation = () => {
      this.setState({
        currentOperation: 'failure',
        errorMessage: 'User creation has been canceled' });

    };this.

    _handle_onClick_TryAgain = () => {
      this.setState({
        currentOperation: 'prompt',
        errorMessage: '' });

    };this.

    _handle_onClick_Continue = () => {
      window.location.replace('/');
    };this.state = { currentOperation: 'prompt', errorMessage: '', UserAccount_Identifier: '', User_Secret: '' };}

  renderCreating() {
    const { classes } = this.props;
    const { UserAccount_Identifier } = this.state;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_Card.CardHeader, { title: 'Creating user' }),
        _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Creating user',

          _react2.default.createElement('br', null),
          UserAccount_Identifier,
          _react2.default.createElement('br', null), 'Please wait.'),


        _react2.default.createElement(_Progress.LinearProgress, { mode: 'query' }),
        _react2.default.createElement(_Card.CardActions, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_CancelCreation }, 'Cancel'))));



  }

  renderSuccess() {
    const { classes } = this.props;
    const { UserAccount_Identifier } = this.state;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_Card.CardHeader, { title: 'Creating user' }),
        _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Created user',

          _react2.default.createElement('br', null),
          UserAccount_Identifier),

        _react2.default.createElement(_Card.CardActions, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_Continue }, 'Continue'))));



  }

  renderFailure() {
    const { classes } = this.props;
    const { UserAccount_Identifier, errorMessage } = this.state;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_Card.CardHeader, { title: 'Creating user' }),
        _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Failed creating user',

          _react2.default.createElement('br', null),
          UserAccount_Identifier,
          _react2.default.createElement('br', null), 'Reason: ',
          errorMessage),

        _react2.default.createElement(_Card.CardActions, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_TryAgain }, 'Try Again'))));



  }

  renderPrompt() {
    const { classes } = this.props;
    const { UserAccount_Identifier, User_Secret } = this.state;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_Card.CardHeader, { title: 'Create New User' }),
        _react2.default.createElement(_TextField2.default, {
          label: 'Account Name',
          fullWidth: true,
          value: UserAccount_Identifier,
          onChange: event =>
          this.setState({ UserAccount_Identifier: event.target.value }) }),

        _react2.default.createElement(_TextField2.default, {
          label: 'Password',
          type: 'password',
          fullWidth: true,
          value: User_Secret,
          onChange: event => this.setState({ User_Secret: event.target.value }) }),

        _react2.default.createElement(_Card.CardActions, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_Create }, 'Create'))));



  }

  render() {
    const { currentOperation } = this.state;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        currentOperation === 'prompt' && this.renderPrompt(),
        currentOperation === 'creating' && this.renderCreating(),
        currentOperation === 'success' && this.renderSuccess(),
        currentOperation === 'failure' && this.renderFailure()));


  }}exports.default =


(0, _styles.withStyles)(styles)(NewUserScreen);
//# sourceMappingURL=NewUserScreen.js.map