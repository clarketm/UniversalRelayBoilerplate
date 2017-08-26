Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/TranslaticiarumAddMutation.graphql');};


















function sharedUpdater(store,user,TranslaticiarumsEdge){
var userProxy=store.get(user.id);

var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'TranslaticiarumList_Translaticiarums');

if(connection){
_relayRuntime.ConnectionHandler.insertEdgeAfter(connection,TranslaticiarumsEdge);
}
}

var nextClientMutationId=0;

function commit(
environment,
user,
Translaticiarum_Start,
Translaticiarum_Stop,
Translaticiarum_Description)
{
var clientMutationId=nextClientMutationId++;

return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{
Translaticiarum_Start:Translaticiarum_Start,
Translaticiarum_Stop:Translaticiarum_Stop,
Translaticiarum_Description:Translaticiarum_Description,
clientMutationId:clientMutationId}},



updater:function updater(store){
var payload=store.getRootField('TranslaticiarumAdd');
sharedUpdater(
store,
user,
payload.getLinkedRecord('TranslaticiarumsEdge'));

},

optimisticUpdater:function optimisticUpdater(store){
var id='client:TranslaticiarumAdd:Translaticiarum:'+clientMutationId;
var aTranslaticiarum=store.create(id,'Translaticiarum');
aTranslaticiarum.setValue(Translaticiarum_Start,'Translaticiarum_Start');
aTranslaticiarum.setValue(Translaticiarum_Stop,'Translaticiarum_Stop');
aTranslaticiarum.setValue(
Translaticiarum_Description,
'Translaticiarum_Description');

aTranslaticiarum.setValue(id,'id');

var TranslaticiarumsEdge=store.create('client:TranslaticiarumAdd:TranslaticiarumsEdge:'+
clientMutationId,
'TranslaticiarumsEdge');

TranslaticiarumsEdge.setLinkedRecord(aTranslaticiarum,'node');

sharedUpdater(store,user,TranslaticiarumsEdge);
}});

}exports.default=

{commit:commit};
//# sourceMappingURL=TranslaticiarumAddMutation.js.map