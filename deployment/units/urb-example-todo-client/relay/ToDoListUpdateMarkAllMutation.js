Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/ToDoListUpdateMarkAllMutation.graphql');};


























function commit(environment,user,ToDos,ToDo_Complete,status){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{ToDo_Complete:ToDo_Complete},
status:status},


updater:function updater(store){
var userProxy=store.get(user.id);
var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'ToDoList_ToDos',
{status:status});

var ToDosEdges=store.
getRootField('ToDoListUpdateMarkAll').
getLinkedRecord('Viewer').
getLinkedRecord('ToDos',{status:status}).
getLinkedRecords('edges');
connection.setLinkedRecords(ToDosEdges,'edges');
},

optimisticUpdater:function optimisticUpdater(store){
var userProxy=store.get(user.id);
var connection=_relayRuntime.ConnectionHandler.getConnection(
userProxy,
'ToDoList_ToDos',
{status:status});


if(
ToDo_Complete&&status==='active'||
!ToDo_Complete&&status==='completed')
{
connection.setLinkedRecords([],'edges');
}
},

optimisticResponse:function optimisticResponse(){
var payload={
Viewer:{
id:user.id,
ToDo_CompletedCount:0},

changedToDos:null};


if(ToDos&&ToDos.edges){
payload.changedToDos=ToDos.edges.
filter(function(_ref){var node=_ref.node;return node.ToDo_Complete!==ToDo_Complete;}).
map(function(_ref2){var node=_ref2.node;return{id:node.id,ToDo_Complete:ToDo_Complete};});
}

if(ToDo_Complete){
if(user.ToDo_TotalCount!=null){
payload.Viewer.ToDo_CompletedCount=user.ToDo_TotalCount;
}
}else{
payload.Viewer.ToDo_CompletedCount=0;
}

return{
ToDoListUpdateMarkAll:payload};

}});

}exports.default=

{commit:commit};
//# sourceMappingURL=ToDoListUpdateMarkAllMutation.js.map