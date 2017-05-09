Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _nodeUuid=require('node-uuid');var _nodeUuid2=_interopRequireDefault(_nodeUuid);
var _winston=require('winston');var _winston2=_interopRequireDefault(_winston);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}


var Uuid_Null='00000000-0000-0000-0000-000000000000';var


PersisterMemory=function(){



function PersisterMemory(){_classCallCheck(this,PersisterMemory);

this.stores={};
}_createClass(PersisterMemory,[{key:'getStore',value:function getStore(

entityName){

if(entityName in this.stores)
return this.stores[entityName];else

return this.stores[entityName]=[];
}},{key:'findIndexes',value:function findIndexes(

entityName,filter){

var store=this.getStore(entityName);
var arr_Indexes=[];

store.map(function(objectInStore,index){
var filterMatched=true;
for(var filterField in filter){
if(objectInStore[filterField]!=filter[filterField]){
filterMatched=false;
break;
}}

if(filterMatched)
arr_Indexes.push(index);
});

return arr_Indexes;
}},{key:'findObjects',value:function findObjects(

entityName,filter){

var store=this.getStore(entityName);
var arr_Objects=[];

store.map(function(objectInStore){
var filterMatched=true;
for(var filterField in filter){
if(objectInStore[filterField]!=filter[filterField]){
filterMatched=false;
break;
}}

if(filterMatched)
arr_Objects.push(objectInStore);
});

return arr_Objects;
}},{key:'getOneObject',value:function getOneObject(

entityName,ObjectType,filters){var _this=this;

var arr_Objects=filters.map(function(filter){return _this.findObjects(entityName,filter)[0];});
return Promise.resolve(arr_Objects);
}},{key:'getObjectList',value:function getObjectList(

entityName,ObjectType,filters){var _this2=this;

var arr_arr_Objects=filters.map(function(filter){return _this2.findObjects(entityName,filter);});
return Promise.resolve(arr_arr_Objects);
}},{key:'add',value:function add(

entityName,fields,ObjectType){

var store=this.getStore(entityName);
var newObject=new ObjectType(fields);

store.push(newObject);

return Promise.resolve();
}},{key:'update',value:function update(

entityName,fields){


var newFields={};
newFields.id=fields.id;

var an_Object=this.findObjects(entityName,newFields)[0];

for(var fieldName in fields){
an_Object[fieldName]=fields[fieldName];}

return Promise.resolve();
}},{key:'remove',value:function remove(

entityName,fields){

var store=this.getStore(entityName);

var indexToDelete=this.findIndexes(entityName,fields)[0];
store.splice(indexToDelete,1);

return Promise.resolve();
}},{key:'createLogger',value:function createLogger()

{

return null;
}},{key:'uuidFromString',value:function uuidFromString(

str){

return str;
}},{key:'uuidRandom',value:function uuidRandom()

{

return _nodeUuid2.default.v1();
}},{key:'uuidNull',value:function uuidNull()

{

return Uuid_Null;
}},{key:'uuidNullAsString',value:function uuidNullAsString()

{

return Uuid_Null;
}},{key:'uuidToString',value:function uuidToString(

id){


return id;
}},{key:'uuidEquals',value:function uuidEquals(

id1,id2){

return id1==id2;
}},{key:'addTableSchema',value:function addTableSchema(

tableName,tableSchema){


}},{key:'confirmHealth',value:function confirmHealth()

{

return new Promise(function(resolve,reject){
resolve();
});
}},{key:'initialize',value:function initialize(

runAsPartOfSetupDatabase,cb){


cb();
}}]);return PersisterMemory;}();exports.default=PersisterMemory;
//# sourceMappingURL=PersisterMemory.js.map