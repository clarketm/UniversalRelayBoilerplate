'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Card = require('material-ui/Card');var _Card2 = _interopRequireDefault(_Card);
var _styles = require('material-ui/styles');
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _ResponsiveContentArea = require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class EnsayoPublicList extends _react2.default.Component {




  _handle_onClick(id) {
    this.context.router.push('/ensayo/item/' + id);
  }

  render() {
    const { classes, Viewer } = this.props;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        Viewer.Ensayos.edges.map(edge =>
        _react2.default.createElement(_Card2.default, { key: edge.node.id, className: classes.card },
          _react2.default.createElement(_Card.CardHeader, { title: edge.node.Ensayo_Title }),

          _react2.default.createElement(_Card.CardContent, { onClick: () => this._handle_onClick(edge.node.id) },
            edge.node.Ensayo_Description)))));





  }}EnsayoPublicList.contextTypes = { router: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(EnsayoPublicList), { Viewer: function () {return require('./__generated__/EnsayoPublicList_Viewer.graphql');} });
//# sourceMappingURL=EnsayoPublicList.js.map