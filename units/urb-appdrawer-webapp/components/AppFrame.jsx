// @flow

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import NavBarLoginButton from '../../urb-account-management-webapp/components/NavBarLoginButton'

import AppDrawer from './AppDrawer'

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
  appFrame: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create( 'width' ),
  },
  // appBarHome: {
  //   backgroundColor: 'transparent',
  //   boxShadow: 'none',
  // },
  [theme.breakpoints.up( 'lg' )]: {
    drawer: {
      width: '250px',
    },
    appBarShift: {
      width: 'calc(100% - 250px)',
    },
    navIconHide: {
      display: 'none',
    },
  },
})

class AppFrame extends Component<any, { drawerOpen: boolean }> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = { drawerOpen: false }
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const { children, classes, Viewer } = this.props

    let drawerDocked = false

    let appBarClassName = classes.appBar
    let navIconClassName = classes.icon

    if ( drawerDocked ) {
      navIconClassName += ` ${classes.navIconHide}`
      appBarClassName += ` ${classes.appBarShift}`
    } else {
      appBarClassName += ` ${classes.appBarHome}`
    }

    const title = 'Hello World'

    return (
      <div className={classes.appFrame}>
        <AppBar className={appBarClassName}>
          <Toolbar>
            <IconButton
              color="contrast"
              onClick={this.handleDrawerToggle}
              className={navIconClassName}
            >
              <MenuIcon />
            </IconButton>
            {title !== null && (
              <Typography
                className={classes.title}
                type="title"
                color="inherit"
                noWrap
              >
                {title}
              </Typography>
            )}
            <div className={classes.grow} />
            <NavBarLoginButton Viewer={Viewer} />
          </Toolbar>
        </AppBar>
        <AppDrawer
          className={classes.drawer}
          docked={drawerDocked}
          onRequestClose={this.handleDrawerClose}
          open={drawerDocked || this.state.drawerOpen}
        />
        {children}
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( AppFrame ),
  graphql`
    fragment AppFrame_Viewer on Viewer {
      UserToken2
      ...NavBarLoginButton_Viewer
    }
  `
)
