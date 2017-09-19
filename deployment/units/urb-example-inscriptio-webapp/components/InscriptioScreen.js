'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactGoogleMaps = require('react-google-maps');
var _withScriptjs = require('react-google-maps/lib/async/withScriptjs');var _withScriptjs2 = _interopRequireDefault(_withScriptjs);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const MapComponent = (0, _withScriptjs2.default)(
(0, _reactGoogleMaps.withGoogleMap)(props =>
_react2.default.createElement(_reactGoogleMaps.GoogleMap, { defaultZoom: props.defaultZoom, center: props.center },
  props.markers.map((marker, index) => _react2.default.createElement(_reactGoogleMaps.Marker, { key: index, position: marker.position })))));




const styles = {
  card: {
    minWidth: 275,
    minHeight: 400 } };



class InscriptioScreen extends _react2.default.Component {




  constructor(props, context) {
    super(props, context);this.










    isUnmounted = false;this.state = { center: { lat: 34.0522, lng: -118.243 }, markers: [] };}

  render() {
    const { classes } = this.props;

    const googleMapURL =
    'https://maps.googleapis.com/maps/api/js?v=3.28&libraries=places,geometry&key=' +
    this.context.rbCtx.siteConfiguration.webapp.api.googleMapsJavascriptAPI;

    console.log(googleMapURL);

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: 'Inscriptio' }),
          _react2.default.createElement(_Card.CardContent, null,
            _react2.default.createElement(MapComponent, {
              defaultZoom: 16,
              center: this.state.center,
              content: 'Content here',
              googleMapURL: googleMapURL,
              markers: this.state.markers,
              loadingElement: _react2.default.createElement('div', null, 'Loading...'),
              containerElement: _react2.default.createElement('div', { style: { height: 400 } }),
              mapElement: _react2.default.createElement('div', { style: { height: 400 } }) })))));





  }}InscriptioScreen.contextTypes = { rbCtx: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(InscriptioScreen), { Viewer: function () {return require('./__generated__/InscriptioScreen_Viewer.graphql');} });
//# sourceMappingURL=InscriptioScreen.js.map