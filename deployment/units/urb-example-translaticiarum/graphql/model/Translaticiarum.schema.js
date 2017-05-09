Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('Translaticiarum',{
fields:{
id:'uuid',
Translaticiarum_User_id:'uuid',
Translaticiarum_Date:'timestamp',
Translaticiarum_Time:'timestamp',
Translaticiarum_Type:'int'},

key:['id'],
indexes:['Translaticiarum_User_id']});exports.default=


true;
//# sourceMappingURL=Translaticiarum.schema.js.map