/* @flow weak */

import
{
  Actions
}
from 'react-native-router-flux'


let routeTree = {}

export default class UrlRouter
{
  static traverseRoute( route )
  {
    routeTree = {}
    UrlRouter.traverseRouteRecursive( route )
  }

  static traverseRouteRecursive( route )
  {
    const url = route.key
    if( !url.endsWith( '-nourl' ) )
    {
      const arrUrl = url.split( '/' )

      UrlRouter.addRouteToTree( routeTree, url, arrUrl, 0 )
    }

    const children = route.props.children
    if( children )
    {
      if( children.constructor === Array )
        for( let childRoute of route.props.children )
          UrlRouter.traverseRouteRecursive( childRoute )
      else
        UrlRouter.traverseRouteRecursive( children )
    }
  }

  static addRouteToTree( branch, url, arrUrl, ixArrUrl )
  {
    // If we are past the end of the URL, place the entire url/route name
    if( arrUrl.length == ixArrUrl )
      branch[ '/' ] = url
    else
    {
      const urlSegment = arrUrl[ ixArrUrl ]
      if( urlSegment.startsWith( ':' ) )
      {
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
      }
      else
      {
        let nextBranch = branch[ urlSegment ]
        if( nextBranch == null )
          nextBranch = branch[ urlSegment ] = {}

        UrlRouter.addRouteToTree( nextBranch, url, arrUrl, ixArrUrl + 1 )
      }
    }
  }

  static goToRouteByNameWithParams( routeName, params )
  {
    Actions[ routeName ]( JSON.stringify( params ) )
  }

  static goToUrl( url )
  {
    const arrUrl = url.split( '/' )
    const params = {}
    UrlRouter.goToUrlRecursive( routeTree, arrUrl, 0, params )
  }

  static goToUrlRecursive( branch, arrUrl, ixArrUrl, params )
  {
    if( arrUrl.length == ixArrUrl )
      UrlRouter.goToRouteByNameWithParams( branch[ '/' ], params )
    else
    {
      const urlSegment = arrUrl[ ixArrUrl ]
      let nextBranch = branch[ urlSegment ]

      if( nextBranch == null )
      {
        const nextParameter = branch[ ':' ]

        if( nextParameter == null )
          throw new Error( "Can not find route for URL: " + JSON.stringify( arrUrl ) )

        params[ nextParameter.parameterName ] = urlSegment // TODO: x0500 URL decode?
        nextBranch = nextParameter.nextBranch
      }

      UrlRouter.goToUrlRecursive( nextBranch, arrUrl, ixArrUrl + 1, params )
    }
  }
}
