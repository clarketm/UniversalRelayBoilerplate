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

}exports.default=

{commit:commit};
//# sourceMappingURL=ToDoUpdateRenameMutation.js.map