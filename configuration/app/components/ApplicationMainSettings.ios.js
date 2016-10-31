/* @flow weak */

import configurePushNotifications from '../../../units/rb-push-notifications/app/configurePushNotifications'

export function componentDidMountAdditionalInitialization( )
{
  configurePushNotifications( )
}
