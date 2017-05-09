Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


_defaultPersister2.default.addTableSchema('ToDo',{
fields:{
id:'uuid',
ToDo_User_id:'uuid',
ToDo_Text:'text',
ToDo_Complete:'boolean'},

key:['id'],
indexes:['ToDo_User_id']});exports.default=


true;
//# sourceMappingURL=ToDo.schema.js.map