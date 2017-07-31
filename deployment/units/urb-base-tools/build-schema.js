

var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _graphql=require('graphql');
var _utilities=require('graphql/utilities');

var _schema=require('../urb-base-server/graphql/schema');var _schema2=_interopRequireDefault(_schema);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var file_schema_json=_path2.default.join(
__dirname,
'../../configuration/urb-base-server/graphql/schema.json');

var file_schema_graphql=_path2.default.join(
__dirname,
'../../configuration/urb-base-server/graphql/schema.graphql');



function createJson(){var result;return regeneratorRuntime.async(function createJson$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
(0,_graphql.graphql)(_schema2.default,_utilities.introspectionQuery));case 2:result=_context.sent;
if(result.errors){
console.error('ERROR! ');
console.error('ERROR introspecting schema: ',JSON.stringify(result.errors,null,2));
}else{
_fs2.default.writeFileSync(file_schema_json,JSON.stringify(result,null,2));
console.log('Written: '+file_schema_json);
}case 4:case'end':return _context.stop();}}},null,this);}



_fs2.default.writeFileSync(file_schema_graphql,(0,_utilities.printSchema)(_schema2.default));
console.log('Written: '+file_schema_graphql);

createJson();;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(file_schema_json,'file_schema_json','units/urb-base-tools/build-schema.js');__REACT_HOT_LOADER__.register(file_schema_graphql,'file_schema_graphql','units/urb-base-tools/build-schema.js');__REACT_HOT_LOADER__.register(createJson,'createJson','units/urb-base-tools/build-schema.js');}();;
//# sourceMappingURL=build-schema.js.map