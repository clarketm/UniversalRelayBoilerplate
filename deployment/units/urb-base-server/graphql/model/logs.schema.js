Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('logs',{
fields:{
key:'text',
date:'timestamp',
level:'text',
message:'text',
meta:'text'},

key:['key','date']});exports.default=


true;
//# sourceMappingURL=logs.schema.js.map