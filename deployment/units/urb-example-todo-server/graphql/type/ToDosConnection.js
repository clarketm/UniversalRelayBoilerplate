Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');

var _ToDoType=require('./ToDoType');var _ToDoType2=_interopRequireDefault(_ToDoType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_graphqlRelay.connectionDefinitions)({
name:'ToDos',
nodeType:_ToDoType2.default});
//# sourceMappingURL=ToDosConnection.js.map