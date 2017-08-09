Object.defineProperty(exports,"__esModule",{value:true});

var _defaultPersister=require('../defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_defaultPersister2.default.addTableSchema('User',{
fields:{
id:'uuid',
User_site_id:'uuid',
UserToken2:'text',
User_Secret:'text',
User_DisplayName:'text',
User_Email:'text',
User_PhoneNumberMobile:'text',
User_Latitude:'double',
User_Longitude:'double'},

key:['id']});exports.default=


true;
//# sourceMappingURL=User.schema.js.map