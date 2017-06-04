

var _fs=require("fs");var _fs2=_interopRequireDefault(_fs);

var _AppRegistryName=require("../configuration/app/AppRegistryName");var _AppRegistryName2=_interopRequireDefault(_AppRegistryName);
var _getLocalIP=require("./getLocalIP");var _getLocalIP2=_interopRequireDefault(_getLocalIP);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require("dotenv").load();


var port=process.env.PORT;

var IPAddress=process.argv[2];

if(IPAddress==undefined)IPAddress=(0,_getLocalIP2.default)();

if(IPAddress!=undefined){
console.log("IP Address:"+IPAddress);
updateIPInFile(
"./ios/"+_AppRegistryName2.default+"/AppDelegate.m",
'jsCodeLocation = [NSURL URLWithString:@"http:',
'  jsCodeLocation = [NSURL URLWithString:@"http://'+
IPAddress+
':8081/index.ios.bundle?platform=ios&dev=true"];');

updateIPInFile(
"./configuration/app/publicURL.js",
"const publicURL",
"const publicURL = 'http://"+IPAddress+":"+port+"'");

updateIPInFile(
"./.env",
"PUBLIC_URL=",
"PUBLIC_URL=http://"+IPAddress+":"+port);

updateIPInFile("./.env","HOST=","HOST="+IPAddress);
}else console.log("IP Address not specified and could not be found");

function updateIPInFile(fileName,searchString,newContentOfLine){
try{
var fileLines=_fs2.default.readFileSync(fileName,"utf8").split("\n");
var index=0;

while(index<fileLines.length){
if(fileLines[index].indexOf(searchString)>-1){
if(fileLines[index]==newContentOfLine)
console.log("["+fileName+"] is already up to date");else
{
fileLines[index]=newContentOfLine;
_fs2.default.writeFileSync(fileName,fileLines.join("\n"));

console.log(
"["+fileName+"] has been updated with local IP "+IPAddress);

}
break;
}else{
index++;
}
}
}catch(err){
console.log(
"["+
fileName+
"] has not been been updated with local IP because "+
err);

}
}
//# sourceMappingURL=update-ip.js.map