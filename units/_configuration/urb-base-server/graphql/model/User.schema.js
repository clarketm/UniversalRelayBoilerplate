// @flow

import defaultPersister from '../defaultPersister'

defaultPersister.addTableSchema( 'User', {
  fields: {
    id: 'uuid',
    User_site_id: 'uuid',
    UserToken2: 'text',
    User_Secret: 'text',
    User_DisplayName: 'text',
    User_Email: 'text',
    User_PhoneNumberMobile: 'text',
    User_Latitude: 'double',
    User_Longitude: 'double',
  },
  key: [ 'id' ],
})

export default true
