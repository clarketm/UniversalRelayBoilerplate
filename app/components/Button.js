// @flow

import PropTypes from 'prop-types'
import React from 'react'
import { Button as ElementsButton } from 'react-native-elements'

export default class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.string.isRequired,
  }

  static contextTypes = {
    uiTheme: PropTypes.object,
  }

  render() {
    const kindProps = this.context.uiTheme.buttonKinds[this.props.kind]

    if (kindProps == null) throw new Error('Button kind ' + this.props.kind + ' not found.')

    const props = Object.assign({}, kindProps, this.props)

    delete props.kind

    return <ElementsButton {...props} />
  }
}
