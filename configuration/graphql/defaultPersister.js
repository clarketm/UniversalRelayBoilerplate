/* @flow */


// Uncomment the import section for the persister you need as default

// import PersisterCassandra from '../../graphql/persister/cassandra/PersisterCassandra'
// const defaultPersister = new PersisterCassandra( )

import PersisterMemory from '../../graphql/persister/memory/PersisterMemory'
const defaultPersister = new PersisterMemory( )


// And export the default
export default defaultPersister
