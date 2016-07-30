import process from 'process'

import { connectAndLoadSchemas } from '../graphql/ExpressCassandra'
import _schemas from '../configuration/graphql/_schemas'

console.log( 'Initializing schema' )
connectAndLoadSchemas( true )
