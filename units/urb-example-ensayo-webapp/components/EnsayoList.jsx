// @flow

import List from 'material-ui/List'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoItem from './EnsayoItem'

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
  EnsayoList,
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
