Object.defineProperty(exports,"__esModule",{value:true});

var _reactRelay=require('react-relay');

var mutation=function mutation(){return require('./__generated__/EnsayoUpdateMutation.graphql');};












function commit(environment,aEnsayo,Ensayo_Title,Ensayo_Description,Ensayo_Content){
return(0,_reactRelay.commitMutation)(environment,{
mutation:mutation,
variables:{
input:{id:aEnsayo.id,Ensayo_Title:Ensayo_Title,Ensayo_Description:Ensayo_Description,Ensayo_Content:Ensayo_Content}},


optimisticResponse:function optimisticResponse(){
return{
EnsayoUpdate:{
Ensayo:{
id:aEnsayo.id,
Ensayo_Title:Ensayo_Title,
Ensayo_Description:Ensayo_Description,
Ensayo_Content:Ensayo_Content}}};



}});

}var _default=

{commit:commit};exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(mutation,'mutation','units/urb-example-ensayo-client/relay/EnsayoUpdateMutation.js');__REACT_HOT_LOADER__.register(commit,'commit','units/urb-example-ensayo-client/relay/EnsayoUpdateMutation.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-client/relay/EnsayoUpdateMutation.js');}();;
//# sourceMappingURL=EnsayoUpdateMutation.js.map