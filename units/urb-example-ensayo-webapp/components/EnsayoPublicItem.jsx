// @flow

import Card, { CardHeader, CardText } from 'material-ui/Card'
import Helmet from 'react-helmet'
//import { Parser } from 'html-to-react'
import React from 'react'
import Relay from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

class EnsayoPublicItem extends React.Component {
  render() {
    // In a fairly barbaric way, limit the length of headings so that they are not considered spam
    let contentH1 = this.props.Viewer.Ensayo.Ensayo_Title.substring(0, 100)
    let contentH2 = this.props.Viewer.Ensayo.Ensayo_Description.substring(0, 100)

    return (
      <ResponsiveContentArea>
        <Helmet
          title={this.props.Viewer.Ensayo.Ensayo_Title}
          meta={[{ name: 'description', content: this.props.Viewer.Ensayo.Ensayo_Description }]}
        />
        <Card>
          <CardHeader
            title={
              <h1 style={{ fontSize: 15 }}>
                {contentH1}
              </h1>
            }
            subtitle={
              <h2 style={{ fontSize: 14, fontWeight: 'normal' }}>
                {contentH2}
              </h2>
            }
          />
          <CardText>
            {/*new Parser().parse(this.props.Viewer.Ensayo.Ensayo_Content)*/}
          </CardText>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default Relay.createContainer(EnsayoPublicItem, {
  initialVariables: {
    id: null,
  },

  prepareVariables({ id }) {
    return { id }
  },

  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        Ensayo(id:$id){
          id,
          Ensayo_Title,
          Ensayo_Description,
          Ensayo_Content,
        }
        User_IsAnonymous,
      }
    `,
  },
})
