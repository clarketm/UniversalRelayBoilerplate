// @flow

import path from 'path'

import { graphql } from 'graphql'
import { introspectionQuery, printSchema } from 'graphql/utilities'

import schema from '../urb-base-server/graphql/schema'
import ensureFileContent from '../urb-base-tools/ensureFileContent'

async function main() {
  const result = await graphql( schema, introspectionQuery )
  if ( result.errors )
    throw new Error(
      'Failed introspecting schema: ' + JSON.stringify( result.errors, null, 2 )
    )

  const taskPromises = [
    ensureFileContent(
      path.resolve(
        './units/_configuration/urb-base-server/graphql/schema.json'
      ),
      null,
      JSON.stringify( result, null, 2 )
    ),
    ensureFileContent(
      path.resolve(
        './units/_configuration/urb-base-server/graphql/schema.graphql'
      ),
      null,
      printSchema( schema )
    ),
  ]

  await Promise.all( taskPromises )
}

main().then( () => console.log( 'Fin.' ) )
