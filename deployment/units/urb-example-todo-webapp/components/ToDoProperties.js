'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('material-ui/Button');var _Button2 = _interopRequireDefault(_Button);
var _Dialog = require('material-ui/Dialog');var _Dialog2 = _interopRequireDefault(_Dialog);




var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _styles = require('material-ui/styles');
var _TextField = require('material-ui/TextField');var _TextField2 = _interopRequireDefault(_TextField);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap' } });



class ToDo_Properties extends _react2.default.Component









{
  constructor(props, context) {
    super(props, context);this.








    _handle_Close = () => {
      this.props.handlerClose();
    };this.

    _handle_OK = () => {
      this.props.handlerUpdate({ ToDo_Text: this.state.ToDo_Text });

      this.props.handlerClose();
    };const { ToDo_Text } = this.props;this.state = { ToDo_Text };}

  render() {
    const { ToDo_Text } = this.state;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_Dialog2.default, { open: this.props.open, onRequestClose: this._handle_Close },
          _react2.default.createElement(_Dialog.DialogTitle, null, 'ToDo'),
          _react2.default.createElement(_Dialog.DialogContent, null,
            _react2.default.createElement(_TextField2.default, {
              label: 'To Do',
              fullWidth: true,
              value: ToDo_Text,
              onChange: event =>
              this.setState({ ToDo_Text: event.target.value }) })),


          _react2.default.createElement(_Dialog.DialogActions, null,
            _react2.default.createElement(_Button2.default, { onClick: this._handle_Close }, 'Cancel'),
            _react2.default.createElement(_Button2.default, { onClick: this._handle_OK, color: 'primary' }, 'OK')))));






  }}exports.default =


(0, _styles.withStyles)(styles)(ToDo_Properties);
//# sourceMappingURL=ToDoProperties.js.map