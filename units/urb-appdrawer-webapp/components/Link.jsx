// @flow

import React from 'react'
import classNames from 'classnames'
import { Link as LinkRouter } from 'found'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  primary: {
    color: theme.palette.primary[500],
  },
  accent: {
    color: theme.palette.accent.A400,
  },
})

class Link extends React.Component<{
  classes: Object,
  className: string,
  component: string | Function,
  to: string,
  variant: 'primary' | 'accent'
}> {
  render( props ) {
    const {
      component: ComponentProp,
      classes,
      className,
      variant,
      to,
      ...other
    } = this.props

    let Component

    if ( ComponentProp ) {
      Component = ComponentProp
    } else if ( to ) {
      Component = LinkRouter
    } else {
      Component = 'a'
    }

    return (
      <Component
        to={to}
        className={classNames(
          classes.root,
          {
            [classes.primary]: variant === 'primary',
            [classes.accent]: variant === 'accent',
          },
          className
        )}
        {...other}
      />
    )
  }
}

export default withStyles( styles )( Link )
