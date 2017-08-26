Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/InscriptioAddMutation.graphql');};


















function sharedUpdater(store,user,InscriptiosEdge){
var userProxy=store.get(user.id);

var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'InscriptioList_Inscriptios');

if(connection){
_relayRuntime.ConnectionHandler.insertEdgeAfter(connection,InscriptiosEdge);
}
}

var nextClientMutationId=0;

function commit(
environment,
user,
Inscriptio_LocationLat,
Inscriptio_LocationLon,
Inscriptio_Notes)
{
var clientMutationId=nextClientMutationId++;

return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{
Inscriptio_LocationLat:Inscriptio_LocationLat,
Inscriptio_LocationLon:Inscriptio_LocationLon,
Inscriptio_Notes:Inscriptio_Notes,
clientMutationId:clientMutationId}},



updater:function updater(store){
var payload=store.getRootField('InscriptioAdd');
sharedUpdater(store,user,payload.getLinkedRecord('InscriptiosEdge'));
},

optimisticUpdater:function optimisticUpdater(store){
var id='client:InscriptioAdd:Inscriptio:'+clientMutationId;
var aInscriptio=store.create(id,'Inscriptio');
aInscriptio.setValue(Inscriptio_LocationLat,'Inscriptio_LocationLat');
aInscriptio.setValue(Inscriptio_LocationLon,'Inscriptio_LocationLon');
aInscriptio.setValue(Inscriptio_Notes,'Inscriptio_Notes');
aInscriptio.setValue(id,'id');

var InscriptiosEdge=store.create('client:InscriptioAdd:InscriptiosEdge:'+
clientMutationId,
'InscriptiosEdge');

InscriptiosEdge.setLinkedRecord(aInscriptio,'node');

sharedUpdater(store,user,InscriptiosEdge);
}});

}exports.default=

{commit:commit};
//# sourceMappingURL=InscriptioAddMutation.js.map