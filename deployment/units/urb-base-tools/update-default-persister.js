

var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);
var _path=require('path');var _path2=_interopRequireDefault(_path);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var supportedPersisters={
cassandra:'../../../urb-persister-cassandra/graphql/PersisterCassandra',
dynamodb:'../../../urb-persister-dynamodb/graphql/PersisterDynamoDB',
memory:'../../../urb-persister-memory/graphql/PersisterMemory'};


function updateDefaultPersister(fileName){
var defaultPersister=[
'// @flow',
'',
'import Persister from \''+fileName+'\'',
'',
'',
'const defaultPersister = new Persister( )',
'export default defaultPersister'];


console.log(
'Written: '+
_path2.default.resolve(
'./units/_configuration/urb-base-server/graphql/defaultPersister.js'));


_fs2.default.writeFileSync(
'./units/_configuration/urb-base-server/graphql/defaultPersister.js',
defaultPersister.join('\r\n'),
'utf8');

}

var persisterName=process.argv[2];
var persisterFileName=supportedPersisters[persisterName];

if(persisterFileName!=null)updateDefaultPersister(persisterFileName);else
{
console.error(
'Error: Default persister not specified. Specify default persister, for instance:');

console.error('  npm run update-default-persister -- memory');
console.error('Valid options are:');
for(var name in supportedPersisters){console.error('  '+name);}
}
//# sourceMappingURL=update-default-persister.js.map