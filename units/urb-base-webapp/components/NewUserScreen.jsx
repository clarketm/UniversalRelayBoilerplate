// @flow

import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Card, { CardHeader } from 'material-ui/Card'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
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
    AccountName: string,
    AccountPassword: string,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      AccountName: '',
      AccountPassword: '',
    }
  }

  _handle_onClick_Create = () => {}

  render() {
    const classes = this.props.classes
    const { AccountName, AccountPassword } = this.state

    return (
      <ResponsiveContentArea>
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
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default withStyles(styleSheet)(NewUserScreen)
