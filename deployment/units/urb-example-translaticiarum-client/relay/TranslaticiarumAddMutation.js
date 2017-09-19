'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');
var _relayRuntime = require('relay-runtime'); //  weak

const mutation = function () {return require('./__generated__/TranslaticiarumAddMutation.graphql');};


















function sharedUpdater(store, user, TranslaticiarumsEdge) {
  const userProxy = store.get(user.id);

  const connection = _relayRuntime.ConnectionHandler.getConnection(
  userProxy,
  'TranslaticiarumList_Translaticiarums');

  if (connection) {
    _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, TranslaticiarumsEdge);
  }
}

let nextClientMutationId = 0;

function commit(
environment,
user,
Translaticiarum_Start,
Translaticiarum_Stop,
Translaticiarum_Description)
{
  const clientMutationId = nextClientMutationId++;

  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        Translaticiarum_Start,
        Translaticiarum_Stop,
        Translaticiarum_Description,
        clientMutationId } },



    updater(store) {
      const payload = store.getRootField('TranslaticiarumAdd');
      sharedUpdater(
      store,
      user,
      payload.getLinkedRecord('TranslaticiarumsEdge'));

    },

    optimisticUpdater(store) {
      const id = `client:TranslaticiarumAdd:Translaticiarum:${clientMutationId}`;
      const aTranslaticiarum = store.create(id, 'Translaticiarum');
      aTranslaticiarum.setValue(Translaticiarum_Start, 'Translaticiarum_Start');
      aTranslaticiarum.setValue(Translaticiarum_Stop, 'Translaticiarum_Stop');
      aTranslaticiarum.setValue(
      Translaticiarum_Description,
      'Translaticiarum_Description');

      aTranslaticiarum.setValue(id, 'id');

      const TranslaticiarumsEdge = store.create(
      `client:TranslaticiarumAdd:TranslaticiarumsEdge:${clientMutationId}`,
      'TranslaticiarumsEdge');

      TranslaticiarumsEdge.setLinkedRecord(aTranslaticiarum, 'node');

      sharedUpdater(store, user, TranslaticiarumsEdge);
    } });

}exports.default =

{ commit };
//# sourceMappingURL=TranslaticiarumAddMutation.js.map