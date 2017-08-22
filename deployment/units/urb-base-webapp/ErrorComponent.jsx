// @flow

import React from 'react'

class ErrorComponent extends React.Component<{
  httpStatus: number,
}> {
  render() {
    return (
      <div>
        An error has occurred: {this.props.httpStatus}
      </div>
    )
  }
}

export default ErrorComponent
