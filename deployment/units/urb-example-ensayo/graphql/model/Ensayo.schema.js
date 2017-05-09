Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../../../../configuration/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('Ensayo',{
fields:{
id:'uuid',
Ensayo_User_id:'uuid',
Ensayo_Content:'text',
Ensayo_Description:'text',
Ensayo_Title:'text'},

key:['id'],
indexes:['Ensayo_User_id']});exports.default=


true;
//# sourceMappingURL=Ensayo.schema.js.map