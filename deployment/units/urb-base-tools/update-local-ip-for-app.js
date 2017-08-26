

var os=require('os');
var fs=require('fs');

var IPAddress=process.argv[2];

if(IPAddress===undefined){

var interfaces=os.networkInterfaces();
var addresses=[];
for(var k in interfaces){

for(var k2 in interfaces[k]){

var address=interfaces[k][k2];
if(address.family==='IPv4'&&!address.internal)
addresses.push(address.address);
}
}

if(addresses.length>=0)IPAddress=addresses[0];
}

if(IPAddress!==undefined){
console.log('IP Address:'+IPAddress);
updateIPInFile(
'./ios/UniversalRelayBoilerplate/AppDelegate.m',
'jsCodeLocation = [NSURL URLWithString:@"http:',
'  jsCodeLocation = [NSURL URLWithString:@"http://'+
IPAddress+
':8081/index.ios.bundle?platform=ios&dev=true"];');

updateIPInFile(
'./app/app.js',
'let graphQLServerURL = "http://',
'let graphQLServerURL = "http://'+IPAddress+':5555/graphql";');

updateIPInFile('./.env','HOST=','HOST='+IPAddress);
}else console.log('IP Address not specified and could not be found');

function updateIPInFile(fileName,searchString,newContentOfLine){
var fileLines=fs.readFileSync(fileName,'utf8').split('\n');
var index=0;

while(index<fileLines.length){
if(fileLines[index].indexOf(searchString)>-1){
if(fileLines[index]===newContentOfLine)
console.log('['+fileName+'] is already up to date');else
{
fileLines[index]=newContentOfLine;
fs.writeFileSync(fileName,fileLines.join('\n'));

console.log(
'['+fileName+'] has been updated with local IP '+IPAddress);

}
break;
}else index++;
}
}
//# sourceMappingURL=update-local-ip-for-app.js.map