Object.defineProperty(exports,"__esModule",{value:true});exports.ClientFetcher=exports.ServerFetcher=undefined;var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

require('isomorphic-fetch');function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var





FetcherBase=function(){



function FetcherBase(url){_classCallCheck(this,FetcherBase);
this.url=url;
}_createClass(FetcherBase,[{key:'fetch',value:function(_fetch){function fetch(_x,_x2){return _fetch.apply(this,arguments);}fetch.toString=function(){return _fetch.toString();};return fetch;}(function _callee(

operation,variables){var response;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
fetch(this.url,{
method:'POST',
headers:{
'Content-Type':'application/json'},

body:JSON.stringify({query:operation.text,variables:variables})}));case 2:response=_context.sent;return _context.abrupt('return',

response.json());case 4:case'end':return _context.stop();}}},null,this);})}]);return FetcherBase;}();var



ServerFetcher=exports.ServerFetcher=function(_FetcherBase){_inherits(ServerFetcher,_FetcherBase);
function ServerFetcher(url){_classCallCheck(this,ServerFetcher);var _this=_possibleConstructorReturn(this,(ServerFetcher.__proto__||Object.getPrototypeOf(ServerFetcher)).call(this,
url));

_this.payloads=[];return _this;
}_createClass(ServerFetcher,[{key:'fetch',value:function fetch(){var _get2;for(var _len=arguments.length,

args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var i,payload;return regeneratorRuntime.async(function fetch$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
i=this.payloads.length;
this.payloads.push(null);_context2.next=4;return regeneratorRuntime.awrap((_get2=_get(ServerFetcher.prototype.__proto__||Object.getPrototypeOf(ServerFetcher.prototype),'fetch',this)).call.apply(_get2,[this].concat(
args)));case 4:payload=_context2.sent;
this.payloads[i]=payload;return _context2.abrupt('return',
payload);case 7:case'end':return _context2.stop();}}},null,this);}},{key:'toJSON',value:function toJSON()


{
return this.payloads;
}}]);return ServerFetcher;}(FetcherBase);var


ClientFetcher=exports.ClientFetcher=function(_FetcherBase2){_inherits(ClientFetcher,_FetcherBase2);
function ClientFetcher(url,payloads){_classCallCheck(this,ClientFetcher);var _this2=_possibleConstructorReturn(this,(ClientFetcher.__proto__||Object.getPrototypeOf(ClientFetcher)).call(this,
url));

_this2.payloads=payloads;return _this2;
}_createClass(ClientFetcher,[{key:'fetch',value:function fetch(){var _get3;for(var _len2=arguments.length,

args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return regeneratorRuntime.async(function fetch$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!
this.payloads.length){_context3.next=2;break;}return _context3.abrupt('return',
this.payloads.shift());case 2:return _context3.abrupt('return',(_get3=_get(ClientFetcher.prototype.__proto__||Object.getPrototypeOf(ClientFetcher.prototype),'fetch',this)).call.apply(_get3,[this].concat(


args)));case 3:case'end':return _context3.stop();}}},null,this);}}]);return ClientFetcher;}(FetcherBase);
//# sourceMappingURL=fetcher.js.map