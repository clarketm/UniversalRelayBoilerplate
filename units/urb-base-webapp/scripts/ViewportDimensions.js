// @flow

export const SMALL = 1
export const MEDIUM = 2
export const LARGE = 3

export default class ViewportDimensions {
  subscribedComponents: Map<Object, Object>
  viewportDimensionsVersion: number
  viewportDimensions: Object

  constructor() {
    this.subscribedComponents = new Map()

    this.viewportDimensionsVersion = 1
    this.viewportDimensions = {
      muiSize: 0,
      totalWidth: 0,
      totalHeight: 0,
      contentWidth: 0,
    }
  }

  get( component: Object, dimensionName: string ) {
    // Mark that the component is being rendered with the current version
    component.viewportDimensionsVersion = this.viewportDimensionsVersion

    // Is the object subscribed? If not, it should be
    let subscriptionInfo = this.subscribedComponents.get( component )
    if ( subscriptionInfo == null ) {
      // Add component to subscriptions dictionary
      subscriptionInfo = {}
      this.subscribedComponents.set( component, subscriptionInfo )

      const self = this

      // Make sure component unsubscribes when destroyed
      if ( component.componentWillUnmount ) {
        const currentFunction = component.componentWillUnmount.bind( component )

        component.componentWillUnmount = () => {
          self.removeComponent( component )
          currentFunction()
        }
      } else
        component.componentWillUnmount = () => {
          self.removeComponent( component )
        }
    }

    // Make sure it is subscribed for the right setting
    subscriptionInfo[dimensionName] = true

    // Now that the configuration is current, get the setting value
    let dimensionValue = this.viewportDimensions[dimensionName]
    if ( dimensionValue == null )
      throw new Error(
        'Could not find viewport dimension named ' + dimensionName
      )

    return dimensionValue
  }

  removeComponent = ( component: Object ) => {
    this.subscribedComponents.delete( component )
  }

  handle_onResize = () => {
    const totalWidth = window.innerWidth
    const totalHeight = window.innerHeight

    let muiSize
    if ( totalWidth >= 992 ) muiSize = LARGE
    else if ( totalWidth >= 768 )
      muiSize = MEDIUM // totalWidth < 768
    else muiSize = SMALL

    //    let navDrawerIsDocked = false
    let contentWidth = totalWidth
    if ( muiSize === LARGE ) {
      //      navDrawerIsDocked = true
      contentWidth -= 256 // TODO x0100 Make it a setting
    }

    // Record what changes were made to only notify the necessary components
    const changesMade = {}

    if ( muiSize !== this.viewportDimensions.muiSize ) {
      changesMade.muiSize = true
      this.viewportDimensions.muiSize = muiSize
    }

    if ( totalWidth !== this.viewportDimensions.totalWidth ) {
      changesMade.totalWidth = true
      this.viewportDimensions.totalWidth = totalWidth
    }

    if ( totalHeight !== this.viewportDimensions.totalHeight ) {
      changesMade.totalHeight = true
      this.viewportDimensions.totalHeight = totalHeight
    }

    if ( contentWidth !== this.viewportDimensions.contentWidth ) {
      changesMade.contentWidth = true
      this.viewportDimensions.contentWidth = contentWidth
    }

    const viewportDimensionsVersion = ++this.viewportDimensionsVersion

    // Update all subscribed components
    for ( let [ component, dimensionsSubscribed ] of this.subscribedComponents ) {
      if ( component.viewportDimensionsVersion !== viewportDimensionsVersion ) {
        component.viewportDimensionsVersion = viewportDimensionsVersion

        // Did the component subscribe to the changes that were actually made?
        let mustUpdate = false
        for ( let dimension in dimensionsSubscribed )
          if ( changesMade[dimension]) {
            mustUpdate = true
            break
          }

        // Re-render component if it subscribed to any of the changes
        if ( mustUpdate ) component.forceUpdate()
      }
    }
  }
}
