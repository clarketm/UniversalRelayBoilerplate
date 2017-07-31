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
};var _default=Ensayo;exports.default=_default;


_ObjectManager2.default.registerEntity('Ensayo',Ensayo);;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(Ensayo,'Ensayo','units/urb-example-ensayo-server/graphql/model/Ensayo.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-server/graphql/model/Ensayo.js');}();;
//# sourceMappingURL=Ensayo.js.map