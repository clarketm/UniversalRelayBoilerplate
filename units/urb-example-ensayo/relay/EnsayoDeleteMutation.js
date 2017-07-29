// @flow

import Relay from 'react-relay'

export default class EnsayoDeleteMutation extends Relay.Mutation {
  static fragments = {
    Ensayo: () => Relay.QL`
      fragment on Ensayo {
        id,
      }
    `,
    Viewer: () => Relay.QL`
      fragment on Viewer {
        id,
      }
    `,
  }
  getMutation() {
    return Relay.QL`mutation{EnsayoDelete}`
  }
  getFatQuery() {
    return Relay.QL`
      fragment on EnsayoDeletePayload {
        deletedEnsayoId,
        Viewer {
          id
        },
      }
    `
  }
  getConfigs() {
    return [
      {
        type: 'NODE_DELETE',
        parentName: 'Viewer',
        parentID: this.props.Viewer.id,
        connectionName: 'Ensayos',
        deletedIDFieldName: 'deletedEnsayoId',
      },
    ]
  }
  getVariables() {
    return {
      id: this.props.Ensayo.id,
    }
  }
  getOptimisticResponse() {
    return {
      deletedEnsayoId: this.props.Ensayo.id,
    }
  }
}
