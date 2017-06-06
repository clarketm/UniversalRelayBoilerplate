// @flow

import React from 'react'

import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance' // Speak in senate
import ActionAccessibility from 'material-ui/svg-icons/action/accessibility' // Exercise
import ActionDoneAll from 'material-ui/svg-icons/action/done-all' // Get things done
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up' // Play the stock market
import ContentCreate from 'material-ui/svg-icons/content/create' // Write poems
import HardwareHeadset from 'material-ui/svg-icons/hardware/headset' // Listen to music
import ImageLandscape from 'material-ui/svg-icons/image/landscape' // Hike

export default function(theType: number) {
  let itemIcon
  if (theType == 1) itemIcon = <ActionAccountBalance />
  else if (theType == 2)
    // Speak in senate
    itemIcon = <ActionAccessibility />
  else if (theType == 3)
    // Exercise
    itemIcon = <ActionDoneAll />
  else if (theType == 4)
    // Get things done
    itemIcon = <ActionTrendingUp />
  else if (theType == 5)
    // Speak in senate
    itemIcon = <ActionTrendingUp />
  else if (theType == 6)
    // Play the stock market
    itemIcon = <ContentCreate />
  else if (theType == 7)
    // Write poems
    itemIcon = <HardwareHeadset />
  else if (theType == 8)
    // Listen to music
    itemIcon = <ImageLandscape /> // Hike

  return itemIcon
}
