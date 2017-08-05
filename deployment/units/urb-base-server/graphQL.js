Object.defineProperty(exports,"__esModule",{value:true});

var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _expressGraphql=require('express-graphql');var _expressGraphql2=_interopRequireDefault(_expressGraphql);

var _checkCredentials=require('./checkCredentials');




var _siteSettings=require('../_configuration/urb-base-webapp/siteSettings');
var _logServerRequest=require('./logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _ObjectManager=require('./graphql/ObjectManager');
var _requestLoggers=require('../_configuration/urb-base-server/requestLoggers');
var _schema=require('./graphql/schema');var _schema2=_interopRequireDefault(_schema);


var _schemas2=require('./graphql/model/_schemas');var _schemas3=_interopRequireDefault(_schemas2);
var _schemas4=require('../_configuration/urb-base-server/graphql/_schemas');var _schemas5=_interopRequireDefault(_schemas4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var router=(0,_express2.default)();


router.use(_bodyParser2.default.json());


router.use(function(req,res,next){return(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerGraphQL);});

function root(req,res,next){var objectManager,a_User;return regeneratorRuntime.async(function root$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regeneratorRuntime.awrap(
(0,_ObjectManager.getObjectManager)(req,res));case 2:objectManager=_context.sent;if(!
objectManager.siteInformation){_context.next=18;break;}_context.prev=4;_context.next=7;return regeneratorRuntime.awrap(

(0,_checkCredentials.getUserByUserToken1)(objectManager,req));case 7:a_User=_context.sent;

console.log(a_User);

res.codeFoundriesInjected={user:a_User};_context.next=12;return regeneratorRuntime.awrap(
(0,_checkCredentials.verifyUserAuthToken)(a_User,req));case 12:

(0,_expressGraphql2.default)(function(){
return{
schema:_schema2.default,
rootValue:objectManager,
pretty:true,
graphiql:true};

})(req,res,next);_context.next=18;break;case 15:_context.prev=15;_context.t0=_context['catch'](4);

(0,_checkCredentials.serveAuthenticationFailed)(req,res,_context.t0,true);case 18:case'end':return _context.stop();}}},null,this,[[4,15]]);}



router.use('/',root);exports.default=

router;
//# sourceMappingURL=graphQL.js.map