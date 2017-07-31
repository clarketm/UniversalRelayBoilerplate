Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _NodeInterface=require('../../../../units/urb-base-server/graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);
var _ToDo=require('../model/ToDo');var _ToDo2=_interopRequireDefault(_ToDo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'ToDo',

interfaces:[_NodeInterface2.default],

isTypeOf:function isTypeOf(object){return object instanceof _ToDo2.default;},

fields:{
id:(0,_graphqlRelay.globalIdField)('ToDo'),
ToDo_Text:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.ToDo_Text;}},
ToDo_Complete:{type:_graphql.GraphQLBoolean,resolve:function resolve(obj){return obj.ToDo_Complete;}}}});
//# sourceMappingURL=ToDoType.js.map