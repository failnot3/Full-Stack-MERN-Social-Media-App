import express from "express";

//So in order to not clutter this file, I'm using the external
// getPosts function
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

// IMPORTANT with this the '/' is not 127.0.0.1:5000/, instead it's 127.0.0.1:5000/posts
// posts is the starting point, not 127.0.0.1 !!!

router.get("/", getPosts);
router.post("/", createPost);

router.get("/:id", getPost);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

// like a post feature
router.patch("/:id/likePost", likePost);

export default router;
