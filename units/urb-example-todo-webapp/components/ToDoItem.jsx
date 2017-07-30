// @flow

import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import { MoreVert } from 'material-ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ToDoUpdateStatusMutation from '../../urb-example-todo-client/relay/ToDoUpdateStatusMutation'
import ToDoDeleteMutation from '../../urb-example-todo-client/relay/ToDoDeleteMutation'
import ToDoUpdateRenameMutation from '../../urb-example-todo-client/relay/ToDoUpdateRenameMutation'
import ToDoProperties from './ToDoProperties'

class ToDoItem extends React.Component {
  propTypes: {
    Viewer: PropTypes.object.isRequired,
    ToDo: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state = {
    anchorEl: undefined,
    MenuIsOpen: false,
    PropertiesIsOpen: false,
  }

  _handle_onClickCheckbox = (event, ToDo_Complete) => {
    const { relay, Viewer, ToDo } = this.props

    ToDoUpdateStatusMutation.commit(relay.environment, Viewer, ToDo, ToDo_Complete)
  }

  _handle_handlerUpdate_Properties = ToDo_properties => {
    const { relay, ToDo } = this.props

    ToDoUpdateRenameMutation.commit(relay.environment, ToDo, ToDo_properties.ToDo_Text)
  }

  _handle_handlerClose_Properties = () => {
    this.setState({ PropertiesIsOpen: false })
  }

  handleClickListItem = event => {
    this.setState({ MenuIsOpen: true, anchorEl: event.currentTarget })
  }

  _handle_Menu_onClick_Edit = event => {
    this.setState({ MenuIsOpen: false, PropertiesIsOpen: true })
  }

  _handle_Menu_onClick_Delete = event => {
    this.setState({ MenuIsOpen: false })

    const { relay, Viewer, ToDo } = this.props

    ToDoDeleteMutation.commit(relay.environment, Viewer, ToDo)
  }

  handleRequestClose = () => {
    this.setState({ MenuIsOpen: false })
  }

  render() {
    const { ToDo_Complete, ToDo_Text } = this.props.ToDo

    return (
      <div>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={event => this._handle_onClickCheckbox(event, !ToDo_Complete)}
        >
          <Checkbox checked={ToDo_Complete} />
          <ListItemText primary={ToDo_Text} />
          <ListItemSecondaryAction>
            <IconButton onClick={this.handleClickListItem}>
              <MoreVert />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.MenuIsOpen}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem key="edit" onClick={event => this._handle_Menu_onClick_Edit(event)}>
            Edit
          </MenuItem>
          <MenuItem key="delete" onClick={event => this._handle_Menu_onClick_Delete(event)}>
            Delete
          </MenuItem>
        </Menu>
        <ToDoProperties
          ToDo_Text={ToDo_Text}
          handlerUpdate={this._handle_handlerUpdate_Properties}
          handlerClose={this._handle_handlerClose_Properties}
          open={this.state.PropertiesIsOpen}
        />
      </div>
    )
  }
}

export default createFragmentContainer(ToDoItem, {
  Viewer: graphql`
    fragment ToDoItem_Viewer on Viewer {
      id
    }
  `,
  ToDo: graphql`
    fragment ToDoItem_ToDo on ToDo {
      id
      ToDo_Complete
      ToDo_Text
    }
  `,
})
