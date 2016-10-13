/* @flow weak */

import React from 'react'
import
{
  Button as ElementsButton
}
from 'react-native-elements'


export default class Button extends React.Component
{
  static propTypes =
  {
    kind: React.PropTypes.string.isRequired,
  }

  static contextTypes =
  {
    uiTheme: React.PropTypes.object,
  }

  render()
  {
    const kindProps = this.context.uiTheme.buttonKinds[ this.props.kind ]

    if( kindProps == null )
      throw new Error( "Button kind " + this.props.kind + " not found." )

    const props = Object.assign( {}, kindProps, this.props )

    delete props.kind

    console.log( props )

    return <ElementsButton { ...props } />
  }
}
