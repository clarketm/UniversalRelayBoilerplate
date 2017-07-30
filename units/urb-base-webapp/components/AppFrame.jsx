// @flow

import React, { Component } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'

const styleSheet = createStyleSheet(theme => ({}))

class AppFrame extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styleSheet)(AppFrame)
