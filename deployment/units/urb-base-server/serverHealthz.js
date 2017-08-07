Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _express=require('express');var _express2=_interopRequireDefault(_express);

var _defaultPersister=require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var serverHealthz=(0,_express2.default)();

serverHealthz.get('/',function _callee(req,res,next){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(

_defaultPersister2.default.confirmHealth());case 3:
res.sendStatus(200);_context.next=9;break;case 6:_context.prev=6;_context.t0=_context['catch'](0);

next(new Error('💔 DB is unreachable'));case 9:case'end':return _context.stop();}}},null,_this,[[0,6]]);});exports.default=



serverHealthz;
//# sourceMappingURL=serverHealthz.js.map