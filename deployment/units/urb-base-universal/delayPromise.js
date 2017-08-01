Object.defineProperty(exports,"__esModule",{value:true});exports.default=

function(duration){
return new Promise(function(resolve){
setTimeout(function(){
resolve();
},duration);
});
};
//# sourceMappingURL=delayPromise.js.map