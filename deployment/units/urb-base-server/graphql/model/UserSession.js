Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


UserSession=






function UserSession(fields)





{_classCallCheck(this,UserSession);
this.id=fields.id;
this.UserSession_site_id=fields.UserSession_site_id;
this.UserSession_User_id=fields.UserSession_User_id;
this.UserSession_Start=fields.UserSession_Start;
this.UserSession_Expired=fields.UserSession_Expired;
};exports.default=UserSession;


_ObjectManager2.default.registerEntity('UserSession',UserSession);
//# sourceMappingURL=UserSession.js.map