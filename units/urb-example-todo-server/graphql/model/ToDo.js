// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'

export default class ToDo {
  id: string
  ToDo_User_id: string
  ToDo_Text: string
  ToDo_Complete: boolean

  constructor( fields: {
    id: string,
    ToDo_User_id: string,
    ToDo_Text: string,
    ToDo_Complete: boolean
  }) {
    this.id = fields.id
    this.ToDo_User_id = fields.ToDo_User_id
    this.ToDo_Text = fields.ToDo_Text
    this.ToDo_Complete = fields.ToDo_Complete
  }
}

ObjectManager.registerEntity( 'ToDo', ToDo )
