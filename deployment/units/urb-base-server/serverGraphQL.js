Object.defineProperty(exports,"__esModule",{value:true});

var _bodyParser=require('body-parser');var _bodyParser2=_interopRequireDefault(_bodyParser);
var _express=require('express');var _express2=_interopRequireDefault(_express);
var _expressGraphql=require('express-graphql');var _expressGraphql2=_interopRequireDefault(_expressGraphql);

var _requestLoggers=require('../_configuration/urb-base-server/requestLoggers');

var _checkCredentials=require('./checkCredentials');




var _log=require('./log');var _log2=_interopRequireDefault(_log);
var _logServerRequest=require('./logServerRequest');var _logServerRequest2=_interopRequireDefault(_logServerRequest);
var _ObjectManager=require('./graphql/ObjectManager');
var _schema=require('./graphql/schema');var _schema2=_interopRequireDefault(_schema);


require('../_configuration/urb-base-server/graphql/_schemas');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var serverGraphQL=(0,_express2.default)();


serverGraphQL.use(_bodyParser2.default.json());


serverGraphQL.use(function(req,res,next){return(
(0,_logServerRequest2.default)(req,res,next,_requestLoggers.requestLoggerGraphQL));});


function root(req,res,next){var objectManager,a_User;return regeneratorRuntime.async(function root$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regeneratorRuntime.awrap(

(0,_ObjectManager.getObjectManager)(req,res));case 3:objectManager=_context.sent;if(!
objectManager.siteInformation){_context.next=18;break;}_context.prev=5;_context.next=8;return regeneratorRuntime.awrap(

(0,_checkCredentials.getUserAndSessionIDByUserToken1)(
objectManager,
req));case 8:a_User=_context.sent.
User;

res.codeFoundriesInjected={user:a_User};_context.next=12;return regeneratorRuntime.awrap(
(0,_checkCredentials.verifyUserAuthToken)(a_User,req));case 12:

(0,_expressGraphql2.default)(function(){
return{
schema:_schema2.default,
rootValue:objectManager,
pretty:true,
graphiql:true};

})(req,res,next);_context.next=18;break;case 15:_context.prev=15;_context.t0=_context['catch'](5);

(0,_checkCredentials.serveAuthenticationFailed)(req,res,_context.t0,true);case 18:_context.next=24;break;case 20:_context.prev=20;_context.t1=_context['catch'](0);



_log2.default.log('error','Error: GraphQL',_context.t1);
res.
status(500).
send(
JSON.stringify({
error:'An error has occurred while running GraphQL query'}));case 24:case'end':return _context.stop();}}},null,this,[[0,20],[5,15]]);}




serverGraphQL.use('/',root);exports.default=

serverGraphQL;
//# sourceMappingURL=serverGraphQL.js.map