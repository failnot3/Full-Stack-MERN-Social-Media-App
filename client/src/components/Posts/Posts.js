import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./POST/Post.js";
import useStyles from "./styles.js";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <>
      <h1>POSTing</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
