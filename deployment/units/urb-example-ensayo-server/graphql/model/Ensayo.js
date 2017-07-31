Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Ensayo=






function Ensayo(fields)





{_classCallCheck(this,Ensayo);
this.id=fields.id;
this.Ensayo_User_id=fields.Ensayo_User_id;
this.Ensayo_Title=fields.Ensayo_Title;
this.Ensayo_Description=fields.Ensayo_Description;
this.Ensayo_Content=fields.Ensayo_Content;
};exports.default=Ensayo;


_ObjectManager2.default.registerEntity('Ensayo',Ensayo);
//# sourceMappingURL=Ensayo.js.map