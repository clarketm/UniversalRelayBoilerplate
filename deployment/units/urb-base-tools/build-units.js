var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);
var _graphql=require('graphql');
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _util=require('util');
var _utilities=require('graphql/utilities');

var _ensureFileContent=require('./ensureFileContent');var _ensureFileContent2=_interopRequireDefault(_ensureFileContent);
var _schema=require('../urb-base-server/graphql/schema');var _schema2=_interopRequireDefault(_schema);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var existsAsync=(0,_util.promisify)(_fs2.default.exists);
var readFileAsync=(0,_util.promisify)(_fs2.default.readFile);
var readdirAsync=(0,_util.promisify)(_fs2.default.readdir);
var writeFileAsync=(0,_util.promisify)(_fs2.default.writeFile);

function sortObject(object){
var t={};
Object.keys(object).sort().forEach(function(k){
t[k]=object[k];
});
return t;
}

function orderPackages(packageAsObject){
packageAsObject.scripts=sortObject(packageAsObject.scripts);
packageAsObject.dependencies=sortObject(packageAsObject.dependencies);
packageAsObject.devDependencies=sortObject(packageAsObject.devDependencies);
}

function createPackageJson(units){var packageJsonFileName,currentPackageAsJSONString,currentPackageAsObject,packageAsObject,_iterator,_isArray,_i,_ref,unitName,packageAsObjectName,packageToAddAsObject;return regeneratorRuntime.async(function createPackageJson$(_context){while(1){switch(_context.prev=_context.next){case 0:
packageJsonFileName=_path2.default.resolve('./package.json');_context.next=3;return regeneratorRuntime.awrap(
readFileAsync(packageJsonFileName));case 3:currentPackageAsJSONString=_context.sent.toString();
currentPackageAsObject=JSON.parse(currentPackageAsJSONString);
packageAsObject={
dependencies:{},
devDependencies:{},
engines:{},
scripts:{},
name:null,
version:null};



packageAsObject.version=currentPackageAsObject.version;
packageAsObject.name=currentPackageAsObject.name;_iterator=


units,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 9:if(!_isArray){_context.next=15;break;}if(!(_i>=_iterator.length)){_context.next=12;break;}return _context.abrupt('break',35);case 12:_ref=_iterator[_i++];_context.next=19;break;case 15:_i=_iterator.next();if(!_i.done){_context.next=18;break;}return _context.abrupt('break',35);case 18:_ref=_i.value;case 19:unitName=_ref;
packageAsObjectName=_path2.default.resolve('./units',unitName,'package.part.json');_context.next=23;return regeneratorRuntime.awrap(
existsAsync(packageAsObjectName));case 23:if(!_context.sent){_context.next=33;break;}_context.t0=
JSON;_context.next=27;return regeneratorRuntime.awrap(readFileAsync(packageAsObjectName));case 27:_context.t1=_context.sent.toString();packageToAddAsObject=_context.t0.parse.call(_context.t0,_context.t1);

if(packageToAddAsObject.dependencies)
_extends(packageAsObject.dependencies,packageToAddAsObject.dependencies);
if(packageToAddAsObject.devDependencies)
_extends(packageAsObject.devDependencies,packageToAddAsObject.devDependencies);
if(packageToAddAsObject.engines)
_extends(packageAsObject.engines,packageToAddAsObject.engines);
if(packageToAddAsObject.scripts)
_extends(packageAsObject.scripts,packageToAddAsObject.scripts);case 33:_context.next=9;break;case 35:




orderPackages(packageAsObject);_context.next=38;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
packageJsonFileName,
currentPackageAsJSONString,
JSON.stringify(packageAsObject,null,2)));case 38:case'end':return _context.stop();}}},null,this);}



function createMutations(units){var _this=this;var mutationsImports,mutationsExports,_loop,_iterator2,_isArray2,_i2,_ref2,unitName,mutations;return regeneratorRuntime.async(function createMutations$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:
mutationsImports=[];
mutationsExports=[];_loop=function _loop(

unitName){var mutationsDir,mutationFileNames;return regeneratorRuntime.async(function _loop$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!
unitName.endsWith('-server')){_context2.next=9;break;}
mutationsDir=_path2.default.resolve('./units',unitName,'graphql/mutation');_context2.next=4;return regeneratorRuntime.awrap(
existsAsync(mutationsDir));case 4:if(!_context2.sent){_context2.next=9;break;}_context2.next=7;return regeneratorRuntime.awrap(
readdirAsync(mutationsDir));case 7:mutationFileNames=_context2.sent;

mutationFileNames.filter(function(mutationFileName){
if(mutationFileName.endsWith('.js')){
var mutation=mutationFileName.substring(0,mutationFileName.length-3);
mutationsImports.push(
'import '+
mutation.replace('.','_')+
" from '../../../"+
unitName+
'/graphql/mutation/'+
mutation+
"'");

mutationsExports.push('  '+mutation+',');
}
});case 9:case'end':return _context2.stop();}}},null,_this);};_iterator2=units,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 4:if(!_isArray2){_context3.next=10;break;}if(!(_i2>=_iterator2.length)){_context3.next=7;break;}return _context3.abrupt('break',19);case 7:_ref2=_iterator2[_i2++];_context3.next=14;break;case 10:_i2=_iterator2.next();if(!_i2.done){_context3.next=13;break;}return _context3.abrupt('break',19);case 13:_ref2=_i2.value;case 14:unitName=_ref2;_context3.next=17;return regeneratorRuntime.awrap(_loop(unitName));case 17:_context3.next=4;break;case 19:



mutations=['// @flow',''];
mutations=mutations.concat(mutationsImports);
mutations=mutations.concat(['','export default {']);
mutations=mutations.concat(mutationsExports);
mutations=mutations.concat(['}']);_context3.next=26;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-server/graphql/_mutations.js'),
null,
mutations.join('\r\n')));case 26:case'end':return _context3.stop();}}},null,this);}



function createSchemas(units){var _this2=this;var schemasImports,_loop2,_iterator3,_isArray3,_i3,_ref3,unitName,schemas;return regeneratorRuntime.async(function createSchemas$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:
schemasImports=[];_loop2=function _loop2(

unitName){var schemasDir,objectTypeFileNames;return regeneratorRuntime.async(function _loop2$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!
unitName.endsWith('-server')){_context4.next=9;break;}
schemasDir=_path2.default.resolve('./units',unitName,'graphql/model');_context4.next=4;return regeneratorRuntime.awrap(
existsAsync(schemasDir));case 4:if(!_context4.sent){_context4.next=9;break;}_context4.next=7;return regeneratorRuntime.awrap(
readdirAsync(schemasDir));case 7:objectTypeFileNames=_context4.sent;

objectTypeFileNames.filter(function(objectTypeFileName){
if(objectTypeFileName.endsWith('.js')){
var objectType=objectTypeFileName.substring(0,objectTypeFileName.length-3);
schemasImports.push(
'import '+
objectType.replace('.','_')+
" from '../../../"+
unitName+
'/graphql/model/'+
objectType+
"'");

}
});case 9:case'end':return _context4.stop();}}},null,_this2);};_iterator3=units,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 3:if(!_isArray3){_context5.next=9;break;}if(!(_i3>=_iterator3.length)){_context5.next=6;break;}return _context5.abrupt('break',18);case 6:_ref3=_iterator3[_i3++];_context5.next=13;break;case 9:_i3=_iterator3.next();if(!_i3.done){_context5.next=12;break;}return _context5.abrupt('break',18);case 12:_ref3=_i3.value;case 13:unitName=_ref3;_context5.next=16;return regeneratorRuntime.awrap(_loop2(unitName));case 16:_context5.next=3;break;case 18:



schemas=['// @flow',''];
schemas=schemas.concat(schemasImports);
schemas=schemas.concat(['','export default true']);_context5.next=23;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-server/graphql/_schemas.js'),
null,
schemas.join('\r\n')));case 23:case'end':return _context5.stop();}}},null,this);}



function createViewerFields(units){var viewerFieldsImports,viewerFieldsExports,_iterator4,_isArray4,_i4,_ref4,unitName,viewerFieldsFileName,viewerFieldsImportName,viewerFields;return regeneratorRuntime.async(function createViewerFields$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:
viewerFieldsImports=[];
viewerFieldsExports=[];_iterator4=

units,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 3:if(!_isArray4){_context6.next=9;break;}if(!(_i4>=_iterator4.length)){_context6.next=6;break;}return _context6.abrupt('break',24);case 6:_ref4=_iterator4[_i4++];_context6.next=13;break;case 9:_i4=_iterator4.next();if(!_i4.done){_context6.next=12;break;}return _context6.abrupt('break',24);case 12:_ref4=_i4.value;case 13:unitName=_ref4;if(!
unitName.endsWith('-server')){_context6.next=22;break;}
viewerFieldsFileName=_path2.default.resolve(
'./units',
unitName,
'graphql/type/_ViewerFields.js');_context6.next=18;return regeneratorRuntime.awrap(

existsAsync(viewerFieldsFileName));case 18:if(!_context6.sent){_context6.next=22;break;}
viewerFieldsImportName=unitName.replace(/-/g,'_');
viewerFieldsImports.push(
'import '+
viewerFieldsImportName+
" from '../../../"+
unitName+
"/graphql/type/_ViewerFields'");

viewerFieldsExports.push('  ...'+viewerFieldsImportName+',');case 22:_context6.next=3;break;case 24:



viewerFields=['// @flow',''];
viewerFields=viewerFields.concat(viewerFieldsImports);
viewerFields=viewerFields.concat(['','export default {']);
viewerFields=viewerFields.concat(viewerFieldsExports);
viewerFields=viewerFields.concat(['}']);_context6.next=31;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-server/graphql/_ViewerFields.js'),
null,
viewerFields.join('\r\n')));case 31:case'end':return _context6.stop();}}},null,this);}



function createRoutes(units){var _this3=this;var routesImports,routesExports,_loop3,_iterator5,_isArray5,_i5,_ref5,unitName,routes;return regeneratorRuntime.async(function createRoutes$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:
routesImports=[];
routesExports=[];_loop3=function _loop3(

unitName){var routesDir,routeFileNames;return regeneratorRuntime.async(function _loop3$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:if(!
unitName.endsWith('-webapp')){_context7.next=9;break;}
routesDir=_path2.default.resolve('./units',unitName);_context7.next=4;return regeneratorRuntime.awrap(
existsAsync(routesDir));case 4:if(!_context7.sent){_context7.next=9;break;}_context7.next=7;return regeneratorRuntime.awrap(
readdirAsync(routesDir));case 7:routeFileNames=_context7.sent;

routeFileNames.filter(function(routeFileName){
if(routeFileName.endsWith('.jsx')&&routeFileName.startsWith('routeAppFrame')){
var route=routeFileName.substring(0,routeFileName.length-4);
routesImports.push('import '+route+" from '../../"+unitName+'/'+route+"'");
routesExports.push('  '+route+',');
}
});case 9:case'end':return _context7.stop();}}},null,_this3);};_iterator5=units,_isArray5=Array.isArray(_iterator5),_i5=0,_iterator5=_isArray5?_iterator5:_iterator5[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 4:if(!_isArray5){_context8.next=10;break;}if(!(_i5>=_iterator5.length)){_context8.next=7;break;}return _context8.abrupt('break',19);case 7:_ref5=_iterator5[_i5++];_context8.next=14;break;case 10:_i5=_iterator5.next();if(!_i5.done){_context8.next=13;break;}return _context8.abrupt('break',19);case 13:_ref5=_i5.value;case 14:unitName=_ref5;_context8.next=17;return regeneratorRuntime.awrap(_loop3(unitName));case 17:_context8.next=4;break;case 19:



routes=['// @flow',''];
routes=routes.concat(routesImports);
routes=routes.concat(['','export default [']);
routes=routes.concat(routesExports);
routes=routes.concat([']']);_context8.next=26;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-webapp/routesAppFrame.js'),
null,
routes.join('\r\n')));case 26:case'end':return _context8.stop();}}},null,this);}



function getUnits(){var units;return regeneratorRuntime.async(function getUnits$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_context9.next=2;return regeneratorRuntime.awrap(
readdirAsync('./units/'));case 2:_context9.t0=
function(fileName){return fileName!='.DS_Store'&&fileName!='_configuration';};units=_context9.sent.filter(_context9.t0);return _context9.abrupt('return',

units);case 5:case'end':return _context9.stop();}}},null,this);}


function buildGraphQLSchema(){var result;return regeneratorRuntime.async(function buildGraphQLSchema$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:_context10.next=2;return regeneratorRuntime.awrap(
(0,_graphql.graphql)(_schema2.default,_utilities.introspectionQuery));case 2:result=_context10.sent;if(!
result.errors){_context10.next=5;break;}throw(
new Error('Failed introspecting schema: '+JSON.stringify(result.errors,null,2)));case 5:_context10.next=7;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-server/graphql/schema.json'),
null,
JSON.stringify(result,null,2)));case 7:_context10.next=9;return regeneratorRuntime.awrap(


(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-server/graphql/schema.graphql'),
null,
(0,_utilities.printSchema)(_schema2.default)));case 9:case'end':return _context10.stop();}}},null,this);}



function main(){var units,taskPromises;return regeneratorRuntime.async(function main$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:_context11.next=2;return regeneratorRuntime.awrap(
getUnits());case 2:units=_context11.sent;

taskPromises=[
createPackageJson(units),
createViewerFields(units),
createSchemas(units),
createMutations(units),
createRoutes(units)];_context11.next=6;return regeneratorRuntime.awrap(


Promise.all(taskPromises));case 6:_context11.next=8;return regeneratorRuntime.awrap(


buildGraphQLSchema());case 8:case'end':return _context11.stop();}}},null,this);}


main().then(function(){return console.log('Fin.');});
//# sourceMappingURL=build-units.js.map