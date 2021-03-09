import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import BLogpost from "./components/Posts/Blogpost/Blogpost";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <Container className={classes.posts}>
        <Route
          exact
          path="/"
          render={() => <Posts setCurrentId={setCurrentId} />}
        />

        <Route
          exact
          path="/new"
          render={() => <Form currentId={null} setCurrentId={setCurrentId} />}
        />

        <Route
          exact
          path="/edit/:id"
          render={() => (
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          )}
        />

        <Route
          exact
          path="/blog/:id"
          render={() => (
            <BLogpost
              key={currentId}
              setCurrentId={setCurrentId}
              currentId={currentId}
            />
          )}
        />
      </Container>
    </>
  );
};

export default App;
