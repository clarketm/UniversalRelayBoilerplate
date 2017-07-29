// @flow

import React from 'react'
import Relay from 'react-relay'

import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import { ListItem } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import ToDoUpdateStatusMutation from '../../relay/ToDoUpdateStatusMutation'
import ToDoDeleteMutation from '../../relay/ToDoDeleteMutation'
import ToDoUpdateRenameMutation from '../../relay/ToDoUpdateRenameMutation'

import ToDo_Properties from './ToDo_Properties'

class ToDo_Item extends React.Component {
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  _handle_updateHandler_ToDo = ToDo_properties => {
    this.context.relay.commitUpdate(
      new ToDoUpdateRenameMutation({ ToDo: this.props.ToDo, ...ToDo_properties }),
    )
  }

  _handle_onCheck_Completed = (event, ToDo_Complete) => {
    this.context.relay.commitUpdate(
      new ToDoUpdateStatusMutation({
        ToDo_Complete,
        ToDo: this.props.ToDo,
        Viewer: this.props.Viewer,
      }),
    )
  }

  _handleTextInputSave(ToDo_Text) {
    this.context.relay.commitUpdate(
      new ToDoUpdateRenameMutation({ ToDo: this.props.ToDo, ToDo_Text }),
    )
  }

  _handle_ToDoDelete() {
    this.context.relay.commitUpdate(
      new ToDoDeleteMutation({ ToDo: this.props.ToDo, Viewer: this.props.Viewer }),
    )
  }

  _handle_onItemTouchTap = (e, item) => {
    switch (item.ref) {
      case 'edit':
        this.refs.ToDo_Properties._handle_Open()
        break
      case 'delete':
        this._handle_ToDoDelete()
        break
      default:
        break
    }
  }

  render() {
    let rightIconMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <NavigationMoreVert />
          </IconButton>
        }
        onItemTouchTap={this._handle_onItemTouchTap}
      >
        <MenuItem ref="edit" value={0}>
          Edit
        </MenuItem>
        <MenuItem ref="delete" value={1}>
          Delete
        </MenuItem>
      </IconMenu>
    )

    return (
      <div>
        <ListItem
          primaryText={this.props.ToDo.ToDo_Text}
          leftCheckbox={
            <Checkbox
              defaultChecked={this.props.ToDo.ToDo_Complete}
              onCheck={this._handle_onCheck_Completed}
            />
          }
          rightIconButton={rightIconMenu}
        />
        <ToDo_Properties
          ref="ToDo_Properties"
          ToDo_Text={this.props.ToDo.ToDo_Text}
          updateHandler={this._handle_updateHandler_ToDo}
        />
      </div>
    )
  }
}

export default Relay.createContainer(ToDo_Item, {
  fragments: {
    ToDo: () => Relay.QL`
      fragment on ToDo {
        ToDo_Complete,
        id,
        ToDo_Text,
        ${ToDoUpdateStatusMutation.getFragment('ToDo')},
        ${ToDoDeleteMutation.getFragment('ToDo')},
        ${ToDoUpdateRenameMutation.getFragment('ToDo')},
      }
    `,
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ${ToDoUpdateStatusMutation.getFragment('Viewer')},
        ${ToDoDeleteMutation.getFragment('Viewer')},
      }
    `,
  },
})
