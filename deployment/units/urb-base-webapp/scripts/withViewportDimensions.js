'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =






withViewportDimensions;var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);var _react = require('react');var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function withViewportDimensions(
WrappedComponent,
dimensions)
{var _class, _temp, _initialiseProps;
  // ...and returns another component...
  return _temp = _class = class extends _react2.default.Component {




    constructor(props, context) {
      super(props, context);_initialiseProps.call(this);

      const { viewportDimensions } = context.rbCtx;

      const state = {};

      for (let dimension of dimensions)
      state[dimension] = viewportDimensions.get(this, dimension);

      this.state = state;
    }

    // componentDidMount() {
    //   // ... that takes care of the subscription...
    //   DataSource.addChangeListener( this.handleChange )
    // }

    componentWillUnmount() {
      const { viewportDimensions } = this.context.rbCtx;

      viewportDimensions.removeComponent(this);
    }












    render() {
      const props = Object.assign({}, this.state, this.props);

      return _react2.default.createElement(WrappedComponent, props);
    }}, _class.contextTypes = { rbCtx: _propTypes2.default.object.isRequired }, _initialiseProps = function () {this._handle_ViewportDimensionChange = () => {const { viewportDimensions } = this.context.rbCtx;const state = {};for (let dimension of dimensions) state[dimension] = viewportDimensions.get(this, dimension);this.setState(state);};}, _temp;

}
//# sourceMappingURL=withViewportDimensions.js.map