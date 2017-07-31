Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/ToDoAddMutation.graphql');};


















function sharedUpdater(store,user,ToDosEdge){
var userProxy=store.get(user.id);
['any','active'].forEach(function(status){
var connection=_relayRuntime.ConnectionHandler.getConnection(userProxy,'ToDoList_ToDos',{status:status});
if(connection){
_relayRuntime.ConnectionHandler.insertEdgeAfter(connection,ToDosEdge);
}
});
}

var nextClientMutationId=0;

function commit(environment,user,ToDo_Text){
var clientMutationId=nextClientMutationId++;

return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{ToDo_Text:ToDo_Text,clientMutationId:clientMutationId}},


updater:function updater(store){
var payload=store.getRootField('ToDoAdd');
sharedUpdater(store,user,payload.getLinkedRecord('ToDosEdge'));
},

optimisticUpdater:function optimisticUpdater(store){
var id='client:ToDoAdd:ToDo:'+clientMutationId;
var aToDo=store.create(id,'ToDo');
aToDo.setValue(ToDo_Text,'ToDo_Text');
aToDo.setValue(id,'id');

var ToDosEdge=store.create('client:ToDoAdd:ToDosEdge:'+clientMutationId,'ToDosEdge');
ToDosEdge.setLinkedRecord(aToDo,'node');

sharedUpdater(store,user,ToDosEdge);

var userProxy=store.get(user.id);
var ToDo_TotalCount=userProxy.getValue('ToDo_TotalCount');
if(ToDo_TotalCount!=null){
userProxy.setValue(ToDo_TotalCount+1,'ToDo_TotalCount');
}
}});

}var _default=

{commit:commit};exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(mutation,'mutation','units/urb-example-todo-client/relay/ToDoAddMutation.js');__REACT_HOT_LOADER__.register(sharedUpdater,'sharedUpdater','units/urb-example-todo-client/relay/ToDoAddMutation.js');__REACT_HOT_LOADER__.register(nextClientMutationId,'nextClientMutationId','units/urb-example-todo-client/relay/ToDoAddMutation.js');__REACT_HOT_LOADER__.register(commit,'commit','units/urb-example-todo-client/relay/ToDoAddMutation.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-client/relay/ToDoAddMutation.js');}();;
//# sourceMappingURL=ToDoAddMutation.js.map