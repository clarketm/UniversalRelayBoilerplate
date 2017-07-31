Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');

var mutation=function mutation(){return require('./__generated__/ToDoUpdateRenameMutation.graphql');};










function commit(environment,aToDo,ToDo_Text){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{id:aToDo.id,ToDo_Text:ToDo_Text}},


optimisticResponse:function optimisticResponse(){
return{
ToDoUpdateRename:{
ToDo:{
id:aToDo.id,
ToDo_Text:ToDo_Text}}};



}});

}var _default=

{commit:commit};exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(mutation,'mutation','units/urb-example-todo-client/relay/ToDoUpdateRenameMutation.js');__REACT_HOT_LOADER__.register(commit,'commit','units/urb-example-todo-client/relay/ToDoUpdateRenameMutation.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-client/relay/ToDoUpdateRenameMutation.js');}();;
//# sourceMappingURL=ToDoUpdateRenameMutation.js.map