/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react'

import {ListItem} from 'material-ui/List'

// TODO: x1000 wrap it in Relay component to retrieve profile photo, for instance
export default class UserListItem extends React.Component
{
  render()
  {
    return <ListItem
      primaryText={ this.props.Viewer.User_DisplayName }
   />
  }

  /*
  Example with profile photo as URL stored in field:

  import Avatar from 'material-ui/Avatar'

  ...

  <ListItem
    primaryText={ this.props.User_DisplayName }
    leftAvatar={<Avatar src={ this.props.User_ProfilePhoto } />}
  />
  */
}
