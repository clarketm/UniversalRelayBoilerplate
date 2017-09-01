// @flow

import classNames from 'classnames'
import React from 'react'
import Button from 'material-ui/Button'
import Collapse from 'material-ui/transitions/Collapse'
import { withStyles } from 'material-ui/styles'
import { ListItem } from 'material-ui/List'

import Link from './Link'

const styles = theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create( 'background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      textDecoration: 'none',
    },
  }),
  navItem: {
    ...theme.typography.body2,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLinkButton: {
    color: theme.palette.text.secondary,
    textIndent: 24,
    fontSize: 13,
  },
  activeButton: {
    color: theme.palette.text.primary,
  },
})

class AppDrawerNavItem extends React.Component<
  {
    children: Object,
    classes: Object,
    onClick: Function,
    openImmediately: boolean,
    title: string,
    to: string
  },
  { open: boolean }
> {
  static defaultProps = {
    openImmediately: false,
  }

  state = {
    open: false,
  }

  componentWillMount() {
    if ( this.props.openImmediately ) {
      this.setState({ open: true })
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { children, classes, title, to } = this.props

    if ( to ) {
      return (
        <ListItem className={classes.navLink} disableGutters>
          <Button
            component={Link}
            to={to}
            className={classNames( classes.button, classes.navLinkButton )}
            activeClassName={classes.activeButton}
            disableRipple
            onClick={this.props.onClick}
          >
            {title}
          </Button>
        </ListItem>
      )
    }

    return (
      <ListItem className={classes.navItem} disableGutters>
        <Button className={classes.button} onClick={this.handleClick}>
          {title}
        </Button>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    )
  }
}

export default withStyles( styles )( AppDrawerNavItem )
