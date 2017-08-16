// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = {
  card: {
    minWidth: 275,
  },
}

class TranslaticiarumScreen extends React.Component {
  _handle_onClick(id) {
    this.context.router.push('/Translaticiarum/item/' + id)
  }

  render() {
    const { classes, Viewer } = this.props

    return (
      <ResponsiveContentArea>
        {Viewer.Translaticiarums.edges.map(edge =>
          <Card key={edge.node.id} className={classes.card}>
            <CardHeader title={edge.node.Translaticiarum_Description} />

            <CardContent onClick={() => this._handle_onClick(edge.node.id)}>
              {edge.node.Translaticiarum_Start} - {edge.node.Translaticiarum_Stop}
            </CardContent>
          </Card>,
        )}
      </ResponsiveContentArea>
    )
  }
}

TranslaticiarumScreen.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default createFragmentContainer(
  withStyles(styles)(TranslaticiarumScreen),
  graphql`
    fragment TranslaticiarumScreen_Viewer on Viewer {
      Translaticiarums(first: 2147483647)
        @connection(key: "TranslaticiarumScreen_Translaticiarums") {
        edges {
          node {
            id
            Translaticiarum_Description
            Translaticiarum_Start
            Translaticiarum_Stop
          }
        }
      }
    }
  `,
)
