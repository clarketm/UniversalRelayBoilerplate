var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _fs=require("fs");var _fs2=_interopRequireDefault(_fs);
var _path=require("path");var _path2=_interopRequireDefault(_path);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var currentPackageJson=JSON.parse(_fs2.default.readFileSync("./package.json"));
var packageJson=JSON.parse(_fs2.default.readFileSync("./scripts/package.part.json"));

function addToPackageJson(fileName){
var newPackageJson=JSON.parse(_fs2.default.readFileSync(fileName));

if(newPackageJson.scripts)
_extends(packageJson.scripts,newPackageJson.scripts);

if(newPackageJson.betterScripts)
_extends(packageJson.betterScripts,newPackageJson.betterScripts);

if(newPackageJson.dependencies)
_extends(packageJson.dependencies,newPackageJson.dependencies);

if(newPackageJson.devDependencies)
_extends(packageJson.devDependencies,newPackageJson.devDependencies);
}

function getPackages(directoryName){
_fs2.default.readdirSync(directoryName).filter(function(unitName){
if(_fs2.default.statSync(directoryName+unitName).isDirectory()){
var packageJsonName=_path2.default.resolve(
directoryName,
unitName,
"package.part.json");

try{
addToPackageJson(packageJsonName);
}catch(e){
if(e.code==="ENOENT"){
getPackages(directoryName+unitName+"/");
return false;
}else throw e;
}
}
});
}

function sortObject(object){
var t={};
Object.keys(object).sort().forEach(function(k){
t[k]=object[k];
});
return t;
}

function orderPackages(){
packageJson.scripts=sortObject(packageJson.scripts);
packageJson.betterScripts=sortObject(packageJson.betterScripts);
packageJson.dependencies=sortObject(packageJson.dependencies);
packageJson.devDependencies=sortObject(packageJson.devDependencies);
}

function createPackageJson(){

packageJson.version=currentPackageJson.version;
packageJson.name=currentPackageJson.name;

getPackages("units/");
orderPackages();

console.log("Written: "+_path2.default.resolve("./package.json"));
_fs2.default.writeFileSync(
"./package.json",
JSON.stringify(packageJson,null,2),
"utf8");

}

function getMutations(
directoryName,
mutationsImports,
mutationsExports)
{
_fs2.default.readdirSync(directoryName).filter(function(unitName){
if(_fs2.default.statSync(directoryName+unitName).isDirectory()){
var mutationsDir=_path2.default.resolve(
directoryName,
unitName,
"graphql/mutation");

try{
_fs2.default.readdirSync(mutationsDir).filter(function(mutationName){
if(mutationName.endsWith(".js")){
var mutationNameNoJs=mutationName.substring(
0,
mutationName.length-3);

mutationsImports.push(
"import "+
mutationNameNoJs+
" from '../../"+
directoryName+
unitName+
"/graphql/mutation/"+
mutationNameNoJs+
"'");

mutationsExports.push("  "+mutationNameNoJs+",");
}
});
}catch(e){
if(e.code==="ENOENT"){
getMutations(
directoryName+unitName+"/",
mutationsImports,
mutationsExports);

return false;
}else throw e;
}
}
});
}

function createMutations(){
var mutationsImports=[];
var mutationsExports=[];

getMutations("units/",mutationsImports,mutationsExports);

var mutations=["// @flow",""];
mutations=mutations.concat(mutationsImports);
mutations=mutations.concat(["","export default {"]);
mutations=mutations.concat(mutationsExports);
mutations=mutations.concat(["}"]);

console.log(
"Written: "+_path2.default.resolve("./configuration/graphql/_mutations.js"));

_fs2.default.writeFileSync(
"./configuration/graphql/_mutations.js",
mutations.join("\r\n"),
"utf8");

}

function getSchemas(directoryName,schemasImports){
_fs2.default.readdirSync(directoryName).filter(function(unitName){
if(_fs2.default.statSync(directoryName+unitName).isDirectory()){
var schemasDir=_path2.default.resolve(directoryName,unitName,"graphql/model");
try{
_fs2.default.readdirSync(schemasDir).filter(function(mutationName){
if(mutationName.endsWith(".js")){
var mutationNameNoJs=mutationName.substring(
0,
mutationName.length-3);

schemasImports.push(
"import "+
mutationNameNoJs.replace(".","_")+
" from '../../"+
directoryName+
unitName+
"/graphql/model/"+
mutationNameNoJs+
"'");

}
});
}catch(e){
if(e.code==="ENOENT"){
getSchemas(directoryName+unitName+"/",schemasImports);
return false;
}else throw e;
}
}
});
}

function createSchemas(){
var schemasImports=[];

getSchemas("units/",schemasImports);

var schemas=["// @flow","/* eslint no-unused-vars: 0 */",""];
schemas=schemas.concat(schemasImports);
schemas=schemas.concat(["","export default true"]);

console.log("Written: "+_path2.default.resolve("./configuration/graphql/_schemas.js"));
_fs2.default.writeFileSync(
"./configuration/graphql/_schemas.js",
schemas.join("\r\n"),
"utf8");

}

function getViewerFields(
directoryName,
viewerFieldsImports,
viewerFieldsExports)
{
_fs2.default.readdirSync(directoryName).filter(function(unitName){
if(_fs2.default.statSync(directoryName+unitName).isDirectory()){
try{
var viewerFieldsImportName=unitName.replace(/-/g,"_");
if(
_fs2.default.
statSync(
directoryName+unitName+"/graphql/type/_ViewerFields.js").

isFile())
{
viewerFieldsImports.push(
"import "+
viewerFieldsImportName+
" from '../../"+
directoryName+
unitName+
"/graphql/type/_ViewerFields'");

viewerFieldsExports.push("  ..."+viewerFieldsImportName+",");
}
}catch(e){
if(e.code==="ENOENT"){
getViewerFields(
directoryName+unitName+"/",
viewerFieldsImports,
viewerFieldsExports);

return false;
}else throw e;
}
}
});
}

function createViewerFields(){
var viewerFieldsImports=[];
var viewerFieldsExports=[];

getViewerFields("units/",viewerFieldsImports,viewerFieldsExports);

var viewerFields=["// @flow",""];
viewerFields=viewerFields.concat(viewerFieldsImports);
viewerFields=viewerFields.concat(["","export default {"]);
viewerFields=viewerFields.concat(viewerFieldsExports);
viewerFields=viewerFields.concat(["}"]);

console.log(
"Written: "+_path2.default.resolve("./configuration/graphql/_ViewerFields.js"));

_fs2.default.writeFileSync(
"./configuration/graphql/_ViewerFields.js",
viewerFields.join("\r\n"),
"utf8");

}

createPackageJson();
createMutations();
createSchemas();
createViewerFields();
//# sourceMappingURL=build-units.js.map