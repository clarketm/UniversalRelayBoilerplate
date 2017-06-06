Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('PrimeNumber',{
fields:{
id:'uuid',
PrimeNumber_NumericValue:'int',
PrimeNumber_TextValue:'text'},

key:['id']});exports.default=


true;
//# sourceMappingURL=PrimeNumber.schema.js.map