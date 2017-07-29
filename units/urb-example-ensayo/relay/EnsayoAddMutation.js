// @flow

import Relay from 'react-relay'

export default class EnsayoAddMutation extends Relay.Mutation {
  static fragments = {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        id,
      }
    `,
  }
  getMutation() {
    return Relay.QL`mutation{EnsayoAdd}`
  }
  getFatQuery() {
    return Relay.QL`
      fragment on EnsayoAddPayload {
        EnsayosEdge,
        Viewer {
          Ensayos,
        },
      }
    `
  }
  getConfigs() {
    return [
      {
        type: 'RANGE_ADD',
        parentName: 'Viewer',
        parentID: this.props.Viewer.id,
        connectionName: 'Ensayos',
        edgeName: 'EnsayosEdge',
        rangeBehaviors: {
          '': 'append',
        },
      },
    ]
  }
  getVariables() {
    return {
      Ensayo_Content: this.props.Ensayo_Content,
      Ensayo_Title: this.props.Ensayo_Title,
      Ensayo_Description: this.props.Ensayo_Description,
    }
  }
  getOptimisticResponse() {
    return {
      EnsayosEdge: {
        node: {
          Ensayo_Content: this.props.Ensayo_Content,
          Ensayo_Title: this.props.Ensayo_Title,
          Ensayo_Description: this.props.Ensayo_Description,
        },
      },
      Viewer: {
        id: this.props.Viewer.id,
      },
    }
  }
}
