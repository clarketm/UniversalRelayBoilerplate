// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import List from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import AppDrawerNavItem from './AppDrawerNavItem'

const styleSheet = createStyleSheet('AppDrawer', theme => ({
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
}))

function renderNavItems() {
  return (
    <List>
      <AppDrawerNavItem key={1} openImmediately={true} title="To Dos" to="/todo" />
      <AppDrawerNavItem key={2} openImmediately={true} title="Ensayo edit" to="/ensayo/edit" />
      <AppDrawerNavItem
        key={3}
        openImmediately={true}
        title="Ensayo in place"
        to="/ensayo/in-place-edit"
      />
      <AppDrawerNavItem key={4} openImmediately={true} title="Ensayo public" to="/ensayo" />
    </List>
  )
}

function reduceChildRoutes(props, items, childRoute, index) {
  if (childRoute.nav) {
    if (childRoute.childRoutes && childRoute.childRoutes.length) {
      const openImmediately = props.routes.indexOf(childRoute) !== -1 || false
      items.push(
        <AppDrawerNavItem key={index} openImmediately={openImmediately} title={childRoute.title}>
          {renderNavItems()}
        </AppDrawerNavItem>,
      )
    } else {
      items.push(
        <AppDrawerNavItem
          key={index}
          title={childRoute.title}
          to={childRoute.path}
          onClick={props.onRequestClose}
        />,
      )
    }
  }
  return items
}

function AppDrawer(props) {
  const classes = props.classes
  const GITHUB_RELEASE_BASE_URL = 'https://github.com/callemall/material-ui/releases/tag/'

  return (
    <Drawer
      className={props.className}
      classes={{
        paper: classes.paper,
      }}
      open={props.open}
      onRequestClose={props.onRequestClose}
      docked={props.docked}
      keepMounted
    >
      <div className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <Typography type="title" gutterBottom color="inherit">
            Material-UI
          </Typography>
          <Divider absolute />
        </Toolbar>
        {renderNavItems()}
      </div>
    </Drawer>
  )
}

//

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  docked: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default withStyles(styleSheet)(AppDrawer)
