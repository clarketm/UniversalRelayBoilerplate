// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

// Class used by GraphQL Server
export default class UserCredentials {
  id: string
  UserCredentials_site_id: string
  UserCredentials_User_id: string
  UserCredentials_AccountIdentifier: string
  UserCredentials_AccountSecret: string

  constructor(fields: {
    id: string,
    UserCredentials_site_id: string,
    UserCredentials_User_id: string,
    UserCredentials_AccountIdentifier: string,
    UserCredentials_AccountSecret: string,
  }) {
    this.id = fields.id
    this.UserCredentials_site_id = fields.UserCredentials_site_id
    this.UserCredentials_User_id = fields.UserCredentials_User_id
    this.UserCredentials_AccountIdentifier = fields.UserCredentials_AccountIdentifier
    this.UserCredentials_AccountSecret = fields.UserCredentials_AccountSecret
  }
}

ObjectManager.registerEntity('UserCredentials', UserCredentials)
