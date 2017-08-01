Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _joi=require('joi');var _joi2=_interopRequireDefault(_joi);
var _nodeUuid=require('node-uuid');var _nodeUuid2=_interopRequireDefault(_nodeUuid);
var _vogels=require('vogels');var _vogels2=_interopRequireDefault(_vogels);
var _winston=require('winston');var _winston2=_interopRequireDefault(_winston);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

require('dotenv').load();

var Uuid_Null='00000000-0000-0000-0000-000000000000';
var AWS=_vogels2.default.AWS;

if(process.env.DYNAMODB_SECRETACCESSKEY){

AWS.config.update({
accessKeyId:process.env.DYNAMODB_ACCESSKEYID,
secretAccessKey:process.env.DYNAMODB_SECRETACCESSKEY,
region:process.env.DYNAMODB_REGION});

}else{

AWS.config.update({region:'us-east-1'});
var opts={endpoint:'http://localhost:8000',apiVersion:'2012-08-10'};
_vogels2.default.dynamoDriver(new AWS.DynamoDB(opts));
}var

PersisterDynamoDB=function(){
function PersisterDynamoDB(){_classCallCheck(this,PersisterDynamoDB);
this.tables={};
this.canAddMoreTableSchemas=true;
}_createClass(PersisterDynamoDB,[{key:'getOneObject',value:function getOneObject(

entityName,ObjectType,filters){var _this=this;
var resultPromises=[];var _loop=function _loop(

filter){
resultPromises.push(
new Promise(function(resolve,reject){
_this.tables[entityName].get(filter,function(err,entity){
if(err)reject(err);else
{
if(entity!=null)resolve(new ObjectType(entity.get()));else
resolve(null);
}
});
}));};for(var _iterator=filters,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var filter=_ref;_loop(filter);}


return Promise.all(resultPromises);
}},{key:'getObjectList',value:function getObjectList(

entityName,ObjectType,filters){var _this2=this;
var resultPromises=[];var _loop2=function _loop2(

filter){
resultPromises.push(
new Promise(function(resolve,reject){
var query=_this2.tables[entityName].scan();
for(var fieldName in filter){
query=query.where(fieldName).equals(filter[fieldName]);
if(fieldName!=='id'&&fieldName.includes('Id'))
query=query.usingIndex(fieldName+'Index');
}

query.exec(function(err,queryResults){
if(err)reject(err);else
{
var arrRetObj=[];
for(var _iterator3=queryResults.Items,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var entity=_ref3;arrRetObj.push(new ObjectType(entity.get()));}
resolve(arrRetObj);
}
});
}));};for(var _iterator2=filters,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var filter=_ref2;_loop2(filter);}


return Promise.all(resultPromises);
}},{key:'add',value:function add(

entityName,fields,ObjectType){var _this3=this;
return new Promise(function(resolve,reject){
_this3.tables[entityName].create(fields,function(err){
if(err)reject(err);else
resolve();
});
});
}},{key:'update',value:function update(

entityName,fields){var _this4=this;
return new Promise(function(resolve,reject){
_this4.tables[entityName].update(fields,function(err){
if(err)reject(err);else
resolve();
});
});
}},{key:'remove',value:function remove(

entityName,fields){var _this5=this;
return new Promise(function(resolve,reject){
_this5.tables[entityName].destroy(fields,function(err){
if(err)reject(err);else
resolve();
});
});
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
if(!this.canAddMoreTableSchemas){
console.error('💔 Attempting to add table schemas to Vogel after createTables.');
process.exit(1);
}

var vogelsSchema={
schema:{},
indexes:[]};



var key=tableSchema.key;
if(Array.isArray(key))key=key[0];

vogelsSchema.hashKey=key;


for(var fieldName in tableSchema.fields){
var fieldType=tableSchema.fields[fieldName];

var vogelFieldDefinition=void 0;

if(fieldType=='uuid')vogelFieldDefinition=_vogels2.default.types.uuid();else
if(fieldType=='text')vogelFieldDefinition=_joi2.default.string().allow('');else
if(fieldType=='timestamp')vogelFieldDefinition=_joi2.default.date();else
if(fieldType=='int')vogelFieldDefinition=_joi2.default.number();else
if(fieldType=='boolean')vogelFieldDefinition=_joi2.default.boolean();else
{

console.log('💔  Dynamo DB: unsupported field type '+fieldType);
vogelFieldDefinition=_joi2.default.string();
}

vogelsSchema.schema[fieldName]=vogelFieldDefinition;
}


if(tableSchema.indexes){
for(var _iterator4=tableSchema.indexes,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref4;if(_isArray4){if(_i4>=_iterator4.length)break;_ref4=_iterator4[_i4++];}else{_i4=_iterator4.next();if(_i4.done)break;_ref4=_i4.value;}var _fieldName=_ref4;
vogelsSchema.indexes.push({hashKey:_fieldName,name:_fieldName+'Index',type:'global'});}}

this.tables[tableName]=_vogels2.default.define(tableName,vogelsSchema);
}},{key:'confirmHealth',value:function confirmHealth()

{

return new Promise(function(resolve,reject){
resolve();
});
}},{key:'initialize',value:function initialize(

runAsPartOfSetupDatabase,cb){

this.canAddMoreTableSchemas=false;

_vogels2.default.createTables(function(err){
if(err){
console.log('💔 Initializing DynamoDB persister - error');
console.log(err);
process.exit(1);
}else{
cb();
}
});
}}]);return PersisterDynamoDB;}();exports.default=PersisterDynamoDB;
//# sourceMappingURL=PersisterDynamoDB.js.map