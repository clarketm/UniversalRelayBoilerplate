// @flow

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import React from 'react'
import EventListener from 'react-event-listener'

import muiTheme from '../../configuration/webapp/muiTheme'
import ViewportDimensions from '../scripts/ViewportDimensions'

//

export default class Wrapper extends React.Component {
  muiTheme: Object
  rbContext: Object

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
    rbContext: React.PropTypes.object,
  }

  constructor(props: any, context: any) {
    super(props, context)

    // TODO x0100 If a property for innerWidth is provided, use it for the initial request

    // Descendants can add other items to rbContext
    this.rbContext = {}

    this.rbContext.viewportDimensions = new ViewportDimensions()

    this.muiTheme = getMuiTheme(muiTheme, {
      userAgent: this.props.userAgent || navigator.userAgent,
    })
  }

  componentDidMount() {
    this.handle_onResize() // Will populate the data structures for dimensions with current values
  }

  getChildContext() {
    return {
      muiTheme: this.muiTheme,
      rbContext: this.rbContext,
    }
  }

  handle_onResize = () => {
    this.rbContext.viewportDimensions.handle_onResize()
  }

  render() {
    return (
      <EventListener target="window" onResize={this.handle_onResize}>
        {this.props.children}
      </EventListener>
    )
  }
}
