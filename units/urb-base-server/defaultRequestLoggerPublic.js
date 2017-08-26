// @flow weak

import { debugWriteToLogServerRequestPublic } from '../_configuration/debug'

import log from './log'
import matchInDepth from './matchInDepth'

export default function defaultrequestLoggerPublic( requestAndResponse ) {
  let logLevel = null

  // TODO: What errors for Auth should be logged? definitily not 401.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ( matchInDepth( requestAndResponse, debugWriteToLogServerRequestPublic ) )
    logLevel = 'info'

  if ( logLevel ) log.log( logLevel, 'Public request', requestAndResponse )
}
