Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/TranslaticiarumDeleteMutation.graphql');};







function sharedUpdater(store,user,deletedId){
var userProxy=store.get(user.id);

var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'TranslaticiarumList_Translaticiarums');

if(connection){
_relayRuntime.ConnectionHandler.deleteNode(connection,deletedId);
}
}

function commit(environment,user,aTranslaticiarum){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{id:aTranslaticiarum.id}},


updater:function updater(store){
var payload=store.getRootField('TranslaticiarumDelete');
sharedUpdater(store,user,payload.getValue('deletedId'));
},

optimisticUpdater:function optimisticUpdater(store){
sharedUpdater(store,user,aTranslaticiarum.id);
}});

}exports.default=

{commit:commit};
//# sourceMappingURL=TranslaticiarumDeleteMutation.js.map