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
import { useParams } from "react-router-dom";

import useStyles from "./styles";

const Blogpost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id } = useParams();

  const post = useSelector((state) => state.post);

  useEffect(() => {
    if (id && id !== "") dispatch(getPost(id));
  }, [id, dispatch]);

  return (
    <Container maxWidth="lg" className={classes.container}>
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
              key={tag}
              className={classes.tags}
              variant="default"
              color="secondary"
              component="h2"
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
              <Typography variant="subtitle2">{post.creator}</Typography>
            </Box>

            <Typography variant="caption">
              {moment(post.createdAt).format("ll")}
            </Typography>
          </Box>
        </div>
        <Typography variant="h5">{post.message}</Typography>
      </CardContent>
    </Container>
  );
};

export default Blogpost;
