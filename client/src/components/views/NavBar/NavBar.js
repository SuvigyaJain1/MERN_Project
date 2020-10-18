import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from  '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import { USER_SERVER } from '../../Config';

function NavBar(props) {

    let history = useHistory();
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
        button: {
            color: 'white',
        },

    }));
    const classes = useStyles();

    const handleLogin = () => {
        history.push('/login');
    }

    const handleSignin = () => {
        history.push('/register')
    }

    const handleLogout = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                history.push("/login");
            } else {
                alert('Log Out Failed')
            }
        });
    }

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
                <Link to='/register'>CLICK</Link>
                {!props.loggedIn && <Button className={classes.button} onClick={handleLogin}>Login</Button>}
                {!props.loggedIn && <Button className={classes.button} onClick={handleSignin}>Sign Up</Button>}
                {props.loggedIn && <Button className={classes.button} onClick={handleLogout}>Logout</Button>}

            </Toolbar>
        </AppBar>
    </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    let user = state.user

    return {
        loggedIn: user.userData && user.userData.isAuth
    }
}
export default connect(mapStateToProps)(NavBar);
