// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

// Class used by GraphQL Server
export default class UserAccount {
  id: string
  UserAccount_site_id: string
  UserAccount_User_id: string
  UserAccount_Identifier: string
  UserAccount_Type: 'un' | 'soc' // UserName, SOCial

  constructor( fields: {
    id: string,
    UserAccount_site_id: string,
    UserAccount_User_id: string,
    UserAccount_Identifier: string,
    UserAccount_Type: 'un' | 'soc'
  }) {
    this.id = fields.id
    this.UserAccount_site_id = fields.UserAccount_site_id
    this.UserAccount_User_id = fields.UserAccount_User_id
    this.UserAccount_Identifier = fields.UserAccount_Identifier
    this.UserAccount_Type = fields.UserAccount_Type
  }
}

ObjectManager.registerEntity( 'UserAccount', UserAccount )
