import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardMedia,
  Card,
  Typography,
  Container,
  Chip,
  Box,
  Avatar,
  CardContent,
} from "@material-ui/core";

import moment from "moment";

import { getPost } from "../../../actions/post";
import { useParams, useLocation } from "react-router-dom";

import useStyles from "./styles";

const Blogpost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  // const [post, setPost] = useState();

  const user = JSON.parse(localStorage.getItem("profile"));

  const { id } = useParams();

  const post = useSelector((state) => state.post);

  useEffect(() => {
    if (id && id !== "") dispatch(getPost(id));
  }, [id, dispatch]);

  // useEffect(() => {
  //   setPost(null);
  // }, [location]);

  return (
    <Container border={1} maxWidth="lg" className={classes.container}>
      <Card>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
        />
      </Card>
      <CardContent className={classes.content}>
        <Typography variant="h3" className={classes.title}>
          {post.title}
        </Typography>
        <div>
          {post.tags?.map((tag) => (
            <Chip
              style={{
                wordWrap: "break-word",
              }}
              key={tag}
              className={classes.tags}
              variant="default"
              size="small"
              label={`#${tag} `}
            />
          ))}
        </div>
        <div className={classes.Toolbar}>
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.creator}
            >
              <Avatar alt={post.creator} className={classes.avatar} srcSet="" />
              <Typography variant="subtitle2">{post.name}</Typography>
            </Box>

            <Typography variant="caption">
              {moment(post.createdAt).format("ll")}
            </Typography>
          </Box>
        </div>
        <Typography
          style={{
            wordWrap: "break-word",
            fontSize: 20,
            fontFamily: "'Open Sans', sans-serif",
            paddingBottom: 50,
          }}
        >
          {post.message}
        </Typography>
      </CardContent>
    </Container>
  );
};

export default Blogpost;
