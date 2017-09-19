'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('material-ui/Button');var _Button2 = _interopRequireDefault(_Button);
var _Dialog = require('material-ui/Dialog');var _Dialog2 = _interopRequireDefault(_Dialog);




var _TextField = require('material-ui/TextField');var _TextField2 = _interopRequireDefault(_TextField);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRte = require('react-rte');var _reactRte2 = _interopRequireDefault(_reactRte);
var _styles = require('material-ui/styles');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap' },

  richTextContainer: {
    width: '100%',
    height: 300,
    display: 'inline-block',
    position: 'relative' } });



class EnsayoInPlaceEditProperties extends _react2.default.Component













{
  constructor(props, context) {
    super(props, context);this.













    _handle_OnChange_RTE_Ensayo_Content = value => {
      this.setState({
        Ensayo_Content_RTE: value });

    };this.

    _handle_Close = () => {
      this.props.handlerClose();
    };this.

    _handle_OK = () => {
      const { handlerClose, handlerUpdate } = this.props;

      handlerUpdate({
        Ensayo_Title: this.state.Ensayo_Title,
        Ensayo_Description: this.state.Ensayo_Description,
        Ensayo_Content: this.state.Ensayo_Content_RTE.toString('html') });


      handlerClose();
    };const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props;this.state = { Ensayo_Title, Ensayo_Description, Ensayo_Content_RTE: _reactRte2.default.createValueFromString(Ensayo_Content, 'html') };}

  render() {
    const { classes } = this.props;
    const { Ensayo_Title, Ensayo_Description } = this.state;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_Dialog2.default, { open: true, onRequestClose: this._handle_Close },
          _react2.default.createElement(_Dialog.DialogTitle, null, 'Ensayo'),

          _react2.default.createElement(_Dialog.DialogContent, null,
            _react2.default.createElement(_TextField2.default, {
              label: 'Title',
              fullWidth: true,
              value: Ensayo_Title,
              onChange: event =>
              this.setState({ Ensayo_Title: event.target.value }) }),

            _react2.default.createElement(_TextField2.default, {
              label: 'Description',
              fullWidth: true,
              value: Ensayo_Description,
              onChange: event =>
              this.setState({ Ensayo_Description: event.target.value }) }),

            _react2.default.createElement('div', { className: classes.richTextContainer },
              _reactRte2.default == null ?
              _react2.default.createElement('div', null) :

              _react2.default.createElement(_reactRte2.default, {
                value: this.state.Ensayo_Content_RTE,
                onChange: this._handle_OnChange_RTE_Ensayo_Content }))),





          _react2.default.createElement(_Dialog.DialogActions, null,
            _react2.default.createElement(_Button2.default, { onClick: this._handle_Close }, 'Cancel'),
            _react2.default.createElement(_Button2.default, { onClick: this._handle_OK, color: 'primary' }, 'OK')))));






  }}exports.default =


(0, _styles.withStyles)(styles)(EnsayoInPlaceEditProperties);
//# sourceMappingURL=EnsayoInPlaceEditProperties.js.map