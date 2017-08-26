// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

// Class used by GraphQL Server
export default class Inscriptio {
  id: string
  Inscriptio_User_id: string
  Inscriptio_LocationLat: string
  Inscriptio_LocationLon: string
  Inscriptio_Notes: string

  constructor( fields: {
    id: string,
    Inscriptio_User_id: string,
    Inscriptio_LocationLat: string,
    Inscriptio_LocationLon: string,
    Inscriptio_Notes: string
  }) {
    this.id = fields.id
    this.Inscriptio_User_id = fields.Inscriptio_User_id
    this.Inscriptio_LocationLat = fields.Inscriptio_LocationLat
    this.Inscriptio_LocationLon = fields.Inscriptio_LocationLon
    this.Inscriptio_Notes = fields.Inscriptio_Notes
  }
}

ObjectManager.registerEntity( 'Inscriptio', Inscriptio )
