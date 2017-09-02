// @flow

export default function( duration: number ): Promise<any> {
  return new Promise( function( resolve ) {
    setTimeout( function() {
      resolve()
    }, duration )
  })
}
