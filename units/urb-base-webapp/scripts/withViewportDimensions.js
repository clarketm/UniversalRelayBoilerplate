// @flow

import PropTypes from 'prop-types'
import React from 'react'

import type { ViewportDimensionType } from './ViewportDimensionType'

export default function withViewportDimensions(
  WrappedComponent: Object,
  dimensions: Array<ViewportDimensionType>
) {
  // ...and returns another component...
  return class extends React.Component<Object, Object> {
    static contextTypes = {
      rbCtx: PropTypes.object.isRequired,
    }

    constructor( props: Object, context: Object ) {
      super( props, context )

      const { viewportDimensions } = context.rbCtx

      const state = {}

      for ( let dimension of dimensions )
        state[dimension] = viewportDimensions.get( this, dimension )

      this.state = state
    }

    // componentDidMount() {
    //   // ... that takes care of the subscription...
    //   DataSource.addChangeListener( this.handleChange )
    // }

    componentWillUnmount() {
      const { viewportDimensions } = this.context.rbCtx

      viewportDimensions.removeComponent( this )
    }

    _handle_ViewportDimensionChange = () => {
      const { viewportDimensions } = this.context.rbCtx

      const state = {}

      for ( let dimension of dimensions )
        state[dimension] = viewportDimensions.get( this, dimension )

      this.setState( state )
    }

    render() {
      const props = Object.assign({}, this.state, this.props )

      return <WrappedComponent {...props} />
    }
  }
}
