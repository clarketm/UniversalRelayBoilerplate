// @flow

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

class ToDo_Properties extends React.Component<
  {
    ToDo_Text: string,
    open: boolean,
    handlerUpdate: Function,
    handlerClose: Function
  },
  {
    ToDo_Text: string
  }
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

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
    const { ToDo_Text } = this.state

    return (
      <div>
        <Dialog open={this.props.open} onRequestClose={this._handle_Close}>
          <DialogTitle>ToDo</DialogTitle>
          <DialogContent>
            <TextField
              label="To Do"
              fullWidth={true}
              value={ToDo_Text}
              onChange={event =>
                this.setState({ ToDo_Text: event.target.value })}
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

export default withStyles( styles )( ToDo_Properties )
