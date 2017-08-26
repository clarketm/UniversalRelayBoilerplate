Object.defineProperty(exports,"__esModule",{value:true});exports.default=

function ToDoListUpdateMarkAll(
objectManager,
ToDo_CompleteNew){var arr,arr_filtered,arrPromiseToUpdate,arr_local_ids_Changed_ToDos;return regeneratorRuntime.async(function ToDoListUpdateMarkAll$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(

objectManager.getObjectList('ToDo',{
ToDo_User_id:objectManager.getViewerUserId()}));case 2:arr=_context.sent;


arr_filtered=arr.filter(
function(a_ToDo){return a_ToDo.ToDo_Complete!==ToDo_CompleteNew;});


arrPromiseToUpdate=arr_filtered.map(function(a_ToDo){return(
objectManager.update('ToDo',{
id:a_ToDo.id,
ToDo_Complete:ToDo_CompleteNew}));});



arr_local_ids_Changed_ToDos=arr_filtered.map(function(a_ToDo){return a_ToDo.id;});_context.next=8;return regeneratorRuntime.awrap(

Promise.all(arrPromiseToUpdate));case 8:return _context.abrupt('return',

arr_local_ids_Changed_ToDos);case 9:case'end':return _context.stop();}}},null,this);};
//# sourceMappingURL=ToDoListUpdateMarkAll.js.map