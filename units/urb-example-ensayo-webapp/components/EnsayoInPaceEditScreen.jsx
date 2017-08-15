// @flow

import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoAddMutation from '../../urb-example-ensayo-client/relay/EnsayoAddMutation'
import EnsayoProperties from './EnsayoProperties'
import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  addNewButton: { float: 'right', marginTop: -58, marginRight: 20 },
})

class EnsayoInPaceEditScreen extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    Viewer: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    relay: PropTypes.object.isRequired,
  }

  state: {
    propertiesIsOpen: boolean,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = { propertiesIsOpen: false }
  }

  _handle_updateHandler_Ensayo = ensayoProperties => {
    const { Ensayo_Title, Ensayo_Description, Ensayo_Content } = ensayoProperties
    const { relay, Viewer } = this.props

    EnsayoAddMutation.commit(
      relay.environment,
      Viewer,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content,
    )
  }

  _handle_Close_Properties = () => {
    this.setState({ propertiesIsOpen: false })
  }

  _handle_onClick_Add = () => {
    this.setState({ propertiesIsOpen: true })
  }

  render() {
    const { classes } = this.props
    const { propertiesIsOpen } = this.state

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Ensayo" subheader="List of essays" />

          <CardContent>
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
          </CardContent>

          {propertiesIsOpen &&
            <EnsayoProperties
              Ensayo_Title=""
              Ensayo_Content=""
              Ensayo_Description=""
              handlerUpdate={this._handle_updateHandler_Ensayo}
              handlerClose={this._handle_Close_Properties}
            />}
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(EnsayoInPaceEditScreen),
  graphql`
    fragment EnsayoInPaceEditScreen_Viewer on Viewer {
      id
    }
  `,
)
