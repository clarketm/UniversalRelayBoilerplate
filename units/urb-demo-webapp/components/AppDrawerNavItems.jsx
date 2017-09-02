// @flow

import List from 'material-ui/List'
import React from 'react'

import AppDrawerNavItem from '../../urb-appdrawer-webapp/components/AppDrawerNavItem'

export default class AppDrawernavItems extends React.Component<{}> {
  render() {
    return (
      <List>
        <AppDrawerNavItem
          key="/force-login"
          openImmediately={true}
          title="Force Login"
          to="/force-login"
        />
        <AppDrawerNavItem
          key="/todo"
          openImmediately={true}
          title="To Dos"
          to="/todo"
        />
        <AppDrawerNavItem
          key="/Ensayo/edit"
          openImmediately={true}
          title="Ensayo edit"
          to="/Ensayo/edit"
        />
        <AppDrawerNavItem
          key="/ensayo/in-place-edit"
          openImmediately={true}
          title="Ensayo in place"
          to="/ensayo/in-place-edit"
        />
        <AppDrawerNavItem
          key="/ensayo"
          openImmediately={true}
          title="Ensayo public"
          to="/ensayo"
        />
        <AppDrawerNavItem
          key="/inscriptio"
          openImmediately={true}
          title="Inscriptio"
          to="/inscriptio"
        />
        <AppDrawerNavItem
          key="/translaticiarum"
          openImmediately={true}
          title="Translaticiarum"
          to="/translaticiarum"
        />
      </List>
    )
  }
}
