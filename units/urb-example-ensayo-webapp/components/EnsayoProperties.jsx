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
  richTextContainer: {
    width: '100%',
    height: 300,
    display: 'inline-block',
    position: 'relative',
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
    Ensayo_Content_RTE: Object,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = this.props

    this.state = {
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content_RTE: RichTextEditor
        ? RichTextEditor.createValueFromString(Ensayo_Content, 'html')
        : {},
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
    this.props.handlerUpdate({
      Ensayo_Title: this.refs.Ensayo_Title.getValue(),
      Ensayo_Description: this.refs.Ensayo_Description.getValue(),
      Ensayo_Content: this.state.Ensayo_Content_RTE.toString('html'),
    })

    this.props.handlerClose()
  }

  render() {
    const classes = this.props.classes
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
            <div className={classes.richTextContainer}>
              {RichTextEditor == null
                ? <div />
                : <RichTextEditor
                    value={this.state.Ensayo_Content_RTE}
                    onChange={this._handle_OnChange_RTE_Ensayo_Content}
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
