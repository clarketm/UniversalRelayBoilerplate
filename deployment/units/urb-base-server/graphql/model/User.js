// @flow

// Class used by GraphQL Server
export default class User {
  id: string
  User_site_id: string
  UserToken2: string
  User_Secret: string
  User_DisplayName: string
  User_Email: string
  User_PhoneNumberMobile: string
  User_Latitude: number
  User_Longitude: number
  //

  constructor( fields: {
    id: string,
    User_site_id: string,
    UserToken2: string,
    User_Secret: string,
    User_DisplayName: string,
    User_Email: string,
    User_PhoneNumberMobile: string,
    User_Latitude: number,
    User_Longitude: number
  }) {
    this.id = fields.id
    this.User_site_id = fields.User_site_id
    this.UserToken2 = fields.UserToken2
    this.User_Secret = fields.User_Secret
    this.User_DisplayName = fields.User_DisplayName
    this.User_Email = fields.User_Email
    this.User_PhoneNumberMobile = fields.User_PhoneNumberMobile
    this.User_Latitude = fields.User_Latitude
    this.User_Longitude = fields.User_Longitude
  }
}
