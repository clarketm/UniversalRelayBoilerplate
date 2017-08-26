// @flow

import fs from 'fs'
import path from 'path'

const supportedPersisters = {
  cassandra: '../../../urb-persister-cassandra/graphql/PersisterCassandra',
  dynamodb: '../../../urb-persister-dynamodb/graphql/PersisterDynamoDB',
  memory: '../../../urb-persister-memory/graphql/PersisterMemory',
}

function updateDefaultPersister( fileName ) {
  const defaultPersister = [
    '// @flow',
    '',
    'import Persister from \'' + fileName + '\'',
    '',
    '',
    'const defaultPersister = new Persister( )',
    'export default defaultPersister',
  ]

  console.log(
    'Written: ' +
      path.resolve(
        './units/_configuration/urb-base-server/graphql/defaultPersister.js'
      )
  )
  fs.writeFileSync(
    './units/_configuration/urb-base-server/graphql/defaultPersister.js',
    defaultPersister.join( '\r\n' ),
    'utf8'
  )
}

const persisterName = process.argv[2]
const persisterFileName = supportedPersisters[persisterName]

if ( persisterFileName != null ) updateDefaultPersister( persisterFileName )
else {
  console.error(
    'Error: Default persister not specified. Specify default persister, for instance:'
  )
  console.error( '  npm run update-default-persister -- memory' )
  console.error( 'Valid options are:' )
  for ( let name in supportedPersisters ) console.error( '  ' + name )
}
