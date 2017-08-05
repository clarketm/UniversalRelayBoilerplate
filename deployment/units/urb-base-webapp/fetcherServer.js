Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};

var _fetcherBase=require('./fetcherBase');var _fetcherBase2=_interopRequireDefault(_fetcherBase);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

FetcherServer=function(_FetcherBase){_inherits(FetcherServer,_FetcherBase);


function FetcherServer(url,UserToken1,UserToken2){_classCallCheck(this,FetcherServer);var _this=_possibleConstructorReturn(this,(FetcherServer.__proto__||Object.getPrototypeOf(FetcherServer)).call(this,
url,UserToken1,UserToken2));

_this.payloads=[];return _this;
}_createClass(FetcherServer,[{key:'fetch',value:function fetch(){var _get2;for(var _len=arguments.length,

args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var i,payload;return regeneratorRuntime.async(function fetch$(_context){while(1){switch(_context.prev=_context.next){case 0:
i=this.payloads.length;
this.payloads.push(null);_context.next=4;return regeneratorRuntime.awrap((_get2=_get(FetcherServer.prototype.__proto__||Object.getPrototypeOf(FetcherServer.prototype),'fetch',this)).call.apply(_get2,[this].concat(_toConsumableArray(
args))));case 4:payload=_context.sent;
this.payloads[i]=payload;return _context.abrupt('return',
payload);case 7:case'end':return _context.stop();}}},null,this);}},{key:'toJSON',value:function toJSON()


{
return this.payloads;
}}]);return FetcherServer;}(_fetcherBase2.default);exports.default=FetcherServer;
//# sourceMappingURL=fetcherServer.js.map