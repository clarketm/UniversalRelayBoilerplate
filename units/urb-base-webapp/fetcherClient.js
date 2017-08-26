// @flow

import FetcherBase from './fetcherBase'

export default class FetcherClient extends FetcherBase {
  constructor( url: string, payloads: any, UserToken2: string ) {
    super( url, null, UserToken2 )

    this.payloads = payloads
  }

  async fetch( ...args: any ) {
    if ( this.payloads.length ) {
      return this.payloads.shift()
    }

    return super.fetch( ...args )
  }
}
