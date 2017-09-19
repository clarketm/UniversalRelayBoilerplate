'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _List = require('material-ui/List');var _List2 = _interopRequireDefault(_List);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _EnsayoInPlaceEditItem = require('./EnsayoInPlaceEditItem');var _EnsayoInPlaceEditItem2 = _interopRequireDefault(_EnsayoInPlaceEditItem);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class EnsayoInPaceEditList extends _react2.default.Component





{
  render() {
    const { Viewer } = this.props;
    const { Ensayos } = Viewer;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_List2.default, null,
          Ensayos.edges.map(({ node }) =>
          _react2.default.createElement(_EnsayoInPlaceEditItem2.default, {
            key: node.id,
            Viewer: Viewer,
            Ensayo: node })))));





  }}exports.default =


(0, _reactRelay.createFragmentContainer)(
EnsayoInPaceEditList, { Viewer: function () {return require('./__generated__/EnsayoInPaceEditList_Viewer.graphql');} });
//# sourceMappingURL=EnsayoInPaceEditList.js.map