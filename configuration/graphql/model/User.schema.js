/* @flow */

import defaultPersister from '../defaultPersister'


defaultPersister.addTableSchema( 'User', {
  fields: {
      id: 'uuid',
      UserToken2: 'text',
      User_AccountName: 'text',
      User_AccountPassword: 'text',
      User_DisplayName: 'text',
      User_Email: 'text',
      User_PhoneNumberMobile: 'text',
      User_ProfilePhoto: 'text',
  },
  key: [ 'id' ],
  indexes: [ 'User_AccountName' ]
} )

export default true
