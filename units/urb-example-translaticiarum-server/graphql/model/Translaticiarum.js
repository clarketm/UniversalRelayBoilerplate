// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

// Class used by GraphQL Server
export default class Translaticiarum {
  id: string
  Translaticiarum_User_id: string
  Translaticiarum_Start: string
  Translaticiarum_Stop: string
  Translaticiarum_Description: string

  constructor( fields: {
    id: string,
    Translaticiarum_User_id: string,
    Translaticiarum_Start: string,
    Translaticiarum_Stop: string,
    Translaticiarum_Description: string
  }) {
    this.id = fields.id
    this.Translaticiarum_User_id = fields.Translaticiarum_User_id
    this.Translaticiarum_Start = fields.Translaticiarum_Start
    this.Translaticiarum_Stop = fields.Translaticiarum_Stop
    this.Translaticiarum_Description = fields.Translaticiarum_Description
  }
}

ObjectManager.registerEntity( 'Translaticiarum', Translaticiarum )
