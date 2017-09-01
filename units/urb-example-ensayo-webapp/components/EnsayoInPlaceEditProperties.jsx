// @flow

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import React from 'react'
import RichTextEditor from 'react-rte'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  richTextContainer: {
    width: '100%',
    height: 300,
    display: 'inline-block',
    position: 'relative',
  },
})

class EnsayoInPlaceEditProperties extends React.Component<
  {
    Ensayo_Title: string,
    Ensayo_Description: string,
    Ensayo_Content: string,
    handlerUpdate: Function,
    handlerClose: Function,
    classes: Object
  },
  {
    Ensayo_Title: string,
    Ensayo_Description: string,
    Ensayo_Content_RTE: Object
  }
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props

    this.state = {
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content_RTE: RichTextEditor.createValueFromString(
        Ensayo_Content,
        'html'
      ),
    }
  }

  _handle_OnChange_RTE_Ensayo_Content = value => {
    this.setState({
      Ensayo_Content_RTE: value,
    })
  }

  _handle_Close = () => {
    this.props.handlerClose()
  }

  _handle_OK = () => {
    const { handlerClose, handlerUpdate } = this.props

    handlerUpdate({
      Ensayo_Title: this.state.Ensayo_Title,
      Ensayo_Description: this.state.Ensayo_Description,
      Ensayo_Content: this.state.Ensayo_Content_RTE.toString( 'html' ),
    })

    handlerClose()
  }

  render() {
    const { classes } = this.props
    const { Ensayo_Title, Ensayo_Description } = this.state

    return (
      <div>
        <Dialog open={true} onRequestClose={this._handle_Close}>
          <DialogTitle>Ensayo</DialogTitle>

          <DialogContent>
            <TextField
              label="Title"
              fullWidth={true}
              value={Ensayo_Title}
              onChange={event =>
                this.setState({ Ensayo_Title: event.target.value })}
            />
            <TextField
              label="Description"
              fullWidth={true}
              value={Ensayo_Description}
              onChange={event =>
                this.setState({ Ensayo_Description: event.target.value })}
            />
            <div className={classes.richTextContainer}>
              {RichTextEditor == null ? (
                <div />
              ) : (
                <RichTextEditor
                  value={this.state.Ensayo_Content_RTE}
                  onChange={this._handle_OnChange_RTE_Ensayo_Content}
                />
              )}
            </div>
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

export default withStyles( styles )( EnsayoInPlaceEditProperties )
