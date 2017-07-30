// @flow

import Button from 'material-ui/Button'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'

const RichTextEditor = typeof document !== 'undefined' ? require('react-rte').default : null

const styleSheet = createStyleSheet('ComposedTextField', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
}))

export default class EnsayoProperties extends React.Component {
  state: {
    RichTextEditorValue: Object,
  }

  static propTypes = {
    Ensayo_Title: PropTypes.String.isRequired,
    Ensayo_Description: PropTypes.String.isRequired,
    Ensayo_Content: PropTypes.String.isRequired,
    open: PropTypes.Boolean.isRequired,
    handlerUpdate: PropTypes.func.isRequired,
    handlerClose: PropTypes.func.isRequired,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      RichTextEditorValue: RichTextEditor
        ? RichTextEditor.createValueFromString(this.props.Ensayo_Content, 'html')
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
    return (
      <div>
        <Dialog
          open={this.state.this.props.open}
          title="Ensayo"
          actions={[
            <FlatButton key="Cancel" label="Cancel" onTouchTap={this._handle_onTouchTap_Cancel} />,
            <FlatButton
              key="OK"
              label="OK"
              primary={true}
              onTouchTap={this._handle_onTouchTap_OK}
            />,
          ]}
        >
          <TextField
            ref="Ensayo_Title"
            defaultValue={this.props.Ensayo_Title}
            floatingLabelText="Title"
            fullWidth={true}
          />
          <TextField
            ref="Ensayo_Description"
            defaultValue={this.props.Ensayo_Description}
            floatingLabelText="Description"
            fullWidth={true}
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
        </Dialog>
      </div>
    )
  }
}
