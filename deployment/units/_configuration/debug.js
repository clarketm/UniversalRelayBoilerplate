// @flow

// Common file with settings that can turn on or off features in the application for debugging

// Example for logging requests that:
// { "trace" : "none" } - do not trace any requests
// { "clientIP": "127.0.0.1" } - trace requests coming from localhost
// { "user": { "User_DisplayName": "jack" } } - trace requests for user account named 'jack'

export var debugWriteToLogServerRequestAuth = { trace: 'none' }
export var debugWriteToLogServerRequestGraphQL = { trace: 'none' }
export var debugWriteToLogServerRequestWebApp = { trace: 'none' }
export var debugWriteToLogServerRequestPublic = { trace: 'none' }

export var debugWriteToConsoleServerRequestSiteInformation = false
