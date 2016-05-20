/* @flow weak */

import ObjectManagerBase from '../../graphql/ObjectManagerBase';

import Compendium from '../../units/urb-example-compendium/graphql/model/Compendium';
import Ensayo from '../../units/urb-example-ensayo/graphql/model/Ensayo';
import ToDo from '../../units/urb-example-todo/graphql/model/ToDo';
import Translaticiarum from '../../units/urb-example-translaticiarum/graphql/model/Translaticiarum';
import User from '../../configuration/graphql/model/User';

export default class ObjectManager extends ObjectManagerBase
{
  constructor( Viewer_User_id )
  {
    super( Viewer_User_id );

    this.registerEntity( 'Compendium', Compendium );
    this.registerEntity( 'Ensayo', Ensayo );
    this.registerEntity( 'ToDo', ToDo );
    this.registerEntity( 'Translaticiarum', Translaticiarum );
    this.registerEntity( 'User', User );
  }
}
