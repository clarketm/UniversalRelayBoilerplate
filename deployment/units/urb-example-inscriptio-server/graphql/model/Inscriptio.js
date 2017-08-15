Object.defineProperty(exports,"__esModule",{value:true});

var _ObjectManager=require('../../../../units/urb-base-server/graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


Inscriptio=






function Inscriptio(fields)





{_classCallCheck(this,Inscriptio);
this.id=fields.id;
this.Inscriptio_User_id=fields.Inscriptio_User_id;
this.Inscriptio_LocationLat=fields.Inscriptio_LocationLat;
this.Inscriptio_LocationLon=fields.Inscriptio_LocationLon;
this.Inscriptio_Notes=fields.Inscriptio_Notes;
};exports.default=Inscriptio;


_ObjectManager2.default.registerEntity('Inscriptio',Inscriptio);
//# sourceMappingURL=Inscriptio.js.map