// @flow

import Button from 'material-ui/Button'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'

const styleSheet = createStyleSheet(theme => ({
  grow: {
    flex: '1 1 auto',
  },
}))

class LoginDialog extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handlerClose: PropTypes.func.isRequired,
    handlerLogIn: PropTypes.func.isRequired,
    handlerNewUser: PropTypes.func.isRequired,
  }

  state: {
    AccountName: string,
    AccountPassword: string,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    const { AccountName, AccountPassword } = this.props

    this.state = {
      AccountName: '',
      AccountPassword: '',
    }
  }

  _handle_Close = () => {
    this.props.handlerClose()
  }

  _handle_LogIn = () => {
    this.props.handlerLogIn()
  }

  _handle_NewUser = () => {
    this.props.handlerNewUser()
  }

  render() {
    const classes = this.props.classes
    const { AccountName, AccountPassword } = this.state

    return (
      <div>
        <Dialog open={this.props.open} transition={Slide} onRequestClose={this._handle_Close}>
          <DialogTitle>Log In</DialogTitle>

          <DialogContent>
            <TextField
              label="Account Name"
              fullWidth={true}
              value={AccountName}
              onChange={event => this.setState({ AccountName: event.target.value })}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth={true}
              value={AccountPassword}
              onChange={event => this.setState({ AccountPassword: event.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button color="accent" onClick={this._handle_NewUser}>
              New User
            </Button>
            <div className={classes.grow} />
            <Button onClick={this._handle_Close}>Cancel</Button>
            <Button color="primary" onClick={this._handle_LogIn}>
              Log In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styleSheet)(LoginDialog)
