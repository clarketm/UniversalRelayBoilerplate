'use strict';Object.defineProperty(exports, "__esModule", { value: true });

require('isomorphic-fetch');

class FetcherBase {





  constructor(url, UserToken1, UserToken2) {
    this.url = url;
    this.UserToken1 = UserToken1;
    this.UserToken2 = UserToken2;
  }

  async fetch(operation, variables) {
    const request = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        UserToken2: this.UserToken2 },

      body: JSON.stringify({ query: operation.text, variables })


      // $FlowIssue we can add the cookie, will be used on server
    };if (this.UserToken1) request.headers.UserToken1 = this.UserToken1;

    const response = await fetch(this.url, request);

    return response.json();
  }}exports.default = FetcherBase;
//# sourceMappingURL=fetcherBase.js.map