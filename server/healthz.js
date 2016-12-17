/* @flow */

import express from 'express'

import defaultPersister from '../configuration/graphql/defaultPersister'


const healthz = express()


healthz.get( '/', async( req, res, next ) => {

  try {

    await defaultPersister.confirmHealth()
    res.sendStatus( 200 )

  } catch( err ) {

    next( new Error( "💩 DB is unreachable" ) )
  }
} )


export default healthz
