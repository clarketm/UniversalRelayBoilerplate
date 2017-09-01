// @flow

import List from 'material-ui/List'
import React from 'react'

import AppDrawerNavItem from '../../urb-appdrawer-webapp/components/AppDrawerNavItem'

export default class AppDrawernavItems extends React.Component<{}> {
  render() {
    return (
      <List>
        <AppDrawerNavItem
          key={1}
          openImmediately={true}
          title="To Dos"
          to="/todo"
        />
        <AppDrawerNavItem
          key={2}
          openImmediately={true}
          title="Ensayo edit"
          to="/Ensayo/edit"
        />
        <AppDrawerNavItem
          key={3}
          openImmediately={true}
          title="Ensayo in place"
          to="/Ensayo/in-place-edit"
        />
        <AppDrawerNavItem
          key={4}
          openImmediately={true}
          title="Ensayo public"
          to="/Ensayo"
        />
        <AppDrawerNavItem
          key={5}
          openImmediately={true}
          title="Inscriptio"
          to="/inscriptio"
        />
        <AppDrawerNavItem
          key={6}
          openImmediately={true}
          title="Translaticiarum"
          to="/translaticiarum"
        />
      </List>
    )
  }
}
