import { Request, Response } from "express";

export const getAllPosts =  (req: Request, res: Response) => {
    res.status(200).json("Hello world!");
};

export const createPost =  (req: Request, res: Response) => {
    // Create post
    res.status(201).json({});
};

export const deletePost =  (req: Request, res: Response) => {
    // deletepost post
    res.status(204).json(null);
};