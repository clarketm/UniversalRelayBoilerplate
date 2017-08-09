Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


UserAccount=






function UserAccount(fields)





{_classCallCheck(this,UserAccount);
this.id=fields.id;
this.UserAccount_site_id=fields.UserAccount_site_id;
this.UserAccount_User_id=fields.UserAccount_User_id;
this.UserAccount_Identifier=fields.UserAccount_Identifier;
this.UserAccount_Type=fields.UserAccount_Type;
};exports.default=UserAccount;


_ObjectManager2.default.registerEntity('UserAccount',UserAccount);
//# sourceMappingURL=UserAccount.js.map