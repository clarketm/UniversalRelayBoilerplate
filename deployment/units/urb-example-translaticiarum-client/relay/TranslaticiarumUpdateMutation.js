Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');

var mutation=function mutation(){return require('./__generated__/TranslaticiarumUpdateMutation.graphql');};












function commit(
environment,
aTranslaticiarum,
Translaticiarum_Start,
Translaticiarum_Stop,
Translaticiarum_Description)
{
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{
id:aTranslaticiarum.id,
Translaticiarum_Start:Translaticiarum_Start,
Translaticiarum_Stop:Translaticiarum_Stop,
Translaticiarum_Description:Translaticiarum_Description}},



optimisticResponse:function optimisticResponse(){
return{
TranslaticiarumUpdate:{
Translaticiarum:{
id:aTranslaticiarum.id,
Translaticiarum_Start:Translaticiarum_Start,
Translaticiarum_Stop:Translaticiarum_Stop,
Translaticiarum_Description:Translaticiarum_Description}}};



}});

}exports.default=

{commit:commit};
//# sourceMappingURL=TranslaticiarumUpdateMutation.js.map