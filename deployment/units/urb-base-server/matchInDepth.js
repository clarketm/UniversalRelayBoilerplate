Object.defineProperty(exports,"__esModule",{value:true});exports.default=

matchInDepth;function matchInDepth(payload,condition){
for(var ix in condition){
var payloadValue=payload[ix];
var typeOfValue=typeof payloadValue;

var conditionValue=condition[ix];
var typeOfCondition=typeof conditionValue;

if(typeOfValue!==typeOfCondition)return false;

if(typeOfCondition==='object'){
if(!matchInDepth(payloadValue,conditionValue))return false;
}else{
if(payloadValue!==conditionValue)return false;
}
}

return true;
}
//# sourceMappingURL=matchInDepth.js.map