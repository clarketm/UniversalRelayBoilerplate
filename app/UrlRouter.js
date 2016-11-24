/* @flow weak */

import { Actions } from 'react-native-router-flux'


let routeTree = {}
let currentlyOpenRoutes = []

export default class UrlRouter {

  static traverseRoute( route ) {

    routeTree = {}
    UrlRouter.traverseRouteRecursive( route )
  }

  static traverseRouteRecursive( route ) {

    const url = route.key
    if( !url.endsWith( '-nourl' ) ) {
      const arrUrl = url.split( '/' )

      UrlRouter.addRouteToTree( routeTree, url, arrUrl, 0 )
    }

    const children = route.props.children
    if( children ) {
      if( children.constructor === Array )
        for( let childRoute of route.props.children )
          UrlRouter.traverseRouteRecursive( childRoute )
      else
        UrlRouter.traverseRouteRecursive( children )
    }
  }

  static addRouteToTree( branch, url, arrUrl, ixArrUrl ) {

    // If we are past the end of the URL, place the entire url/route name
    if( arrUrl.length == ixArrUrl )
      branch[ '/' ] = url
    else {
      const urlSegment = arrUrl[ ixArrUrl ]
      if( urlSegment.startsWith( ':' ) ) {
        const parameterName = urlSegment.substring( 1 )
        let nextParameter = branch[ ':' ]
        if( nextParameter != null )
          throw new Error( "There can be only one unique url segment parameter when adding " + parameterName + ", got " + nextParameter.parameterName )

        const nextBranch = {}
        nextParameter = branch[ ':' ] = {
          parameterName,
          nextBranch
        }

        UrlRouter.addRouteToTree( nextBranch, url, arrUrl, ixArrUrl + 1 )
      } else {
        let nextBranch = branch[ urlSegment ]
        if( nextBranch == null )
          nextBranch = branch[ urlSegment ] = {}

        UrlRouter.addRouteToTree( nextBranch, url, arrUrl, ixArrUrl + 1 )
      }
    }
  }

  static goToRouteByNameAndParams( routeName, params ) {

    // First, check if the currently open routes contain that route
    let ix
    for( ix = currentlyOpenRoutes.length - 1; ix >= 0; ix-- )
      if( currentlyOpenRoutes[ ix ] == routeName ) {
        const popNum = currentlyOpenRoutes.length - 1 - ix
        if( popNum > 0 ) {
          for( var i = 0; i < popNum; i++ )
            currentlyOpenRoutes.pop()

          Actions.pop( {
            popNum,
            refresh: JSON.stringify( params )
          } )

          return
        }
        break // TODO x2000 Is this even a real situation?
      }

    currentlyOpenRoutes = [ routeName ]
    Actions[ routeName ]( JSON.stringify( params ) )
  }

  static goToRouteByURL( url ) {

    const arrUrl = url.split( '/' )
    const params = {}
    UrlRouter.goToRouteByURLRecursive( routeTree, arrUrl, 0, params )
  }

  static goToRouteByURLRecursive( branch, arrUrl, ixArrUrl, params ) {

    if( arrUrl.length == ixArrUrl )
      UrlRouter.goToRouteByNameAndParams( branch[ '/' ], params )
    else {
      const urlSegment = arrUrl[ ixArrUrl ]
      let nextBranch = branch[ urlSegment ]

      if( nextBranch == null ) {
        const nextParameter = branch[ ':' ]

        if( nextParameter == null )
          throw new Error( "Can not find route for URL: " + JSON.stringify( arrUrl ) )

        params[ nextParameter.parameterName ] = urlSegment // TODO: x0500 URL decode?
        nextBranch = nextParameter.nextBranch
      }

      UrlRouter.goToRouteByURLRecursive( nextBranch, arrUrl, ixArrUrl + 1, params )
    }
  }
}
