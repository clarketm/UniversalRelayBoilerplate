// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

// Class used by GraphQL Server
export default class UserSession {
  id: string
  UserSession_site_id: string
  UserSession_User_id: string
  UserSession_Start: Date
  UserSession_Expired: boolean

  constructor( fields: {
    id: string,
    UserSession_site_id: string,
    UserSession_User_id: string,
    UserSession_Start: Date,
    UserSession_Expired: boolean
  }) {
    this.id = fields.id
    this.UserSession_site_id = fields.UserSession_site_id
    this.UserSession_User_id = fields.UserSession_User_id
    this.UserSession_Start = fields.UserSession_Start
    this.UserSession_Expired = fields.UserSession_Expired
  }
}

ObjectManager.registerEntity( 'UserSession', UserSession )
