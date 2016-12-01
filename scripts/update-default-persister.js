/* @flow weak */

import fs from 'fs'
import path from 'path'


const supportedPersisters = {
  cassandra: '../../units/urb-persister-cassandra/graphql/PersisterCassandra',
  dynamodb: '../../units/urb-persister-dynamodb/graphql/PersisterDynamoDB',
  memory: '../../units/urb-persister-memory/graphql/PersisterMemory',
  waterline: '../../units/urb-persister-waterline/graphql/PersisterWaterline',
}


function updateDefaultPersister( fileName )
{
  const defaultPersister = [
    `// @flow weak`,
    ``,
    `import Persister from '` + fileName + `'`,
    ``,
    ``,
    `const defaultPersister = new Persister( )`,
    `export default defaultPersister`,
  ]

  console.log( 'Written: ' + path.resolve( './configuration/graphql/defaultPersister.js' ) )
  fs.writeFileSync( './configuration/graphql/defaultPersister.js', defaultPersister.join( '\r\n' ), 'utf8' )
}


const persisterName = process.argv[ 2 ]
const persisterFileName = supportedPersisters[ persisterName ]

if( persisterFileName != null )
  updateDefaultPersister( persisterFileName )
else
{
  console.error( "Error: Default persister not specified. Specify default persister, for instance:" )
  console.error( "  npm run update-default-persister -- memory" )
  console.error( "Valid options are:" )
  for( let name in supportedPersisters )
    console.error( "  " + name )
}
