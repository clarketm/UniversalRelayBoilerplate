Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');

var _ToDoType=require('./ToDoType');var _ToDoType2=_interopRequireDefault(_ToDoType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=

(0,_graphqlRelay.connectionDefinitions)({
name:'ToDos',
nodeType:_ToDoType2.default});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-todo-server/graphql/type/ToDosConnection.js');}();;
//# sourceMappingURL=ToDosConnection.js.map