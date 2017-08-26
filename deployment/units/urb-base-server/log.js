Object.defineProperty(exports,"__esModule",{value:true});

var _winston=require('winston');var _winston2=_interopRequireDefault(_winston);

var _defaultPersister=require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2=_interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


require('dotenv').load();


var transports=[];


if(process.env.NODE_ENV==='development')
transports.push(new _winston2.default.transports.Console());


var defaultPersisterLogger=_defaultPersister2.default.createLogger();
if(defaultPersisterLogger)transports.push(defaultPersisterLogger);


var log=new _winston2.default.Logger({transports:transports});exports.default=

log;
//# sourceMappingURL=log.js.map