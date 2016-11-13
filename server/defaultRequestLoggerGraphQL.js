/* @flow weak */

import log from './log'
import matchInDepth from '../scripts/matchInDepth'


// Read environment
require( 'dotenv' ).load()


const condition = JSON.parse( process.env.TRACE_CONDITION_REQUEST_GRAPHQL )

// Example for logging requests that:
// { "trace" : "none" } - do not trace any requests
// { "clientIP": "127.0.0.1" } - trace requests coming from localhost
// { "user": { "User_AccountName": "jack" } } - trace requests for user account named 'jack'

export default function defaultRequestLoggerGraphQL( requestAndResponse ) {
  let logLevel = null

  // If there is an error, log it as an error
  if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
    logLevel = 'error'
    // Otherwise, if it is a trace, log it as info
  else if( matchInDepth( requestAndResponse, condition ) )
    logLevel = 'info'

  if( logLevel )
    log.log( logLevel, 'GraphQL request', requestAndResponse )
}
