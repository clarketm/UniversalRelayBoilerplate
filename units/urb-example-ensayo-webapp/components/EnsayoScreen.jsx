// @flow

import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Card, { CardHeader } from 'material-ui/Card'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoAddMutation from '../../urb-example-ensayo-client/relay/EnsayoAddMutation'
import EnsayoProperties from './EnsayoProperties'
import ResponsiveContentArea from '../../../webapp/components/ResponsiveContentArea'

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275,
  },
  addNewButton: { float: 'right', marginTop: -58, marginRight: 20 },
}))

class EnsayoScreen extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    Viewer: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    relay: PropTypes.object.isRequired,
  }

  _handle_updateHandler_Ensayo = ensayoProperties => {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = ensayoProperties
    const { relay, Viewer } = this.props

    EnsayoAddMutation.commit(
      relay.environment,
      Viewer,
      Ensayo_Content,
      Ensayo_Title,
      Ensayo_Description,
    )
  }

  _handle_onClick_Add = () => {
    this.refs.EnsayoProperties._handle_Open()
  }

  render() {
    const classes = this.props.classes

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Ensayo" subtitle="List of essays" />

          <div className={classes.addNewButton}>
            <Button
              fab
              color="primary"
              className={classes.button}
              onClick={this._handle_onClick_Add}
            >
              <AddIcon />
            </Button>
          </div>

          {this.props.children}

          <EnsayoProperties
            ref="EnsayoProperties"
            Ensayo_Content={''}
            Ensayo_Title={''}
            Ensayo_Description={''}
            updateHandler={this._handle_updateHandler_Ensayo}
          />
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styleSheet)(EnsayoScreen),
  graphql`
    fragment EnsayoScreen_Viewer on Viewer {
      id
    }
  `,
)
