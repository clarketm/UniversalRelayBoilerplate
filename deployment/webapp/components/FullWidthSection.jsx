// @flow

import React, { Component, PropTypes } from 'react'
import ClearFix from 'material-ui/internal/ClearFix'
import spacing from 'material-ui/styles/spacing'

import { SMALL, MEDIUM, LARGE } from '../scripts/ViewportDimensions'

const desktopGutter = spacing.desktopGutter

export default class FullWidthSection extends Component {
  static propTypes = {
    children: PropTypes.node,
    contentStyle: PropTypes.object,
    contentType: PropTypes.string,
    style: PropTypes.object,
    useContent: PropTypes.bool,
  }

  static contextTypes = {
    rbContext: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    useContent: false,
    contentType: 'div',
  }

  getStyles() {
    return {
      root: {
        padding: desktopGutter,
        boxSizing: 'border-box',
      },
      content: {
        maxWidth: 1200,
        margin: '0 auto',
      },
      rootWhenSmall: {
        paddingTop: desktopGutter * 1,
        paddingBottom: desktopGutter * 1,
      },
      rootWhenMedium: {
        paddingTop: desktopGutter * 2,
        paddingBottom: desktopGutter * 2,
      },
      rootWhenLarge: {
        paddingTop: desktopGutter * 3,
        paddingBottom: desktopGutter * 3,
      },
    }
  }

  render() {
    const { style, useContent, contentType, contentStyle, ...other } = this.props

    const muiSize = this.context.rbContext.viewportDimensions.get(this, 'muiSize')

    const styles = this.getStyles()

    let content
    if (useContent)
      content = React.createElement(
        contentType,
        { style: Object.assign(styles.content, contentStyle) },
        this.props.children,
      )
    else content = this.props.children

    return (
      <ClearFix
        {...other}
        style={Object.assign(
          styles.root,
          style,
          muiSize === SMALL && styles.rootWhenSmall,
          muiSize === MEDIUM && styles.rootWhenMedium,
          muiSize === LARGE && styles.rootWhenLarge,
        )}
      >
        {content}
      </ClearFix>
    )
  }
}
