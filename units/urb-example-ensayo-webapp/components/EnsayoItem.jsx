// @flow

import IconButton from 'material-ui/IconButton'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import { MoreVert } from 'material-ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoDeleteMutation from '../../urb-example-ensayo-client/relay/EnsayoDeleteMutation'
import EnsayoProperties from './EnsayoProperties'
import EnsayoUpdateMutation from '../../urb-example-ensayo-client/relay/EnsayoUpdateMutation'

class EnsayoItem extends React.Component {
  static propTypes = {
    Viewer: PropTypes.object.isRequired,
    Ensayo: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state: {
    anchorEl: ?Object,
    menuIsOpen: boolean,
    propertiesIsOpen: boolean,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      anchorEl: undefined,
      menuIsOpen: false,
      propertiesIsOpen: false,
    }
  }

  _handle_Update_Properties = ensayoProperties => {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = ensayoProperties
    const { relay, Ensayo } = this.props

    EnsayoUpdateMutation.commit(
      relay.environment,
      Ensayo,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content,
    )
  }

  _handle_Close_Properties = () => {
    this.setState({ propertiesIsOpen: false })
  }

  handleClickListItem = event => {
    this.setState({ menuIsOpen: true, anchorEl: event.currentTarget })
  }

  _handle_Menu_onClick_Edit = event => {
    this.setState({ menuIsOpen: false, propertiesIsOpen: true })
  }

  _handle_Menu_onClick_Delete = event => {
    this.setState({ menuIsOpen: false })

    const { relay, Viewer, Ensayo } = this.props

    EnsayoDeleteMutation.commit(relay.environment, Viewer, Ensayo)
  }

  handleRequestClose = () => {
    this.setState({ menuIsOpen: false })
  }

  render() {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props.Ensayo
    const { propertiesIsOpen } = this.state

    return (
      <div>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={this.handleClickListItem}
        >
          <ListItemText primary={Ensayo_Title} secondary={Ensayo_Description} />
        </ListItem>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.menuIsOpen}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem key="edit" onClick={event => this._handle_Menu_onClick_Edit(event)}>
            Edit
          </MenuItem>
          <MenuItem key="delete" onClick={event => this._handle_Menu_onClick_Delete(event)}>
            Delete
          </MenuItem>
        </Menu>
        {propertiesIsOpen &&
          <EnsayoProperties
            Ensayo_Title={Ensayo_Title}
            Ensayo_Description={Ensayo_Description}
            Ensayo_Content={Ensayo_Content}
            handlerUpdate={this._handle_Update_Properties}
            handlerClose={this._handle_Close_Properties}
          />}
      </div>
    )
  }
}

export default createFragmentContainer(EnsayoItem, {
  Viewer: graphql`
    fragment EnsayoItem_Viewer on Viewer {
      id
    }
  `,
  Ensayo: graphql`
    fragment EnsayoItem_Ensayo on Ensayo {
      id
      Ensayo_Title
      Ensayo_Description
      Ensayo_Content
    }
  `,
})
