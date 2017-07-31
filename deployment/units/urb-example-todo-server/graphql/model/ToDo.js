Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ToDo=





function ToDo(fields)




{_classCallCheck(this,ToDo);
this.id=fields.id;
this.ToDo_User_id=fields.ToDo_User_id;
this.ToDo_Text=fields.ToDo_Text;
this.ToDo_Complete=fields.ToDo_Complete;
};var _default=ToDo;exports.default=_default;


_ObjectManager2.default.registerEntity('ToDo',ToDo);;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(ToDo,'ToDo','units/urb-example-todo-server/graphql/model/ToDo.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-server/graphql/model/ToDo.js');}();;
//# sourceMappingURL=ToDo.js.map