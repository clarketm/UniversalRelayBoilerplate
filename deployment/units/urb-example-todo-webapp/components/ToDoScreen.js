'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');
var _TextField = require('material-ui/TextField');var _TextField2 = _interopRequireDefault(_TextField);

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);
var _ToDoAddMutation = require('../../urb-example-todo-client/relay/ToDoAddMutation');var _ToDoAddMutation2 = _interopRequireDefault(_ToDoAddMutation);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class ToDoScreen extends _react2.default.Component









{
  constructor(props, context) {
    super(props, context);this.






    _handle_onKeyDown_AddToDo = e => {
      if (e.keyCode === 13) {
        const { relay, Viewer } = this.props;

        _ToDoAddMutation2.default.commit(
        relay.environment,
        Viewer,
        this.state.ToDo_Text_New);


        this.setState({
          ToDo_Text_New: '' });

      }
    };this.

    _handle_OnChange = event => {
      this.setState({
        ToDo_Text_New: event.target.value });

    };this.state = { ToDo_Text_New: '' };}

  render() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: 'TO DOs', subheader: 'List of TO DOs for user' }),
          this.props.children,
          _react2.default.createElement('div', { style: { marginLeft: 4, marginRight: 4 } }),
          _react2.default.createElement(_TextField2.default, {
            label: 'What needs to be done?',
            value: this.state.ToDo_Text_New,
            fullWidth: true,
            onKeyDown: this._handle_onKeyDown_AddToDo,
            onChange: this._handle_OnChange }))));




  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(ToDoScreen), { Viewer: function () {return require('./__generated__/ToDoScreen_Viewer.graphql');} });
//# sourceMappingURL=ToDoScreen.js.map