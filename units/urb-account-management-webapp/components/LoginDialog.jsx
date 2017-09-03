// @flow

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import { LinearProgress } from 'material-ui/Progress'
import Slide from 'material-ui/transitions/Slide'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import React from 'react'

const styles = theme => ({
  grow: {
    flex: '1 1 auto',
  },
})

class LoginDialog extends React.Component<
  {
    UserAccount_Identifier: string,
    User_Secret: string,
    open: boolean,
    handlerClose: Function,
    handlerNewUser: Function,
    classes: Object
  },
  {
    currentOperation: 'challenge' | 'in progress' | 'failure',
    errorMessage: string,
    UserAccount_Identifier: string,
    User_Secret: string
  }
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = {
      currentOperation: 'challenge',
      errorMessage: '',
      UserAccount_Identifier: '',
      User_Secret: '',
    }
  }

  _handle_Close = () => {
    this.props.handlerClose()
  }

  _handle_onClick_LogIn = async() => {
    const { UserAccount_Identifier, User_Secret } = this.state

    this.setState({
      currentOperation: 'in progress',
      User_Secret: '', // In order to prevent the password from being accessed later
    })

    try {
      const loc = window.location
      const host = loc.protocol + '//' + loc.hostname + ':' + loc.port

      const response = await fetch( host + '/auth/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserAccount_Identifier: UserAccount_Identifier,
          User_Secret: User_Secret,
        }),
      })

      const responseData = await response.json()

      if ( responseData.success ) {
        // In case of success, realod the application from server
        window.location.replace( window.location.href, '' )
      } else {
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage: responseData.error,
        }) // ZZZ Does server really send the reason for the failed login?
      }
    } catch ( err ) {
      // In case response could not be received properly, tell the user
      // In case of error, tell user what the error is
      this.setState({
        currentOperation: 'failure',
        errorMessage:
          'Did not receive proper response from server. Please try again. Message:' +
          err.message,
      })
    }
  }

  _handle_onCLick_NewUser = () => {
    this.props.handlerNewUser()
  }

  _handle_onCLick_CancelLogIn = () => {
    this.setState({
      currentOperation: 'failure',
      errorMessage: 'Log in has been canceled',
    })
  }

  _handle_onClick_TryAgain = () => {
    this.setState({
      currentOperation: 'challenge',
      errorMessage: '',
    })
  }

  renderChallenge() {
    const { classes, open } = this.props
    const { UserAccount_Identifier, User_Secret } = this.state

    return (
      <Dialog
        open={open}
        transition={Slide}
        onRequestClose={this._handle_Close}
      >
        <DialogTitle>Log In</DialogTitle>

        <DialogContent>
          <TextField
            label="Account Name"
            fullWidth={true}
            value={UserAccount_Identifier}
            onChange={event =>
              this.setState({ UserAccount_Identifier: event.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth={true}
            value={User_Secret}
            onChange={event =>
              this.setState({ User_Secret: event.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button color="accent" onClick={this._handle_onCLick_NewUser}>
            New User
          </Button>
          <div className={classes.grow} />
          <Button onClick={this._handle_Close}>Cancel</Button>
          <Button color="primary" onClick={this._handle_onClick_LogIn}>
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  renderInProgress() {
    const { open } = this.props
    const { UserAccount_Identifier } = this.state

    return (
      <Dialog open={open} onRequestClose={this._handle_Close}>
        <DialogTitle>Logging in</DialogTitle>

        <DialogContent>
          <Typography component="p">
            Logging in as
            <br />
            {UserAccount_Identifier}
          </Typography>
          <LinearProgress mode="query" />
        </DialogContent>
        <DialogActions>
          <Button color="accent" onClick={this._handle_onCLick_CancelLogIn}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  renderFailure() {
    const { open } = this.props
    const { UserAccount_Identifier, errorMessage } = this.state

    return (
      <Dialog open={open} onRequestClose={this._handle_Close}>
        <DialogTitle>Log In Failed</DialogTitle>

        <DialogContent>
          <Typography component="p">
            Failed loggin in as
            <br />
            {UserAccount_Identifier}
            <br />
            Reason: {errorMessage}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this._handle_onClick_TryAgain}>Try Again</Button>
        </DialogActions>
      </Dialog>
    )
  }

  render() {
    const { currentOperation } = this.state

    return (
      <div>
        {currentOperation === 'challenge' && this.renderChallenge()}
        {currentOperation === 'in progress' && this.renderInProgress()}
        {currentOperation === 'failure' && this.renderFailure()}
      </div>
    )
  }
}

export default withStyles( styles )( LoginDialog )
