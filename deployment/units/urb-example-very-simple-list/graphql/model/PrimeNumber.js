Object.defineProperty(exports,"__esModule",{value:true});var _ObjectManager=require('../../../../graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


PrimeNumber=
function PrimeNumber(fields){_classCallCheck(this,PrimeNumber);
this.id=fields.id;
this.PrimeNumber_NumericValue=fields.PrimeNumber_NumericValue;
this.PrimeNumber_TextValue=fields.PrimeNumber_TextValue;
};exports.default=PrimeNumber;


_ObjectManager2.default.registerEntity('PrimeNumber',PrimeNumber);
//# sourceMappingURL=PrimeNumber.js.map