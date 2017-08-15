Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('Inscriptio',{
fields:{
id:'uuid',
Inscriptio_User_id:'uuid',
Inscriptio_LocationLon:'text',
Inscriptio_LocationLat:'text',
Inscriptio_Notes:'text'},


key:['id'],

custom_indexes:[
{
on:'Inscriptio_User_id',
using:'org.apache.cassandra.index.sasi.SASIIndex',
options:{}}]});exports.default=




true;
//# sourceMappingURL=Inscriptio.schema.js.map