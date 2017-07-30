// @flow

import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import spacing from 'material-ui/styles/spacing'

import { LARGE, MEDIUM } from '../scripts/ViewportDimensions'

const styleSheet = createStyleSheet('ResponseiveContentArea', theme => ({
  root: {
    paddingTop: spacing.unit,
    minHeight: 400,
  },
  content: {
    margin: spacing.unit,
  },
  contentWhenMedium: {
    margin: `${spacing.unit * 2}px ${spacing.unit * 3}px`,
  },
}))

class ResponsiveContentArea extends React.Component {
  static contextTypes = {
    muiTheme: PropTypes.object,
    rbContext: PropTypes.object,
  }

  // ZZZ
  // getStyles() {
  //   const muiSize = this.context.rbContext.viewportDimensions.get(this, 'muiSize')
  //   if (muiSize === MEDIUM || muiSize === LARGE)
  //     styles.content = Object.assign(styles.content, styles.contentWhenMedium)
  // }

  render() {
    const classes = this.props.classes

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withStyles(styleSheet)(ResponsiveContentArea)
