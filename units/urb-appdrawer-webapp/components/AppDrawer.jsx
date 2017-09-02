// @flow

import React from 'react'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import AppDrawerNavItems from '../../_configuration/urb-appdrawer-webapp/AppDrawerNavItems'

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
        type={this.props.docked ? 'permanent' : 'persistent'}
      >
        <div className={classes.nav}>
          <Toolbar className={classes.toolbar}>
            <Typography type="title" gutterBottom color="inherit">
              Rebar ZZZ
            </Typography>
            <Divider absolute />
          </Toolbar>

          <AppDrawerNavItems />
        </div>
      </Drawer>
    )
  }
}

export default withStyles( styles )( AppDrawer )
