// @flow

import Card, { CardHeader } from 'material-ui/Card'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import TextField from 'material-ui/TextField'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'
import ToDoAddMutation from '../../urb-example-todo-client/relay/ToDoAddMutation'

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275,
  },
}))

class ToDoScreen extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    Viewer: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state: {
    ToDo_Text_New: string,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      ToDo_Text_New: '',
    }
  }

  _handle_onKeyDown_AddToDo = e => {
    if (e.keyCode === 13) {
      const { relay, Viewer } = this.props

      ToDoAddMutation.commit(relay.environment, Viewer, this.state.ToDo_Text_New)

      this.setState({
        ToDo_Text_New: '',
      })
    }
  }

  _handle_OnChange = event => {
    this.setState({
      ToDo_Text_New: event.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="TO DOs" subheader="List of TO DOs for user" />
          {this.props.children}
          <div style={{ marginLeft: 4, marginRight: 4 }} />
          <TextField
            label="What needs to be done?"
            value={this.state.ToDo_Text_New}
            fullWidth={true}
            onKeyDown={this._handle_onKeyDown_AddToDo}
            onChange={this._handle_OnChange}
          />
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styleSheet)(ToDoScreen),
  graphql`
    fragment ToDoScreen_Viewer on Viewer {
      id
    }
  `,
)
