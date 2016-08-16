/* @flow */


// Uncomment the import section for the persister you need as default

// import PersisterCassandra from '../../graphql/persister/PersisterCassandra'
// const defaultPersister = new PersisterCassandra( )

import PersisterMemory from '../../graphql/persister/PersisterMemory'
const defaultPersister = new PersisterMemory( )


// And export the default
export default defaultPersister
