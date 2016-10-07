/* @flow weak */

// Class used by GraphQL Server
export default class User
{
  constructor( fields )
  {
    this.id = fields.id
    this.UserToken2 = fields.UserToken2
    this.User_AccountName = fields.User_AccountName
    this.User_AccountPassword = fields.User_AccountPassword
    this.User_DisplayName = fields.User_DisplayName
    this.User_Email = fields.User_Email
    this.User_PhoneNumberMobile = fields.User_PhoneNumberMobile
    this.User_ProfilePhoto = fields.User_ProfilePhoto
  }
}
