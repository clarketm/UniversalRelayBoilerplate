// @flow

import React from 'react'
import spacing from 'material-ui/styles/spacing'

import { LARGE, MEDIUM } from '../scripts/ViewportDimensions'


export default class ResponsiveContentArea extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object,
    rbContext: React.PropTypes.object,
  }

  getStyles() {

    const styles = {
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
    }

    const muiSize = this.context.rbContext.viewportDimensions.get( this, 'muiSize' )
    if( muiSize === MEDIUM || muiSize === LARGE )
      styles.content = Object.assign( styles.content, styles.contentWhenMedium )

    return styles
  }

  render() {

    const styles = this.getStyles()
    const { prepareStyles } = this.context.muiTheme

    return(
      <div style={ prepareStyles( styles.root ) }>
        <div style={ prepareStyles( styles.content )} >
          { this.props.children }
        </div>
      </div>
    )
  }
}
