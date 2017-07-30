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
  propTypes: {
    Viewer: PropTypes.object.isRequired,
    Ensayo: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state = {
    anchorEl: undefined,
    MenuIsOpen: false,
    PropertiesIsOpen: false,
  }

  _handle_handlerUpdate_Properties = ensayoProperties => {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = ensayoProperties
    const { relay, Ensayo } = this.props

    EnsayoUpdateMutation.commit(
      relay.environment,
      Ensayo,
      Ensayo_Content,
      Ensayo_Title,
      Ensayo_Description,
    )
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

    const { relay, Viewer, Ensayo } = this.props

    EnsayoDeleteMutation.commit(relay.environment, Viewer, Ensayo)
  }

  handleRequestClose = () => {
    this.setState({ MenuIsOpen: false })
  }

  render() {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props.Ensayo

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
        <EnsayoProperties
          Ensayo_Title={Ensayo_Title}
          Ensayo_Description={Ensayo_Description}
          Ensayo_Content={Ensayo_Content}
          handlerUpdate={this._handle_handlerUpdate_Properties}
          handlerClose={this._handle_handlerClose_Properties}
          open={this.state.PropertiesIsOpen}
        />
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
