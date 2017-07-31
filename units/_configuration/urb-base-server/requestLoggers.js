// @flow

import defaultRequestLoggerAuth from '../../urb-base-server/defaultRequestLoggerAuth'
import defaultRequestLoggerGraphQL from '../../urb-base-server/defaultRequestLoggerGraphQL'
import defaultRequestLoggerPublic from '../../urb-base-server/defaultRequestLoggerPublic'
import defaultrequestLoggerWebApp from '../../urb-base-server/defaultrequestLoggerWebApp'

export var requestLoggerAuth = defaultRequestLoggerAuth
export var requestLoggerGraphQL = defaultRequestLoggerGraphQL
export var requestLoggerPublic = defaultRequestLoggerPublic
export var requestLoggerRenderOnServer = defaultrequestLoggerWebApp
