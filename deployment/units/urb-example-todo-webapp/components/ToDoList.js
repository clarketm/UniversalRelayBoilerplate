'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Checkbox = require('material-ui/Checkbox');var _Checkbox2 = _interopRequireDefault(_Checkbox);
var _Form = require('material-ui/Form');
var _List = require('material-ui/List');var _List2 = _interopRequireDefault(_List);
var _styles = require('material-ui/styles');
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');
var _Tabs = require('material-ui/Tabs');var _Tabs2 = _interopRequireDefault(_Tabs);

var _ToDoListUpdateMarkAllMutation = require('../../urb-example-todo-client/relay/ToDoListUpdateMarkAllMutation');var _ToDoListUpdateMarkAllMutation2 = _interopRequireDefault(_ToDoListUpdateMarkAllMutation);

var _ToDoItem = require('./ToDoItem');var _ToDoItem2 = _interopRequireDefault(_ToDoItem);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper } });



class ToDoList extends _react2.default.Component





{constructor(...args) {var _temp;return _temp = super(...args), this.





    _handle_onClick_MarkAll = (event, checked) => {
      const { relay, Viewer } = this.props;
      const { variables } = this.context.relay;
      const ToDo_Complete = checked;

      _ToDoListUpdateMarkAllMutation2.default.commit(
      relay.environment,
      Viewer,
      Viewer.ToDos,
      ToDo_Complete,
      variables.status);

    }, this.

    _handle_onChange = (event, tabsValue) => {
      const url =
      tabsValue === 2 ?
      '/todo/completed' :
      tabsValue === 1 ? '/todo/active' : '/todo';
      this.context.router.push(url);
    }, _temp;}

  renderTabs() {
    const status = this.context.relay.variables.status;
    const tabsValue = status === 'active' ? 1 : status === 'completed' ? 2 : 0;

    return (
      _react2.default.createElement(_Tabs2.default, { value: tabsValue, onChange: this._handle_onChange },
        _react2.default.createElement(_Tabs.Tab, { label: 'All' }),
        _react2.default.createElement(_Tabs.Tab, { label: 'Active' }),
        _react2.default.createElement(_Tabs.Tab, { label: 'Completed' })));


  }

  render() {
    const { Viewer } = this.props;
    const { ToDos, ToDo_TotalCount, ToDo_CompletedCount } = Viewer;

    if (!ToDo_TotalCount) {
      return null;
    }

    return (
      _react2.default.createElement('div', null,
        this.renderTabs(),
        _react2.default.createElement(_Form.FormGroup, { row: true },
          _react2.default.createElement(_Form.FormControlLabel, {
            control:
            _react2.default.createElement(_Checkbox2.default, {
              checked: ToDo_TotalCount === ToDo_CompletedCount,
              onChange: this._handle_onClick_MarkAll }),


            label: 'Mark all as complete' })),


        _react2.default.createElement(_List2.default, null,
          ToDos.edges.map(({ node }) =>
          _react2.default.createElement(_ToDoItem2.default, { key: node.id, Viewer: Viewer, ToDo: node })))));




  }}ToDoList.contextTypes = { relay: _propTypes2.default.object, router: _propTypes2.default.object };exports.default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(ToDoList), { Viewer: function () {return require('./__generated__/ToDoList_Viewer.graphql');} });
//# sourceMappingURL=ToDoList.js.map