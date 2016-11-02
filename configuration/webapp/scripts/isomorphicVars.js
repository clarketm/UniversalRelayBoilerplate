/* @flow weak */

import
{
  version
}
from '../../package'


export default function ()
{
  if( typeof ( window ) == 'undefined' || typeof ( window.isomorphicVars ) == 'undefined' )
  {
    // Running on server.
    return {
      // Modify the code below to set the variables >>>
      BuildVersion: version,
        // <<< Modify the code above to set the variables
    }
  }
  else
    return window.isomorphicVars;
}
