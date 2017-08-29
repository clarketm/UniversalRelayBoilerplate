

var _path=require('path');var _path2=_interopRequireDefault(_path);

var _graphql=require('graphql');
var _utilities=require('graphql/utilities');

var _schema=require('../urb-base-server/graphql/schema');var _schema2=_interopRequireDefault(_schema);
var _ensureFileContent=require('../urb-base-tools/ensureFileContent');var _ensureFileContent2=_interopRequireDefault(_ensureFileContent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function main(){var result,taskPromises;return regeneratorRuntime.async(function main$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
(0,_graphql.graphql)(_schema2.default,_utilities.introspectionQuery));case 2:result=_context.sent;if(!
result.errors){_context.next=5;break;}throw(
new Error(
'Failed introspecting schema: '+JSON.stringify(result.errors,null,2)));case 5:


taskPromises=[
(0,_ensureFileContent2.default)(
_path2.default.resolve(
'./units/_configuration/urb-base-server/graphql/schema.json'),

null,
JSON.stringify(result,null,2)),

(0,_ensureFileContent2.default)(
_path2.default.resolve(
'./units/_configuration/urb-base-server/graphql/schema.graphql'),

null,
(0,_utilities.printSchema)(_schema2.default))];_context.next=8;return regeneratorRuntime.awrap(



Promise.all(taskPromises));case 8:case'end':return _context.stop();}}},null,this);}


main().then(function(){return console.log('Fin.');});
//# sourceMappingURL=build-relay-schema.js.map