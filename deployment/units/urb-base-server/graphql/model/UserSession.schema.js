Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('UserSession',{
fields:{
id:'uuid',
UserSession_site_id:'uuid',
UserSession_User_id:'uuid',
UserSession_Start:'timestamp',
UserSession_Expired:'boolean'},


key:['id'],

custom_indexes:[
{
on:'UserSession_User_id',
using:'org.apache.cassandra.index.sasi.SASIIndex',
options:{}}]});exports.default=




true;
//# sourceMappingURL=UserSession.schema.js.map