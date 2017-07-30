// @flow

import Button from 'material-ui/Button'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'

const RichTextEditor = typeof document !== 'undefined' ? require('react-rte').default : null

const styleSheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
}))

export default class EnsayoProperties extends React.Component {
  static propTypes = {
    Ensayo_Title: PropTypes.String.isRequired,
    Ensayo_Description: PropTypes.String.isRequired,
    Ensayo_Content: PropTypes.String.isRequired,
    open: PropTypes.Boolean.isRequired,
    handlerUpdate: PropTypes.func.isRequired,
    handlerClose: PropTypes.func.isRequired,
  }

  state: {
    Ensayo_Title: string,
    Ensayo_Description: string,
    Ensayo_Content: string,
    RichTextEditorValue: Object,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props

    this.state = {
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content,
      RichTextEditorValue: RichTextEditor
        ? RichTextEditor.createValueFromString(Ensayo_Content, 'html')
        : {},
    }
  }

  _handle_OnChange_RTE = value => {
    this.setState({
      RichTextEditorValue: value,
    })
  }

  _handle_Close = () => {
    this.props.handlerClose()
  }

  _handle_OK = () => {
    this.props.handlerUpdate({
      Ensayo_Content: this.state.RichTextEditorValue.toString('html'),
      Ensayo_Title: this.refs.Ensayo_Title.getValue(),
      Ensayo_Description: this.refs.Ensayo_Description.getValue(),
    })

    this.props.handlerClose()
  }

  render() {
    const { Ensayo_Title, Ensayo_Description } = this.state

    return (
      <div>
        <Dialog open={this.props.open} onRequestClose={this._handle_Close}>
          <DialogTitle>Ensayo</DialogTitle>

          <DialogContent>
            <TextField
              label="Title"
              fullWidth={true}
              value={Ensayo_Title}
              onChange={event => this.setState({ Ensayo_Title: event.target.value })}
            />
            <TextField
              label="Description"
              fullWidth={true}
              value={Ensayo_Description}
              onChange={event => this.setState({ Ensayo_Description: event.target.value })}
            />
            <div
              style={{
                width: '100%',
                height: 300,
                display: 'inline-block',
                position: 'relative',
              }}
            >
              {RichTextEditor == null
                ? <div />
                : <RichTextEditor
                    value={this.state.RichTextEditorValue}
                    onChange={this._handle_OnChange_RTE}
                  />}
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
