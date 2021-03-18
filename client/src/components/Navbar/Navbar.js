import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import decode from "jwt-decode";

import { useHistory, useLocation, Link } from "react-router-dom";
import logo from "../../images/blog black.png";
import useStyles from "./styles";

import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    console.log(user);
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleCreate = () => {
    history.push("/new");
  };

  const handleHome = () => {
    history.push("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      borderbottom={5}
      className={classes.appBar}
      position="fixed"
      color="inherit"
    >
      <Toolbar className={classes.tool}>
        <img className={classes.homeButton} src={logo} onClick={handleHome} />
        <Typography className={classes.heading} variant="h6"></Typography>
        <Button variant="contained" color="secondary" onClick={handleCreate}>
          Write a post
        </Button>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
              onClick={handleClick}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disabled>
                Profile
              </MenuItem>
              <MenuItem onClick={logout}>Signout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            className={classes.SignIn}
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
