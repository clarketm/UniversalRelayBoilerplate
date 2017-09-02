// @flow

import Card, { CardHeader, CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Typography from 'material-ui/Typography'

import RequiresAuthenticationNotice from '../../urb-account-management-webapp/components/RequiresAuthentication'
import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = theme => ({
  card: {
    minWidth: 275,
  },
})

class ForceLogin extends React.Component<{ classes: Object, Viewer: Object }> {
  render() {
    const { classes, Viewer } = this.props

    if ( Viewer.User_IsAnonymous )
      return <RequiresAuthenticationNotice /> // Anonymous users do not get to have a profile
    else
      return (
        <ResponsiveContentArea>
          <Card className={classes.card}>
            <CardHeader
              title="Only Authorized"
              subheader="Only users who log in see this."
            />
            <CardContent>
              <Typography paragraph>
                Content seen by authorized users
              </Typography>
            </CardContent>
          </Card>
        </ResponsiveContentArea>
      )
  }
}

export default createFragmentContainer(
  withStyles( styles )( ForceLogin ),
  graphql`
    fragment ForceLogin_Viewer on Viewer {
      User_IsAnonymous
    }
  `
)
