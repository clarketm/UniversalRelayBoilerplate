'use strict';var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);

var _package = require('../_configuration/package.js');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

console.log(
'Current version in package.json: ' + process.env.npm_package_version);

console.log('Current version in package.js:   ' + _package.version);

const arrVersion = _package.version.split('.');
let versionBuildNumber = arrVersion[3];

if (versionBuildNumber == null) versionBuildNumber = -1;

if (
process.env.npm_package_version !=
arrVersion[0] + '.' + arrVersion[1] + '.' + arrVersion[2])

versionBuildNumber = -1;

// Increment build
versionBuildNumber++;
const newVersion = process.env.npm_package_version + '.' + versionBuildNumber;

const fileName = './units/_configuration/package.js';
const searchString = 'export const version = ';
const newContentOfLine = 'export const version = \'' + newVersion + '\'';

let fileLines = _fs2.default.readFileSync(fileName, 'utf8').split('\n');
let index = 0;

while (index < fileLines.length) {
  if (fileLines[index].indexOf(searchString) > -1) {
    if (fileLines[index] === newContentOfLine)
    console.log('[' + fileName + '] is already up to date');else
    {
      fileLines[index] = newContentOfLine;
      _fs2.default.writeFileSync(fileName, fileLines.join('\n'));

      console.log('New version in package.js:       ' + newVersion);
    }
    break;
  } else index++;
}
//# sourceMappingURL=build-bump-version.js.map