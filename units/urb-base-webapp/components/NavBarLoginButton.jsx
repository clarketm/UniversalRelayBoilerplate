// @flow

import Button from 'material-ui/Button'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import LoginDialog from './LoginDialog'

const styleSheet = createStyleSheet(theme => ({}))

class NavBarLoginButton extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    Viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state: {
    loginDialogIsOpen: boolean,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = { loginDialogIsOpen: false }
  }

  _handle_onClick_Login = () => {
    this.setState({ loginDialogIsOpen: true })
  }

  _handle_Login_Close = () => {
    this.setState({ loginDialogIsOpen: false })
  }

  _handle_Login_LogIn = () => {
    this.setState({ loginDialogIsOpen: false })
  }

  _handle_Login_NewUser = () => {
    this.setState({ loginDialogIsOpen: false })

    this.context.router.push('/user/new')
  }

  render() {
    const { classes } = this.props
    const { User_IsAnonymous, User_DisplayName } = this.props.Viewer

    return (
      <div>
        {User_IsAnonymous &&
          <Button color="contrast" onClick={this._handle_onClick_Login}>
            Login
          </Button>}
        {!User_IsAnonymous &&
          <Button color="contrast" onClick={this._handle_onClick_Login}>
            {User_DisplayName}
          </Button>}
        <LoginDialog
          open={this.state.loginDialogIsOpen}
          handlerClose={this._handle_Login_Close}
          handlerNewUser={this._handle_Login_NewUser}
        />
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles(styleSheet)(NavBarLoginButton),
  graphql`
    fragment NavBarLoginButton_Viewer on Viewer {
      User_IsAnonymous
      User_DisplayName
    }
  `,
)
