// @flow

import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Card, { CardActions, CardHeader } from 'material-ui/Card'
import { LinearProgress } from 'material-ui/Progress'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import React from 'react'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275,
  },
}))

class NewUserScreen extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state: {
    currentOperation: 'prompt' | 'creating' | 'success' | 'failure',
    errorMessage: string,
    AccountName: string,
    AccountPassword: string,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      currentOperation: 'prompt',
      errorMessage: '',
      AccountName: '',
      AccountPassword: '',
    }
  }

  _handle_onClick_Create = async () => {
    const { AccountName, AccountPassword } = this.state

    this.setState({
      currentOperation: 'creating',
      AccountPassword: '', // In order to prevent the password from being accessed later
    })

    try {
      const loc = window.location
      const host = loc.protocol + '//' + loc.hostname + ':' + loc.port

      const response = await fetch(host + '/auth/createuser', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          User_AccountName: AccountName,
          User_AccountPassword: AccountPassword,
        }),
      })

      const responseData = await response.json()

      console.log('CREATE USER RESPONSE')
      console.log(responseData)

      if (responseData.success) {
        // In case of success, notify user
        this.setState({ currentOperation: 'success' })
      } else {
        // In case of error, tell user what the error is
        this.setState({ currentOperation: 'failure', errorMessage: responseData.error })
      }
    } catch (err) {
      // In case response could not be received properly, tell the user
      // In case of error, tell user what the error is
      this.setState({
        currentOperation: 'failure',
        errorMessage:
          'Did not receive proper response from server. Please try again. Message:' + err.message,
      })
    }
  }

  _handle_onClick_CancelCreation = () => {
    this.setState({
      currentOperation: 'failure',
      errorMessage: 'User creation has been canceled',
    })
  }

  _handle_onClick_TryAgain = () => {
    this.setState({
      currentOperation: 'prompt',
      errorMessage: '',
    })
  }

  _handle_onClick_Continue = () => {
    location.replace('/')
  }

  renderCreating() {
    const { classes } = this.props
    const { AccountName } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <Typography component="p">
          Creating user
          <br />
          {AccountName}
          <br />
          Please wait.
        </Typography>
        <LinearProgress mode="query" />
        <CardActions>
          <Button onClick={this._handle_onClick_CancelCreation}>Cancel</Button>
        </CardActions>
      </Card>
    )
  }

  renderSuccess() {
    const { classes } = this.props
    const { AccountName, errorMessage } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <Typography component="p">
          Created user
          <br />
          {AccountName}
        </Typography>
        <CardActions>
          <Button onClick={this._handle_onClick_Continue}>Continue</Button>
        </CardActions>
      </Card>
    )
  }

  renderFailure() {
    const { classes } = this.props
    const { AccountName, errorMessage } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <Typography component="p">
          Failed creating user
          <br />
          {AccountName}
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
    const { AccountName, AccountPassword } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Create New User" />
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
        <CardActions>
          <Button onClick={this._handle_onClick_Create}>Create</Button>
        </CardActions>
      </Card>
    )
  }

  render() {
    const { currentOperation } = this.state

    return (
      <ResponsiveContentArea>
        {currentOperation === 'prompt' && this.renderPrompt()}
        {currentOperation === 'creating' && this.renderCreating()}
        {currentOperation === 'success' && this.renderSuccess()}
        {currentOperation === 'failure' && this.renderFailure()}
      </ResponsiveContentArea>
    )
  }
}

export default withStyles(styleSheet)(NewUserScreen)
