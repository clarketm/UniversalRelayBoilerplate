


require('babel-polyfill');

var _express=require('express');var _express2=_interopRequireDefault(_express);
var _expressGraphql=require('express-graphql');var _expressGraphql2=_interopRequireDefault(_expressGraphql);

var _graphQL=require('./graphQL');var _graphQL2=_interopRequireDefault(_graphQL);
var _ObjectManager=require('./graphql/ObjectManager');var _ObjectManager2=_interopRequireDefault(_ObjectManager);
var _server=require('../urb-base-webapp/server');var _server2=_interopRequireDefault(_server);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();

var port=process.env.PORT;

var router=(0,_express2.default)();


router.use('/graphql',_graphQL2.default);


router.use(_server2.default);


_ObjectManager2.default.initializePersisters(false,function(){


if(process.env.NODE_ENV=='production')router.listen(process.env.PORT,process.env.HOST);else
{

var localhostDevelopmentServer=(0,_express2.default)();
localhostDevelopmentServer.use(router);
localhostDevelopmentServer.listen(process.env.PORT,'127.0.0.1');
console.log('☄  DEVELOPMENT. Server listening on 127.0.0.1');


if(process.env.HOST!='127.0.0.1'){
var localIPDevelopmentServer=(0,_express2.default)();
localIPDevelopmentServer.use(router);
localIPDevelopmentServer.listen(process.env.PORT,process.env.HOST);
console.log('☄  DEVELOPMENT. Server listening on '+process.env.HOST);
}
}
});;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(port,'port','units/urb-base-server/server.js');__REACT_HOT_LOADER__.register(router,'router','units/urb-base-server/server.js');}();;
//# sourceMappingURL=server.js.map