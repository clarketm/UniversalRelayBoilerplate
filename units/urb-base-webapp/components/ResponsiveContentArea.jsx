// @flow

import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import spacing from 'material-ui/styles/spacing'

const styleSheet = createStyleSheet('AppContent', theme => ({
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up(948)]: {
    content: {
      maxWidth: 900,
    },
  },
}))

class ResponsiveContentArea extends React.Component {
  static contextTypes = {
    rbContext: PropTypes.object,
  }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.content}>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styleSheet)(ResponsiveContentArea)
