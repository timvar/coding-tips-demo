import React from 'react'
import { AppBar }  from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Navbar = ({classes}) => {
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
          Some tips
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Support
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;