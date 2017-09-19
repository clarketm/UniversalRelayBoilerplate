'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _FormControl = require('material-ui/Form/FormControl');var _FormControl2 = _interopRequireDefault(_FormControl);
var _FormHelperText = require('material-ui/Form/FormHelperText');var _FormHelperText2 = _interopRequireDefault(_FormHelperText);
var _Input = require('material-ui/Input');var _Input2 = _interopRequireDefault(_Input);
var _InputLabel = require('material-ui/Input/InputLabel');var _InputLabel2 = _interopRequireDefault(_InputLabel);
var _styles = require('material-ui/styles');
var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit } });



class TextFieldWithError extends _react2.default.Component






{
  render() {
    const { classes, errorText, id, label, onChange, value } = this.props;

    const isError = errorText !== '';

    return (
      _react2.default.createElement(_FormControl2.default, {
          className: classes.formControl,
          error: isError,
          id: id,
          fullWidth: true },

        _react2.default.createElement(_InputLabel2.default, { htmlFor: isError ? 'name-simple' : 'name-error' },
          label),

        _react2.default.createElement(_Input2.default, { id: 'value', value: value, onChange: onChange }),
        _react2.default.createElement(_FormHelperText2.default, null, isError ? errorText : '')));


  }}exports.default =


(0, _styles.withStyles)(styles)(TextFieldWithError);
//# sourceMappingURL=TextFieldWithError.js.map