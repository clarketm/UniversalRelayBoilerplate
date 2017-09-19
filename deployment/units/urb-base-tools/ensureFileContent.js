'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _util = require('util');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const readFileAsync = (0, _util.promisify)(_fs2.default.readFile);
const writeFileAsync = (0, _util.promisify)(_fs2.default.writeFile);exports.default =

async function ensureFileContent(
fileName,
currentFileContent,
newFileContent)
{
  // If the current file content is not provided, get it
  if (currentFileContent == null)
  currentFileContent = (await readFileAsync(fileName)).toString();

  if (currentFileContent !== newFileContent) {
    console.log('✍️  written:  ' + fileName);
    await writeFileAsync(fileName, newFileContent, 'utf8');
  } else {
    console.log('📎  skipped:  ' + fileName);
  }
};
//# sourceMappingURL=ensureFileContent.js.map