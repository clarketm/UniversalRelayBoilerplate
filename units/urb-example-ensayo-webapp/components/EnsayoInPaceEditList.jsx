// @flow

import List from 'material-ui/List'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import EnsayoInPlaceEditItem from './EnsayoInPlaceEditItem'

class EnsayoInPaceEditList extends React.Component<
  {
    Viewer: Object,
    relay: Object
  },
  null
> {
  render() {
    const { Viewer } = this.props
    const { Ensayos } = Viewer

    return (
      <div>
        <List>
          {Ensayos.edges.map( ({ node }) =>
            <EnsayoInPlaceEditItem
              key={node.id}
              Viewer={Viewer}
              Ensayo={node}
            />
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
            ...EnsayoInPlaceEditItem_Ensayo
          }
        }
      }
      id
      ...EnsayoInPlaceEditItem_Viewer
    }
  `
)
