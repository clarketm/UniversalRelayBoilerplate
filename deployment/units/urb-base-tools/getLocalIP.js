Object.defineProperty(exports,"__esModule",{value:true});

var _os=require('os');var _os2=_interopRequireDefault(_os);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=

function _default(){
var interfaces=_os2.default.networkInterfaces();

for(var k in interfaces){
for(var k2 in interfaces[k]){
var address=interfaces[k][k2];
if(address.family==='IPv4'&&!address.internal)return address.address;
}}
};exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(_default,'default','units/urb-base-tools/getLocalIP.js');}();;
//# sourceMappingURL=getLocalIP.js.map