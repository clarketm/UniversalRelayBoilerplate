Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');

var mutation=function mutation(){return require('./__generated__/EnsayoUpdateMutation.graphql');};












function commit(
environment,
aEnsayo,
Ensayo_Title,
Ensayo_Description,
Ensayo_Content)
{
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{
id:aEnsayo.id,
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content}},



optimisticResponse:function optimisticResponse(){
return{
EnsayoUpdate:{
Ensayo:{
id:aEnsayo.id,
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content}}};



}});

}exports.default=

{commit:commit};
//# sourceMappingURL=EnsayoUpdateMutation.js.map