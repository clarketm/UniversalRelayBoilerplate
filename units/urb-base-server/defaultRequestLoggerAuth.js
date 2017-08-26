// @flow weak

import { debugWriteToLogServerRequestAuth } from '../_configuration/debug'

import log from './log'
import matchInDepth from './matchInDepth'

export default function defaultrequestLoggerAuth( requestAndResponse ) {
  let logLevel = null

  // TODO: What errors for Auth should be logged? definitily not 401.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestAuth ) )
    logLevel = 'info'

  if ( logLevel ) log.log( logLevel, 'Auth request', requestAndResponse )
}
