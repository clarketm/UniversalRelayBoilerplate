// @flow

import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import React from 'react'
import Typography from 'material-ui/Typography'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const doNothing = () => {}

let authenticationRequiredCallback: Function = doNothing

export function registerAuthenticationRequiredCallback( cb: Function ) {
  authenticationRequiredCallback = cb
}

export function unregisterAuthenticationRequiredCallback() {
  authenticationRequiredCallback = doNothing
}

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
})

class RequiresAuthenticationNotice extends React.Component<{
  classes: Object
}> {
  componentDidMount() {
    authenticationRequiredCallback()
  }

  render() {
    const { classes } = this.props

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Please log in" />
          <CardContent>
            <Typography paragraph>
              Accessing this area of the application requires you to be logged
              in.
            </Typography>
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default withStyles( styles )( RequiresAuthenticationNotice )
