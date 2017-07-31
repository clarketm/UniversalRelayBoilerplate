

var util=require('util');
var events=require('events');

var winston=require('winston');
var cql=require('cassandra-driver');

var defaultOptions={

table:'logs',

partitionBy:'day',
consistency:cql.types.consistencies.quorum,
level:'info',
name:'cassandra'};


function Cassandra(options){
if(!options){
throw new Error('Transport options is required');
}
if(!options.keyspace){
throw new Error('You must specify the options.keyspace');
}
this.options=Cassandra.extend({},defaultOptions,options);

this.name=this.options.name;
this.level=this.options.level;

this.schemaStatus=new events.EventEmitter();
this.schemaStatus.setMaxListeners(0);
this.client=new cql.Client(this.options);
}

util.inherits(Cassandra,winston.Transport);

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
return callback(new Error('Partition '+this.options.partitionBy+' not supported'),false);
}

return this.client.execute(
'INSERT INTO '+
this.options.table+
' (key, date, level, message, meta) VALUES (?, ?, ?, ?, ?)',
[key,new Date(),level,msg,util.inspect(meta)],
{prepare:true,consistency:this.options.consistency},
callback);

};





Cassandra.extend=function(target){
var sources=[].slice.call(arguments,1);
sources.forEach(function(source){
for(var prop in source){
if(source.hasOwnProperty(prop)){
target[prop]=source[prop];
}
}
});
return target;
};


winston.transports.Cassandra=Cassandra;
module.exports=Cassandra;


module.exports.Cassandra=Cassandra;
module.exports.types=cql.types;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(defaultOptions,'defaultOptions','units/urb-persister-cassandra/graphql/WinstonCassandra.js');__REACT_HOT_LOADER__.register(Cassandra,'Cassandra','units/urb-persister-cassandra/graphql/WinstonCassandra.js');}();;
//# sourceMappingURL=WinstonCassandra.js.map