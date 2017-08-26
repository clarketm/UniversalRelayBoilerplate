// @flow

import winston from 'winston'

import defaultPersister from '../_configuration/urb-base-server/graphql/defaultPersister'

// Read environment
require( 'dotenv' ).load()

// Determine transports.
const transports = []

// Add console when in development mode.
if ( process.env.NODE_ENV === 'development' )
  transports.push( new winston.transports.Console() )

// If persister specified logger, use it
const defaultPersisterLogger = defaultPersister.createLogger()
if ( defaultPersisterLogger ) transports.push( defaultPersisterLogger )

// Create winston
const log = new winston.Logger({ transports })

export default log
