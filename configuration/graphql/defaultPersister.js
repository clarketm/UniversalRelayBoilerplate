/* @flow */


// Uncomment the import section for the persister you need as default


import Persister from '../../units/urb-persister-cassandra/graphql/PersisterCassandra'
// import Persister from '../../units/urb-persister-dynamodb/graphql/PersisterDynamoDB'
// import Persister from '../../units/urb-persister-memory/graphql/PersisterMemory'
//import Persister from '../../units/urb-persister-waterline/graphql/PersisterWaterline'


// And export the default
const defaultPersister = new Persister( )
export default defaultPersister
