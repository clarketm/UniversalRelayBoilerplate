import deepmerge from 'deepmerge'

import uiThemeCommon from './uiThemeCommon'


const uiThemePlatformSpecific = {
  dimensions:
  {
    commonLineHeight: 48,
    commonLinePaddingLeft: 16,
    commonLinePaddingRight: 16,
    commonLineSeparatorPaddingLeft: 0,
  },
  line:
  {
    leftImageStyle:
    {
      //marginLeft: 15,
      // marginRight: 15,
      // marginTop: 7,
      // marginBottom: 8,
      width: 48,
      height: 48
    }
  }
}

export default deepmerge( uiThemeCommon, uiThemePlatformSpecific )
