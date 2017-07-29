// @flow

import Relay from 'react-relay'

export default class EnsayoUpdateMutation extends Relay.Mutation {
  static fragments = {
    Ensayo: () => Relay.QL`
      fragment on Ensayo {
        id,
      }
    `,
  }
  getMutation() {
    return Relay.QL`mutation{EnsayoUpdate}`
  }
  getFatQuery() {
    return Relay.QL`
      fragment on EnsayoUpdatePayload {
        Ensayo {
          Ensayo_Content,
          Ensayo_Title,
          Ensayo_Description,
        }
      }
    `
  }
  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          Ensayo: this.props.Ensayo.id,
        },
      },
    ]
  }
  getVariables() {
    return {
      id: this.props.Ensayo.id,
      Ensayo_Content: this.props.Ensayo_Content,
      Ensayo_Title: this.props.Ensayo_Title,
      Ensayo_Description: this.props.Ensayo_Description,
    }
  }
  getOptimisticResponse() {
    return {
      Ensayo: {
        id: this.props.Ensayo.id,
        Ensayo_Content: this.props.Ensayo_Content,
        Ensayo_Title: this.props.Ensayo_Title,
        Ensayo_Description: this.props.Ensayo_Description,
      },
    }
  }
}
