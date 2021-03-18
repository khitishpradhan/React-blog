import { Box, Typography, Avatar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMaterialUi } from "react-icons/si";

import { Link } from "react-router-dom";

import Profile from "../../images/profile.jpg";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box color="primary" className={classes.footer}>
      <Box className={classes.nav}>
        {/* <Typography className={classes.headings}>About Developer</Typography> */}
        <Box className={classes.avatarBox}>
          <Avatar alt="khitish" src={Profile} className={classes.avatar} />
        </Box>
        <Box className={classes.about}>
          <Box>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontWeight: 500,
              }}
            >
              A LITTLE BIT ABOUT ME
            </Typography>
            <Typography
              style={{ fontFamily: "'PT Serif', serif", fontSize: 20 }}
            >
              Hi, I'm Khitish Kumar Pradhan
            </Typography>
            <Typography
              style={{
                marginTop: 20,
                fontFamily: "'Mukta', sans-serif",
                fontWeight: 1000,
              }}
            >
              A Front-End Web developer. Love React, Music and Sci-fi.
            </Typography>
          </Box>
          <Box className={classes.social}>
            <a
              href="https://github.com/khitishpradhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="action" style={{ fontSize: 30 }} />
            </a>

            <a
              href="https://www.linkedin.com/in/khitishpradhan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="action" fontSize="large" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <EmailIcon color="action" fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/_kitzx_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon color="action" fontSize="large" />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
