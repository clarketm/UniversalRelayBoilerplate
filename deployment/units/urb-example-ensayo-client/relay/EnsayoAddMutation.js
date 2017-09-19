'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');
var _relayRuntime = require('relay-runtime'); //  weak

const mutation = function () {return require('./__generated__/EnsayoAddMutation.graphql');};


















function sharedUpdater(store, user, EnsayosEdge) {
  const userProxy = store.get(user.id);

  const connection = _relayRuntime.ConnectionHandler.getConnection(
  userProxy,
  'EnsayoList_Ensayos');

  if (connection) {
    _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, EnsayosEdge);
  }
}

let nextClientMutationId = 0;

function commit(
environment,
user,
Ensayo_Title,
Ensayo_Description,
Ensayo_Content)
{
  const clientMutationId = nextClientMutationId++;

  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content,
        clientMutationId } },



    updater(store) {
      const payload = store.getRootField('EnsayoAdd');
      sharedUpdater(store, user, payload.getLinkedRecord('EnsayosEdge'));
    },

    optimisticUpdater(store) {
      const id = `client:EnsayoAdd:Ensayo:${clientMutationId}`;
      const aEnsayo = store.create(id, 'Ensayo');
      aEnsayo.setValue(Ensayo_Title, 'Ensayo_Title');
      aEnsayo.setValue(Ensayo_Description, 'Ensayo_Description');
      aEnsayo.setValue(Ensayo_Content, 'Ensayo_Content');
      aEnsayo.setValue(id, 'id');

      const EnsayosEdge = store.create(
      `client:EnsayoAdd:EnsayosEdge:${clientMutationId}`,
      'EnsayosEdge');

      EnsayosEdge.setLinkedRecord(aEnsayo, 'node');

      sharedUpdater(store, user, EnsayosEdge);
    } });

}exports.default =

{ commit };
//# sourceMappingURL=EnsayoAddMutation.js.map