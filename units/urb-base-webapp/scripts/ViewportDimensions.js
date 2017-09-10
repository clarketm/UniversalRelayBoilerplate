// @flow

export default class ViewportDimensions {
  subscribedComponents: Map<Object, Object>
  viewportDimensionsVersion: number
  viewportDimensions: Object

  constructor() {
    this.subscribedComponents = new Map()

    this.viewportDimensionsVersion = 1
    this.viewportDimensions = {
      totalWidth: 0,
      totalHeight: 0,
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

    // Record what changes were made to only notify the necessary components
    const changesMade = {}

    if ( totalWidth !== this.viewportDimensions.totalWidth ) {
      changesMade.totalWidth = true
      this.viewportDimensions.totalWidth = totalWidth
    }

    if ( totalHeight !== this.viewportDimensions.totalHeight ) {
      changesMade.totalHeight = true
      this.viewportDimensions.totalHeight = totalHeight
    }

    // Insrease the version of the dimensions to track what has been set to be updated already
    const viewportDimensionsVersion = ++this.viewportDimensionsVersion

    const componentsToUpdate = []

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
        if ( mustUpdate ) componentsToUpdate.push( component )
      }
    }

    // Delayed force update
    if ( window && window.setTimeout )
      window.setTimeout( function() {
        for ( let component of componentsToUpdate )
          try {
            component.forceUpdate()
          } catch ( err ) {
            // ZZZ not sure why it fails maybe some of them do not exist?
            // This did not use to happen in the old boilerplate
          }
      })
  }
}
