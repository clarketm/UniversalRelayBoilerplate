Object.defineProperty(exports,"__esModule",{value:true});

var _graphql=require('graphql');
var _error=require('graphql/error');
var _language=require('graphql/language');




function coerceDate(value){
value=new Date(value);
if(!(value instanceof Date))

throw new Error(
'Field error: value is not an instance of Date, value ='+JSON.stringify(value));


if(isNaN(value.getTime()))throw new Error('Field error: value is an invalid Date');

return value.toJSON();
}

function parseLiteral(ast){
if(ast.kind!==_language.Kind.STRING)
throw new _error.GraphQLError('Query error: Can only parse strings to dates but got a: '+ast.kind,[
ast]);


var result=new Date(ast.value);
if(isNaN(result.getTime()))throw new _error.GraphQLError('Query error: Invalid date',[ast]);

if(ast.value!==result.toJSON())
throw new _error.GraphQLError(
'Query error: Invalid date format, only accepts: YYYY-MM-DDTHH:MM:SS.SSSZ',
[ast]);


return result;
}var _default=

new _graphql.GraphQLScalarType({
name:'DateTime',
description:'Scalar type for storing date-time information',
serialize:coerceDate,
parseValue:coerceDate,
parseLiteral:parseLiteral});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(coerceDate,'coerceDate','units/urb-base-server/graphql/type/GraphQLDateTime.js');__REACT_HOT_LOADER__.register(parseLiteral,'parseLiteral','units/urb-base-server/graphql/type/GraphQLDateTime.js');__REACT_HOT_LOADER__.register(_default,'default','units/urb-base-server/graphql/type/GraphQLDateTime.js');}();;
//# sourceMappingURL=GraphQLDateTime.js.map