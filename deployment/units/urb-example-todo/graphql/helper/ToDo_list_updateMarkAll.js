Object.defineProperty(exports,"__esModule",{value:true});exports.default=ToDo_list_updateMarkAll;function ToDo_list_updateMarkAll(objectManager,ToDo_CompleteNew){

return objectManager.getObjectList('ToDo',{ToDo_User_id:objectManager.getViewerUserId()}).
then(function(arr){
var arr_filtered=arr.filter(function(a_ToDo){return a_ToDo.ToDo_Complete!=ToDo_CompleteNew;});

var arrPromiseToUpdate=arr_filtered.map(function(a_ToDo){return objectManager.update('ToDo',{
id:a_ToDo.id,
ToDo_Complete:ToDo_CompleteNew});});


var arr_local_ids_Changed_ToDos=arr_filtered.map(function(a_ToDo){return a_ToDo.id;});

return Promise.all(arrPromiseToUpdate).
then(function(){return arr_local_ids_Changed_ToDos;});
});
}
//# sourceMappingURL=ToDo_list_updateMarkAll.js.map