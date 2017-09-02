// @flow

import PropTypes from 'prop-types'
import React from 'react'
import EventListener from 'react-event-listener'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import getWrapperRbCtx from '../../_configuration/urb-base-webapp/getWrapperRbCtx'
import createMUITheme from '../../_configuration/urb-base-webapp/createMUITheme'
import ViewportDimensions from '../scripts/ViewportDimensions'

export default class Wrapper extends React.Component<
  { appData: Object, children: any },
  any
> {
  muiTheme: Object
  rbCtx: Object

  static childContextTypes = {
    rbCtx: PropTypes.object,
  }

  constructor( props: Object, context: Object ) {
    super( props, context )

    // TODO x0100 If a property for innerWidth is provided, use it for the initial request

    // Descendants can add other items to rbCtx through getWrapperRbCtx
    this.rbCtx = getWrapperRbCtx()

    this.rbCtx.viewportDimensions = new ViewportDimensions()
    this.rbCtx.appData = this.props.appData

    this.muiTheme = createMUITheme( this.rbCtx )
  }

  componentDidMount() {
    this.handle_onResize() // Will populate the data structures for dimensions with current values
  }

  getChildContext() {
    return {
      rbCtx: this.rbCtx,
    }
  }

  handle_onResize = () => {
    this.rbCtx.viewportDimensions.handle_onResize()
  }

  render() {
    return (
      <EventListener target="window" onResize={this.handle_onResize}>
        <MuiThemeProvider theme={this.muiTheme}>
          {this.props.children}
        </MuiThemeProvider>
      </EventListener>
    )
  }
}
