// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

// Class used by GraphQL Server
export default class Ensayo {
  id: string
  Ensayo_User_id: string
  Ensayo_Title: string
  Ensayo_Description: string
  Ensayo_Content: string

  constructor( fields: {
    id: string,
    Ensayo_User_id: string,
    Ensayo_Title: string,
    Ensayo_Description: string,
    Ensayo_Content: string
  }) {
    this.id = fields.id
    this.Ensayo_User_id = fields.Ensayo_User_id
    this.Ensayo_Title = fields.Ensayo_Title
    this.Ensayo_Description = fields.Ensayo_Description
    this.Ensayo_Content = fields.Ensayo_Content
  }
}

ObjectManager.registerEntity( 'Ensayo', Ensayo )
