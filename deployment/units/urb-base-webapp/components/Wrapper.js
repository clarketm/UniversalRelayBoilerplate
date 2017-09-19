'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactEventListener = require('react-event-listener');var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getWrapperRbCtx = require('../../_configuration/urb-base-webapp/getWrapperRbCtx');var _getWrapperRbCtx2 = _interopRequireDefault(_getWrapperRbCtx);
var _createMUITheme = require('../../_configuration/urb-base-webapp/createMUITheme');var _createMUITheme2 = _interopRequireDefault(_createMUITheme);
var _ViewportDimensions = require('../scripts/ViewportDimensions');var _ViewportDimensions2 = _interopRequireDefault(_ViewportDimensions);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class Wrapper extends _react2.default.Component


{







  constructor(props, context) {
    super(props, context);

    // TODO x0100 If a property for innerWidth is provided, use it for the initial request

    // Descendants can add other items to rbCtx through getWrapperRbCtx
    this.

















    handle_onResize = () => {
      this.rbCtx.viewportDimensions.handle_onResize();
    };this.rbCtx = (0, _getWrapperRbCtx2.default)(props.siteConfiguration);this.rbCtx.viewportDimensions = new _ViewportDimensions2.default();this.rbCtx.siteConfiguration = props.siteConfiguration;this.muiTheme = (0, _createMUITheme2.default)(this);}componentDidMount() {this.handle_onResize(); // Will populate the data structures for dimensions with current values
  }getChildContext() {return { rbCtx: this.rbCtx };}
  render() {
    return (
      _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handle_onResize },
        _react2.default.createElement(_MuiThemeProvider2.default, { theme: this.muiTheme }, this.props.children)));


  }}exports.default = Wrapper;Wrapper.childContextTypes = { rbCtx: _propTypes2.default.object };
//# sourceMappingURL=Wrapper.js.map