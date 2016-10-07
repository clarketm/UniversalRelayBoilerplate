/* @flow weak */
/* eslint react/prop-types: 0 */

import React from 'react'
import Relay from 'react-relay'

import {List, ListItem, makeSelectable} from 'material-ui/List'

const SelectableList = makeSelectable( List )

class NavMenu extends React.Component
{
  render( )
  {
    let nestedItems_Misc = [
      <ListItem primaryText="Home" value="/" />,
      <ListItem primaryText="Compendium" value="/compendium" />,
    ]
    if( ! this.props.Viewer.User_IsAnonymous )
    {
      nestedItems_Misc.push( <ListItem primaryText="User Profile" value="/user" /> )
      nestedItems_Misc.push( <ListItem primaryText="Force Login" value="/force_login" /> )
    }

    return (
      <SelectableList
        value={ this.props.value }
        onChange={ this.props.onChange }
      >

        <ListItem
          primaryText="Ensayo"
          primaryTogglesNestedList={true}
          nestedItems={ [
            <ListItem primaryText="View" value="/ensayo" />,
            <ListItem primaryText="Edit" value="/ensayo/edit" />,
          ] }
        />
        <ListItem
          primaryText="To Do"
          primaryTogglesNestedList={true}
          nestedItems={ [
            <ListItem primaryText="All" value="/todo" />,
            <ListItem primaryText="Active" value="/todo/active" />,
            <ListItem primaryText="Completed" value="/todo/completed" />,
          ] }
        />
        <ListItem
          primaryText="Translaticiarum"
          primaryTogglesNestedList={true}
          nestedItems={ [
            <ListItem primaryText="Grid" value="/translaticiarum" />,
            <ListItem primaryText="List" value="/translaticiarum/edit" />,
          ] }
        />
        <ListItem
          primaryText="Material-UI"
          primaryTogglesNestedList={true}
          nestedItems={ [
            <ListItem primaryText="Home" value="/mui" />,
            <ListItem primaryText="Library Icons" value="/mui/icons" />,
            <ListItem primaryText="Country Flags" value="/mui/icons_country_flags" />,
            <ListItem primaryText="Credit Cards" value="/mui/icons_credit_cards" />,
          ] }
        />

        <ListItem
          primaryText="Misc"
          primaryTogglesNestedList={true}
          nestedItems={ nestedItems_Misc }
        />

      </SelectableList>
    )
  }
}

export default Relay.createContainer( NavMenu, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        User_IsAnonymous,
      }
    `,
  },
} )
