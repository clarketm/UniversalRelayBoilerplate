// @flow

export default function( duration: number ) {
  return new Promise( function( resolve ) {
    setTimeout( function() {
      resolve()
    }, duration )
  })
}
