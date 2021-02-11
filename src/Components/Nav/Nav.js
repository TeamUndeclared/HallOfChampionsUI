import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import { deepOrange } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import './Nav.scss';
// Import Redux Store

import { WrapText } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  list: {
    // width: 250,
  },
  fullList: {
    width: 'auto',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
}));

function Nav(props) {
  const classes = useStyles();
  const [drawerState, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...drawerState, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      id="appNav"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h1" className="headerTitle">Cart:</Typography>
            <Typography variant="body1">Click an item to edit quantity:</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to='/form' underline='none'>
          <ListItem button aria-describedby="Submit a Project" alignitems="flex-start">
            <ListItemAvatar>
              <Avatar alt='Submit Icon'><SendIcon /></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Submit a Project" />
          </ListItem>
          </Link>

        <Link to='/form'>
          <ListItem href="/form">
            <ListItemAvatar>
              <Avatar alt='Submit'>
                <SendIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h2" className="navLink">Submit a Project</Typography>
            </ListItemText>
          </ListItem>
        </Link>

        <Link to='/profile'>
          <ListItem href="/profile">
            <ListItemAvatar>
              <Avatar alt='Profile'>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h2" className="navLink">My Profile</Typography>
            </ListItemText>
          </ListItem>
        </Link>

        <Link to='/about'>
          <ListItem href="/about">
            <ListItemAvatar>
              <Avatar alt='About'>
                <InfoIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h2" className="navLink">About Us</Typography>
            </ListItemText>
          </ListItem>
        </Link>

        <Link to='/admin' color="inherit">
          <ListItem href="/admin">
            <ListItemAvatar>
              <Avatar alt='Admin'>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h2" className="navLink">Admin</Typography>
            </ListItemText>
          </ListItem>
        </Link>

      </List>
    </div>
  );

  return (
    <div className="appNav">
      <IconButton edge="start"
        onClick={toggleDrawer('left', true)}
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer anchor={'left'} open={drawerState['left']} onClose={toggleDrawer('left', false)}>
        {list('anchor')}
      </Drawer>
    </div>
  );
}


export default Nav;
