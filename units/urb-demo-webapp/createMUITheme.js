// @flow

import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'
import createMuiTheme from 'material-ui/styles/createMuiTheme'

export default function createMUITheme( wrapperRbCtx: any ) {
  return createMuiTheme({
    palette: {
      primary: blue,
      secondary: pink,
      type: 'light',
    },
  })
}
