// @flow

import { withStyles } from 'material-ui/styles'
import React from 'react'

const styles = theme => ({
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up( 948 )]: {
    content: {
      maxWidth: 900,
    },
  },
})

class ResponsiveContentArea extends React.Component<any, any> {
  static contextTypes = {
    rbCtx: Object,
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.content}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles( styles )( ResponsiveContentArea )
