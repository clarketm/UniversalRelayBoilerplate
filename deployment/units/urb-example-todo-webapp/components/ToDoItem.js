'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Checkbox = require('material-ui/Checkbox');var _Checkbox2 = _interopRequireDefault(_Checkbox);
var _IconButton = require('material-ui/IconButton');var _IconButton2 = _interopRequireDefault(_IconButton);
var _List = require('material-ui/List');




var _Menu = require('material-ui/Menu');var _Menu2 = _interopRequireDefault(_Menu);
var _materialUiIcons = require('material-ui-icons');
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactRelay = require('react-relay');

var _ToDoUpdateStatusMutation = require('../../urb-example-todo-client/relay/ToDoUpdateStatusMutation');var _ToDoUpdateStatusMutation2 = _interopRequireDefault(_ToDoUpdateStatusMutation);
var _ToDoDeleteMutation = require('../../urb-example-todo-client/relay/ToDoDeleteMutation');var _ToDoDeleteMutation2 = _interopRequireDefault(_ToDoDeleteMutation);
var _ToDoUpdateRenameMutation = require('../../urb-example-todo-client/relay/ToDoUpdateRenameMutation');var _ToDoUpdateRenameMutation2 = _interopRequireDefault(_ToDoUpdateRenameMutation);

var _ToDoProperties = require('./ToDoProperties');var _ToDoProperties2 = _interopRequireDefault(_ToDoProperties);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class ToDoItem extends _react2.default.Component










{
  constructor(props, context) {
    super(props, context);this.








    _handle_onClickCheckbox = (event, ToDo_Complete) => {
      const { relay, Viewer, ToDo } = this.props;

      _ToDoUpdateStatusMutation2.default.commit(
      relay.environment,
      Viewer,
      ToDo,
      ToDo_Complete);

    };this.

    _handle_Update_Properties = ToDo_properties => {
      const { relay, ToDo } = this.props;

      _ToDoUpdateRenameMutation2.default.commit(
      relay.environment,
      ToDo,
      ToDo_properties.ToDo_Text);

    };this.

    _handle_Close_Properties = () => {
      this.setState({ propertiesIsOpen: false });
    };this.

    handleClickListItem = event => {
      this.setState({ menuIsOpen: true, anchorEl: event.currentTarget });
    };this.

    _handle_Menu_onClick_Edit = event => {
      this.setState({ menuIsOpen: false, propertiesIsOpen: true });
    };this.

    _handle_Menu_onClick_Delete = event => {
      this.setState({ menuIsOpen: false });

      const { relay, Viewer, ToDo } = this.props;

      _ToDoDeleteMutation2.default.commit(relay.environment, Viewer, ToDo);
    };this.

    handleRequestClose = () => {
      this.setState({ menuIsOpen: false });
    };this.state = { anchorEl: undefined, menuIsOpen: false, propertiesIsOpen: false };}

  render() {
    const { ToDo_Complete, ToDo_Text } = this.props.ToDo;

    return (
      _react2.default.createElement('div', null,
        _react2.default.createElement(_List.ListItem, {
            button: true,
            'aria-haspopup': 'true',
            'aria-controls': 'lock-menu',
            onClick: event => this._handle_onClickCheckbox(event, !ToDo_Complete) },

          _react2.default.createElement(_Checkbox2.default, { checked: ToDo_Complete }),
          _react2.default.createElement(_List.ListItemText, { primary: ToDo_Text }),
          _react2.default.createElement(_List.ListItemSecondaryAction, null,
            _react2.default.createElement(_IconButton2.default, { onClick: this.handleClickListItem },
              _react2.default.createElement(_materialUiIcons.MoreVert, null)))),



        _react2.default.createElement(_Menu2.default, {
            id: 'lock-menu',
            anchorEl: this.state.anchorEl,
            open: this.state.menuIsOpen,
            onRequestClose: this.handleRequestClose },

          _react2.default.createElement(_Menu.MenuItem, {
              key: 'edit',
              onClick: event => this._handle_Menu_onClick_Edit(event) }, 'Edit'),



          _react2.default.createElement(_Menu.MenuItem, {
              key: 'delete',
              onClick: event => this._handle_Menu_onClick_Delete(event) }, 'Delete')),




        _react2.default.createElement(_ToDoProperties2.default, {
          ToDo_Text: ToDo_Text,
          handlerUpdate: this._handle_Update_Properties,
          handlerClose: this._handle_Close_Properties,
          open: this.state.propertiesIsOpen })));



  }}exports.default =


(0, _reactRelay.createFragmentContainer)(ToDoItem, {
  Viewer: function () {return require('./__generated__/ToDoItem_Viewer.graphql');},




  ToDo: function () {return require('./__generated__/ToDoItem_ToDo.graphql');} });
//# sourceMappingURL=ToDoItem.js.map