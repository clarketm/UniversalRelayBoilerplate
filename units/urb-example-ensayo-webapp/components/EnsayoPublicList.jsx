// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = theme => ({
  card: {
    minWidth: 275,
  },
})

class EnsayoPublicList extends React.Component<any, any> {
  static contextTypes = {
    router: PropTypes.object,
  }

  _handle_onClick( id ) {
    this.context.router.push( '/ensayo/item/' + id )
  }

  render() {
    const { classes, Viewer } = this.props

    return (
      <ResponsiveContentArea>
        {Viewer.Ensayos.edges.map( edge =>
          <Card key={edge.node.id} className={classes.card}>
            <CardHeader title={edge.node.Ensayo_Title} />

            <CardContent onClick={() => this._handle_onClick( edge.node.id )}>
              {edge.node.Ensayo_Description}
            </CardContent>
          </Card>
        )}
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( EnsayoPublicList ),
  graphql`
    fragment EnsayoPublicList_Viewer on Viewer {
      Ensayos(first: 2147483647) @connection(key: "EnsayoPublicList_Ensayos") {
        edges {
          node {
            id
            Ensayo_Title
            Ensayo_Description
          }
        }
      }
    }
  `
)
