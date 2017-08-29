// @flow

import Button from 'material-ui/Button'
import Card, { CardActions, CardHeader } from 'material-ui/Card'
import { LinearProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import React from 'react'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = theme => ({
  card: {
    minWidth: 275,
  },
})

class LogoutScreen extends React.Component<
  {
    classes: Object
  },
  {
    currentOperation: 'confirm' | 'logging out' | 'success' | 'failure',
    errorMessage: string
  }
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = {
      currentOperation: 'confirm',
      errorMessage: '',
    }
  }

  _handle_onClick_Logout = async() => {
    this.setState({ currentOperation: 'logging out' })

    try {
      const loc = window.location
      const host = loc.protocol + '//' + loc.hostname + ':' + loc.port

      const response = await fetch( host + '/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: '{}',
      })

      const responseData = await response.json()

      console.log( 'LOGOUT USER RESPONSE' )
      console.log( responseData )

      if ( responseData.success ) {
        // In case of success, notify user
        this.setState({ currentOperation: 'success' })
      } else {
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage: responseData.error,
        })
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

  _handle_onClick_CancelLogout = () => {
    this.setState({
      currentOperation: 'failure',
      errorMessage: 'User log out has been canceled',
    })
  }

  _handle_onClick_TryAgain = () => {
    this.setState({
      currentOperation: 'confirm',
      errorMessage: '',
    })
  }

  _handle_onClick_Continue = () => {
    window.location.replace( '/' )
  }

  renderCreating() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <Typography component="p">Logging out. Please wait.</Typography>
        <LinearProgress mode="query" />
        <CardActions>
          <Button onClick={this._handle_onClick_CancelLogout}>Cancel</Button>
        </CardActions>
      </Card>
    )
  }

  renderSuccess() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader title="Logout" />
        <Typography component="p">You have been logged out</Typography>
        <CardActions>
          <Button onClick={this._handle_onClick_Continue}>Continue</Button>
        </CardActions>
      </Card>
    )
  }

  renderFailure() {
    const { classes } = this.props
    const { errorMessage } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <Typography component="p">
          Failed logging out.
          <br />
          Reason: {errorMessage}
        </Typography>
        <CardActions>
          <Button onClick={this._handle_onClick_TryAgain}>Try Again</Button>
        </CardActions>
      </Card>
    )
  }

  renderPrompt() {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader title="Log Out" />
        <Typography component="p">
          You are currently logged in. Are you sure you want to log out?
        </Typography>
        <CardActions>
          <Button onClick={this._handle_onClick_Logout}>Yes, Log Out</Button>
        </CardActions>
      </Card>
    )
  }

  render() {
    const { currentOperation } = this.state

    return (
      <ResponsiveContentArea>
        {currentOperation === 'confirm' && this.renderPrompt()}
        {currentOperation === 'logging out' && this.renderCreating()}
        {currentOperation === 'success' && this.renderSuccess()}
        {currentOperation === 'failure' && this.renderFailure()}
      </ResponsiveContentArea>
    )
  }
}

export default withStyles( styles )( LogoutScreen )
