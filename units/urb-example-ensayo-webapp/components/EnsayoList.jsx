// @flow

import List from 'material-ui/List'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoItem from './EnsayoItem'

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
}))

class EnsayoList extends React.Component {
  static propTypes = {
    Viewer: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
  }

  render() {
    const { Viewer } = this.props
    const { Ensayos } = Viewer

    return (
      <div>
        <List>
          {Ensayos.edges.map(({ node }) =>
            <EnsayoItem key={node.id} Viewer={Viewer} Ensayo={node} />,
          )}
        </List>
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles(styleSheet)(EnsayoList),
  graphql`
    fragment EnsayoList_Viewer on Viewer {
      Ensayos(first: 2147483647) @connection(key: "EnsayoList_Ensayos") {
        edges {
          node {
            id
            ...EnsayoItem_Ensayo
          }
        }
      }
      id
      ...EnsayoItem_Viewer
    }
  `,
)
