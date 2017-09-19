'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');

const mutation = function () {return require('./__generated__/InscriptioUpdateMutation.graphql');}; //  weak












function commit(
environment,
aInscriptio,
Inscriptio_LocationLat,
Inscriptio_LocationLon,
Inscriptio_Notes)
{
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: {
        id: aInscriptio.id,
        Inscriptio_LocationLat,
        Inscriptio_LocationLon,
        Inscriptio_Notes } },



    optimisticResponse() {
      return {
        InscriptioUpdate: {
          Inscriptio: {
            id: aInscriptio.id,
            Inscriptio_LocationLat,
            Inscriptio_LocationLon,
            Inscriptio_Notes } } };



    } });

}exports.default =

{ commit };
//# sourceMappingURL=InscriptioUpdateMutation.js.map