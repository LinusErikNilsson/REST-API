import express from "express";
import { securedLoggedIn } from "../../middlewares";
import { createPost, deletePost, getAllPosts, putPost } from "./post.controller";

const postRouter = express.Router()
postRouter.get("/", getAllPosts)
postRouter.put("/", putPost)
postRouter.post("/", securedLoggedIn, createPost)
postRouter.delete("/:id", deletePost);

export default postRouter;



