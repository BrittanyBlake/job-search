import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Nav.styles';

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="nav">
      <AppBar position="static" id="white">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Job Search
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Nav;
