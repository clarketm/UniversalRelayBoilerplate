import React, {createClass, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import {spacing, typography, zIndex} from 'material-ui/styles';

const SelectableList = MakeSelectable(List);

const AppNavDrawer = createClass({

  propTypes: {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  },

  contextTypes: {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  },

  handleRequestChangeLink(event, value) {
    console.log( value )
    //window.location = value;
  },

  handleTouchTapHeader() {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  },

  render() {

    // // TODO Temporary example how to modify the menu depending on whether the user has logged in or not.
    // // Later integrate with example of requesting login and
    // // https://github.com/codefoundries/isomorphic-material-relay-starter-kit/issues/36
    let systemMenuContents = [
      <ListItem primaryText="Home" value="/" />,
    ];


    // if( ! this.props.Viewer.User_IsAnonymous )
    //   systemMenuContents.push( <ListItem primaryText="User Profile" value="/User" /> );

    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.navDrawer - 100}}
      >
        <div style={ {
            cursor: 'pointer',
            fontSize: 24,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: this.context.muiTheme.palette.primary1Color,
            paddingLeft: spacing.desktopGutter,
            marginBottom: 8,
          } } onTouchTap={this.handleTouchTapHeader}
        >
          Relay
        </div>
        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem
            primaryText="System"
            primaryTogglesNestedList={true}
            nestedItems={ systemMenuContents }
          />
          <ListItem
            primaryText="Examples"
            primaryTogglesNestedList={true}
            nestedItems={ [
              <ListItem primaryText="Compendium" value="/compendiums" />,

              <ListItem primaryText="Ensayo" value="/Ensayos" />,
              <ListItem primaryText="Ensayo Public" value="/Ensayo_PublicListing" />,
              <ListItem primaryText="Force Login" value="/ForceLogin" />,

              <ListItem primaryText="MUI" value="/mui" />,
              <ListItem primaryText="MUI Icons" value="/mui/icons" />,
              <ListItem primaryText="Country Flags" value="/mui/icons_country_flags" />,
              <ListItem primaryText="Credit Cards" value="/mui/icons_credit_cards" />,

              <ListItem primaryText="To Do" value="/ToDos" />,

              <ListItem primaryText="Translaticiarum" value="/Translaticiarums" />,
              <ListItem primaryText="Translaticiarums Grid" value="/TranslaticiarumsGrid" />,
            ] }
          />
        </SelectableList>
      </Drawer>
    );
  },
});

export default AppNavDrawer;
