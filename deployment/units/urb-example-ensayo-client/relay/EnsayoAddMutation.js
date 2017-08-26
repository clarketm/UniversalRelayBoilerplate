Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/EnsayoAddMutation.graphql');};


















function sharedUpdater(store,user,EnsayosEdge){
var userProxy=store.get(user.id);

var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'EnsayoList_Ensayos');

if(connection){
_relayRuntime.ConnectionHandler.insertEdgeAfter(connection,EnsayosEdge);
}
}

var nextClientMutationId=0;

function commit(
environment,
user,
Ensayo_Title,
Ensayo_Description,
Ensayo_Content)
{
var clientMutationId=nextClientMutationId++;

return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content,
clientMutationId:clientMutationId}},



updater:function updater(store){
var payload=store.getRootField('EnsayoAdd');
sharedUpdater(store,user,payload.getLinkedRecord('EnsayosEdge'));
},

optimisticUpdater:function optimisticUpdater(store){
var id='client:EnsayoAdd:Ensayo:'+clientMutationId;
var aEnsayo=store.create(id,'Ensayo');
aEnsayo.setValue(Ensayo_Title,'Ensayo_Title');
aEnsayo.setValue(Ensayo_Description,'Ensayo_Description');
aEnsayo.setValue(Ensayo_Content,'Ensayo_Content');
aEnsayo.setValue(id,'id');

var EnsayosEdge=store.create('client:EnsayoAdd:EnsayosEdge:'+
clientMutationId,
'EnsayosEdge');

EnsayosEdge.setLinkedRecord(aEnsayo,'node');

sharedUpdater(store,user,EnsayosEdge);
}});

}exports.default=

{commit:commit};
//# sourceMappingURL=EnsayoAddMutation.js.map