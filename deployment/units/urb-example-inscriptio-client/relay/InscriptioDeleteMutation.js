Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/InscriptioDeleteMutation.graphql');};







function sharedUpdater(store,user,deletedId){
var userProxy=store.get(user.id);

var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'InscriptioList_Inscriptios');

if(connection){
_relayRuntime.ConnectionHandler.deleteNode(connection,deletedId);
}
}

function commit(environment,user,aInscriptio){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{id:aInscriptio.id}},


updater:function updater(store){
var payload=store.getRootField('InscriptioDelete');
sharedUpdater(store,user,payload.getValue('deletedId'));
},

optimisticUpdater:function optimisticUpdater(store){
sharedUpdater(store,user,aInscriptio.id);
}});

}exports.default=

{commit:commit};
//# sourceMappingURL=InscriptioDeleteMutation.js.map