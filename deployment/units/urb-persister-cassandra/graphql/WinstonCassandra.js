var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _util=require('util');var _util2=_interopRequireDefault(_util);
var _events=require('events');var _events2=_interopRequireDefault(_events);

var _winston=require('winston');var _winston2=_interopRequireDefault(_winston);
var _cassandraDriver=require('cassandra-driver');var _cassandraDriver2=_interopRequireDefault(_cassandraDriver);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var defaultOptions={

table:'logs',

partitionBy:'day',
consistency:_cassandraDriver2.default.types.consistencies.quorum,
level:'info',
name:'cassandra'};


function Cassandra(options){
if(!options){
throw new Error('Transport options is required');
}

if(!options.keyspace){
throw new Error('You must specify the options.keyspace');
}

this.options=_extends({},defaultOptions,options);


this.name=this.options.name;
this.level=this.options.level;


this.schemaStatus=new _events2.default.EventEmitter();
this.schemaStatus.setMaxListeners(0);
this.client=new _cassandraDriver2.default.Client(this.options);
}

_util2.default.inherits(Cassandra,_winston2.default.Transport);

Cassandra.prototype.log=function(level,msg,meta,callback){
var self=this;
return self._insertLog(level,msg,meta,function(err){
callback(err,!err);
});
};




Cassandra.prototype.getKey=function(){
if(this.options.partitionBy==='day'){
return new Date().toISOString().slice(0,10);
}else if(this.options.partitionBy==='hour'){
return new Date().toISOString().slice(0,13);
}
return null;
};




Cassandra.prototype._insertLog=function(level,msg,meta,callback){
var key=this.getKey();
if(!key){
return callback(
new Error('Partition '+this.options.partitionBy+' not supported'),
false);

}

return this.client.execute(
'INSERT INTO '+
this.options.table+
' (key, date, level, message, meta) VALUES (?, ?, ?, ?, ?)',
[key,new Date(),level,msg,_util2.default.inspect(meta)],
{prepare:true,consistency:this.options.consistency},
callback);

};


_winston2.default.transports.Cassandra=Cassandra;
module.exports=Cassandra;


module.exports.Cassandra=Cassandra;
module.exports.types=_cassandraDriver2.default.types;
//# sourceMappingURL=WinstonCassandra.js.map