// @flow weak

import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import React from 'react'
import Relay from 'react-relay'

import AppNavDrawer from './AppNavDrawer'
import ChromeHelmet from '../../configuration/webapp/components/ChromeHelmet'
import ChromeRightIcon from '../../configuration/webapp/components/ChromeRightIcon'
import Footer from '../../configuration/webapp/components/Footer'
import { MainScreenTitle } from '../../configuration/webapp/components/ChromeSettings'
import muiTheme from '../../configuration/webapp/muiTheme'
import { LARGE, MEDIUM, SMALL } from '../scripts/ViewportDimensions'


class Chrome extends React.Component {

  muiTheme: Object;
  state: {
    navDrawerIsOpen: boolean,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    rbContext: React.PropTypes.object,
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  constructor( props, context ) {
    super( props, context )

    this.state = {
      navDrawerIsOpen: false,
    }

    this.muiTheme = getMuiTheme( muiTheme, { userAgent: navigator.userAgent } )
  }

  getChildContext() {

    return( {
      muiTheme: this.muiTheme,
    } )
  }

  _handle_onTouchTap_NavigationToggle = () => {

    this._handle_RequestChangeNavDrawer( !this.state.navDrawerIsOpen )
  }

  _handle_RequestChangeNavDrawer = ( open ) => {

    this.setState( { navDrawerIsOpen: open } )
  }

  _handle_onChangeList_AppNavDrawer = ( event, value ) => {

    this.context.router.push( value )
    this.setState( { navDrawerIsOpen: false } )
  }

  getStyles() {

    const styles = {
      appBar: {
        position: 'fixed',
        zIndex: this.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      viewport: {
        paddingLeft: 0,
        minHeight: 500,
      },
      navDrawer: {},
      viewportContainer: {
        backgroundColor: this.muiTheme.rawTheme.palette.backCanvas.viewportBackgroundColor
      }
    }

    return styles
  }

  render() {

    const styles = this.getStyles()

    let { navDrawerIsOpen } = this.state

    let showMenuIconButton = true

    if( this.context.rbContext.viewportDimensions.get( this, 'muiSize' ) === LARGE ) {

      navDrawerIsOpen = true
      showMenuIconButton = false

      styles.navDrawer.zIndex = styles.appBar.zIndex - 1
      styles.appBar.paddingLeft = 276
      styles.viewport.paddingLeft = 256
    }

    return(
      <div style={ styles.viewportContainer }>
        <ChromeHelmet />
        <AppBar
          onLeftIconButtonTouchTap={ this._handle_onTouchTap_NavigationToggle }
          title={ MainScreenTitle }
          zDepth={ 0 }
          iconElementRight={ <ChromeRightIcon Viewer={this.props.Viewer} /> }
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />
        <div style={ styles.viewport }>
          { this.props.children }
        </div>
        <AppNavDrawer
          Viewer={ this.props.Viewer }
          style={ styles.navDrawer }
          location={ location }
          docked={ true }
          onRequestChangeNavDrawer={ this._handle_RequestChangeNavDrawer }
          onChangeList={ this._handle_onChangeList_AppNavDrawer }
          open={ navDrawerIsOpen }
        />
        <Footer
          Viewer={ this.props.Viewer }
        />
      </div>
    )
  }
}

//

// It is important to retrieve UserToken2, since it is used in client.js
export default Relay.createContainer( Chrome, {
  fragments: {
    Viewer: () => Relay.QL `
      fragment on Viewer {
        User_IsAnonymous,
        UserToken2,
        ${ ChromeRightIcon.getFragment( 'Viewer' ) },
        ${ AppNavDrawer.getFragment( 'Viewer' ) },
        ${ Footer.getFragment( 'Viewer' ) },
      }
    `,
  },
} )
