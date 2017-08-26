// @flow weak

import { debugWriteToLogServerRequestGraphQL } from '../_configuration/debug'

import log from './log'
import matchInDepth from './matchInDepth'

export default function defaultRequestLoggerGraphQL( requestAndResponse ) {
  let logLevel = null

  // If there is an error, log it as an error
  if ( requestAndResponse.response.indexOf( '"errors": [' ) > 0 ) logLevel = 'error'
  else if (
    matchInDepth( requestAndResponse, debugWriteToLogServerRequestGraphQL )
  )
    // Otherwise, if it is a trace, log it as info
    logLevel = 'info'

  if ( logLevel ) log.log( logLevel, 'GraphQL request', requestAndResponse )
}
