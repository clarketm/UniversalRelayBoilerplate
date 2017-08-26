Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphql=require('graphql');
var _graphqlRelay=require('graphql-relay');

var _defaultPersister=require('../../../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);
var _NodeInterface=require('../NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);
var _ViewerFields2=require('../../../_configuration/urb-base-server/graphql/_ViewerFields');var _ViewerFields3=_interopRequireDefault(_ViewerFields2);
var _User=require('../../../_configuration/urb-base-server/graphql/model/User');var _User2=_interopRequireDefault(_User);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'Viewer',
interfaces:[_NodeInterface2.default],
isTypeOf:function isTypeOf(object){return object instanceof _User2.default;},
fields:_extends({
id:(0,_graphqlRelay.globalIdField)('Viewer'),
User_IsAnonymous:{
type:_graphql.GraphQLBoolean,
resolve:function resolve(obj){return(
_defaultPersister2.default.uuidEquals(obj.id,_defaultPersister2.default.uuidNull()));}},

UserToken2:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.UserToken2;}},
User_DisplayName:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){return obj.User_DisplayName;}},

User_Email:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.User_Email;}},
User_PhoneNumberMobile:{
type:_graphql.GraphQLString,
resolve:function resolve(obj){return obj.User_PhoneNumberMobile;}}},_ViewerFields3.default)});
//# sourceMappingURL=ViewerType.js.map