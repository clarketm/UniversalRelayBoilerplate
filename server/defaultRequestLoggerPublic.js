/* @flow weak */

import log from './log'
import matchInDepth from '../scripts/matchInDepth'


// Read environment
require( 'dotenv' ).load()


const condition = JSON.parse( process.env.TRACE_CONDITION_REQUEST_PUBLIC )

// Example for logging requests that:
// { "trace" : "none" } - do not trace any requests
// { "clientIP": "127.0.0.1" } - trace requests coming from localhost

export default function defaultrequestLoggerPublic( requestAndResponse ) {
  let logLevel = null

  // TODO: Whhat errors for Auth should be logged? definitily not 401.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if( matchInDepth( requestAndResponse, condition ) )
    logLevel = 'info'

  if( logLevel )
    log.log( logLevel, 'Public request', requestAndResponse )
}
