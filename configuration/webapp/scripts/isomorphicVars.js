/* @flow weak */

export default function( )
{
  if( typeof( window ) == 'undefined' || typeof( window.isomorphicVars ) == 'undefined' )
  {
    // Running on server.
    return {
      // Modify the code below to set the variables >>>
      npm_package_version: process.env.npm_package_version,
      // <<< Modify the code above to set the variables
    }
  }
  else
    return window.isomorphicVars;
}
