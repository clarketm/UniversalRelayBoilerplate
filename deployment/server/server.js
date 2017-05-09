


require('babel-polyfill');

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _cookieParser=require('cookie-parser');var _cookieParser2=_interopRequireDefault(_cookieParser);
var _compression=require('compression');var _compression2=_interopRequireDefault(_compression);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _process=require('process');var _process2=_interopRequireDefault(_process);

var _auth=require('./auth');var _auth2=_interopRequireDefault(_auth);
var _getLocalIP=require('../scripts/getLocalIP');var _getLocalIP2=_interopRequireDefault(_getLocalIP);
var _graphQL=require('./graphQL');var _graphQL2=_interopRequireDefault(_graphQL);
var _healthz=require('./healthz');var _healthz2=_interopRequireDefault(_healthz);
var _log=require('./log');var _log2=_interopRequireDefault(_log);
var _ObjectManager=require('../graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);
var _package=require('../configuration/package');
var _serverExtensions=require('../configuration/server/serverExtensions');var _serverExtensions2=_interopRequireDefault(_serverExtensions);
var _server=require('../webapp/server');var _server2=_interopRequireDefault(_server);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



require('dotenv').load();


var startupInformation={
name:_package.name,
version:_package.version,

NODE_ENV:_process2.default.env.NODE_ENV,
HOST:_process2.default.env.HOST,
PORT:_process2.default.env.PORT,
PUBLIC_URL:_process2.default.env.PUBLIC_URL,

process_title:_process2.default.title,
process_pid:_process2.default.pid,
local_ip:(0,_getLocalIP2.default)()};



_log2.default.log('info','Starting application',startupInformation);


var router=(0,_express2.default)();


router.use(function(req,res,next){

res.setHeader('Access-Control-Allow-Origin',_process2.default.env.PUBLIC_URL);

res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');


res.setHeader('Access-Control-Allow-Credentials',true);

next();
});

router.set('trust proxy','loopback');
router.set('x-powered-by',false);

router.use((0,_compression2.default)());
router.use((0,_cookieParser2.default)());


router.use('/graphql',_graphQL2.default);


router.use('/auth',_auth2.default);


router.use('/healthz',_healthz2.default);


var oneYear=365*86400000;
router.use(_express2.default.static(_path2.default.resolve(__dirname+'/../public/'),{maxAge:oneYear}));


(0,_serverExtensions2.default)(router);


router.use('/*',_server2.default);



_ObjectManager2.default.initializePersisters(false,function(){



if(_process2.default.env.NODE_ENV=='production')
router.listen(_process2.default.env.PORT,_process2.default.env.HOST);else
{


var localhostDevelopmentServer=(0,_express2.default)();
localhostDevelopmentServer.use(router);
localhostDevelopmentServer.listen(_process2.default.env.PORT,'127.0.0.1');
console.log("☄  DEVELOPMENT. Server listening on 127.0.0.1");


if(_process2.default.env.HOST!='127.0.0.1'){

var localIPDevelopmentServer=(0,_express2.default)();
localIPDevelopmentServer.use(router);
localIPDevelopmentServer.listen(_process2.default.env.PORT,_process2.default.env.HOST);
console.log("☄  DEVELOPMENT. Server listening on "+_process2.default.env.HOST);
}
}

});
//# sourceMappingURL=server.js.map