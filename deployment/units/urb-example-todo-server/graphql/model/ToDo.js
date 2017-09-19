'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _ObjectManager = require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2 = _interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class ToDo {





  constructor(fields)




  {
    this.id = fields.id;
    this.ToDo_User_id = fields.ToDo_User_id;
    this.ToDo_Text = fields.ToDo_Text;
    this.ToDo_Complete = fields.ToDo_Complete;
  }}exports.default = ToDo;


_ObjectManager2.default.registerEntity('ToDo', ToDo);
//# sourceMappingURL=ToDo.js.map