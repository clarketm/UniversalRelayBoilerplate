'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Add = require('material-ui-icons/Add');var _Add2 = _interopRequireDefault(_Add);
var _Button = require('material-ui/Button');var _Button2 = _interopRequireDefault(_Button);
var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _EnsayoAddMutation = require('../../urb-example-ensayo-client/relay/EnsayoAddMutation');var _EnsayoAddMutation2 = _interopRequireDefault(_EnsayoAddMutation);
var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);

var _EnsayoInPlaceEditProperties = require('./EnsayoInPlaceEditProperties');var _EnsayoInPlaceEditProperties2 = _interopRequireDefault(_EnsayoInPlaceEditProperties);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 },

  addNewButton: { float: 'right', marginTop: -58, marginRight: 20 } });


class EnsayoInPaceEditScreen extends _react2.default.Component









{
  constructor(props, context) {
    super(props, context);this.




    _handle_updateHandler_Ensayo = EnsayoInPlaceEditProperties => {
      const {
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content } =
      EnsayoInPlaceEditProperties;
      const { relay, Viewer } = this.props;

      _EnsayoAddMutation2.default.commit(
      relay.environment,
      Viewer,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content);

    };this.

    _handle_Close_Properties = () => {
      this.setState({ propertiesIsOpen: false });
    };this.

    _handle_onClick_Add = () => {
      this.setState({ propertiesIsOpen: true });
    };this.state = { propertiesIsOpen: false };}

  render() {
    const { classes } = this.props;
    const { propertiesIsOpen } = this.state;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: 'Ensayo', subheader: 'List of essays' }),

          _react2.default.createElement(_Card.CardContent, null,
            _react2.default.createElement('div', { className: classes.addNewButton },
              _react2.default.createElement(_Button2.default, {
                  fab: true,
                  color: 'primary',
                  className: classes.button,
                  onClick: this._handle_onClick_Add },

                _react2.default.createElement(_Add2.default, null))),



            this.props.children),


          propertiesIsOpen &&
          _react2.default.createElement(_EnsayoInPlaceEditProperties2.default, {
            Ensayo_Title: '',
            Ensayo_Content: '',
            Ensayo_Description: '',
            handlerUpdate: this._handle_updateHandler_Ensayo,
            handlerClose: this._handle_Close_Properties }))));




  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(EnsayoInPaceEditScreen), { Viewer: function () {return require('./__generated__/EnsayoInPaceEditScreen_Viewer.graphql');} });
//# sourceMappingURL=EnsayoInPaceEditScreen.js.map