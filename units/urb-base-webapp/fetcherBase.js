// @flow

import 'isomorphic-fetch'

export default class FetcherBase {
  url: string
  UserToken1: ?string
  UserToken2: string
  payloads: Array<any>

  constructor( url: string, UserToken1: ?string, UserToken2: string ) {
    this.url = url
    this.UserToken1 = UserToken1
    this.UserToken2 = UserToken2
  }

  async fetch( operation: { text: string }, variables: any ) {
    const request = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        UserToken2: this.UserToken2,
      },
      body: JSON.stringify({ query: operation.text, variables }),
    }

    // $FlowIssue we can add the cookie, will be used on server
    if ( this.UserToken1 ) request.headers.UserToken1 = this.UserToken1

    const response = await fetch( this.url, request )

    return response.json()
  }
}
