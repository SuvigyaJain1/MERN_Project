import React, { useState } from 'react';
// import LeftMenu from './Sections/LeftMenu';
// import RightMenu from './Sections/RightMenu';
// import { Drawer, Button, Icon } from 'antd';
// import './Sections/Navbar.css';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function NavBar() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
            </Toolbar>
        </AppBar>
    </div>
)};

export default NavBar
