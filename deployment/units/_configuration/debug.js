'use strict';Object.defineProperty(exports, "__esModule", { value: true });

// Common file with settings that can turn on or off features in the application for debugging

// Example for logging requests that:
// { "trace" : "none" } - do not trace any requests
// { "clientIP": "127.0.0.1" } - trace requests coming from localhost
// { "user": { "User_DisplayName": "jack" } } - trace requests for user account named 'jack'

var debugWriteToLogServerRequestAuth = exports.debugWriteToLogServerRequestAuth = { trace: 'none' };
var debugWriteToLogServerRequestGraphQL = exports.debugWriteToLogServerRequestGraphQL = { trace: 'none' };
var debugWriteToLogServerRequestWebApp = exports.debugWriteToLogServerRequestWebApp = { trace: 'none' };
var debugWriteToLogServerRequestPublic = exports.debugWriteToLogServerRequestPublic = { trace: 'none' };

var debugWriteToConsoleServerRequestSiteInformation = exports.debugWriteToConsoleServerRequestSiteInformation = false;
//# sourceMappingURL=debug.js.map