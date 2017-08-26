Object.defineProperty(exports,"__esModule",{value:true});

var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);
var _util=require('util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var readFileAsync=(0,_util.promisify)(_fs2.default.readFile);
var writeFileAsync=(0,_util.promisify)(_fs2.default.writeFile);exports.default=

function ensureFileContent(
fileName,
currentFileContent,
newFileContent){return regeneratorRuntime.async(function ensureFileContent$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(


currentFileContent==null)){_context.next=4;break;}_context.next=3;return regeneratorRuntime.awrap(
readFileAsync(fileName));case 3:currentFileContent=_context.sent.toString();case 4:if(!(

currentFileContent!==newFileContent)){_context.next=10;break;}
console.log('✍️  written:  '+fileName);_context.next=8;return regeneratorRuntime.awrap(
writeFileAsync(fileName,newFileContent,'utf8'));case 8:_context.next=11;break;case 10:

console.log('📎  skipped:  '+fileName);case 11:case'end':return _context.stop();}}},null,this);};
//# sourceMappingURL=ensureFileContent.js.map