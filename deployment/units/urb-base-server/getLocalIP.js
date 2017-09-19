'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



function () {
  const interfaces = _os2.default.networkInterfaces();

  for (let k in interfaces) {
    // $FlowIssue it will be there
    for (let k2 in interfaces[k]) {
      // $FlowIssue it will be there
      const address = interfaces[k][k2];
      if (address.family === 'IPv4' && !address.internal) return address.address;
    }
  }
};var _os = require('os');var _os2 = _interopRequireDefault(_os);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
//# sourceMappingURL=getLocalIP.js.map