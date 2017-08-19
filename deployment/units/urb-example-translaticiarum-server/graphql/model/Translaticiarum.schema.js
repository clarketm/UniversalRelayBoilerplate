Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('Translaticiarum',{
fields:{
id:'uuid',
Translaticiarum_User_id:'uuid',
Translaticiarum_Stop:'timestamp',
Translaticiarum_Start:'timestamp',
Translaticiarum_Description:'text'},


key:['id'],

custom_indexes:[
{
on:'Translaticiarum_User_id',
using:'org.apache.cassandra.index.sasi.SASIIndex',
options:{}}]});exports.default=




true;
//# sourceMappingURL=Translaticiarum.schema.js.map