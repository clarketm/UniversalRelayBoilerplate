Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('Ensayo',{
fields:{
id:'uuid',
Ensayo_User_id:'uuid',
Ensayo_Content:'text',
Ensayo_Description:'text',
Ensayo_Title:'text'},


key:['id'],

custom_indexes:[
{
on:'Ensayo_User_id',
using:'org.apache.cassandra.index.sasi.SASIIndex',
options:{}}]});var _default=




true;exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-server/graphql/model/Ensayo.schema.js');}();;
//# sourceMappingURL=Ensayo.schema.js.map