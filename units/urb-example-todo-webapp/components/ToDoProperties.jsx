// @flow

import Button from 'material-ui/Button'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import FormControl from 'material-ui/Form/FormControl'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const styleSheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
}))

class ToDo_Properties extends React.Component {
  static propTypes = {
    ToDo_Text: PropTypes.String.isRequired,
    open: PropTypes.Boolean.isRequired,
    handlerUpdate: PropTypes.func.isRequired,
    handlerClose: PropTypes.func.isRequired,
  }

  state: {
    ToDo_Text: string,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    const { ToDo_Text } = this.props

    this.state = {
      ToDo_Text,
    }
  }

  _handle_Close = () => {
    this.props.handlerClose()
  }

  _handle_OK = () => {
    this.props.handlerUpdate({ ToDo_Text: this.state.ToDo_Text })

    this.props.handlerClose()
  }

  render() {
    return (
      <div>
        <Dialog open={this.props.open} onRequestClose={this._handle_Close}>
          <DialogTitle>ToDo</DialogTitle>
          <DialogContent>
            <TextField
              label="To Do"
              fullWidth={true}
              value={this.state.ToDo_Text}
              onChange={event => this.setState({ ToDo_Text: event.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handle_Close}>Cancel</Button>
            <Button onClick={this._handle_OK} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styleSheet)(ToDo_Properties)
