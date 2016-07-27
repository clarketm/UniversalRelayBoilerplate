import Relay, {
  DefaultNetworkLayer,
} from 'react-relay';

import AnonymousUserToken2 from '../configuration/server/AnonymousUserToken2'
import publicURL from '../configuration/scripts/publicURL'


let UserToken1 = null
let UserToken2 = AnonymousUserToken2
let currentEnvironment = null
let listeningComponent = null

export default class NetworkLayer
{
  static setUserTokens( _UserToken1, _UserToken2 )
  {
    UserToken1 = _UserToken1
    UserToken2 = _UserToken2
    currentEnvironment = null // In order to force the creation of new environment

    if( listeningComponent )
    {
      listeningComponent.updateEnvironment( )
    }
  }

  static createNetworkLayer( )
  {
    const graphQLServerURL = publicURL + '/graphql';

    let headers = { }

    if( UserToken1 != null )
      headers.Cookie = 'UserToken1=' + UserToken1

    if( UserToken2 != null )
      headers.UserToken2 = UserToken2

    return new DefaultNetworkLayer(
      graphQLServerURL,
      { headers: headers }
    )
  }

  static getCurrentEnvironment( )
  {
    if( currentEnvironment == null )
    {
      currentEnvironment = new Relay.Environment( )
      currentEnvironment.injectNetworkLayer( NetworkLayer.createNetworkLayer( ) )
    }

    return currentEnvironment
  }

  static RegisterListeningComponent( component )
  {
    listeningComponent = component
  }
}
