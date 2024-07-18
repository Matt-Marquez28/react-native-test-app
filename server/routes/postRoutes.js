import express from "express";
import createPostController from "../controllers/createPostController.js";
import requireSignIn from "../middleware_functions/requireSignIn.js";
import getAllPostController from "../controllers/getAllPostController.js";
import getUserPostsController from "../controllers/getUserPostsController.js";
import deletePostController from "../controllers/deletePostController.js";
import updatePostController from "../controllers/updatePostController.js";

// router object
const router = express.Router();

// create post || POST
router.post("/create-post", requireSignIn, createPostController);

// get all post
router.get("/get-all-post", getAllPostController);

// get user post
router.get("/get-user-posts", requireSignIn, getUserPostsController);

// delete post
router.delete("/delete-post/:id", requireSignIn, deletePostController);

// update post
router.put("/update-post/:id", requireSignIn, updatePostController);

// export
export default router;