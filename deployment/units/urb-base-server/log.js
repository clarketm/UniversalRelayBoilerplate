'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _winston = require('winston');var _winston2 = _interopRequireDefault(_winston);

var _defaultPersister = require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2 = _interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Read environment
require('dotenv').load();

// Determine transports.
const transports = [];

// Add console when in development mode.
if (process.env.NODE_ENV === 'development')
transports.push(new _winston2.default.transports.Console());

// If persister specified logger, use it
const defaultPersisterLogger = _defaultPersister2.default.createLogger();
if (defaultPersisterLogger) transports.push(defaultPersisterLogger);

// Create winston
const log = new _winston2.default.Logger({ transports });exports.default =

log;
//# sourceMappingURL=log.js.map