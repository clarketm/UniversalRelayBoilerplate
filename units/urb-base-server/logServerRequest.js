// @flow weak

// Function to log requests
export default function logServerRequest( req, res, next, loggingFunction ) {
  const oldWriteRes = res.write
  const oldEndRes = res.end

  const chunksRes = []

  res.write = function( chunk ) {
    chunksRes.push( new Buffer( chunk ) )
    oldWriteRes.apply( res, arguments )
  }

  res.end = function( chunk ) {
    if ( chunk ) chunksRes.push( new Buffer( chunk ) )

    var responseBody = Buffer.concat( chunksRes ).toString( 'utf8' )

    // Determine client ID - either placed in the headers by Nginx, or the IP the request is coming from
    const clientIP = req.headers['x-real-ip'] || req.connection.remoteAddress

    let user
    if ( res.codeFoundriesInjected && res.codeFoundriesInjected.user )
      user = res.codeFoundriesInjected.user
    else user = 'not determined'

    const requestAndResponse = {
      headers: req.headers,
      cookies: req.cookies,
      user: user,
      query: req.body,
      response: responseBody,
      clientIP,
    }

    loggingFunction( requestAndResponse )

    oldEndRes.apply( res, arguments )
  }

  next()
}
