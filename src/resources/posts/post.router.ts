import express from "express";
import { securedLoggedIn } from "../../middlewares";
import { createPost, deletePost, getAllPosts } from "./post.controller";

const postRouter = express.Router()
postRouter.get("/", getAllPosts)
postRouter.post("/", securedLoggedIn, createPost)
postRouter.delete("/:id", deletePost);

export default postRouter;



