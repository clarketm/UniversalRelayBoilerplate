'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _fetcherBase = require('./fetcherBase');var _fetcherBase2 = _interopRequireDefault(_fetcherBase);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class FetcherClient extends _fetcherBase2.default {
  constructor(url, payloads, UserToken2) {
    super(url, null, UserToken2);

    this.payloads = payloads;
  }

  async fetch(...args) {
    if (this.payloads.length) {
      return this.payloads.shift();
    }

    return super.fetch(...args);
  }}exports.default = FetcherClient;
//# sourceMappingURL=fetcherClient.js.map