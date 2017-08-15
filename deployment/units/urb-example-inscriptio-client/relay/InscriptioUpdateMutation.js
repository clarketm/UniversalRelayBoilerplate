Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');

var mutation=function mutation(){return require('./__generated__/InscriptioUpdateMutation.graphql');};












function commit(
environment,
aInscriptio,
Inscriptio_LocationLat,
Inscriptio_LocationLon,
Inscriptio_Notes)
{
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{
id:aInscriptio.id,
Inscriptio_LocationLat:Inscriptio_LocationLat,
Inscriptio_LocationLon:Inscriptio_LocationLon,
Inscriptio_Notes:Inscriptio_Notes}},



optimisticResponse:function optimisticResponse(){
return{
InscriptioUpdate:{
Inscriptio:{
id:aInscriptio.id,
Inscriptio_LocationLat:Inscriptio_LocationLat,
Inscriptio_LocationLon:Inscriptio_LocationLon,
Inscriptio_Notes:Inscriptio_Notes}}};



}});

}exports.default=

{commit:commit};
//# sourceMappingURL=InscriptioUpdateMutation.js.map