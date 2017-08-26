Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _cassandraDriver=require('cassandra-driver');var _cassandraDriver2=_interopRequireDefault(_cassandraDriver);
var _expressCassandra=require('express-cassandra');var _expressCassandra2=_interopRequireDefault(_expressCassandra);

var _CassandraOptions=require('./CassandraOptions');var _CassandraOptions2=_interopRequireDefault(_CassandraOptions);
var _WinstonCassandra=require('./WinstonCassandra');var _WinstonCassandra2=_interopRequireDefault(_WinstonCassandra);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Uuid=_cassandraDriver2.default.types.Uuid;
var Uuid_Null_String='00000000-0000-0000-0000-000000000000';
var Uuid_Null=Uuid.fromString(Uuid_Null_String);

var ExpressCassandraClient=_expressCassandra2.default.createClient({
clientOptions:_CassandraOptions2.default,
ormOptions:{
defaultReplicationStrategy:{
class:'SimpleStrategy',
replication_factor:1},

migration:'alter',
disableTTYConfirmation:true,
createKeyspace:true}});var



PersisterCassandra=function(){


function PersisterCassandra(){_classCallCheck(this,PersisterCassandra);
this.tableSchemas=new Map();
}_createClass(PersisterCassandra,[{key:'getOneObject',value:function getOneObject(


entityName,
ObjectType,
filters)
{var _this=this;
var resultPromises=[];var _loop=function _loop(

filter){
resultPromises.push(
new Promise(function(resolve,reject){
_this.updateUuidsInFields(entityName,filter);
ExpressCassandraClient.instance[entityName].findOne(
filter,
{
raw:true,
allow_filtering:true},

function(err,entity){
if(err)reject(err);else
{
if(entity!=null)resolve(new ObjectType(entity));else
resolve(null);
}
});

}));};for(var _iterator=filters,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var filter=_ref;_loop(filter);}


return Promise.all(resultPromises);
}},{key:'getObjectList',value:function getObjectList(


entityName,
ObjectType,
filters)
{var _this2=this;
var resultPromises=[];var _loop2=function _loop2(

filter){
resultPromises.push(
new Promise(function(resolve,reject){
_this2.updateUuidsInFields(entityName,filter);
ExpressCassandraClient.instance[entityName].find(
filter,
{
raw:true,
allow_filtering:true},

function(err,arrEntities){
if(err)reject(err);else
{
var arrRetObj=[];
for(var _iterator3=arrEntities,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var entity=_ref3;
arrRetObj.push(new ObjectType(entity));}
resolve(arrRetObj);
}
});

}));};for(var _iterator2=filters,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var filter=_ref2;_loop2(filter);}


return Promise.all(resultPromises);
}},{key:'updateUuidsInFields',value:function updateUuidsInFields(

entityName,fields){
var schemaFields=
ExpressCassandraClient.instance[entityName]._properties.schema.fields;
for(var fieldName in fields){
var fieldType=schemaFields[fieldName];
if(fieldType==='uuid'){
var fieldValue=fields[fieldName];
if(!(fieldValue instanceof Uuid))
fields[fieldName]=Uuid.fromString(fieldValue);
}
}
}},{key:'add',value:function add(

entityName,fields){
this.updateUuidsInFields(entityName,fields);

return new Promise(function(resolve,reject){
var entity=new ExpressCassandraClient.instance[entityName](fields);
entity.save(function(err){
if(err)reject(err);else
resolve();
});
});
}},{key:'update',value:function update(

entityName,fields){

return this.add(entityName,fields);
}},{key:'remove',value:function remove(

entityName,fields){
this.updateUuidsInFields(entityName,fields);

return new Promise(function(resolve,reject){
ExpressCassandraClient.instance[entityName].delete(fields,function(err){
if(err)reject(err);else
resolve();
});
});
}},{key:'createLogger',value:function createLogger()

{
return new _WinstonCassandra2.default(_CassandraOptions2.default);
}},{key:'uuidFromString',value:function uuidFromString(

str){
return Uuid.fromString(str);
}},{key:'uuidRandom',value:function uuidRandom()

{
return Uuid.random();
}},{key:'uuidNull',value:function uuidNull()

{
return Uuid_Null;
}},{key:'uuidNullAsString',value:function uuidNullAsString()

{
return Uuid_Null_String;
}},{key:'uuidToString',value:function uuidToString(

id){
if(id instanceof Uuid)id=id.toString();

return id;
}},{key:'uuidEquals',value:function uuidEquals(

id1,id2){
return id1.equals(id2);
}},{key:'addTableSchema',value:function addTableSchema(

tableName,tableSchema){
if(this.tableSchemas)this.tableSchemas.set(tableName,tableSchema);else
{
console.error(
'💔 Attempting to add table schemas after express-cassandra client connect.');

process.exit(1);
}
}},{key:'confirmHealth',value:function confirmHealth()

{
return new Promise(function(resolve,reject){
ExpressCassandraClient.modelInstance.User.get_cql_client(
function(err,client){
if(err)reject(err);else

client.execute(
'select release_version from system.local;',
function(err,result){
if(err)reject(err);else
resolve();
});

});

});
}},{key:'initialize',value:function initialize(

runAsPartOfSetupDatabase,cb){var _this3=this;

var enrolledTables=this.tableSchemas;
this.tableSchemas=null;

ExpressCassandraClient.connect(function(err){
if(err){
console.log('💔 Could not connect to Cassandra: '+err.message);
setTimeout(function(){return process.exit(1);},5000);
}else if(!enrolledTables)console.log('💔 Table schemas missing!');else
{
var arrSchemas=[];
for(var _iterator4=enrolledTables.keys(),_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref4;if(_isArray4){if(_i4>=_iterator4.length)break;_ref4=_iterator4[_i4++];}else{_i4=_iterator4.next();if(_i4.done)break;_ref4=_i4.value;}var tableName=_ref4;
arrSchemas.push([tableName,enrolledTables.get(tableName)]);}

_this3.loadOneTableSchemaFromArray(
arrSchemas,
runAsPartOfSetupDatabase,
cb);

}
});
}},{key:'loadOneTableSchemaFromArray',value:function loadOneTableSchemaFromArray(


arrSchemas,
runAsPartOfSetupDatabase,
cb)
{var _this4=this;
if(arrSchemas.length>0){
var tableName=arrSchemas[0][0];
var tableSchema=arrSchemas[0][1];

arrSchemas.splice(0,1);

ExpressCassandraClient.loadSchema(tableName,tableSchema,function(err){
if(err){
console.log(
'💔 Initializing Cassandra persister - error while creating '+
tableName+
'!');

console.error(err.message);
process.exit(1);
}else{
if(runAsPartOfSetupDatabase)
console.log(
'🛢 Table '+
ExpressCassandraClient.modelInstance[tableName]._properties.
name+
' ready.');


_this4.loadOneTableSchemaFromArray(
arrSchemas,
runAsPartOfSetupDatabase,
cb);

return;
}
});
}else{
cb();
}
}}]);return PersisterCassandra;}();exports.default=PersisterCassandra;
//# sourceMappingURL=PersisterCassandra.js.map