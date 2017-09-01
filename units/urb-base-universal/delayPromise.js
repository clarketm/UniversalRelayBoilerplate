// @flow

export default function( duration: number ): Promise<null> {
  return new Promise( function( resolve ) {
    setTimeout( function() {
      resolve()
    }, duration )
  })
}
