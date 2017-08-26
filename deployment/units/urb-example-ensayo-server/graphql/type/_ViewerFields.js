Object.defineProperty(exports,"__esModule",{value:true});var _this=this;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphql=require('graphql');
var _graphqlRelay=require('graphql-relay');





var _EnsayosConnection=require('./EnsayosConnection');var _EnsayosConnection2=_interopRequireDefault(_EnsayosConnection);
var _EnsayoType=require('./EnsayoType');var _EnsayoType2=_interopRequireDefault(_EnsayoType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

{
Ensayos:{
type:_EnsayosConnection2.default.connectionType,

args:_extends({},_graphqlRelay.connectionArgs),

resolve:function resolve(
obj,_ref,

context,_ref2){var args=_objectWithoutProperties(_ref,[]);var
objectManager=_ref2.rootValue;var arr;return regeneratorRuntime.async(function resolve$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(

objectManager.getObjectList('Ensayo',{
Ensayo_User_id:objectManager.getViewerUserId()}));case 2:arr=_context.sent;return _context.abrupt('return',


(0,_graphqlRelay.connectionFromArray)(arr,args));case 4:case'end':return _context.stop();}}},null,_this);}},



Ensayo:{
type:_EnsayoType2.default,

args:_extends({id:{type:_graphql.GraphQLID}}),

resolve:function resolve(parent,_ref3,context,_ref4){var id=_ref3.id;var objectManager=_ref4.rootValue;return(
objectManager.getOneObject('Ensayo',{id:(0,_graphqlRelay.fromGlobalId)(id).id}));}}};
//# sourceMappingURL=_ViewerFields.js.map