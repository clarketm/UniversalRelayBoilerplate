// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import AppDrawerNavItem from './AppDrawerNavItem'

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary[500],
    },
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  anchor: {
    color: theme.palette.text.secondary,
  },
})

function renderNavItems() {
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

class AppDrawer extends React.Component<{
  classes: Object,
  className: string,
  docked: boolean,
  onRequestClose: Function,
  open: boolean
}> {
  render() {
    const classes = this.props.classes

    return (
      <Drawer
        className={this.props.className}
        classes={{
          paper: classes.paper,
        }}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
        docked={this.props.docked}
        keepMounted
      >
        <div className={classes.nav}>
          <Toolbar className={classes.toolbar}>
            <Typography type="title" gutterBottom color="inherit">
              Rebar ZZZ
            </Typography>
            <Divider absolute />
          </Toolbar>
          {renderNavItems()}
        </div>
      </Drawer>
    )
  }
}

export default withStyles( styles )( AppDrawer )
