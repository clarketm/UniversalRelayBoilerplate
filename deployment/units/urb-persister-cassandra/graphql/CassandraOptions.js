Object.defineProperty(exports,"__esModule",{value:true});

var _cassandraDriver=require('cassandra-driver');var _cassandraDriver2=_interopRequireDefault(_cassandraDriver);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var CassandraOptions={

contactPoints:process.env.CASSANDRA_CONNECTION_POINTS!=null?
process.env.CASSANDRA_CONNECTION_POINTS.split(','):
['localhost'],
keyspace:process.env.CASSANDRA_KEYSPACE,
authProvider:null};


if(process.env.CASSANDRA_USER){
CassandraOptions.authProvider=new _cassandraDriver2.default.auth.PlainTextAuthProvider(
process.env.CASSANDRA_USER,
process.env.CASSANDRA_PASSWORD);

}var _default=

CassandraOptions;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(CassandraOptions,'CassandraOptions','units/urb-persister-cassandra/graphql/CassandraOptions.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-persister-cassandra/graphql/CassandraOptions.js');}();;
//# sourceMappingURL=CassandraOptions.js.map