// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styleSheet = createStyleSheet(theme => ({
  card: {
    minWidth: 275,
  },
}))

class InscriptioScreen extends React.Component {
  _handle_onClick(id) {
    this.context.router.push('/Inscriptio/item/' + id)
  }

  render() {
    const { classes, Viewer } = this.props

    return (
      <ResponsiveContentArea>
        {Viewer.Inscriptios.edges.map(edge =>
          <Card key={edge.node.id} className={classes.card}>
            <CardHeader title={edge.node.Inscriptio_LocationLat} />

            <CardContent onClick={() => this._handle_onClick(edge.node.id)}>
              {edge.node.Inscriptio_LocationLon}
            </CardContent>
          </Card>,
        )}
      </ResponsiveContentArea>
    )
  }
}

InscriptioScreen.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default createFragmentContainer(
  withStyles(styleSheet)(InscriptioScreen),
  graphql`
    fragment InscriptioScreen_Viewer on Viewer {
      Inscriptios(first: 2147483647) @connection(key: "InscriptioScreen_Inscriptios") {
        edges {
          node {
            id
            Inscriptio_LocationLat
            Inscriptio_LocationLon
          }
        }
      }
    }
  `,
)
