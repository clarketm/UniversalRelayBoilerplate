'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');

const mutation = function () {return require('./__generated__/TranslaticiarumUpdateMutation.graphql');}; //  weak












function commit(
environment,
aTranslaticiarum,
Translaticiarum_Start,
Translaticiarum_Stop,
Translaticiarum_Description)
{
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        id: aTranslaticiarum.id,
        Translaticiarum_Start,
        Translaticiarum_Stop,
        Translaticiarum_Description } },



    optimisticResponse() {
      return {
        TranslaticiarumUpdate: {
          Translaticiarum: {
            id: aTranslaticiarum.id,
            Translaticiarum_Start,
            Translaticiarum_Stop,
            Translaticiarum_Description } } };



    } });

}exports.default =

{ commit };
//# sourceMappingURL=TranslaticiarumUpdateMutation.js.map