var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _util=require('util');

var _prettier=require('prettier');var _prettier2=_interopRequireDefault(_prettier);


var _prettierrc=require('../../.prettierrc.json');var _prettierrc2=_interopRequireDefault(_prettierrc);

var _ensureFileContent=require('./ensureFileContent');var _ensureFileContent2=_interopRequireDefault(_ensureFileContent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var existsAsync=(0,_util.promisify)(_fs2.default.exists);
var readFileAsync=(0,_util.promisify)(_fs2.default.readFile);
var readdirAsync=(0,_util.promisify)(_fs2.default.readdir);

function sortObject(object){
var t={};
Object.keys(object).
sort().
forEach(function(k){
t[k]=object[k];
});
return t;
}

function orderPackages(packageAsObject){
packageAsObject.scripts=sortObject(packageAsObject.scripts);
packageAsObject.dependencies=sortObject(packageAsObject.dependencies);
packageAsObject.devDependencies=sortObject(packageAsObject.devDependencies);
}

function mergeScripts(scripts1,scripts2){
var scripts=_extends({},scripts1);

for(var scriptName in scripts2){
var script=scripts[scriptName];
var script2=scripts2[scriptName];

if(script&&script2){
scripts[scriptName]=script+' && '+script2;
}else if(script2){
scripts[scriptName]=script2;
}
}

return scripts;
}

function createPackageJson(units){var packageJsonFileName,currentPackageAsJSONString,currentPackageAsObject,packageAsObject,_iterator,_isArray,_i,_ref,unitName,packageAsObjectName,packageToAddAsObject;return regeneratorRuntime.async(function createPackageJson$(_context){while(1){switch(_context.prev=_context.next){case 0:
packageJsonFileName=_path2.default.resolve('./package.json');_context.next=3;return regeneratorRuntime.awrap(
readFileAsync(
packageJsonFileName));case 3:currentPackageAsJSONString=_context.sent.
toString();
currentPackageAsObject=JSON.parse(currentPackageAsJSONString);
packageAsObject={
dependencies:{},
devDependencies:{},
engines:{},
name:null,
'lint-staged':{},
scripts:{},
version:null};



packageAsObject.version=currentPackageAsObject.version;
packageAsObject.name=currentPackageAsObject.name;_iterator=


units,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 9:if(!_isArray){_context.next=15;break;}if(!(_i>=_iterator.length)){_context.next=12;break;}return _context.abrupt('break',36);case 12:_ref=_iterator[_i++];_context.next=19;break;case 15:_i=_iterator.next();if(!_i.done){_context.next=18;break;}return _context.abrupt('break',36);case 18:_ref=_i.value;case 19:unitName=_ref;
packageAsObjectName=_path2.default.resolve(
'./units',
unitName,
'package.part.json');_context.next=23;return regeneratorRuntime.awrap(

existsAsync(packageAsObjectName));case 23:if(!_context.sent){_context.next=34;break;}_context.t0=
JSON;_context.next=27;return regeneratorRuntime.awrap(
readFileAsync(packageAsObjectName));case 27:_context.t1=_context.sent.toString();packageToAddAsObject=_context.t0.parse.call(_context.t0,_context.t1);


if(packageToAddAsObject.dependencies)
_extends(
packageAsObject.dependencies,
packageToAddAsObject.dependencies);

if(packageToAddAsObject.devDependencies)
_extends(
packageAsObject.devDependencies,
packageToAddAsObject.devDependencies);

if(packageToAddAsObject.engines)
_extends(packageAsObject.engines,packageToAddAsObject.engines);
if(packageToAddAsObject['lint-staged'])
_extends(
packageAsObject['lint-staged'],
packageToAddAsObject['lint-staged']);

if(packageToAddAsObject.scripts)
packageAsObject.scripts=mergeScripts(
packageAsObject.scripts,
packageToAddAsObject.scripts);case 34:_context.next=9;break;case 36:





orderPackages(packageAsObject);_context.next=39;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
packageJsonFileName,
currentPackageAsJSONString,
JSON.stringify(packageAsObject,null,2)));case 39:case'end':return _context.stop();}}},null,this);}



function createMutations(units){var mutationsImports,mutationsExports,_iterator2,_isArray2,_i2,_ref2,unitName,mutationsDir,mutationFileNames,_iterator3,_isArray3,_i3,_ref3,mutationFileName,mutation,mutations;return regeneratorRuntime.async(function createMutations$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
mutationsImports=[];
mutationsExports=[];_iterator2=

units,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 3:if(!_isArray2){_context2.next=9;break;}if(!(_i2>=_iterator2.length)){_context2.next=6;break;}return _context2.abrupt('break',39);case 6:_ref2=_iterator2[_i2++];_context2.next=13;break;case 9:_i2=_iterator2.next();if(!_i2.done){_context2.next=12;break;}return _context2.abrupt('break',39);case 12:_ref2=_i2.value;case 13:unitName=_ref2;if(!
unitName.endsWith('-server')){_context2.next=37;break;}
mutationsDir=_path2.default.resolve('./units',unitName,'graphql/mutation');_context2.next=18;return regeneratorRuntime.awrap(
existsAsync(mutationsDir));case 18:if(!_context2.sent){_context2.next=37;break;}_context2.next=21;return regeneratorRuntime.awrap(
readdirAsync(mutationsDir));case 21:mutationFileNames=_context2.sent;_iterator3=

mutationFileNames,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 23:if(!_isArray3){_context2.next=29;break;}if(!(_i3>=_iterator3.length)){_context2.next=26;break;}return _context2.abrupt('break',37);case 26:_ref3=_iterator3[_i3++];_context2.next=33;break;case 29:_i3=_iterator3.next();if(!_i3.done){_context2.next=32;break;}return _context2.abrupt('break',37);case 32:_ref3=_i3.value;case 33:mutationFileName=_ref3;
if(mutationFileName.endsWith('.js')){
mutation=mutationFileName.substring(
0,
mutationFileName.length-3);

mutationsImports.push(
'import '+
mutation.replace('.','_')+
' from \'../../../'+
unitName+
'/graphql/mutation/'+
mutation+
'\'');

mutationsExports.push('  '+mutation+',');
}case 35:_context2.next=23;break;case 37:_context2.next=3;break;case 39:




mutations=['// @flow',''];
mutations=mutations.concat(mutationsImports);
mutations=mutations.concat(['','export default {']);
mutations=mutations.concat(mutationsExports);
mutations=mutations.concat(['}']);_context2.next=46;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve(
'./units/_configuration/urb-base-server/graphql/_mutations.js'),

null,
_prettier2.default.format(mutations.join('\r\n'),_prettierrc2.default)));case 46:case'end':return _context2.stop();}}},null,this);}



function createSchemas(units){var schemasImports,_iterator4,_isArray4,_i4,_ref4,unitName,schemasDir,objectTypeFileNames,_iterator5,_isArray5,_i5,_ref5,objectTypeFileName,objectType,schemas;return regeneratorRuntime.async(function createSchemas$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:
schemasImports=[];_iterator4=

units,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 2:if(!_isArray4){_context3.next=8;break;}if(!(_i4>=_iterator4.length)){_context3.next=5;break;}return _context3.abrupt('break',38);case 5:_ref4=_iterator4[_i4++];_context3.next=12;break;case 8:_i4=_iterator4.next();if(!_i4.done){_context3.next=11;break;}return _context3.abrupt('break',38);case 11:_ref4=_i4.value;case 12:unitName=_ref4;if(!
unitName.endsWith('-server')){_context3.next=36;break;}
schemasDir=_path2.default.resolve('./units',unitName,'graphql/model');_context3.next=17;return regeneratorRuntime.awrap(
existsAsync(schemasDir));case 17:if(!_context3.sent){_context3.next=36;break;}_context3.next=20;return regeneratorRuntime.awrap(
readdirAsync(schemasDir));case 20:objectTypeFileNames=_context3.sent;_iterator5=

objectTypeFileNames,_isArray5=Array.isArray(_iterator5),_i5=0,_iterator5=_isArray5?_iterator5:_iterator5[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 22:if(!_isArray5){_context3.next=28;break;}if(!(_i5>=_iterator5.length)){_context3.next=25;break;}return _context3.abrupt('break',36);case 25:_ref5=_iterator5[_i5++];_context3.next=32;break;case 28:_i5=_iterator5.next();if(!_i5.done){_context3.next=31;break;}return _context3.abrupt('break',36);case 31:_ref5=_i5.value;case 32:objectTypeFileName=_ref5;
if(objectTypeFileName.endsWith('.js')){
objectType=objectTypeFileName.substring(
0,
objectTypeFileName.length-3);

schemasImports.push(
'import \'../../../'+
unitName+
'/graphql/model/'+
objectType+
'\'');

}case 34:_context3.next=22;break;case 36:_context3.next=2;break;case 38:




schemas=['// @flow',''];
schemas=schemas.concat(schemasImports);
schemas=schemas.concat(['','export default true']);_context3.next=43;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve('./units/_configuration/urb-base-server/graphql/_schemas.js'),
null,
_prettier2.default.format(schemas.join('\r\n'),_prettierrc2.default)));case 43:case'end':return _context3.stop();}}},null,this);}



function createViewerFields(units){var viewerFieldsImports,viewerFieldsExports,_iterator6,_isArray6,_i6,_ref6,unitName,viewerFieldsFileName,viewerFieldsImportName,viewerFields;return regeneratorRuntime.async(function createViewerFields$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:
viewerFieldsImports=[];
viewerFieldsExports=[];_iterator6=

units,_isArray6=Array.isArray(_iterator6),_i6=0,_iterator6=_isArray6?_iterator6:_iterator6[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 3:if(!_isArray6){_context4.next=9;break;}if(!(_i6>=_iterator6.length)){_context4.next=6;break;}return _context4.abrupt('break',24);case 6:_ref6=_iterator6[_i6++];_context4.next=13;break;case 9:_i6=_iterator6.next();if(!_i6.done){_context4.next=12;break;}return _context4.abrupt('break',24);case 12:_ref6=_i6.value;case 13:unitName=_ref6;if(!
unitName.endsWith('-server')){_context4.next=22;break;}
viewerFieldsFileName=_path2.default.resolve(
'./units',
unitName,
'graphql/type/_ViewerFields.js');_context4.next=18;return regeneratorRuntime.awrap(

existsAsync(viewerFieldsFileName));case 18:if(!_context4.sent){_context4.next=22;break;}
viewerFieldsImportName=unitName.replace(/-/g,'_');
viewerFieldsImports.push(
'import '+
viewerFieldsImportName+
' from \'../../../'+
unitName+
'/graphql/type/_ViewerFields\'');

viewerFieldsExports.push('  ...'+viewerFieldsImportName+',');case 22:_context4.next=3;break;case 24:



viewerFields=['// @flow',''];
viewerFields=viewerFields.concat(viewerFieldsImports);
viewerFields=viewerFields.concat(['','export default {']);
viewerFields=viewerFields.concat(viewerFieldsExports);
viewerFields=viewerFields.concat(['}']);_context4.next=31;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
_path2.default.resolve(
'./units/_configuration/urb-base-server/graphql/_ViewerFields.js'),

null,
_prettier2.default.format(viewerFields.join('\r\n'),_prettierrc2.default)));case 31:case'end':return _context4.stop();}}},null,this);}



function createRoutes(units){var routesAppFrameImports,routesRootImports,routesAppFrameExports,routesRootExports,_iterator7,_isArray7,_i7,_ref7,unitName,routesDir,routeFileNames,_iterator8,_isArray8,_i8,_ref8,routeFileName,route,_route;return regeneratorRuntime.async(function createRoutes$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:
routesAppFrameImports=[];
routesRootImports=[];
routesAppFrameExports=[];
routesRootExports=[];_iterator7=

units,_isArray7=Array.isArray(_iterator7),_i7=0,_iterator7=_isArray7?_iterator7:_iterator7[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 5:if(!_isArray7){_context5.next=11;break;}if(!(_i7>=_iterator7.length)){_context5.next=8;break;}return _context5.abrupt('break',41);case 8:_ref7=_iterator7[_i7++];_context5.next=15;break;case 11:_i7=_iterator7.next();if(!_i7.done){_context5.next=14;break;}return _context5.abrupt('break',41);case 14:_ref7=_i7.value;case 15:unitName=_ref7;if(!
unitName.endsWith('-webapp')){_context5.next=39;break;}
routesDir=_path2.default.resolve('./units',unitName);_context5.next=20;return regeneratorRuntime.awrap(
existsAsync(routesDir));case 20:if(!_context5.sent){_context5.next=39;break;}_context5.next=23;return regeneratorRuntime.awrap(
readdirAsync(routesDir));case 23:routeFileNames=_context5.sent;_iterator8=

routeFileNames,_isArray8=Array.isArray(_iterator8),_i8=0,_iterator8=_isArray8?_iterator8:_iterator8[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();case 25:if(!_isArray8){_context5.next=31;break;}if(!(_i8>=_iterator8.length)){_context5.next=28;break;}return _context5.abrupt('break',39);case 28:_ref8=_iterator8[_i8++];_context5.next=35;break;case 31:_i8=_iterator8.next();if(!_i8.done){_context5.next=34;break;}return _context5.abrupt('break',39);case 34:_ref8=_i8.value;case 35:routeFileName=_ref8;
if(routeFileName.endsWith('.jsx'))
if(routeFileName.startsWith('routeAppFrame')){
route=routeFileName.substring(0,routeFileName.length-4);
routesAppFrameImports.push(
'import '+
route+
' from \'../../'+
unitName+
'/'+
route+
'\'');

routesAppFrameExports.push('  '+route+',');
}else if(routeFileName.startsWith('routeRoot')){
_route=routeFileName.substring(0,routeFileName.length-4);
routesRootImports.push(
'import '+
_route+
' from \'../../'+
unitName+
'/'+
_route+
'\'');

routesRootExports.push('  '+_route+',');
}case 37:_context5.next=25;break;case 39:_context5.next=5;break;case 41:_context5.next=43;return regeneratorRuntime.awrap(




Promise.all([
createRouteFile(
_path2.default.resolve('./units/_configuration/urb-base-webapp/routesAppFrame.js'),
routesAppFrameImports,
routesAppFrameExports),

createRouteFile(
_path2.default.resolve('./units/_configuration/urb-base-webapp/routesRoot.js'),
routesRootImports,
routesRootExports)]));case 43:case'end':return _context5.stop();}}},null,this);}




function createRouteFile(
fileName,
imports,
exports){var routesAppFrame;return regeneratorRuntime.async(function createRouteFile$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:

routesAppFrame=['// @flow',''];
routesAppFrame=routesAppFrame.concat(imports);
routesAppFrame=routesAppFrame.concat(['','export default [']);
routesAppFrame=routesAppFrame.concat(exports);
routesAppFrame=routesAppFrame.concat([']']);_context6.next=7;return regeneratorRuntime.awrap(

(0,_ensureFileContent2.default)(
fileName,
null,
_prettier2.default.format(routesAppFrame.join('\r\n'),_prettierrc2.default)));case 7:case'end':return _context6.stop();}}},null,this);}



function getUnits(){var units;return regeneratorRuntime.async(function getUnits$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return regeneratorRuntime.awrap(
readdirAsync('./units/'));case 2:_context7.t0=
function(fileName){return fileName!=='.DS_Store'&&fileName!=='_configuration';};units=_context7.sent.filter(_context7.t0);return _context7.abrupt('return',

units);case 5:case'end':return _context7.stop();}}},null,this);}


function main(){var units,taskPromises;return regeneratorRuntime.async(function main$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:_context8.next=2;return regeneratorRuntime.awrap(
getUnits());case 2:units=_context8.sent;

taskPromises=[
createPackageJson(units),
createViewerFields(units),
createSchemas(units),
createMutations(units),
createRoutes(units)];_context8.next=6;return regeneratorRuntime.awrap(


Promise.all(taskPromises));case 6:case'end':return _context8.stop();}}},null,this);}


main().then(function(){return console.log('Fin.');});
//# sourceMappingURL=build-units.js.map