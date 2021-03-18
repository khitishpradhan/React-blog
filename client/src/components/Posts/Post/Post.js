import React, { useState, useEffect } from "react";
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
  Menu,
  MenuItem,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ShareIcon from "@material-ui/icons/Share";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <FavoriteBorderIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const handleRead = (id) => {
    history.push(`/blog/${id}`);
  };

  const handleEdit = (id) => {
    setCurrentId(post._id);
    history.push(`/edit/${id}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return width < breakpoint ? (
    <Grid className={classes.post_container} item xs={12} sm={12}>
      <Card className={classes.mob_card}>
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
            (user?.result?.googleId === post?.creator ||
              user?.result?._id === post?.creator) && (
              <div>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon fontSize="default" />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => handleEdit(post._id)}>Edit</MenuItem>
                  <MenuItem onClick={() => dispatch(deletePost(post._id))}>
                    Delete
                  </MenuItem>
                </Menu>
              </div>
            )
          }
          title={post.name}
          subheader={moment(post.createdAt).format("ll")}
        />
        <div className={classes.read}>
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
              style={{ wordWrap: "break-word" }}
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
              onClick={() => handleClick(post._id)}
            >
              {post.title}
            </Typography>
          </CardContent>
        </div>
        <Box>
          <CardActions className={classes.cardActions}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                size="small"
                color="primary"
                disabled={!user?.result}
                onClick={() => dispatch(likePost(post._id))}
              >
                <Likes />
              </Button>
              <Button size="small" color="primary" disabled>
                <ShareIcon />
              </Button>
            </Box>

            <Box>
              <Button
                size="small"
                color="primary"
                onClick={() => handleRead(post._id)}
              >
                Read
                <NavigateNextIcon />
              </Button>
            </Box>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  ) : (
    <Grid className={classes.post_container} item xs={12} sm={12}>
      <Card className={classes.card}>
        <Box className={classes.post_content} border={1}>
          <CardHeader
            className={classes.cardheader}
            avatar={
              <Avatar
                alt={post.name}
                src={""}
                aria-label="post"
                className={classes.avatar}
              />
            }
            action={
              (user?.result?.googleId === post?.creator ||
                user?.result?._id === post?.creator) && (
                <div>
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon fontSize="default" />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleEdit(post._id)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => dispatch(deletePost(post._id))}>
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              )
            }
            title={post.name}
            subheader={moment(post.createdAt).format("ll")}
          />
          <Box>
            <CardContent className={classes.content}>
              <Typography
                style={{ wordWrap: "break-word" }}
                key={post._id}
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
                onClick={() => handleRead(post._id)}
              >
                {post.title}
              </Typography>
              <Typography
                className={classes.tags}
                variant="body2"
                color="textSecondary"
                component="h2"
              >
                {post.tags?.map((tag) => `#${tag} `)}
              </Typography>
            </CardContent>
          </Box>

          <Box>
            <CardActions className={classes.cardActions}>
              <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  size="small"
                  color="primary"
                  disabled={!user?.result}
                  onClick={() => dispatch(likePost(post._id))}
                >
                  <Likes />
                </Button>
                <Button size="small" color="primary" disabled>
                  <ShareIcon />
                </Button>
              </Box>

              <Box>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleRead(post._id)}
                >
                  Read
                  <NavigateNextIcon />
                </Button>
              </Box>
            </CardActions>
          </Box>
        </Box>
        <Box style={{ width: 300 }}>
          <CardMedia
            className={classes.media}
            image={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={post.title}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default Post;
