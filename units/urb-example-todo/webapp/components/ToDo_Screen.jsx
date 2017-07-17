// @flow

import { Card, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import React from 'react'
import Relay from 'react-relay'

import ResponsiveContentArea from '../../../../webapp/components/ResponsiveContentArea'
import ToDoAddMutation from '../../relay/ToDoAddMutation'

class ToDo_Screen extends React.Component {
  state: {
    ToDo_Text_New: string,
  }

  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      ToDo_Text_New: '',
    }
  }

  _handle_onKeyDown_AddToDo = e => {
    if (e.keyCode === 13) {
      this.context.relay.commitUpdate(
        new ToDoAddMutation({
          ToDo_Text: this.state.ToDo_Text_New,
          Viewer: this.props.Viewer,
        }),
      )

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
    return (
      <ResponsiveContentArea>
        <Card initiallyExpanded={true}>
          <CardHeader title="TO DOs" subtitle="List of TO DOs for user" />

          {this.props.children}

          <div style={{ marginLeft: 4, marginRight: 4 }}>
            <TextField
              floatingLabelText="What needs to be done?"
              value={this.state.ToDo_Text_New}
              fullWidth={true}
              onKeyDown={this._handle_onKeyDown_AddToDo}
              onChange={this._handle_OnChange}
            />
          </div>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default Relay.createContainer(ToDo_Screen, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ToDo_TotalCount,
        ${ToDoAddMutation.getFragment('Viewer')},
      }
    `,
  },
})
