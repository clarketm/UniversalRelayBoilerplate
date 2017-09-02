// @flow

import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import {
  registerAuthenticationRequiredCallback,
  unregisterAuthenticationRequiredCallback,
} from './RequiresAuthentication'
import LoginDialog from './LoginDialog'

const styles = theme => ({})

class NavBarLoginButton extends React.Component<
  {
    Viewer: Object,
    relay: Object
  },
  {
    anchorEl: ?Object,
    loginDialogIsOpen: boolean,
    userMenuIsOpen: boolean
  }
> {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = {
      anchorEl: undefined,
      loginDialogIsOpen: false,
      userMenuIsOpen: false,
    }
  }

  // Handle popping open the login dialog if authentication is required
  componentWillMount() {
    registerAuthenticationRequiredCallback( this._handle_onClick_Login )
  }

  componentWillUnmount() {
    unregisterAuthenticationRequiredCallback()
  }

  _handle_onClick_Login = () => {
    this.setState({ loginDialogIsOpen: true, userMenuIsOpen: false })
  }

  _handle_onClick_Profile = () => {
    this.setState({ userMenuIsOpen: false })
  }

  _handle_Login_Close = () => {
    this.setState({ loginDialogIsOpen: false })
  }

  _handle_onClick_UserMenu = event => {
    this.setState({ userMenuIsOpen: true, anchorEl: event.currentTarget })
  }

  _handle_UserMenu_Close = () => {
    this.setState({ userMenuIsOpen: false })
  }

  _handle_onClick_Logout = () => {
    this.setState({ userMenuIsOpen: false })
    this.context.router.push( '/user/logout' )
  }

  _handle_Login_NewUser = () => {
    this.setState({ loginDialogIsOpen: false })

    this.context.router.push( '/user/new' )
  }

  render() {
    const { User_IsAnonymous, User_DisplayName } = this.props.Viewer
    const { loginDialogIsOpen, userMenuIsOpen } = this.state

    return (
      <div>
        {User_IsAnonymous && (
          <Button color="contrast" onClick={this._handle_onClick_Login}>
            Login
          </Button>
        )}
        {!User_IsAnonymous && (
          <Button color="contrast" onClick={this._handle_onClick_UserMenu}>
            {User_DisplayName}
          </Button>
        )}
        <LoginDialog
          open={loginDialogIsOpen}
          handlerClose={this._handle_Login_Close}
          handlerNewUser={this._handle_Login_NewUser}
        />
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={userMenuIsOpen}
          onRequestClose={this._handle_UserMenu_Close}
        >
          <MenuItem key="profile" onClick={this._handle_onClick_Profile}>
            Profile
          </MenuItem>
          <MenuItem key="login" onClick={this._handle_onClick_Login}>
            Login as a different user
          </MenuItem>
          <MenuItem key="logout" onClick={this._handle_onClick_Logout}>
            Log out
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( NavBarLoginButton ),
  graphql`
    fragment NavBarLoginButton_Viewer on Viewer {
      User_IsAnonymous
      User_DisplayName
    }
  `
)
