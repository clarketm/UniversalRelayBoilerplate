// @flow

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import React from 'react'

const RichTextEditor = typeof document !== 'undefined' ? require('react-rte').default : null

export default class Ensayo_Properties extends React.Component {
  state: {
    Dialog_IsOpen: boolean,
    RichTextEditorValue: Object,
  }

  static propTypes = {
    Ensayo_Title: PropTypes.string.isRequired,
    Ensayo_Description: PropTypes.string.isRequired,
    Ensayo_Content: PropTypes.string.isRequired,
    updateHandler: PropTypes.func.isRequired,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      Dialog_IsOpen: false,
      RichTextEditorValue: RichTextEditor
        ? RichTextEditor.createValueFromString(this.props.Ensayo_Content, 'html')
        : {},
    }
  }

  _handle_Open = () => {
    this.setState({
      Dialog_IsOpen: true,
    })
  }

  _handle_onTouchTap_Cancel = () => {
    this.setState({
      Dialog_IsOpen: false,
    })
  }

  _handle_onTouchTap_OK = () => {
    this.props.updateHandler({
      Ensayo_Content: this.state.RichTextEditorValue.toString('html'),
      Ensayo_Title: this.refs.Ensayo_Title.getValue(),
      Ensayo_Description: this.refs.Ensayo_Description.getValue(),
    })

    this.setState({
      Dialog_IsOpen: false,
    })
  }

  _handle_OnChange_RTE = value => {
    this.setState({
      RichTextEditorValue: value,
    })
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.Dialog_IsOpen}
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
