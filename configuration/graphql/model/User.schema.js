// @flow

import defaultPersister from '../defaultPersister'

defaultPersister.addTableSchema('User', {
  fields: {
    id: 'uuid',
    User_site_id: 'uuid',
    UserToken2: 'text',
    User_AccountName: 'text',
    User_AccountPassword: 'text',
    User_DisplayName: 'text',
    User_Email: 'text',
    User_PhoneNumberMobile: 'text',
    User_Latitude: 'double',
    User_Longitude: 'double',
  },
  key: ['id'],
  indexes: ['User_AccountName'],
})

export default true
