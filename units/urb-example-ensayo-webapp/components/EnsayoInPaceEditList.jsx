// @flow

import List from 'material-ui/List'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoInPlaceItem from './EnsayoInPlaceItem'

class EnsayoInPaceEditList extends React.Component {
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
            <EnsayoInPlaceItem key={node.id} Viewer={Viewer} Ensayo={node} />,
          )}
        </List>
      </div>
    )
  }
}

export default createFragmentContainer(
  EnsayoInPaceEditList,
  graphql`
    fragment EnsayoInPaceEditList_Viewer on Viewer {
      Ensayos(first: 2147483647) @connection(key: "EnsayoList_Ensayos") {
        edges {
          node {
            id
            ...EnsayoInPlaceItem_Ensayo
          }
        }
      }
      id
      ...EnsayoInPlaceItem_Viewer
    }
  `,
)
