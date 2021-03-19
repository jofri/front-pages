
import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import LogoBrain from '../../assets/logoBrain.svg';
import Backdrop from '@material-ui/core/Backdrop';
import ButtonBase from '@material-ui/core/ButtonBase';
import GoogleSignIn from '../../assets/googleButton.png';
import Button from '@material-ui/core/Button';



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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: '5%',
    width: '80%',
    height: '45vh',
    position: 'absolute',
    top: '30vh',
    textAlign: 'center',
  },
  buttonHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  google: {
    width: '90%',
    borderRadius: '5%',
  },
  buttonBase: {
    width: 'fit-content',
  }
}));

function HideOnScroll (props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = () => {
    handleOpen();
  };

  const googleClick = () => {
    // Opens google auth window
    window.open('/auth/google', '_self');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          style={{ background: '#FAF9F8', height: '8.5vh', paddingTop: '0.5vh' }}
        >
          <Toolbar>
            <a href="/">
              <img src={LogoBrain} alt="logo" className="NavBarLogo" />
            </a>
            <Typography variant="h6" noWrap className={classes.title}>
              <a className="brandLink" href="/">
                  FairPoint
              </a>
            </Typography>
            <Button style={{fontSize: 14, border: '1px solid #0195DF', color: 'rgb(1, 149, 223)'}} onClick={handleSignIn}>
                          Sign In
            </Button>
          </Toolbar>
          <div className="NavBarColorLine" style={{ position: 'absolute', bottom: 0}}></div>
        </AppBar>
      </HideOnScroll>
      <Modal
        aria-labelledby="login-box"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.buttonHolder}>
              <h1>Login</h1>
              <ButtonBase
                className={classes.buttonBase}
                focusRipple
                onClick={googleClick}>
                <img src={GoogleSignIn} alt="google" className={classes.google}></img>
              </ButtonBase>
              <ButtonBase />
              <ButtonBase />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}