// @flow weak

import jwt from 'jwt-simple'
import path from 'path'

import defaultPersister from '../_configuration/urb-base-server/graphql/defaultPersister'
import UserToken2ServerRendering from '../_configuration/urb-base-server/UserToken2ServerRendering'
import log from './log'

// Read environment
require('dotenv').load()

function get_user_id(req) {
  const UserToken1 = req.cookies.UserToken1 || req.headers.usertoken1
  if (UserToken1)
    try {
      if (UserToken1.length > 10) {
        const decoded = jwt.decode(UserToken1, process.env.JWT_SECRET)
        return defaultPersister.uuidFromString(decoded.user_id)
      }
    } catch (err) {
      return Promise.reject('💔  Could not read auth cookie. ' + err)
    }
  return defaultPersister.uuidNull() // Anonymous, unless cookie is passed
}

export async function getUserByUserToken1(objectManager, req) {
  const user_id = get_user_id(req)

  const a_User = await objectManager.getOneObject('User', {
    id: user_id,
    User_site_id: objectManager.siteInformation.site_id,
  })

  if (a_User) {
    objectManager.setViewerUserId(user_id)
    return a_User
  } else {
    throw '💔  User not found'
  }
}

export function verifyUserAuthToken(a_User, req) {
  if (!a_User) return Promise.reject('💔  User not found')
  else {
    const request_UserToken2 = req.get('UserToken2')
    if (
      request_UserToken2 == a_User.UserToken2 ||
      // A request coming from webapp will come from localhost and will bear the server's user token
      (req.ip == '127.0.0.1' && request_UserToken2 == UserToken2ServerRendering) ||
      // For use with GraphiQL
      process.env.USER_TOKEN_2_BYPASS_IP == req.ip
    )
      return Promise.resolve(a_User.id)
    else
      return Promise.reject(
        '💔  Authentication token expected: ' +
          a_User.UserToken2 +
          ', provided:' +
          request_UserToken2,
      )
  }
}

const httpError403FileName = path.resolve(
  __dirname,
  '../_configuration/urb-base-server/httpError/403.html',
)

export function serveAuthenticationFailed(req, res, error, respondWithJSON) {
  // Collect information about the request
  var ip = req.headers['x-real-ip'] || req.connection.remoteAddress

  const requestDetails = {
    headers: req.headers,
    cookies: req.cookies,
    ip: ip,
    query: req.body,
  }

  log.log('warn', 'Checking credentials failed', { error, requestDetails })

  // Expire cookie. This is the only way to 'delete' a cookie
  res.cookie('UserToken1', '', { httpOnly: true, expires: new Date(1) })

  if (respondWithJSON) res.status(403).send('{ "error": "💔  Authentication Failed" }')
  else res.status(403).sendFile(httpError403FileName)
}
