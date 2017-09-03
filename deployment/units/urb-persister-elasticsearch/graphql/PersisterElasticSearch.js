Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _nodeUuid=require('node-uuid');var _nodeUuid2=_interopRequireDefault(_nodeUuid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Uuid_Null='00000000-0000-0000-0000-000000000000';var

PersisterElasticSearch=function(){


function PersisterElasticSearch(){_classCallCheck(this,PersisterElasticSearch);
this.stores={};
}_createClass(PersisterElasticSearch,[{key:'getStore',value:function getStore(

entityName){
if(entityName in this.stores)return this.stores[entityName];else
return this.stores[entityName]=[];
}},{key:'findIndexes',value:function findIndexes(

entityName,filter){
var store=this.getStore(entityName);
var arr_Indexes=[];

for(var _iterator=store,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref3;if(_isArray){if(_i>=_iterator.length)break;_ref3=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref3=_i.value;}var _ref=_ref3;var _ref2=_slicedToArray(_ref,2);var objectInStore=_ref2[0];var index=_ref2[1];
var filterMatched=true;
for(var filterField in filter){
if(objectInStore[filterField]!==filter[filterField]){
filterMatched=false;
break;
}}

if(filterMatched)arr_Indexes.push(index);
}

return arr_Indexes;
}},{key:'findObjects',value:function findObjects(

entityName,filter){
var store=this.getStore(entityName);
var arr_Objects=[];

store.map(function(objectInStore){
var filterMatched=true;
for(var filterField in filter){
if(objectInStore[filterField]!==filter[filterField]){
filterMatched=false;
break;
}}

if(filterMatched)arr_Objects.push(objectInStore);
});

return arr_Objects;
}},{key:'getOneObject',value:function getOneObject(


entityName,
ObjectType,
filters)
{var _this=this;
var arr_Objects=filters.map(
function(filter){return _this.findObjects(entityName,filter)[0];});

return Promise.resolve(arr_Objects);
}},{key:'getObjectList',value:function getObjectList(


entityName,
ObjectType,
filters)
{var _this2=this;
var arr_arr_Objects=filters.map(function(filter){return(
_this2.findObjects(entityName,filter));});

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

for(var fieldName in fields){an_Object[fieldName]=fields[fieldName];}

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
return id1===id2;
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
}}]);return PersisterElasticSearch;}();exports.default=PersisterElasticSearch;
//# sourceMappingURL=PersisterElasticSearch.js.map