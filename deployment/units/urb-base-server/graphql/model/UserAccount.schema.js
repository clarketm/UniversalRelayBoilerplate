Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('UserAccount',{
fields:{
id:'uuid',
UserAccount_site_id:'uuid',
UserAccount_User_id:'uuid',
UserAccount_Identifier:'text',
UserAccount_Type:'text'},


key:['id'],

custom_indexes:[
{
on:'UserAccount_Identifier',
using:'org.apache.cassandra.index.sasi.SASIIndex',
options:{}}]});exports.default=




true;
//# sourceMappingURL=UserAccount.schema.js.map