'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');
var _relayRuntime = require('relay-runtime'); //  weak

const mutation = function () {return require('./__generated__/EnsayoDeleteMutation.graphql');};







function sharedUpdater(store, user, deletedId) {
  const userProxy = store.get(user.id);

  const connection = _relayRuntime.ConnectionHandler.getConnection(
  userProxy,
  'EnsayoList_Ensayos');

  if (connection) {
    _relayRuntime.ConnectionHandler.deleteNode(connection, deletedId);
  }
}

function commit(environment, user, aEnsayo) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: { id: aEnsayo.id } },


    updater(store) {
      const payload = store.getRootField('EnsayoDelete');
      sharedUpdater(store, user, payload.getValue('deletedId'));
    },

    optimisticUpdater(store) {
      sharedUpdater(store, user, aEnsayo.id);
    } });

}exports.default =

{ commit };
//# sourceMappingURL=EnsayoDeleteMutation.js.map