'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');

const mutation = function () {return require('./__generated__/EnsayoUpdateMutation.graphql');}; //  weak












function commit(
environment,
aEnsayo,
Ensayo_Title,
Ensayo_Description,
Ensayo_Content)
{
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        id: aEnsayo.id,
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content } },



    optimisticResponse() {
      return {
        EnsayoUpdate: {
          Ensayo: {
            id: aEnsayo.id,
            Ensayo_Title,
            Ensayo_Description,
            Ensayo_Content } } };



    } });

}exports.default =

{ commit };
//# sourceMappingURL=EnsayoUpdateMutation.js.map