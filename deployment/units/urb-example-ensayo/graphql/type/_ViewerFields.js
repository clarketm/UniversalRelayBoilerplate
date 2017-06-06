Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphql=require('graphql');
var _graphqlRelay=require('graphql-relay');

var _EnsayosConnection=require('./EnsayosConnection');var _EnsayosConnection2=_interopRequireDefault(_EnsayosConnection);
var _EnsayoType=require('./EnsayoType');var _EnsayoType2=_interopRequireDefault(_EnsayoType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

{
Ensayos:{
type:_EnsayosConnection2.default.connectionType,
args:_extends({},_graphqlRelay.connectionArgs),
resolve:function resolve(obj,_ref,context,_ref2){var args=_objectWithoutProperties(_ref,[]);var objectManager=_ref2.rootValue;return(
objectManager.
getObjectList('Ensayo',{Ensayo_User_id:objectManager.getViewerUserId()}).
then(function(arr){return(0,_graphqlRelay.connectionFromArray)(arr,args);}));}},

Ensayo:{
type:_EnsayoType2.default,
args:_extends({id:{type:_graphql.GraphQLID}}),
resolve:function resolve(parent,_ref3,context,_ref4){var id=_ref3.id;var objectManager=_ref4.rootValue;return(
objectManager.getOneObject('Ensayo',{id:(0,_graphqlRelay.fromGlobalId)(id).id}));}}};
//# sourceMappingURL=_ViewerFields.js.map