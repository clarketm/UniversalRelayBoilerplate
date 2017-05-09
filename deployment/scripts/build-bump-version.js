var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);





var _package=require('../configuration/package.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('dotenv').load();

console.log('Current version in package.json: '+process.env.npm_package_version);
console.log('Current version in package.js:   '+_package.version);

var versionBuildNumber=_package.version.split('.')[3];
if(versionBuildNumber==null)
versionBuildNumber=1;


versionBuildNumber++;
var newVersion=process.env.npm_package_version+'.'+versionBuildNumber;

var fileName='./configuration/package.js';
var searchString='export const version = ';
var newContentOfLine='export const version = \''+newVersion+'\'';

var fileLines=_fs2.default.readFileSync(fileName,'utf8').split('\n');
var index=0;

while(index<fileLines.length)
{
if(fileLines[index].indexOf(searchString)>-1)
{
if(fileLines[index]==newContentOfLine)
console.log('['+fileName+'] is already up to date');else

{
fileLines[index]=newContentOfLine;
_fs2.default.writeFileSync(fileName,fileLines.join('\n'));

console.log('New version in package.js:       '+newVersion);
}
break;
}else

index++;
}
//# sourceMappingURL=build-bump-version.js.map