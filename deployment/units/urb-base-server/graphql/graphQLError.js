Object.defineProperty(exports,"__esModule",{value:true});exports.defaultHandler=exports.UserError=exports.IsUserError=exports.Processed=undefined;exports.







































setDefaultHandler=setDefaultHandler;exports.




maskErrors=maskErrors;var _graphql=require('graphql');var _log=require('../log');var _log2=_interopRequireDefault(_log);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Processed=exports.Processed=Symbol();var IsUserError=exports.IsUserError=Symbol();var UserError=exports.UserError=function(_Error){_inherits(UserError,_Error);function UserError(){var _ref;_classCallCheck(this,UserError);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _this=_possibleConstructorReturn(this,(_ref=UserError.__proto__||Object.getPrototypeOf(UserError)).call.apply(_ref,[this].concat(args)));_this.name='Error';_this.message=args[0];_this[IsUserError]=true;Error.captureStackTrace(_this,'Error');return _this;}return UserError;}(Error);var defaultHandler=exports.defaultHandler=function defaultHandler(err){if(err[IsUserError]){return err;}_log2.default.log('error','Resolve function failed',{error:err&&err.stack||err});err.message='Internal Error';return err;};function setDefaultHandler(handlerFn){exports.defaultHandler=defaultHandler=handlerFn;}function maskErrors(thing){var fn=arguments.length>1&&arguments[1]!==undefined?arguments[1]:defaultHandler;
if(thing instanceof _graphql.GraphQLSchema){
maskSchema(thing,fn);
}else if(thing instanceof _graphql.GraphQLObjectType){
maskType(thing,fn);
}else{
maskField(thing,fn);
}
}

function maskField(field,fn){
var resolveFn=field.resolve;
if(field[Processed]||!resolveFn){
return;
}

field[Processed]=true;
field.resolve=function _callee(){var _len2,args,_key2,out,_args=arguments;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;for(_len2=_args.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=_args[_key2];}

out=resolveFn.call.apply(resolveFn,[this].concat(args));_context.next=5;return regeneratorRuntime.awrap(
Promise.resolve(out));case 5:return _context.abrupt('return',_context.sent);case 8:_context.prev=8;_context.t0=_context['catch'](0);throw(

fn(_context.t0));case 11:case'end':return _context.stop();}}},null,this,[[0,8]]);};




field.resolve._resolveFn=resolveFn;
}

function maskType(type,fn){
if(type[Processed]||!type.getFields){
return;
}

var fields=type.getFields();
for(var fieldName in fields){
if(!Object.hasOwnProperty.call(fields,fieldName)){
continue;
}

maskField(fields[fieldName],fn);
}
}

function maskSchema(schema,fn){
var types=schema.getTypeMap();
for(var typeName in types){
if(!Object.hasOwnProperty.call(types,typeName)){
continue;
}

maskType(types[typeName],fn);
}
}
//# sourceMappingURL=graphQLError.js.map