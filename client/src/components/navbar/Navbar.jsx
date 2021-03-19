
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Navbar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Avatar from '@material-ui/core/Avatar';
import LogoBrain from '../../assets/logoBrain.svg';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const assert = require('assert');
const menuWidth = '58vw';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    fontSize: '1.6rem',
    color: '#364f6b',
    fontWeight: 'bold',
  },
  menubutton: {
    height: '5vh',
    width: '5vw',
    color: '#364f6b',
  },
  list: {
    width: menuWidth,
    overflow: 'hidden',
  },
  fullList: {
    width: 'auto',
  },
  listItemText : {
    fontSize: '5vw',
    fontWeight: '400',
  },
  listItemTextMain: {
    fontSize: '5vw',
    fontWeight: '500',
  }
}));



export default function NavBar (props) {
  // Prop drilling check
  assert(props.loginUser !== undefined, 'Error: loginUser is not defined');

  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  let iconSize = '5vw';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const renderDrawer = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/profile"  key="profile">
          <ListItemIcon><Avatar src={props.loginUser ? props.loginUser.photo : null}></Avatar></ListItemIcon>
          <ListItemText classes={{primary: classes.listItemTextMain}} primary={props.loginUser ? props.loginUser.username : null} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="home" component={Link} to="/" >
          <ListItemIcon><HomeIcon style={{ fontSize: iconSize }}></HomeIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Home" />
        </ListItem>
      </List>
      {props.loginUser ? <List>
        <ListItem button component={Link} to="/profile"  key="profile">
          <ListItemIcon><AccountBoxIcon style={{ fontSize: iconSize }}></AccountBoxIcon></ListItemIcon>
          <ListItemText classes={{primary: classes.listItemTextMain}} primary={'Profile'} />
        </ListItem>
      </List> : null}
      <List>
        <ListItem button key="Analytics" component={Link} to="/analytics" >
          <ListItemIcon><AssessmentIcon style={{ fontSize: iconSize }}></AssessmentIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Analytics" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Donate" component={Link} to="/donate" >
          <ListItemIcon><LoyaltyIcon style={{ fontSize: iconSize }}></LoyaltyIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Donate" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="About us" component={Link} to="/about" >
          <ListItemIcon><InfoIcon style={{ fontSize: iconSize }}></InfoIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="About us" />
        </ListItem>
      </List>
      <List>
        <ListItem button key="Terms & Conditions" component={Link} to="/terms">
          <ListItemIcon><DescriptionOutlinedIcon style={{fontSize: iconSize}}></DescriptionOutlinedIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Terms & Conditions" />
        </ListItem>
      </List>
      <List>
        <ListItem button component="a" key="Log Out" href="/auth/logout">
          <ListItemIcon><LogoutIcon style={{ fontSize: iconSize }}></LogoutIcon></ListItemIcon>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Log Out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: '#FAF9F8' }}
      >
        <Toolbar>
          <a href="/">
            <img src={LogoBrain} alt="logo" className="NavBarLogo"/>
          </a>
          <Typography variant="h6" noWrap className={classes.title}>
            <a className="brandLink" href="/">
                  FairPoint
            </a>
          </Typography>
          <IconButton onClick={toggleDrawer('right', true)}>
            <MenuIcon className={classes.menubutton}></MenuIcon>
          </IconButton>
        </Toolbar>
        <div className="NavBarColorLine"></div>
      </AppBar>
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {renderDrawer(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
