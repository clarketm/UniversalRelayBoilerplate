'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _ObjectManager = require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2 = _interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Class used by GraphQL Server
class UserSession {






  constructor(fields)





  {
    this.id = fields.id;
    this.UserSession_site_id = fields.UserSession_site_id;
    this.UserSession_User_id = fields.UserSession_User_id;
    this.UserSession_Start = fields.UserSession_Start;
    this.UserSession_Expired = fields.UserSession_Expired;
  }}exports.default = UserSession;


_ObjectManager2.default.registerEntity('UserSession', UserSession);
//# sourceMappingURL=UserSession.js.map