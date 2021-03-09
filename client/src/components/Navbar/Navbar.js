import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from "@material-ui/core";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleCreate = () => {
    history.push("/new");
  };

  const handleHome = () => {
    history.push("/");
  };

  return (
    <AppBar
      borderbottom={5}
      className={classes.appBar}
      position="fixed"
      color="inherit"
    >
      <Toolbar className={classes.tool}>
        <IconButton
          edge="start"
          className={classes.homeButton}
          color="inherit"
          aria-label="home"
          onClick={handleHome}
        >
          <HomeRoundedIcon />
        </IconButton>
        <Typography className={classes.heading} variant="h6">
          BLOG
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleCreate}>
          Write a post
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
