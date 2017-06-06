Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphqlRelay=require('graphql-relay');

var _TranslaticiarumsConnection=require('./TranslaticiarumsConnection');var _TranslaticiarumsConnection2=_interopRequireDefault(_TranslaticiarumsConnection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

{
Translaticiarums:{
type:_TranslaticiarumsConnection2.default.connectionType,
args:_extends({},_graphqlRelay.connectionArgs),
resolve:function resolve(obj,_ref,context,_ref2){var args=_objectWithoutProperties(_ref,[]);var objectManager=_ref2.rootValue;return(
objectManager.
getObjectList('Translaticiarum',{
Translaticiarum_User_id:objectManager.getViewerUserId()}).

then(function(arr){return(0,_graphqlRelay.connectionFromArray)(arr,args);}));}}};
//# sourceMappingURL=_ViewerFields.js.map