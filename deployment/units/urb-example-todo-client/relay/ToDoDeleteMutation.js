Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/ToDoDeleteMutation.graphql');};











function sharedUpdater(store,user,deletedId){
var userProxy=store.get(user.id);
['any','active','completed'].forEach(function(status){
var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'ToDoList_ToDos',
{status:status});

if(connection){
_relayRuntime.ConnectionHandler.deleteNode(connection,deletedId);
}
});
}

function commit(environment,user,aToDo){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{id:aToDo.id}},


updater:function updater(store){
var payload=store.getRootField('ToDoDelete');
sharedUpdater(store,user,payload.getValue('deletedId'));
},

optimisticUpdater:function optimisticUpdater(store){
sharedUpdater(store,user,aToDo.id);

var userProxy=store.get(user.id);
var ToDo_TotalCount=userProxy.getValue('ToDo_TotalCount');
if(ToDo_TotalCount!=null){
userProxy.setValue(ToDo_TotalCount-1,'ToDo_TotalCount');
}
var ToDo_CompletedCount=userProxy.getValue('ToDo_CompletedCount');
if(ToDo_CompletedCount!=null){
if(aToDo.ToDo_Complete!=null){
if(aToDo.ToDo_Complete){
userProxy.setValue(ToDo_CompletedCount-1,'ToDo_CompletedCount');
}
}else if(ToDo_TotalCount!=null){

if(ToDo_TotalCount-1<ToDo_CompletedCount){
userProxy.setValue(ToDo_TotalCount-1,'ToDo_CompletedCount');
}
}
}
}});

}exports.default=

{commit:commit};
//# sourceMappingURL=ToDoDeleteMutation.js.map