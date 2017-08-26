// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Helmet from 'react-helmet'
import { Parser } from 'html-to-react'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

class EnsayoPublicItem extends React.Component<{ Viewer: any }, {}> {
  render() {
    const { Viewer } = this.props
    // In a fairly barbaric way, limit the length of headings so that they are not considered spam
    let contentH1 = Viewer.Ensayo.Ensayo_Title.substring( 0, 100 )
    let contentH2 = Viewer.Ensayo.Ensayo_Description.substring( 0, 100 )

    return (
      <ResponsiveContentArea>
        <Helmet
          title={Viewer.Ensayo.Ensayo_Title}
          meta={[
            { name: 'description', content: Viewer.Ensayo.Ensayo_Description },
          ]}
        />
        <Card>
          <CardHeader
            title={
              <h1>
                {contentH1}
              </h1>
            }
            subheader={
              <h2>
                {contentH2}
              </h2>
            }
          />
          <CardContent>
            {new Parser().parse( Viewer.Ensayo.Ensayo_Content )}
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  EnsayoPublicItem,
  graphql`
    fragment EnsayoPublicItem_Viewer on Viewer {
      Ensayo(id: $id) {
        Ensayo_Title
        Ensayo_Description
        Ensayo_Content
      }
    }
  `
)
