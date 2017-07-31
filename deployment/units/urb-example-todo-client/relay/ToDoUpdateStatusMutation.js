Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');
var _relayRuntime=require('relay-runtime');

var mutation=function mutation(){return require('./__generated__/ToDoUpdateStatusMutation.graphql');};














function sharedUpdater(store,user,proxyToDo){


var userProxy=store.get(user.id);
var status=proxyToDo.getValue('complete')?'active':'completed';
var connection=_relayRuntime.ConnectionHandler.getConnection(userProxy,'ToDoList_ToDos',{status:status});
if(connection){
_relayRuntime.ConnectionHandler.deleteNode(connection,proxyToDo.getValue('id'));
}
}

function commit(environment,user,aToDo,ToDo_Complete){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{id:aToDo.id,ToDo_Complete:ToDo_Complete}},


updater:function updater(store){
var payload=store.getRootField('ToDoUpdateStatus');
sharedUpdater(store,user,payload.getLinkedRecord('ToDo'));
},

optimisticUpdater:function optimisticUpdater(store){
var proxyToDo=store.get(aToDo.id);
proxyToDo.setValue(ToDo_Complete,'complete');
sharedUpdater(store,user,proxyToDo);

var userProxy=store.get(user.id);
var ToDo_CompletedCount=userProxy.getValue('ToDo_CompletedCount');
if(ToDo_CompletedCount!=null){
userProxy.setValue(ToDo_CompletedCount+(ToDo_Complete?1:-1),'ToDo_CompletedCount');
}
}});

}var _default=

{commit:commit};exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(mutation,'mutation','units/urb-example-todo-client/relay/ToDoUpdateStatusMutation.js');__REACT_HOT_LOADER__.register(sharedUpdater,'sharedUpdater','units/urb-example-todo-client/relay/ToDoUpdateStatusMutation.js');__REACT_HOT_LOADER__.register(commit,'commit','units/urb-example-todo-client/relay/ToDoUpdateStatusMutation.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-client/relay/ToDoUpdateStatusMutation.js');}();;
//# sourceMappingURL=ToDoUpdateStatusMutation.js.map