Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ToDo=





function ToDo(fields)




{_classCallCheck(this,ToDo);
this.id=fields.id;
this.ToDo_User_id=fields.ToDo_User_id;
this.ToDo_Text=fields.ToDo_Text;
this.ToDo_Complete=fields.ToDo_Complete;
};exports.default=ToDo;


_ObjectManager2.default.registerEntity('ToDo',ToDo);
//# sourceMappingURL=ToDo.js.map