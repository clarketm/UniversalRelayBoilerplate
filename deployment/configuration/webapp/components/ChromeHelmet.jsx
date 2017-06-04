// @flow


import Helmet from 'react-helmet'
import React from 'react'


export default class ChromeHelmet extends React.Component
{
  render( )
  {
    return (
      <Helmet
        title="Universal Relay Boilerplate"
        meta={ [
          { name : "description", content: "Boilerplate including React, React Native, Relay, GraphQL, Node.js and Cassssandra DB" },
        ] }
      />
    )
  }
}
