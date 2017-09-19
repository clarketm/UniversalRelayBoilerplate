'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _ObjectManager = require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2 = _interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class UserAccount {




  // UserName, SOCial

  constructor(fields)





  {
    this.id = fields.id;
    this.UserAccount_site_id = fields.UserAccount_site_id;
    this.UserAccount_User_id = fields.UserAccount_User_id;
    this.UserAccount_Identifier = fields.UserAccount_Identifier;
    this.UserAccount_Type = fields.UserAccount_Type;
  }}exports.default = UserAccount;


_ObjectManager2.default.registerEntity('UserAccount', UserAccount);
//# sourceMappingURL=UserAccount.js.map