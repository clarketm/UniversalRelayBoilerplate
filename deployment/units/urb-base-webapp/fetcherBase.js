Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

require('isomorphic-fetch');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

FetcherBase=function(){





function FetcherBase(url,UserToken1,UserToken2){_classCallCheck(this,FetcherBase);
this.url=url;
this.UserToken1=UserToken1;
this.UserToken2=UserToken2;
}_createClass(FetcherBase,[{key:'fetch',value:function(_fetch){function fetch(_x,_x2){return _fetch.apply(this,arguments);}fetch.toString=function(){return _fetch.toString();};return fetch;}(function _callee(

operation,variables){var request,response;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
request={
method:'POST',
credentials:'same-origin',
headers:{
'Content-Type':'application/json',
UserToken2:this.UserToken2},

body:JSON.stringify({query:operation.text,variables:variables})};



if(this.UserToken1)request.headers.UserToken1=this.UserToken1;_context.next=4;return regeneratorRuntime.awrap(

fetch(this.url,request));case 4:response=_context.sent;return _context.abrupt('return',

response.json());case 6:case'end':return _context.stop();}}},null,this);})}]);return FetcherBase;}();exports.default=FetcherBase;
//# sourceMappingURL=fetcherBase.js.map