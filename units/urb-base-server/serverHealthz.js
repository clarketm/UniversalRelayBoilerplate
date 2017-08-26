// @flow

import express from 'express'

import defaultPersister from '../_configuration/urb-base-server/graphql/defaultPersister'

const serverHealthz = express()

serverHealthz.get( '/', async( req, res, next ) => {
  try {
    await defaultPersister.confirmHealth()
    res.sendStatus( 200 )
  } catch ( err ) {
    next( new Error( '💔 DB is unreachable' ) )
  }
})

export default serverHealthz
