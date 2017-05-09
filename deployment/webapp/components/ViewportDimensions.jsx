// @flow weak

import { LARGE, MEDIUM, SMALL } from '../scripts/withWidth'


export default class ViewportDimensions {

  totalWidth: number;
  contentWidth: number;
  muiSize: LARGE | MEDIUM | SMALL;
  navDrawerIsDocked: boolean

  constructor(
    totalWidth: number,
    contentWidth: number,
    muiSize: LARGE | MEDIUM | SMALL,
    navDrawerIsDocked: boolean,
  ) {

    this.totalWidth = totalWidth
    this.contentWidth = contentWidth
    this.muiSize = muiSize
    this.navDrawerIsDocked = navDrawerIsDocked
  }
}
