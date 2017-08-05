Object.defineProperty(exports,"__esModule",{value:true});exports.default=



function(){
var interfaces=_os2.default.networkInterfaces();

for(var k in interfaces){

for(var k2 in interfaces[k]){

var address=interfaces[k][k2];
if(address.family==='IPv4'&&!address.internal)return address.address;
}
}
};var _os=require('os');var _os2=_interopRequireDefault(_os);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
//# sourceMappingURL=getLocalIP.js.map