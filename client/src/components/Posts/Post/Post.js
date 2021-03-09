import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  CardHeader,
  Avatar,
  Box,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/blog/${id}`);
  };

  const handleEdit = (id) => {
    setCurrentId(post._id);
    history.push(`/edit/${id}`);
  };

  return (
    <Grid item xs={12} sm={12}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt={post.creator}
              src={""}
              aria-label="post"
              className={classes.avatar}
            />
          }
          action={
            <IconButton onClick={() => handleEdit(post._id)}>
              <MoreVertIcon fontSize="default" />
            </IconButton>
          }
          title={post.creator}
          subheader={moment(post.createdAt).format("ll")}
        />
        <div className={classes.read}>
          {/* <span className={classes.overlay}>l</span> */}
          <CardMedia
            className={classes.media}
            image={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={post.title}
          />
          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="h2">
              {post.tags?.map((tag) => `#${tag} `)}
            </Typography>
            <Typography
              key={post._id}
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
              onClick={() => handleClick(post._id)}
              color="secondary"
            >
              {post.title}
            </Typography>
            <div style={{ width: "100%", height: 100, whiteSpace: "nowrap" }}>
              <Box
                component="div"
                my={2}
                textOverflow="ellipsis"
                overflow="hidden"
              >
                {post.message}
              </Box>
            </div>
          </CardContent>
        </div>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp;{" "}
            {post.likeCount}{" "}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
            &nbsp; Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
