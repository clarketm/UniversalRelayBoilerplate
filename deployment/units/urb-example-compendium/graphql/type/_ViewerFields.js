Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphqlRelay=require("graphql-relay");

var _CompendiumsConnection=require("./CompendiumsConnection");var _CompendiumsConnection2=_interopRequireDefault(_CompendiumsConnection);
var _Compendium_getListOrCreate=require("../helper/Compendium_getListOrCreate");var _Compendium_getListOrCreate2=_interopRequireDefault(_Compendium_getListOrCreate);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=


{
compendiums:{
type:_CompendiumsConnection2.default.connectionType,
args:_extends({},_graphqlRelay.connectionArgs),
resolve:function resolve(obj,_ref,context,_ref2){var args=_objectWithoutProperties(_ref,[]);var objectManager=_ref2.rootValue;return(0,_Compendium_getListOrCreate2.default)(objectManager).then(function(arr){return(0,_graphqlRelay.connectionFromArray)(arr,args);});}}};
//# sourceMappingURL=_ViewerFields.js.map