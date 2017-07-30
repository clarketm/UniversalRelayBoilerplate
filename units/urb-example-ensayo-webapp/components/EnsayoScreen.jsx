// @flow

import Card, { CardHeader } from 'material-ui/Card'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
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

  _handle_onTouchTap_Add = () => {
    this.refs.EnsayoProperties._handle_Open()
  }

  render() {
    const classes = this.props.classes

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Ensayo" subtitle="This means Essay in Spanish" />

          <div style={{ float: 'right', marginTop: -58, marginRight: 20 }}>
            <FloatingActionButton
              secondary={true}
              mini={true}
              onTouchTap={this._handle_onTouchTap_Add}
            >
              <ContentAdd />
            </FloatingActionButton>
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
