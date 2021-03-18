import React from "react";
import { Grid, CircularProgress, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <Container>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={2}
        >
          {posts.map((post, id) => (
            <Post key={id} post={post} setCurrentId={setCurrentId} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Posts;
