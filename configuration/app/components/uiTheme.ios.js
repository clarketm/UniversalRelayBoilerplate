import deepmerge from 'deepmerge'

import uiThemeCommon from './uiThemeCommon'


const uiThemePlatformSpecific = {
  dimensions:
  {
    commonLineHeight: 44,
    commonLinePaddingLeft: 15,
    commonLinePaddingRight: 15,
    commonLineSeparatorPaddingLeft: 15,
  },
  line:
  {
    leftImageStyle:
    {
      marginLeft: 15,
      // marginRight: 15,
      // marginTop: 7,
      // marginBottom: 8,
      width: 44,
      height: 44
    }
  }
}

export default deepmerge( uiThemeCommon, uiThemePlatformSpecific )
