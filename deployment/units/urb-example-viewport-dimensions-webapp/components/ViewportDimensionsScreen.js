'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _Table = require('material-ui/Table');var _Table2 = _interopRequireDefault(_Table);





var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);
var _withViewportDimensions = require('../../urb-base-webapp/scripts/withViewportDimensions');var _withViewportDimensions2 = _interopRequireDefault(_withViewportDimensions);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  card: {
    minWidth: 275 } };



class ViewportDimensionsScreen extends _react2.default.Component




{
  render() {
    const { classes, totalHeight, totalWidth } = this.props;

    const data = [
    { name: 'totalWidth', value: totalWidth },
    { name: 'totalHeight', value: totalHeight }];


    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        _react2.default.createElement(_Card2.default, { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: 'Viewport Dimensions' }),
          _react2.default.createElement(_Table2.default, null,
            _react2.default.createElement(_Table.TableHead, null,
              _react2.default.createElement(_Table.TableRow, null,
                _react2.default.createElement(_Table.TableCell, null, 'Property'),
                _react2.default.createElement(_Table.TableCell, { numeric: true }, 'Value'))),


            _react2.default.createElement(_Table.TableBody, null,
              data.map(n => {
                return (
                  _react2.default.createElement(_Table.TableRow, { key: n.name },
                    _react2.default.createElement(_Table.TableCell, null, n.name),
                    _react2.default.createElement(_Table.TableCell, { numeric: true }, n.value)));


              }))),


          _react2.default.createElement(_Card.CardContent, null))));



  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(
(0, _withViewportDimensions2.default)(ViewportDimensionsScreen, [
'totalHeight',
'totalWidth'])), { Viewer: function () {return require('./__generated__/ViewportDimensionsScreen_Viewer.graphql');} });
//# sourceMappingURL=ViewportDimensionsScreen.js.map