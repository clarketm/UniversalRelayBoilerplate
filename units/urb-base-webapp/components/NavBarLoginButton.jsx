// @flow

import Button from 'material-ui/Button'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const styleSheet = createStyleSheet(theme => ({}))

class NavBarLoginButton extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    Viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state: {
    propertiesIsOpen: boolean,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = { propertiesIsOpen: false }
  }

  render() {
    const classes = this.props.classes

    return (
      <div>
        <Button color="contrast">Login</Button>
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles(styleSheet)(NavBarLoginButton),
  graphql`
    fragment NavBarLoginButton_Viewer on Viewer {
      id
    }
  `,
)
