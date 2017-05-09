// @flow

import React from 'react'
import EventListener from 'react-event-listener'

import ViewportDimensions from '../scripts/ViewportDimensions'


export default class Wrapper extends React.Component {

  viewportDimensions: ViewportDimensions;

  static childContextTypes = {
    rbContext: React.PropTypes.object,
  };

  constructor( props: any, context: any ) {

    super( props, context )

    // TODO x0100 If a property for innerWidth is provided, use it for the initial request

    this.viewportDimensions = new ViewportDimensions()
  }

  componentDidMount() {

    this.handle_onResize() // Will populate the data structures for dimensions with current values
  }

  getChildContext() {

    return( {
      rbContext: {
        viewportDimensions: this.viewportDimensions
      }
    } )
  }

  handle_onResize = () => {

    this.viewportDimensions.handle_onResize()
  }

  render() {

    return(
      <EventListener target='window' onResize={ this.handle_onResize }>
        { this.props.children }
      </EventListener>
    )
  }
}
