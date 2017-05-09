Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _expressGraphql=require('express-graphql');var _expressGraphql2=_interopRequireDefault(_expressGraphql);

var _checkCredentials=require('./checkCredentials.js');
var _logServerRequest=require('./logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _ObjectManager=require('../graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);
var _requestLoggers=require('../configuration/server/requestLoggers');
var _schema=require('../graphql/schema');var _schema2=_interopRequireDefault(_schema);


var _schemas2=require('../graphql/model/_schemas');var _schemas3=_interopRequireDefault(_schemas2);
var _schemas4=require('../configuration/graphql/_schemas');var _schemas5=_interopRequireDefault(_schemas4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var router=(0,_express2.default)();


router.use(_bodyParser2.default.json());
router.use(function(req,res,next){return(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerGraphQL);});

router.use('/',function _callee(req,res,next){var objectManager,a_User;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:

objectManager=new _ObjectManager2.default();
objectManager.setRequest(req);_context.prev=2;_context.next=5;return regeneratorRuntime.awrap(


(0,_checkCredentials.getUserByCookie)(objectManager,req,res));case 5:a_User=_context.sent;

res.codeFoundriesInjected={user:a_User};_context.next=9;return regeneratorRuntime.awrap(
(0,_checkCredentials.verifyUserAuthToken)(a_User,req,res));case 9:

(0,_expressGraphql2.default)(function(){
return{
schema:_schema2.default,
rootValue:objectManager,
pretty:true,
graphiql:true};

})(req,res,next);_context.next=15;break;case 12:_context.prev=12;_context.t0=_context['catch'](2);


(0,_checkCredentials.serveAuthenticationFailed)(req,res,_context.t0,true);case 15:case'end':return _context.stop();}}},null,_this,[[2,12]]);});exports.default=



router;
//# sourceMappingURL=graphQL.js.map