

var fs=require('fs');

var fileName='node_modules/react-rte/dist/react-rte.js';

try{
var fileLines=fs.readFileSync(fileName,'utf8').split('\n');

for(var index=0;index<fileLines.length;index++){
if(
fileLines[index].indexOf(
'if (__webpack_require__(257), __webpack_require__(435), __webpack_require__(436),')>
-1||
fileLines[index].indexOf(
'only one instance of babel-polyfill is allowed')>
-1)
{
{
fileLines[index]='';
}
}
}

fs.writeFileSync(fileName,fileLines.join('\n'));
console.log('['+fileName+'] has  been updated');
}catch(err){
console.error('['+fileName+'] has not been been updated because '+err);
}
//# sourceMappingURL=fix-react-rte.js.map