'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _express = require('express');var _express2 = _interopRequireDefault(_express);

var _defaultPersister = require('../_configuration/urb-base-server/graphql/defaultPersister');var _defaultPersister2 = _interopRequireDefault(_defaultPersister);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const serverHealthz = (0, _express2.default)();

serverHealthz.get('/', async (req, res, next) => {
  try {
    await _defaultPersister2.default.confirmHealth();
    res.sendStatus(200);
  } catch (err) {
    next(new Error('💔 DB is unreachable'));
  }
});exports.default =

serverHealthz;
//# sourceMappingURL=serverHealthz.js.map