'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fetcherBase = require('./fetcherBase');var _fetcherBase2 = _interopRequireDefault(_fetcherBase);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class FetcherServer extends _fetcherBase2.default {


  constructor(url, UserToken1, UserToken2) {
    super(url, UserToken1, UserToken2);

    this.payloads = [];
  }

  async fetch(...args) {
    const i = this.payloads.length;
    this.payloads.push(null);
    const payload = await super.fetch(...args);
    this.payloads[i] = payload;
    return payload;
  }

  toJSON() {
    return this.payloads;
  }}exports.default = FetcherServer;
//# sourceMappingURL=fetcherServer.js.map