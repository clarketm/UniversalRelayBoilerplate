'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');
var _relayRuntime = require('relay-runtime'); //  weak

const mutation = function () {return require('./__generated__/TranslaticiarumDeleteMutation.graphql');};







function sharedUpdater(store, user, deletedId) {
  const userProxy = store.get(user.id);

  const connection = _relayRuntime.ConnectionHandler.getConnection(
  userProxy,
  'TranslaticiarumList_Translaticiarums');

  if (connection) {
    _relayRuntime.ConnectionHandler.deleteNode(connection, deletedId);
  }
}

function commit(environment, user, aTranslaticiarum) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: { id: aTranslaticiarum.id } },


    updater(store) {
      const payload = store.getRootField('TranslaticiarumDelete');
      sharedUpdater(store, user, payload.getValue('deletedId'));
    },

    optimisticUpdater(store) {
      sharedUpdater(store, user, aTranslaticiarum.id);
    } });

}exports.default =

{ commit };
//# sourceMappingURL=TranslaticiarumDeleteMutation.js.map