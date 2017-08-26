export default function getNewUser( User_site_id ) {
  return {
    User_site_id,
    UserToken2: '',
    User_Secret: '',
    User_DisplayName: '',
    User_Email: '',
    User_PhoneNumberMobile: '',
    User_Latitude: 0,
    User_Longitude: 0,
  }
}
